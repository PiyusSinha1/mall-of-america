'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    onClick: () => void
  }
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  backgroundImage,
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Vibrant hero gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-400" />
      
      {/* Enhanced overlay for image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      )}
      
      {/* Floating blur lights for premium effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full blur-3xl animate-float opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-300 to-blue-300 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-pink-300 to-purple-200 rounded-full blur-3xl animate-float opacity-25" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 blur-fade-in">
        {subtitle && (
          <div className="inline-block slide-up" style={{ animationDelay: '0s' }}>
            <p className="text-xs sm:text-sm md:text-base font-bold text-accent uppercase tracking-widest px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 hover-glow transition-all duration-300">
              {subtitle}
            </p>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-800 leading-tight text-white drop-shadow-2xl text-balance slide-up" style={{ animationDelay: '0.1s', letterSpacing: '-0.02em' }}>
          {title}
        </h1>
        
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-lg text-pretty max-w-3xl mx-auto leading-relaxed slide-up font-inter" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>
        )}
        
        {primaryCta && (
          <div className="flex justify-center pt-4 slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={primaryCta.onClick}
              size="lg"
              className="btn-gradient px-8 py-6 rounded-full shadow-xl hover:shadow-2xl"
            >
              {primaryCta.text}
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
