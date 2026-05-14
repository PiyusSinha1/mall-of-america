'use client'

import React from 'react'

interface MetricBoxProps {
  label: string
  value: string
  description?: string
  icon?: React.ReactNode
  highlight?: boolean
}

export function MetricBox({
  label,
  value,
  description,
  icon,
  highlight = false,
}: MetricBoxProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl border transition-all duration-300 group overflow-hidden scale-in ${
        highlight
          ? 'bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/50 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:glow'
          : 'bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg hover:-translate-y-1 hover:border-border/80 hover:glow'
      }`}
      data-animate
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${highlight ? 'bg-primary/20' : 'bg-secondary/20'}`} />
      </div>
      
      <div className="relative z-10">
        {icon && (
          <div className={`mb-4 text-3xl transition-colors ${highlight ? 'text-primary group-hover:text-secondary' : 'text-accent group-hover:text-primary'}`}>
            {icon}
          </div>
        )}
        
        <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
          {label}
        </p>
        
        <p className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${highlight ? 'text-primary group-hover:text-secondary' : 'text-foreground group-hover:text-primary'} transition-colors`}>
          {value}
        </p>
        
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
