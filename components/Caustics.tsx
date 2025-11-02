'use client';

import { useEffect, useRef } from 'react';

type CausticsVariant = 'default' | 'particles' | 'dense';

interface CausticsProps {
  variant?: CausticsVariant;
}

export default function Caustics({ variant = 'default' }: CausticsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // Vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `);
    gl.compileShader(vertexShader);

    // Fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float causticLayer(vec2 uv, float t, float depth) {
        float c = 0.0;
        float speed = 0.096 * (1.0 - depth * 0.7);
        float scale = 2.0 + depth * 1.5;
        
        // Random offset for each depth layer so they don't share a focal point
        vec2 randomOffset = vec2(
          hash(vec2(depth, 1.0)) * 2.0 - 1.0,
          hash(vec2(depth, 2.0)) * 2.0 - 1.0
        ) * 2.0;
        
        vec2 p = uv + randomOffset;
        
        for (float i = 0.0; i < 3.0; i++) {
          float angle = i * 1.5 + t * 0.12 + depth * 2.0;
          
          // Additional random offset per pattern
          vec2 patternOffset = vec2(
            hash(vec2(depth, i * 3.0)) * 2.0 - 1.0,
            hash(vec2(depth, i * 4.0)) * 2.0 - 1.0
          ) * 1.5;
          
          vec2 dir = vec2(cos(angle), sin(angle));
          vec2 perp = vec2(-dir.y, dir.x);
          
          vec2 q = (p + patternOffset) * scale;
          q += dir * t * speed;
          q += perp * sin(t * speed * 1.2 + i + depth) * 0.2;
          
          float d = length(q);
          float ripple = sin(d * 6.0 - t * 1.8 + i * 2.0) * 0.5 + 0.5;
          ripple *= sin(q.x * 3.0 + t * 0.6 + i) * sin(q.y * 3.0 - t * 0.6 + i);
          
          c += ripple * (1.0 / (i + 1.0));
        }
        
        return c;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.36;
        
        float totalCaustic = 0.0;
        float totalWeight = 0.0;
        
        for (float depth = 0.0; depth < 6.0; depth++) {
          float d = depth / 6.0;
          float layerCaustic = causticLayer(uv, t + depth * 0.5, d);
          float brightness = 1.0 - d * 0.6;
          
          totalCaustic += layerCaustic * brightness;
          totalWeight += brightness;
        }
        
        float c = totalCaustic / totalWeight * 0.3;
        
        float osc1 = sin(t * 0.2) * 0.5 + 0.5;
        float osc2 = sin(t * 0.13 + 2.0) * 0.5 + 0.5;
        float osc3 = sin(t * 0.17 + 4.0) * 0.5 + 0.5;
        float modulation = mix(0.05, 0.85, osc1 * osc2 * osc3);
        
        float n = noise(uv * 8.0 + t * 0.096) * modulation;
        
        vec3 color = vec3(c + n);
        
        float vignette = 1.0 - length(uv * 0.5) * 0.3;
        color *= vignette;
        
        // Gentle brightness modulation between 0.35 and 1.0
        float brightnessOsc1 = sin(t * 0.15) * 0.5 + 0.5;
        float brightnessOsc2 = sin(t * 0.09 + 1.5) * 0.5 + 0.5;
        float brightnessMod = mix(0.6, 1.5, brightnessOsc1 * brightnessOsc2);
        
        color *= brightnessMod;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `);
    gl.compileShader(fragmentShader);

    // Check shader compilation
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('Fragment shader error:', gl.getShaderInfoLog(fragmentShader));
      return;
    }

    // Create and link program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Check linking
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Set up geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    // Animation loop
    let startTime = Date.now();
    let animationId: number;
    
    const animate = () => {
      const time = (Date.now() - startTime) * 0.001;
      
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}