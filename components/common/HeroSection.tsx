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
      {/* Animated gradient overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
      )}
      
      {/* Animated blur backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 blur-fade-in">
        {subtitle && (
          <div className="inline-block slide-up" style={{ animationDelay: '0s' }}>
            <p className="text-xs sm:text-sm md:text-base font-bold text-accent uppercase tracking-widest px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 hover-glow transition-all duration-300">
              {subtitle}
            </p>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg text-balance slide-up" style={{ animationDelay: '0.1s' }}>
          {title}
        </h1>
        
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-md text-pretty max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>
        )}
        
        {primaryCta && (
          <div className="flex justify-center pt-4 slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={primaryCta.onClick}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-lift"
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
