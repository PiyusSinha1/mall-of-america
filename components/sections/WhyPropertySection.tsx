'use client'

import React from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { MetricBox } from '@/components/common/MetricBox'
import overviewData from '@/content/malls/moa/overview.json'

export function WhyPropertySection() {
  return (
    <SectionWrapper id="why-property" className="bg-gradient-to-br from-background via-background to-primary/5">
      <div className="mb-16">
        <div className="inline-block mb-4">
          <span className="text-sm font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            Why This Property
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          {overviewData.positioning.headline}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {overviewData.positioning.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {overviewData.keyMetrics.map((metric, index) => (
          <div key={index} className="group">
            <MetricBox
              label={metric.label}
              value={metric.value}
              description={metric.description}
              highlight={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 sm:p-10 md:p-16 backdrop-blur-sm hover:border-border/80 transition-all duration-300">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-foreground">
          Strategic Value Proposition
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {overviewData.positioning.keyPoints.map((point, index) => (
            <div key={index} className="flex gap-4 group/item hover:translate-x-1 transition-transform">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover/item:from-primary/30 group-hover/item:to-secondary/30 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-foreground font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
