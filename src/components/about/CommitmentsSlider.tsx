'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Leaf, Users, Heart, WashingMachine, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Commitment = {
  label: string
  title: string
  body: string
  image: string
  icon: LucideIcon
}

const commitments: Commitment[] = [
  {
    label: 'Premium Detergents',
    title: 'We use the best soaps in the business',
    body: 'We take pride in using only premium, top-quality detergents, ensuring the cleanest, freshest results for your clothes. Every item we wash is treated with care, delivering outstanding freshness and a commitment to your satisfaction.',
    image: '/about/detergent.jpg',
    icon: Leaf,
  },
  {
    label: 'Experienced Team',
    title: 'Professionally trained laundry experts',
    body: 'Our team is trained to handle every fabric type with precision and care — from everyday essentials to delicate garments. Years of hands-on experience means your laundry is always in the right hands.',
    image: '/about/experienced.jpg',
    icon: Users,
  },
  {
    label: 'Genuine Care',
    title: 'We genuinely care about every load',
    body: "We treat every customer's laundry as if it were our own. No shortcuts, no corners cut. Every item is inspected, treated for stains, and returned to you in the best possible condition.",
    image: '/about/care.jpg',
    icon: Heart,
  },
  {
    label: 'Laundry Facilities',
    title: 'Top-of-the-line machines and facilities',
    body: 'Our facility in Forest Hills uses state-of-the-art washers and dryers that are regularly serviced. Superior equipment means superior results — cleaner clothes, faster turnaround, and less wear on your fabrics.',
    image: '/about/store.jpg',
    icon: WashingMachine,
  },
  {
    label: 'Quality Experience',
    title: 'A full-service quality experience',
    body: "From the moment you schedule a pickup to the delivery of your fresh laundry, every touchpoint is designed to be seamless, reliable, and delightful. We don't just clean clothes — we deliver peace of mind.",
    image: '/about/quality.jpg',
    icon: Star,
  },
]

export default function CommitmentsSlider() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? commitments.length - 1 : i - 1))
  const next = () => setActive((i) => (i === commitments.length - 1 ? 0 : i + 1))

  const item = commitments[active]

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-10 px-6 py-12 md:px-12">
      {/* Active slide */}
      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-20">
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-50 md:aspect-square md:h-[460px] md:w-[460px] flex-shrink-0">
          <Image
            key={item.image}
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 460px"
          />
          <div className="absolute inset-0 -z-10 bg-brand-beige" aria-hidden="true" />
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-shrink-0 flex-col justify-center">
          <h3 className="text-3xl font-black text-brand-dark-blue">{item.title}</h3>
          <p className="mt-6 max-w-[650px] leading-relaxed text-brand-dark-blue md:text-lg">
            {item.body}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex w-full items-center justify-between gap-5 px-0 md:px-10">
        {/* Dot + label track */}
        <div className="hidden flex-1 flex-col gap-0 md:flex">
          {/* Dots row */}
          <div className="relative flex min-h-14 w-full flex-1 shrink-0 items-center justify-between">
            {commitments.map((c, i) => {
              const Icon = c.icon
              return (
                <button
                  key={c.label}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex w-24 flex-col items-center"
                  aria-label={`Go to ${c.label}`}
                >
                  <div
                    className={cn(
                      'flex items-center justify-center rounded-full transition-all duration-300',
                      i === active
                        ? 'h-14 w-14 bg-brand-dark-blue text-brand-beige shadow-lg'
                        : 'h-10 w-10 bg-white text-brand-blue hover:bg-brand-beige'
                    )}
                  >
                    <Icon className={cn('transition-all', i === active ? 'h-6 w-6' : 'h-6 w-6')} />
                  </div>
                </button>
              )
            })}
            {/* Connector line */}
            <div className="absolute left-[5%] top-1/2 h-0.5 w-[90%] -translate-y-1/2 bg-brand-blue/20" aria-hidden="true" />
          </div>

          {/* Labels row */}
          <div className="flex w-full flex-1 shrink-0 items-center justify-between">
            {commitments.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                className={cn(
                  'w-24 text-center text-sm leading-tight transition-all text-brand-dark-blue',
                  i === active ? 'font-bold opacity-100' : 'opacity-40 hover:opacity-70'
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className={cn(
              'text-brand-dark-blue transition-opacity',
              active === 0 && 'pointer-events-none opacity-30'
            )}
          >
            <ArrowLeft className="h-10 w-10" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className={cn(
              'text-brand-dark-blue transition-opacity',
              active === commitments.length - 1 && 'pointer-events-none opacity-30'
            )}
          >
            <ArrowRight className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  )
}
