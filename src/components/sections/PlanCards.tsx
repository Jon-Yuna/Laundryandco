'use client'

import Link from 'next/link'
import { IconScale, IconTruck, IconTag, IconPackage, IconPaintbrush } from './plan-icons'

type PlanType = 'one-time' | 'subscription'

interface Props {
  plan: PlanType
  onSelect: (p: PlanType) => void
}

export default function PlanCards({ plan, onSelect }: Props) {
  return (
    <div className="flex flex-col flex-shrink-0 md:w-[55%] w-full gap-2 md:gap-4">
      <h3 className="text-lg md:text-xl text-brand-dark-blue text-center">Choose Your Service</h3>

      {/* Mobile toggles */}
      <div className="flex md:hidden py-2 justify-center gap-1">
        <div
          onClick={() => onSelect('one-time')}
          className={`border-black border-2 cursor-pointer rounded-sm py-5 text-sm font-bold px-6 transition-colors ${
            plan === 'one-time' ? 'bg-brand-blue text-white' : 'bg-white'
          }`}
        >
          One Time Order
        </div>
        <div
          onClick={() => onSelect('subscription')}
          className={`border-black border-2 cursor-pointer rounded-sm py-5 text-sm font-bold px-6 transition-colors ${
            plan === 'subscription' ? 'bg-brand-blue text-white' : 'bg-white'
          }`}
        >
          The Clean Club
        </div>
      </div>

      {/* Desktop cards */}
      <div className="w-full flex gap-8 md:pr-2 px-8 justify-center md:justify-between">

        {/* One Time Order */}
        <div
          onClick={() => onSelect('one-time')}
          className={`flex-1 hidden md:flex flex-col pt-2 pb-8 px-4 bg-white rounded-2xl border-[3px] max-w-80 flex-shrink-0 cursor-pointer transition-colors text-brand-dark-blue ${
            plan === 'one-time' ? 'border-neutral-800' : 'border-transparent hover:border-neutral-300'
          }`}
        >
          <span className="text-sm">Occasional</span>
          <h4 className="text-2xl font-bold pb-2">One Time Order</h4>
          <p className="text-brand-medium-blue leading-relaxed">
            This plan is perfect for occasional laundry service users. It&apos;s fully
            customizable, with pricing based entirely on the amount of laundry you have.
          </p>
          <div className="flex flex-col items-center mt-3 mb-4">
            <span className="text-sm">Wash &amp; Fold</span>
            <strong className="text-xl">$1.75/lb</strong>
          </div>
          <div className="border-t-2 border-t-brand-dark-blue border-dashed pt-3 flex flex-col gap-4">
            {[
              { icon: <IconScale />, label: 'Priced by the Pound' },
              { icon: <IconTruck />, label: 'Delivery Fee' },
              { icon: <IconTag />,   label: '$4 Color Split Fee' },
              { icon: <IconPackage />, label: "Add-on Fee's" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex gap-5 items-center">
                <div className="text-2xl">{icon}</div>
                <div className="flex flex-col"><span className="font-medium">{label}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* The Clean Club */}
        <div
          onClick={() => onSelect('subscription')}
          className={`flex-1 hidden md:flex flex-col pt-2 pb-8 px-4 bg-white rounded-2xl border-[3px] max-w-80 flex-shrink-0 cursor-pointer transition-colors text-brand-dark-blue ${
            plan === 'subscription' ? 'border-neutral-800' : 'border-transparent hover:border-neutral-300'
          }`}
        >
          <span className="text-sm">Subscription</span>
          <h4 className="text-2xl font-bold pb-2">The Clean Club</h4>
          <p className="text-brand-medium-blue leading-relaxed">
            Say goodbye to laundry day with our premium plan. Enjoy a free delivery service,
            no color split fee, select add-ons and{' '}
            <strong className="text-green-700">save up to 60%</strong> compared to one-time
            orders.
          </p>
          <div className="flex flex-col items-center mt-3 mb-4">
            <span className="text-sm">As low as</span>
            <strong className="text-xl">$1.00/lb</strong>
          </div>
          <div className="border-t-2 border-t-brand-dark-blue border-dashed pt-3 flex flex-col gap-4">
            {[
              { icon: <IconScale />,      label: 'Priced by the Bag', sub: '*Our Bag holds around 40lb' },
              { icon: <IconTruck />,      label: 'No Delivery Fee' },
              { icon: <IconPaintbrush />, label: 'No Color Split Fee' },
              { icon: <IconTag />,        label: "Select Add-on's Included" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex gap-5 items-center">
                <div className="text-2xl">{icon}</div>
                <div className="flex flex-col">
                  <span className="font-medium">{label}</span>
                  {sub && <span className="text-sm">{sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe button — desktop only */}
      <div className="hidden md:flex justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-brand-dark-blue px-6 py-2.5 font-bold text-brand-beige hover:bg-brand-blue transition-colors"
        >
          Subscribe
        </Link>
      </div>
    </div>
  )
}
