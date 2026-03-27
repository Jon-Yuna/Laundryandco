'use client'

import { siteConfig } from '@/config/site'
import { type BagCount, bagPlans, PROMO, ONE_TIME_PER_LB } from './plan-data'
import { IconUsers } from './plan-icons'

interface Props {
  bags: BagCount
  onBagsChange: (n: BagCount) => void
}

export default function PricingCalculator({ bags, onBagsChange }: Props) {
  const bagPlan = bagPlans[bags]
  const promoAmount = Math.round(bagPlan.price * PROMO)
  const firstMonth = bagPlan.price - promoAmount

  return (
    <div className="px-6 md:px-0 flex flex-1 flex-shrink-0 md:pl-8 md:border-l-2 border-dotted border-l-brand-medium-blue">
      <div className="w-full flex flex-col">

        {/* Heading */}
        <h3 className="text-xl text-brand-dark-blue text-center relative flex items-center gap-2 justify-center">
          Customize your plan
          {bags === 2 && (
            <span className="rounded-full text-sm py-1 px-2 bg-blue-200 text-blue-800">Most Popular</span>
          )}
        </h3>

        {/* Bag selector */}
        <div className="w-full flex flex-col gap-4 md:flex-row text-brand-medium-blue items-center mt-6 justify-center">
          <span>Number of Bags Per Month</span>
          <div className="flex gap-4">
            {([1, 2, 4] as const).map((n) => (
              <div
                key={n}
                onClick={() => onBagsChange(n)}
                className={`w-16 h-16 bg-white flex items-center justify-center font-bold text-2xl border-2 cursor-pointer transition-colors ${
                  bags === n ? 'border-brand-dark-blue' : 'border-white hover:border-neutral-200'
                }`}
              >
                {n}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic info */}
        <div className="flex flex-col px-0 md:px-12 mt-6">
          <div className="w-full flex flex-col gap-6">

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="inline-flex bg-black/[0.06] items-center rounded-md px-4 py-1 w-fit text-neutral-900 font-bold text-sm">
                {bagPlan.bags} {bagPlan.bags === 1 ? 'Bag' : 'Bags'} = {bagPlan.loads} loads of laundry
              </div>
              <div className="inline-flex bg-black/[0.06] items-center rounded-md px-4 py-1 w-fit text-neutral-900 font-bold text-sm gap-2">
                <IconUsers />
                <span>{bagPlan.tip}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-lg md:px-10 leading-tight justify-center items-center text-brand-dark-blue text-center">
              <span>Tip: The more bags per month, the less you pay per pound!</span>
              <span>More laundry = bigger savings!</span>
            </div>
          </div>

          {/* Pricing breakdown */}
          <div className="flex flex-col py-3 px-6 rounded-2xl bg-black/[0.06] mt-8 gap-2 text-sm">

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <strong>{bagPlan.label}</strong>
                <strong>${bagPlan.price.toFixed(2)}</strong>
              </div>
              <div className="flex flex-col pl-2 text-sm gap-1">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col text-gray-500">
                    <span>{bagPlan.bags} {bagPlan.bags === 1 ? 'Bag' : 'Bags'}/month</span>
                    <span>~{bagPlan.lbs}lb laundry/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-800">${ONE_TIME_PER_LB}/lb</span>
                    <span className="text-green-700">${bagPlan.pricePerLb.toFixed(2)}/lb</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <strong>Delivery</strong>
                <div className="flex gap-2">
                  <span className="line-through text-gray-800">$5.00</span>
                  <strong className="text-green-700 uppercase">Free</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <strong>Color Split Fee</strong>
                <div className="flex gap-2">
                  <span className="line-through text-gray-800">$4.00</span>
                  <strong className="text-green-700 uppercase">Free</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <strong className="text-green-700">30% Promotion</strong>
                <strong className="text-green-700 uppercase">$-{promoAmount.toFixed(2)}</strong>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="w-full border border-dashed border-black" />
              <div className="flex justify-between items-center">
                <strong>First Month</strong>
                <div className="flex gap-2">
                  <span className="line-through text-red-700 font-bold">${bagPlan.price.toFixed(2)}</span>
                  <strong className="text-green-700 uppercase">${firstMonth.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Order Now */}
          <div className="flex justify-center md:hidden mt-6">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-dark-blue px-6 py-2.5 font-bold text-brand-beige hover:bg-brand-blue transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
