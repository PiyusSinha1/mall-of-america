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
      className={`w-full py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
