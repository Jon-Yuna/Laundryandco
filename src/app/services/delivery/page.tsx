import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import CTA from '@/components/sections/CTA'
import DeliveryFAQ from '@/components/sections/DeliveryFAQ'
import PersonalizePlan from '@/components/sections/PersonalizePlan'

export const metadata: Metadata = {
  title: 'Laundry Pickup & Delivery — Forest Hills, Queens',
  description:
    'Laundry pickup & delivery in Forest Hills, Queens. Schedule a free pickup, we wash & fold, and deliver back to your door — next day.',
  alternates: { canonical: 'https://www.laundryandco.nyc/services/delivery' },
}

export default function DeliveryPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'Services', item: `${siteConfig.url}/services` },
        { name: 'Delivery', item: `${siteConfig.url}/services/delivery` },
      ]} />
      {/* Hero */}
      <section className="w-full px-4 md:px-12 md:py-10 py-6 bg-white">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-brand-dark-blue">
            Laundry delivery you can count on
          </h1>

          <div className="w-full overflow-auto flex gap-4 md:gap-10">
            {[
              {
                title: 'Choose Your Service',
                desc: 'Choose between our one-time service or convenient subscription, based on your needs. Simply schedule a pick-up date, and let Laundry & Co handle the rest!',
                img: '/delivery/choose.jpg',
              },
              {
                title: 'Get real time-updates',
                desc: "With real-time updates, you'll always know where your laundry is and can rest easy knowing it's in the hands of our trusted team.",
                img: '/delivery/update.jpg',
              },
              {
                title: 'Get your laundry next-day*',
                desc: 'Your laundry is delivered straight to your doorstep — clean, folded, and fresh. We guarantee delivery within 48 hours, with express options available.',
                img: '/delivery/next.jpg',
              },
            ].map(({ title, desc, img }) => (
              <div key={title} className="flex-shrink-0 md:flex-shrink w-[85vw] md:flex-1 md:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={title} loading="lazy" className="w-full aspect-[1.4] rounded-xl object-cover" />
                <div className="w-full bg-neutral-100 rounded-2xl p-4 relative z-10 -translate-y-20 -mb-20">
                  <h3 className="text-slate-950 font-bold">{title}</h3>
                  <p className="text-sm text-brand-dark-blue mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PersonalizePlan />

      <DeliveryFAQ />
      <CTA />
    </div>
  )
}
