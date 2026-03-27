'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is included with the Drop-Off service?',
    a: 'All drop-off orders include our organic, hypoallergenic & unscented laundry detergent, eco-friendly wool dryer balls, and your choice of wash and dry temperature. Professional folding is included with Wash Dry Fold orders but not with Wash Dry Bag orders.',
  },
  {
    q: 'Is there a minimum for the Wash Dry Fold service?',
    a: 'Yes — there is a 15 lb minimum for Wash Dry Fold orders. There is no minimum for the Wash Dry Bag service.',
  },
  {
    q: 'How long does it take?',
    a: 'Turnaround times vary by service: Next Day is 24 hours, Same Day is approximately 8 hours (must be dropped off by 2 pm), and Express is 4 hours (must be dropped off by 2 pm). Wash Dry Bag orders dropped off before 2 pm are typically ready the same day.',
  },
  {
    q: 'Can I request a specific detergent or softener?',
    a: 'We use natural, hypoallergenic, and unscented detergent as our standard. If you have a specific preference or sensitivity, please let us know when you drop off and we\'ll do our best to accommodate. Add-ons like Vinegar Rinse (softener) and Oxy Brightener (stain remover) are also available.',
  },
  {
    q: 'What is the Color Split Fee?',
    a: 'A $4 Color Split Fee applies when you want your lights and darks washed separately. This fee covers the additional load required to keep your colors protected.',
  },
  {
    q: 'What is Air Dry and how does it work?',
    a: 'Air Dry is available for delicate items that should not go in the dryer. Items are hung and air-dried over 48 hours. You can drop off air-dry items together with your regular laundry and pick them up separately when ready.',
  },
  {
    q: 'Do I need an appointment to drop off?',
    a: 'No appointment is needed — just walk in during our business hours at 73-12 Austin Street, Queens, New York 11375. Our team will check you in and get your order started right away.',
  },
]

export default function DropOffFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-white px-4 md:px-12 py-6 md:py-10">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4">
        <h3 className="font-bold text-xl text-brand-medium-blue md:text-2xl">
          FAQ&apos;s for Drop-Off Service
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
