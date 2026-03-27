'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How are additional hang-dry charges applied?',
    a: 'If you include items that require hang-drying (such as delicates or certain fabrics), a per-item hang-dry fee will be added to your order. Our team will identify these items when processing your bag and notify you of any additional charges before finalizing your invoice.',
  },
  {
    q: 'How does the subscription service work?',
    a: 'With Laundry & Co\'s subscription, you choose how many bags per month you need — 1, 2, or 4 bags. Each bag holds approximately 40 lbs of laundry. You schedule your pickup and delivery dates through our platform, and we handle the rest: pickup, wash, fold, and return to your door.',
  },
  {
    q: 'Can I change or cancel my subscription?',
    a: 'Yes. You can change your plan or cancel your subscription at any time through your account. Changes take effect on your next billing cycle. If you cancel, your service continues until the end of your current paid period.',
  },
  {
    q: 'What happens if I miss a scheduled pickup?',
    a: 'No worries — life happens. If you miss a scheduled pickup, contact us as soon as possible and we\'ll do our best to reschedule at a convenient time. Missed pickups do not count against your monthly bag allowance as long as you notify us in advance.',
  },
  {
    q: 'Is there a limit to how much laundry I can include in the bag?',
    a: 'Each Laundry & Co bag holds approximately 40 lbs of laundry. If your bag exceeds this limit, additional weight may be charged at the standard per-pound rate. We\'ll always let you know before applying any overage fees.',
  },
  {
    q: 'What is included in the subscription?',
    a: 'Your subscription includes wash & fold service, free pickup and delivery, no color-split fee, and select add-ons at no extra charge (such as hypoallergenic detergent and fabric softener). Premium add-ons like hang-dry or specialty items may incur additional fees.',
  },
  {
    q: 'Are there any promotions for first-time customers?',
    a: 'Yes! Laundry & Co offers a first-month promotion for new subscribers. Reach out to us or sign up online to see the latest offer — we love welcoming new members to the Clean Club.',
  },
]

export default function DeliveryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-white px-4 md:px-12 py-6 md:py-10">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4">
        <h3 className="font-bold text-xl text-brand-medium-blue md:text-2xl">
          FAQ&apos;s for Subscription Service
        </h3>

        <div className="w-full flex flex-col border-t border-t-gray-400">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={q}
                className="w-full flex flex-col md:gap-0 gap-3 text-sm md:text-base text-brand-medium-blue border-b border-b-gray-400 py-4"
              >
                <div
                  className="flex justify-between cursor-pointer gap-4 items-center"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex flex-1 font-medium text-lg">{q}</div>
                  <div className="w-8 h-8 flex-shrink-0 text-lg md:text-2xl flex items-center justify-center">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                {isOpen && (
                  <p className="mt-2 leading-relaxed text-brand-medium-blue">{a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
