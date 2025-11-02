'use client'

import Caustics from '@/components/Caustics'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Caustics />
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-12 pt-32">
          
          {/* Centered Photo */}
          <div className="flex justify-center mb-12">
            <div className="w-[500px] aspect-square bg-white/5 border border-white/10 overflow-hidden">
              <img 
                src="/about/profile.jpg" 
                alt="Austin Rockman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8 text-lg opacity-90 leading-relaxed">
            <p>
              Austin Rockman is an interdisciplinary creative with deep technical expertise spanning music composition, machine learning, and creative coding. Based in New Jersey, his research investigates how neural networks can enable meaningful personalization and generative applications that elevate creativity.
            </p>
            
            <p>
              As a composer and multi-instrumentalist, Austin creates immersive experiential music that aims to inhabit a meaningful overlap between noise, dissonance, and musical pleasantry. His work utilizes custom algorithms for complex synthesis, multi-instrumental techniques, and procedural conditioning.
            </p>

	    <p>
              Beyond his technical practice, Austin is an avid reader, rare book collector, and photographer. His work has been exhibited globally in New York, South Korea, France, and Japan, a visual practice informed by his lifelong love of cinema.
            </p>

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-light mb-4">Contact</h2>
              <div className="space-y-2 text-base opacity-70">
                <p>Email: plumgod [at] austinrockman [dot] com</p>
                <p>
                  GitHub: <a 
                    href="https://github.com/gloame-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity underline"
                  >
                    gloame-ai
                  </a>
                </p>
                <p>
                  LinkedIn: <a 
                    href="https://www.linkedin.com/in/austin-rockman-63657a197/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity underline"
                  >
                    austin-rockman
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Link href="/" className="fixed top-8 left-8 z-20">
          <h1 className="text-2xl font-light tracking-wider text-white/90 hover:text-white transition-colors">
            Austin Rockman
          </h1>
        </Link>
      </div>
    </div>
  )
}