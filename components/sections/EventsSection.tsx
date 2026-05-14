'use client'

import React from 'react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { Card } from '@/components/ui/card'
import eventsData from '@/content/malls/moa/events.json'
import { Button } from '@/components/ui/button'

export function EventsSection() {
  return (
    <SectionWrapper id="events" className="bg-gradient-to-br from-background via-background to-indigo-50 dark:to-indigo-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/30 border border-indigo-300 dark:border-indigo-800/50">
              Events & Sponsorships
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            {eventsData.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {eventsData.description}
          </p>
        </div>
        
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/events-venue.jpg" 
            alt="Events and venue" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Event Types Grid */}
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Event Opportunities</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {eventsData.eventTypes.map((eventType, index) => (
          <Card key={index} className="p-8 border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 group">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
              {eventType.type}
            </h4>
            
            <ul className="space-y-4">
              {eventType.examples.map((example, exIndex) => (
                <li key={exIndex} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 group-hover:from-secondary/40 group-hover:to-accent/40 transition-colors">
                      <svg className="h-4 w-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {example}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Marketing Benefits */}
      <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 sm:p-10 md:p-16 backdrop-blur-sm hover:border-border/80 transition-all duration-300 mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-foreground">
          Marketing Opportunities
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {eventsData.marketingBenefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50/50 to-indigo-100/30 dark:from-indigo-950/20 dark:to-indigo-900/10 rounded-xl p-6 border border-indigo-200/50 dark:border-indigo-800/30 group hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-3 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors">
                {benefit.benefit}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-indigo-100/50 to-indigo-200/30 dark:from-indigo-950/30 dark:to-indigo-900/20 rounded-2xl border border-indigo-300/50 dark:border-indigo-800/30 p-10 md:p-16">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground text-balance">
          Ready to Partner With Us?
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with our partnership team to explore sponsorship, leasing, and marketing opportunities at Mall of America.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Get in Touch
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </div>
    </SectionWrapper>
  )
}
