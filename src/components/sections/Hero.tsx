import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section
      className="relative flex h-[60vh] w-full flex-col items-center justify-center p-8"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 flex w-full max-w-screen-xl flex-col gap-4">
        <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight text-brand-beige md:text-6xl">
          Enjoy 30% Off Your First Delivery Order
        </h1>
        <p className="max-w-lg text-lg leading-tight text-white">
          Fast, reliable pickup and delivery service — freshly cleaned laundry brought straight to
          your door in Forest Hills, Queens.
        </p>
        <div className="pt-4">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-black uppercase tracking-widest text-brand-dark-blue shadow-lg transition-all hover:bg-brand-beige hover:scale-105 md:px-9 md:py-4 md:text-lg"
          >
            <span>Order Now</span>
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
