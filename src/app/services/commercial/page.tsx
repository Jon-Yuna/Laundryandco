import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Commercial Laundry Services — Forest Hills, Queens',
  description:
    'Commercial laundry services in Forest Hills, Queens. Discounted pricing, custom packages, and flexible delivery — tailored to your business.',
  alternates: { canonical: 'https://www.laundryandco.nyc/services/commercial' },
}

const features = [
  {
    title: 'DISCOUNTED PRICING',
    body: 'We offer a range of pricing options tailored to the pounds of laundry your business needs washed weekly, accommodating businesses of all sizes.',
  },
  {
    title: 'CUSTOM PACKAGES',
    body: 'Our team collaborates with you to find solutions for all your laundry needs. For clients with diverse requirements, we\'ll separate and package materials for added convenience.',
  },
  {
    title: 'FLEXIBLE DELIVERY',
    body: 'Set up a recurring schedule for peace of mind, or work directly with us to find the frequency that suits you best, always custom quoted for you.',
  },
]

export default function CommercialPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'Services', item: `${siteConfig.url}/services` },
        { name: 'Commercial', item: `${siteConfig.url}/services/commercial` },
      ]} />

      <section className="w-full px-4 md:px-12 md:py-20 py-6 bg-white">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6 md:gap-14">

          {/* Heading */}
          <div className="w-full flex flex-col gap-2 items-center">
            <h1 className="text-center text-3xl font-bold text-brand-dark-blue">
              Customized commercial laundry services to fit your business
            </h1>
            <p className="max-w-screen-md text-brand-dark-blue text-center">
              Running a business is challenging, and we&apos;re here to help you focus on what
              matters most. Discover how we elevate your laundry service below.
            </p>
          </div>

          {/* Feature cards */}
          <div className="w-full flex md:flex-row flex-col gap-8 md:gap-0 items-center md:justify-between md:items-start overflow-auto">
            {features.map(({ title, body }) => (
              <div
                key={title}
                className="flex w-full md:w-96 flex-col md:justify-center md:items-center flex-shrink-0 gap-4 md:border-0 border-2 border-slate-500 rounded-xl py-4 md:py-0 px-6 md:px-0"
              >
                <h3 className="text-xl text-brand-blue">{title}</h3>
                <p className="md:text-center text-lg text-brand-dark-blue md:pr-0">{body}</p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="flex justify-center">
            <a
              href="mailto:hello@laundryandco.nyc"
              className="rounded-full bg-brand-dark-blue px-6 py-2.5 font-bold text-brand-beige hover:bg-brand-blue transition-colors"
            >
              Inquire now
            </a>
          </div>

        </div>
      </section>

      <CTA />
    </div>
  )
}
