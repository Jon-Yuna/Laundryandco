import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function CTA() {
  return (
    <section className="w-full bg-brand-dark-blue px-4 py-16 text-center md:px-12 md:py-24">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
          Ready for Fresh, Clean Laundry?
        </h2>
        <p className="max-w-xl text-lg text-brand-beige/80">
          Schedule your first pickup today. We&apos;ll handle the rest — so you can focus on what
          matters most.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold uppercase tracking-wide text-brand-dark-blue shadow-lg transition-colors hover:bg-brand-beige"
          >
            Book a Pickup <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 font-medium text-brand-beige/80 transition-colors hover:text-white"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
        </div>
        <p className="text-sm text-brand-beige/50">
          No contracts. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
