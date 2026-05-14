import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ 
  children, 
  className = '',
  hover = true
}: GlassCardProps) {
  return (
    <div
      className={`glass ${hover ? 'hover:shadow-lg transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
