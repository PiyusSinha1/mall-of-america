'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

interface GridItem {
  id: string
  title: string
  description?: string
  image?: string
  icon?: React.ReactNode
  badge?: string
}

interface GridShowcaseProps {
  items: GridItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function GridShowcase({
  items,
  columns = 3,
  className = '',
}: GridShowcaseProps) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridColsClass[columns]} gap-6 sm:gap-8 lg:gap-10 ${className}`}>
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border/80 group scale-in hover-lift"
          style={{ animationDelay: `${index * 50}ms` }}
          data-animate
        >
          {item.image && (
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.badge && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  {item.badge}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          
          <div className="p-6 sm:p-8">
            {item.icon && (
              <div className="mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            )}
            
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
