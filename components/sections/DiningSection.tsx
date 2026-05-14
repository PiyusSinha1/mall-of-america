'use client'

import React, { useState } from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import diningData from '@/content/malls/moa/dining.json'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function DiningSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const currentCategory = diningData.venues[activeCategory]

  return (
    <SectionWrapper id="dining" className="bg-gradient-to-br from-background via-background to-amber-50 dark:to-amber-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/50">
              Culinary Experiences
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            {diningData.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {diningData.description}
          </p>
        </div>
        
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/dining-experience.jpg" 
            alt="Dining experience" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {diningData.venues.map((venue, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(index)}
            variant={activeCategory === index ? 'default' : 'outline'}
            className={`${activeCategory === index ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0' : 'hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/20'} transition-all duration-300`}
          >
            {venue.category}
          </Button>
        ))}
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.venues.map((venue) => (
          <Card key={venue.id} className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-amber-200/50 dark:border-amber-800/30 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10 group">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {venue.cuisine}
            </p>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {venue.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {venue.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
