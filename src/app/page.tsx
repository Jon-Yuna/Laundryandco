import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Commitment from '@/components/sections/Commitment'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <HowItWorks />
      <Commitment />
      <Testimonials />
      <CTA />
    </div>
  )
}
