'use client'

import { useState, useTransition } from 'react'
import PlanCards from './PlanCards'
import PricingCalculator from './PricingCalculator'
import type { BagCount } from './plan-data'

export default function PersonalizePlan() {
  const [bags, setBags] = useState<BagCount>(2)
  const [plan, setPlan] = useState<'one-time' | 'subscription'>('subscription')
  const [, startTransition] = useTransition()

  function handleBagsChange(n: BagCount) {
    startTransition(() => setBags(n))
  }

  function handlePlanSelect(p: 'one-time' | 'subscription') {
    startTransition(() => setPlan(p))
  }

  return (
    <section className="py-10 bg-brand-beige px-4 md:px-12">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col">
        <div className="flex flex-col gap-4 md:gap-10">
          <h2 className="text-lg md:text-4xl font-black text-brand-dark-blue text-center">
            Personalize Your Laundry Delivery
          </h2>
          <div className="flex md:flex-row flex-col gap-8">
            <PlanCards plan={plan} onSelect={handlePlanSelect} />
            <PricingCalculator bags={bags} onBagsChange={handleBagsChange} />
          </div>
        </div>
      </div>
    </section>
  )
}
