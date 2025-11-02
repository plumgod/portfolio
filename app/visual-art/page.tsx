'use client'

import { useState } from 'react'
import Caustics from '@/components/Caustics'
import Link from 'next/link'
import imageData from './images.json'
import metadata from './metadata.json'

type Category = 'photography' | 'digital-art'

export default function VisualArt() {
  const [activeCategory, setActiveCategory] = useState<Category>('photography')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const categories = [
    { id: 'photography' as Category, label: 'Photography' },
    { id: 'digital-art' as Category, label: 'GAN Art' },
  ]

  const getMetadata = (imagePath: string) => {
    return metadata[imagePath as keyof typeof metadata] || null
  }

  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Caustics />
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12 pt-32">
          <h1 className="text-5xl font-light mb-12 text-center">Visual Art</h1>
          
          {/* Category Tabs */}
          <div className="flex justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? 'text-white opacity-100 border-b border-white'
                    : 'text-white/60 hover:text-white/90'
                } pb-2`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {imageData[activeCategory]?.map((image, index) => (
              <div key={index}>
                <div 
                  className="aspect-square bg-white/5 border border-white/10 overflow-hidden cursor-pointer mb-3"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image}
                    alt={`${activeCategory} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Caption below thumbnail */}
                {getMetadata(image)?.caption && (
                  <p className="text-sm opacity-70 text-center">
                    {getMetadata(image)?.caption}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Description Area */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm opacity-70">
            </p>
          </div>
        </div>
        
        <Link href="/" className="fixed top-8 left-8 z-20">
          <h1 className="text-2xl font-light tracking-wider text-white/90 hover:text-white transition-colors">
            Austin Rockman
          </h1>
        </Link>
      </div>

      {/* Lightbox Modal - no caption */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Expanded view"
            className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Close button */}
          <button
            className="absolute top-8 right-8 text-white/60 hover:text-white text-4xl"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}