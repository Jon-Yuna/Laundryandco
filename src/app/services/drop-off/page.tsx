import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import CTA from '@/components/sections/CTA'
import DropOffFAQ from '@/components/sections/DropOffFAQ'
import PriceRow from '@/components/services/PriceRow'
import ServicePageHero from '@/components/services/ServicePageHero'
import ServiceMenuSection from '@/components/services/ServiceMenuSection'
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
        description="Experience the convenience of our fast and easy Drop-Off laundry service. Included is our organic, hypoallergenic laundry detergent and wool dryer balls for a gentle, eco-friendly clean. You also have the flexibility to choose your preferred wash and dry settings. Simply drop off your laundry at our Forest Hills location and select the service below that suits you best."
        mediaSrc="/drop/drop-off.jpg"
        mediaType="image"
      >
        <ServiceMenuSection>

          {/* Wash Dry Fold */}
          <div className="text-brand-dark-blue flex flex-col">
            <h3 className="font-black text-3xl text-center">Wash Dry Fold</h3>
            <div className="flex flex-col gap-4 mt-5 pb-6 border-b-[3px] border-b-brand-dark-blue md:w-[85%] mx-auto md:min-h-[180px]">
              <p className="text-center px-8">*15 LB Minimum</p>
              <p className="text-center px-8">
                Included: Wash and Dry Temp of Choice, Natural, Hypoallergenic &amp; Unscented
                Detergent, Eco-friendly Dryer Balls, $4 Color Split Fee, Professional Folding
              </p>
            </div>
            <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Pricing</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Next Day (24 hrs)" price="$1.50/LB" />
                  <PriceRow label="Same Day* (8 hr turnaround)" price="$2.00/LB" />
                  <PriceRow label="Express (4 hr turnaround)" price="$4.00/LB" />
                  <PriceRow label="Air Dry** (48 hrs)" price="$3.00/item" />
                </div>
                <div className="flex flex-col gap-1 md:pl-4 italic text-sm mt-2 text-brand-medium-blue">
                  <span>*Same Day and Express services must be dropped off by 2 pm</span>
                  <span>**Air Dry items can be dropped off with other items and picked up separately</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Add Ons</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Oxy Brightener (Stain Remover)" price="$0.15/LB" />
                  <PriceRow label="Vinegar Rinse (Softener)" price="$0.05/LB" />
                  <PriceRow label="Heavy Soiled (Deeper Clean)" price="$0.10/LB" />
                  <PriceRow label="Extra Rinse (Sensitive Skin/Linens)" price="$0.10/LB" />
                </div>
              </div>
            </div>
          </div>

          {/* Wash Dry Bag */}
          <div className="text-brand-dark-blue flex flex-col">
            <h3 className="font-black text-3xl text-center">Wash Dry Bag</h3>
            <div className="flex flex-col gap-4 mt-5 pb-6 border-b-[3px] border-b-brand-dark-blue md:w-[85%] mx-auto md:min-h-[180px]">
              <p className="text-center px-8">*No Minimum</p>
              <p className="text-center px-8">
                Included: Wash and Dry Temp of Choice, Natural, Hypoallergenic &amp; Unscented
                Detergent, Eco-friendly Dryer Balls, $4 Color Split Fee
              </p>
              <p className="text-center px-8 font-semibold">*DOES NOT INCLUDE FOLDING*</p>
            </div>
            <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Pricing</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Small (1–10 lbs)" price="$12.00" />
                  <PriceRow label="Medium (10.01–20 lbs)" price="$15.00" />
                  <PriceRow label="Large (20.01–30 lbs)" price="$22.00" />
                  <PriceRow label="X-Large (30.01–40 lbs)" price="$27.00" />
                </div>
                <div className="flex flex-col gap-1 md:pl-4 italic text-sm mt-2 text-brand-medium-blue">
                  <span>*Same day turnaround if dropped off before 2 pm</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-black text-2xl">Add Ons</h4>
                <div className="flex flex-col gap-1 mt-3">
                  <PriceRow label="Oxy Brightener (Stain Remover)" price="$2.00" />
                  <PriceRow label="Vinegar Rinse (Softener)" price="$1.00" />
                  <PriceRow label="Heavy Soiled (Deeper Clean)" price="$1.00" />
                  <PriceRow label="Extra Rinse (Sensitive Skin/Linens)" price="$1.00" />
                  <PriceRow label="4 Hour Rush Service" price="$2.00" />
                </div>
              </div>
            </div>
          </div>

        </ServiceMenuSection>
      </ServicePageHero>

      <LocationSection />
      <DropOffFAQ />
      <CTA />
    </div>
  )
}
