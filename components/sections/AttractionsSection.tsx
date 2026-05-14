'use client'

import React from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Card } from '@/components/ui/card'
import attractionsData from '@/content/malls/moa/attractions.json'

export function AttractionsSection() {
  return (
    <SectionWrapper id="attractions" className="bg-gradient-to-br from-background to-rose-50 dark:to-rose-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/50">
              World-Class Entertainment
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            {attractionsData.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {attractionsData.description}
          </p>
        </div>
        
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/attractions-entertainment.jpg" 
            alt="Attractions and entertainment" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Main Attractions */}
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Featured Attractions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {attractionsData.attractions.map((attraction) => (
          <Card key={attraction.id} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-rose-200/50 dark:border-rose-800/30 bg-gradient-to-br from-rose-50/50 to-pink-50/30 dark:from-rose-950/20 dark:to-pink-950/10 group">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 bg-gradient-to-r from-rose-200/60 to-pink-200/60 dark:from-rose-900/40 dark:to-pink-900/40 text-rose-700 dark:text-rose-300 text-xs font-bold rounded-full group-hover:from-rose-300 group-hover:to-pink-300 dark:group-hover:from-rose-800 dark:group-hover:to-pink-800 transition-colors">
                {attraction.type}
              </span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {attraction.name}
            </h4>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {attraction.description}
            </p>
            
            <div className="space-y-3">
              {attraction.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 text-secondary group-hover:from-secondary/40 group-hover:to-accent/40 transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Amenities */}
      <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 sm:p-10 md:p-16 backdrop-blur-sm hover:border-border/80 transition-all duration-300">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-foreground">
          Premium Amenities
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {attractionsData.amenities.map((amenity) => (
            <div key={amenity.id} className="flex gap-4 group/item hover:translate-x-1 transition-transform">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 text-accent group-hover/item:from-accent/30 group-hover/item:to-secondary/30 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1 group-hover/item:text-primary transition-colors">
                  {amenity.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
