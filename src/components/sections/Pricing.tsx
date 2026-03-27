import { Check } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Basic',
    price: '2.50',
    unit: 'per lb',
    description: 'Perfect for occasional laundry needs.',
    features: [
      'Wash & Fold service',
      'Pickup & Delivery included',
      '48-hour turnaround',
      'Standard detergent',
      'Email notifications',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Express',
    price: '3.99',
    unit: 'per lb',
    description: 'Most popular for busy Queens residents.',
    features: [
      'Wash & Fold + Dry Clean',
      'Pickup & Delivery included',
      '24-hour turnaround',
      'Premium eco detergent',
      'SMS + Email notifications',
      'Stain treatment included',
    ],
    cta: 'Choose Express',
    featured: true,
  },
  {
    name: 'Premium',
    price: '79',
    unit: 'per month',
    description: 'Unlimited laundry for families and power users.',
    features: [
      'Unlimited Wash & Fold',
      'Monthly dry cleaning credit',
      'Same-day pickup slots',
      'Hypoallergenic options',
      'Dedicated account manager',
      'Priority support',
    ],
    cta: 'Go Premium',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-brand-beige px-4 py-10 md:px-12 md:py-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black uppercase text-gray-900 md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            No hidden fees. No surprises. Pick a plan that fits your lifestyle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-2xl border p-8',
                plan.featured
                  ? 'border-brand-blue bg-brand-dark-blue text-white shadow-xl'
                  : 'border-brand-dark-beige bg-white'
              )}
            >
              {plan.featured && (
                <span className="mb-4 self-start rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3
                className={cn(
                  'text-xl font-black uppercase',
                  plan.featured ? 'text-white' : 'text-gray-900'
                )}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span
                  className={cn(
                    'text-4xl font-black',
                    plan.featured ? 'text-white' : 'text-gray-900'
                  )}
                >
                  ${plan.price}
                </span>
                <span
                  className={cn(
                    'mb-1 text-sm',
                    plan.featured ? 'text-brand-beige/70' : 'text-gray-500'
                  )}
                >
                  {plan.unit}
                </span>
              </div>
              <p
                className={cn(
                  'mt-2 text-sm',
                  plan.featured ? 'text-brand-beige/80' : 'text-gray-600'
                )}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        'mt-0.5 h-4 w-4 shrink-0',
                        plan.featured ? 'text-brand-beige/60' : 'text-brand-blue'
                      )}
                      aria-hidden="true"
                    />
                    <span className={plan.featured ? 'text-brand-beige/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  'mt-8 w-full rounded-full py-3 text-center font-bold uppercase tracking-wide transition-colors',
                  plan.featured
                    ? 'bg-white text-brand-dark-blue hover:bg-brand-beige'
                    : 'bg-brand-dark-blue text-white hover:bg-brand-blue'
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">
          Minimum order: 10 lbs. Free pickup &amp; delivery on all orders over $30.
        </p>
      </div>
    </section>
  )
}
