import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import CTA from '@/components/sections/CTA'
import DropOffFAQ from '@/components/sections/DropOffFAQ'
import PriceRow from '@/components/services/PriceRow'
import ServicePageHero from '@/components/services/ServicePageHero'
import LocationSection from '@/components/services/LocationSection'

export const metadata: Metadata = {
  title: 'Drop-Off Laundry Service — Forest Hills, Queens',
  description:
    'Drop off your laundry at Laundry & Co in Forest Hills, Queens. Wash Dry Fold or Wash Dry Bag — same-day, next-day, and express options available.',
  alternates: { canonical: 'https://www.laundryandco.nyc/services/drop-off' },
}

export default function DropOffPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'Services', item: `${siteConfig.url}/services` },
        { name: 'Drop-Off', item: `${siteConfig.url}/services/drop-off` },
      ]} />

      <ServicePageHero
        title="Drop-Off Laundry Service in Forest Hills, Queens"
        description="Experience the convenience of our fast and easy Drop-Off laundry service. Included is our natural, hypoallergenic laundry detergent and wool dryer balls for a gentle, eco-friendly clean. You also have the flexibility to choose your preferred wash and dry settings. Simply drop off your laundry at our Forest Hills location and select the service below that suits you best."
        mediaSrc="/drop/drop-off.jpg"
        mediaType="image"
      >
        <section className="w-full flex flex-col py-2 mt-5 md:py-12 md:mt-20">
          <div className="flex flex-col gap-10 p-6 md:p-10 rounded-xl bg-brand-beige">
            <h2 className="text-2xl md:text-3xl text-brand-dark-blue font-black text-center">
              Laundry Service Menu
            </h2>

            {/* Wash Dry Fold */}
            <div className="text-brand-dark-blue flex flex-col max-w-2xl mx-auto w-full">
              <h3 className="font-black text-3xl text-center">Wash Dry Fold</h3>
              <div className="flex flex-col gap-4 mt-5 pb-6 border-b-[3px] border-b-brand-dark-blue">
                <p className="text-center px-8 italic">*15 LB Minimum</p>
                <p className="text-center px-8">
                  Included: Wash and Dry Temp of Choice, Natural, Hypoallergenic &amp; Unscented
                  Detergent, Eco-friendly Dryer Balls, $4 Color Split Fee, Professional Folding
                </p>
              </div>
              <div className="flex flex-col gap-1 py-8">
                <h4 className="font-black text-2xl text-center">Pricing</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Next Day (24 hrs)" price="$1.50/LB" />
                  <PriceRow label="Same Day* (8 hr turnaround)" price="$2.00/LB" />
                  <PriceRow label="Express (4 hr turnaround)" price="$4.00/LB" />
                </div>
                <div className="italic text-sm mt-2 text-brand-medium-blue text-center">
                  *Same Day and Express services must be dropped off by 2 pm
                </div>
              </div>
            </div>

            {/* Wash & Fold Tiers */}
            <div className="text-brand-dark-blue flex flex-col border-t-[3px] border-t-brand-dark-blue pt-10">
              <h3 className="font-black text-3xl text-center">Wash &amp; Fold Tiers</h3>
              <p className="text-center italic mt-2">Minimum order requirements apply</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl border-2 border-brand-dark-blue p-5 flex flex-col items-center text-center">
                  <p className="font-black">1. Wash &amp; Fold</p>
                  <p className="text-xl font-black mt-2">$1.50 / lb</p>
                  <p className="text-sm mt-1 text-brand-medium-blue">Minimum $15.00 · 24hr</p>
                </div>
                <div className="rounded-xl border-2 border-brand-dark-blue p-5 flex flex-col items-center text-center">
                  <p className="font-black">2. Rush (8 hrs)</p>
                  <p className="text-xl font-black mt-2">$2.00 / lb</p>
                  <p className="text-sm mt-1 text-brand-medium-blue">Minimum $30.00 · 8hr</p>
                </div>
                <div className="rounded-xl border-2 border-brand-dark-blue p-5 flex flex-col items-center text-center">
                  <p className="font-black">3. Express (4 hrs)</p>
                  <p className="text-xl font-black mt-2">$4.00 / lb</p>
                  <p className="text-sm mt-1 text-brand-medium-blue">Minimum $40.00 · 4hr</p>
                </div>
              </div>
            </div>

            {/* Specialty Items */}
            <div className="text-brand-dark-blue flex flex-col border-t-[3px] border-t-brand-dark-blue pt-10">
              <h3 className="font-black text-3xl text-center">Specialty Items</h3>
              <p className="text-center italic mt-2">All items ready in 24 hours</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-6">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-black text-xl text-center border-b-2 border-brand-dark-blue pb-2">Comforters</h4>
                    <div className="flex flex-col gap-1 mt-3">
                      <PriceRow label="King" price="$25.00" />
                      <PriceRow label="Queen" price="$20.00" />
                      <PriceRow label="Full" price="$20.00" />
                      <PriceRow label="Twin" price="$18.00" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-black text-xl text-center border-b-2 border-brand-dark-blue pb-2">Down Comforters</h4>
                    <div className="flex flex-col gap-1 mt-3">
                      <PriceRow label="King" price="$30.00" />
                      <PriceRow label="Queen/Full" price="$25.00" />
                      <PriceRow label="Twin" price="$20.00" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-black text-xl text-center border-b-2 border-brand-dark-blue pb-2">Blankets</h4>
                    <div className="flex flex-col gap-1 mt-3">
                      <PriceRow label="Extra Large" price="$12.50" />
                      <PriceRow label="Regular" price="$10.00" />
                      <PriceRow label="Small" price="$5.00" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-black text-xl text-center border-b-2 border-brand-dark-blue pb-2">Pet Beds</h4>
                    <div className="flex flex-col gap-1 mt-3">
                      <PriceRow label="Large" price="$15.00" />
                      <PriceRow label="Regular" price="$10.00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServicePageHero>

      <LocationSection />
      <DropOffFAQ />
      <CTA />
    </div>
  )
}
