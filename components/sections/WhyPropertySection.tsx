'use client'

import React from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { MetricBox } from '@/components/common/MetricBox'
import overviewData from '@/content/malls/moa/overview.json'

export function WhyPropertySection() {
  return (
    <SectionWrapper id="why-property" className="bg-gradient-to-br from-background via-background to-orange-50 dark:to-orange-950/10">
      <div className="mb-16">
        <div className="inline-block mb-4">
          <span className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/30 border border-orange-300 dark:border-orange-800/50">
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

      <div className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl p-8 sm:p-10 md:p-16 backdrop-blur-sm hover:border-orange-300 dark:hover:border-orange-700/50 transition-all duration-300">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-foreground">
          Strategic Value Proposition
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {overviewData.positioning.keyPoints.map((point, index) => (
            <div key={index} className="flex gap-4 group/item hover:translate-x-1 transition-transform">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-orange-200/50 to-orange-300/50 dark:from-orange-900/50 dark:to-orange-800/50 text-orange-600 dark:text-orange-400 group-hover/item:from-orange-300 group-hover/item:to-orange-400 dark:group-hover/item:from-orange-800 dark:group-hover/item:to-orange-700 transition-colors">
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
