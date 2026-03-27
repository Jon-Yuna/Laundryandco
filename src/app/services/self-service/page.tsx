import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import CTA from '@/components/sections/CTA'
import SelfServiceFAQ from '@/components/sections/SelfServiceFAQ'
import PriceRow from '@/components/services/PriceRow'
import ServicePageHero from '@/components/services/ServicePageHero'
import ServiceMenuSection from '@/components/services/ServiceMenuSection'
import LocationSection from '@/components/services/LocationSection'

export const metadata: Metadata = {
  title: 'Self-Service Laundromat — Forest Hills, Queens',
  description:
    'Self-service laundromat in Forest Hills, Queens. State-of-the-art machines, a spotless space, and everything you need for a great laundry experience.',
  alternates: { canonical: 'https://www.laundryandco.nyc/services/self-service' },
}

export default function SelfServicePage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'Services', item: `${siteConfig.url}/services` },
        { name: 'Self-Service', item: `${siteConfig.url}/services/self-service` },
      ]} />

      <ServicePageHero
        title="Forest Hills' Best Self-Service Laundry Experience"
        description="Welcome to Laundry & Co, where self-service laundry meets exceptional quality. Our laundromat is designed with you in mind, offering a spotless, efficient, and comfortable space that redefines the laundry experience. With state-of-the-art machines and a commitment to every detail, we make laundry day the best it can be."
        mediaSrc="/self-service/self.mp4"
        mediaType="video"
        poster="/services/self.jpg"
      >
        <ServiceMenuSection>

          {/* Washing */}
          <div className="text-brand-dark-blue flex flex-col">
            <h3 className="font-black text-3xl text-center">Washing</h3>
            <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Pricing</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Medium Load (25 lbs)" price="$3.50" />
                  <PriceRow label="Large Load (45 lbs)" price="$6.50" />
                  <PriceRow label="X-Large Load (83 lbs)" price="$10.00" />
                </div>
              </div>
            </div>
          </div>

          {/* Drying */}
          <div className="text-brand-dark-blue flex flex-col">
            <h3 className="font-black text-3xl text-center">Drying</h3>
            <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Pricing</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Large Dryer (50 lbs)" price="$1.00/10 minutes" />
                  <PriceRow label="X-Large Dryer (83 lbs)" price="$1.75/10 minutes" />
                </div>
              </div>
            </div>
          </div>

        </ServiceMenuSection>
      </ServicePageHero>

      <LocationSection />
      <SelfServiceFAQ />
      <CTA />
    </div>
  )
}
