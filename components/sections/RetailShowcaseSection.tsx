'use client'

import React, { useState } from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { GridShowcase } from '@/components/common/GridShowcase'
import retailData from '@/content/malls/moa/retail.json'
import { Button } from '@/components/ui/button'

export function RetailShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const currentCategory = retailData.categories[activeCategory]
  const gridItems = currentCategory.tenants.map((tenant) => ({
    id: tenant.id,
    title: tenant.name,
    description: tenant.description,
    badge: tenant.category,
  }))

  return (
    <SectionWrapper id="retail" className="bg-gradient-to-br from-background to-cyan-50 dark:to-cyan-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/30 border border-cyan-300 dark:border-cyan-800/50">
              Retail Excellence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            {retailData.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {retailData.description}
          </p>
        </div>
        
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/retail-showcase.jpg" 
            alt="Retail showcase" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {retailData.categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(index)}
            variant={activeCategory === index ? 'default' : 'outline'}
            className={`${activeCategory === index ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0' : 'hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20'} transition-all duration-300`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Grid Display */}
      <GridShowcase items={gridItems} columns={3} />
    </SectionWrapper>
  )
}
