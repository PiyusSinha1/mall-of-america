'use client'

import { useEffect } from 'react'
import { OpeningSection } from '@/components/sections/OpeningSection'
import { WhyPropertySection } from '@/components/sections/WhyPropertySection'
import { RetailShowcaseSection } from '@/components/sections/RetailShowcaseSection'
import { LuxurySection } from '@/components/sections/LuxurySection'
import { DiningSection } from '@/components/sections/DiningSection'
import { AttractionsSection } from '@/components/sections/AttractionsSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { Footer } from '@/components/common/Footer'

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in')
            // Add staggered animations to child elements
            const children = entry.target.querySelectorAll('[data-animate]')
            children.forEach((child, index) => {
              const element = child as HTMLElement
              element.style.animationDelay = `${index * 100}ms`
              element.classList.add('slide-up')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    // Add scroll-based opacity effect to nav
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('shadow-lg')
        } else {
          nav.classList.remove('shadow-lg')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="w-full">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MOA
              </h1>
            </div>
            
            <div className="hidden sm:flex items-center justify-center gap-2 sm:gap-4 lg:gap-8">
              {[
                { label: 'Overview', href: '#why-property' },
                { label: 'Retail', href: '#retail' },
                { label: 'Luxury', href: '#luxury' },
                { label: 'Dining', href: '#dining' },
                { label: 'Attractions', href: '#attractions' },
                { label: 'Events', href: '#events' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-2 sm:px-3 py-2 rounded-md hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex-shrink-0">
              <button className="hidden sm:inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <OpeningSection />
      <WhyPropertySection />
      <RetailShowcaseSection />
      <LuxurySection />
      <DiningSection />
      <AttractionsSection />
      <EventsSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
