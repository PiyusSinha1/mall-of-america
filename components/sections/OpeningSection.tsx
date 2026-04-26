'use client'

import React, { useState } from 'react'
import { HeroSection } from '@/components/common/HeroSection'

export function OpeningSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const element = document.getElementById('why-property')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return (
    <HeroSection
      title="Welcome to Mall of America"
      subtitle="The Premier Retail & Entertainment Destination"
      description="Discover the nation's largest shopping mall—5.6 million square feet of world-class retail, dining, and entertainment. Experience unmatched destination appeal with 40+ million annual visitors."
      primaryCta={{
        text: 'Explore Opportunities',
        onClick: handleScroll,
      }}
      backgroundImage="/hero-mall.jpg"
    />
  )
}
