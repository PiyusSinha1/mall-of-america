'use client'

import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Top-right floating element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '0s' }} />
        
        {/* Bottom-left floating element */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }} />
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-accent/2 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
