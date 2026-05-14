'use client'

import React from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { GridShowcase } from '@/components/common/GridShowcase'
import retailData from '@/content/malls/moa/retail.json'

export function LuxurySection() {
  // Get the luxury brands category
  const luxuryCategory = retailData.categories.find(cat => cat.name === 'Luxury Brands')
  
  if (!luxuryCategory) return null

  const gridItems = luxuryCategory.tenants.map((tenant) => ({
    id: tenant.id,
    title: tenant.name,
    description: tenant.description,
    badge: tenant.category,
  }))

  return (
    <SectionWrapper id="luxury" className="bg-gradient-to-br from-background to-purple-50 dark:to-purple-950/10">
      <div className="mb-16">
        <div className="inline-block mb-4">
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-800/50">
            Elevated Experience
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Luxury & Premium Collections
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Mall of America features a curated selection of the world&apos;s most prestigious luxury brands and premium retailers, positioning your business in an environment of uncompromised elegance and exclusivity.
        </p>
      </div>

      {/* Premium Grid */}
      <div className="mb-20">
        <GridShowcase items={gridItems} columns={3} />
      </div>

      {/* Premium Benefits */}
      <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 sm:p-10 md:p-16 backdrop-blur-sm hover:border-border/80 transition-all duration-300">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-foreground">
          Premium Positioning Benefits
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="group/card p-6 rounded-xl bg-gradient-to-br from-background to-background/50 border border-border/30 hover:border-border/60 hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover/card:from-primary/30 group-hover/card:to-secondary/30 transition-colors">
              <svg className="h-6 w-6 text-primary group-hover/card:text-secondary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267.221-.071.460-.118.712-.118.502 0 .98.149 1.416.446.436.297.763.645.975.882.202-.228.556-.587.975-.882.436-.297.914-.446 1.416-.446.252 0 .491.047.712.118.22.071.412.164.567.267.228.151.497.389.756.737.259-.348.528-.586.756-.737.155-.103.346-.196.567-.267.221-.071.460-.118.712-.118.502 0 .98.149 1.416.446.436.297.763.645.975.882.202-.228.556-.587.975-.882.436-.297.914-.446 1.416-.446.252 0 .491.047.712.118.22.071.412.164.567.267.228.151.497.389.756.737.259-.348.528-.586.756-.737.155-.103.346-.196.567-.267.221-.071.460-.118.712-.118.502 0 .98.149 1.416.446.436.297.763.645.975.882.202-.228.556-.587.975-.882.436-.297.914-.446 1.416-.446.252 0 .491.047.712.118.22.071.412.164.567.267.228.151.497.389.756.737.259-.348.528-.586.756-.737.228-.151.497-.389.756-.737C13.992 5.05 12.516 4 10 4c-2.516 0-3.992 1.05-4.757 2.182-.259.348-.528.586-.756.737z"/>
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-2 group-hover/card:text-primary transition-colors">Affluent Clientele</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Access to high-spending customers with strong purchasing power across luxury categories
            </p>
          </div>
          
          <div className="group/card p-6 rounded-xl bg-gradient-to-br from-background to-background/50 border border-border/30 hover:border-border/60 hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover/card:from-primary/30 group-hover/card:to-secondary/30 transition-colors">
              <svg className="h-6 w-6 text-primary group-hover/card:text-secondary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-2 group-hover/card:text-primary transition-colors">Premium Brand Visibility</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Showcase your luxury brand alongside world-class retailers in a prestigious setting
            </p>
          </div>
          
          <div className="group/card p-6 rounded-xl bg-gradient-to-br from-background to-background/50 border border-border/30 hover:border-border/60 hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover/card:from-primary/30 group-hover/card:to-secondary/30 transition-colors">
              <svg className="h-6 w-6 text-primary group-hover/card:text-secondary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 0-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.751l.108.456a1 1 0 001.932-.182l-.108-.456A1 1 0 0112 2zm1.968 9.753a1 1 0 010 2.032l-.456.108a1 1 0 00.182 1.932l.456-.108a1 1 0 01.967.751l.108.456a1 1 0 11-1.932.182l-.108-.456a1 1 0 00-1.932.182l.108.456a1 1 0 01-.967.751l-.456-.108a1 1 0 00-.182-1.932l.456-.108a1 1 0 000-2.032l-.456-.108a1 1 0 00.182-1.932l.456.108a1 1 0 001.932-.182l.108-.456z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-foreground mb-2 group-hover/card:text-primary transition-colors">Enhanced Experience</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium amenities, VIP services, and exclusive experiences elevate customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
