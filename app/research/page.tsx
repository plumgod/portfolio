'use client'

import Caustics from '@/components/Caustics'
import Link from 'next/link'

export default function Research() {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Caustics />
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-12 pt-32">
          <h1 className="text-5xl font-light mb-16">Research</h1>
          
          <div className="space-y-20">
            {/* CAK Paper */}
            <div className="flex gap-8">
              {/* Paper Preview Image - Left */}
              <div className="flex-shrink-0">
                <div className="w-[555px] h-[750px] bg-white/5 border border-white/10 overflow-hidden">
                  <img 
                    src="/research/cak-paper.jpg" 
                    alt="CAK Paper Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Paper Details - Right */}
              <div className="flex-1">
                <h2 className="text-2xl font-light mb-2">
                  CAK: Emergent Audio Effects from Minimal Deep Learning | First Author
                </h2>
                <p className="text-sm opacity-60 mb-6">
                  August 2025
                </p>
                
                <div className="space-y-4 text-base opacity-80 leading-relaxed mb-6">
                  <p>
                    A single 3×3 convolutional kernel with 11 learnable parameters discovers emergent audio effects when trained on 200 samples from a personalized corpus. The structured complexity of audio spectrograms, combined with targeted architectural constraints, forces the network toward minimal viable solutions where one well-learned pattern adapts contextually across diverse inputs rather than memorizing distributions.
                  </p>
                  
                  <p>
                    Introduces Conditioning Aware Kernels (CAK): implementing additive residual modulation with soft-gating that preserves identity while scaling effect intensity through scalar multiplication. Each spectrogram is paired with a randomly sampled scalar. During training, the network learns to associate arbitrary control values with proportional effect intensity through the audit game, rather than requiring explicit supervision.
                  </p>
                  
                  <p>
                    Introduces AuGAN (Audit GAN / WGAN-GP), reframing adversarial training from forgery detection to cooperative control verification: both generator and discriminator share the learned kernel. Training completes in ~2 hours on consumer hardware.
                  </p>

		  <p>
		    Enables personalized effect discovery where artists train on curated material (50 minutes of audio) to uncover transformations.
		  </p>
                </div>
                
                <div className="flex gap-6 text-sm">
                  <a 
                    href="https://arxiv.org/abs/2508.02643" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity underline"
                  >
                    Paper →
                  </a>
                  <a 
                    href="https://github.com/gloame-ai/cak-audio/tree/main/cak-audio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity underline"
                  >
                    Code →
                  </a>
                  <a 
                    href="https://huggingface.co/spaces/gloameai/cak-audio-processor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity underline"
                  >
                    Hugging Face →
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=oMvLMv3pQG8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity underline"
                  >
                    Video Demonstration →
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder for future research */}
            <div className="opacity-50">
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