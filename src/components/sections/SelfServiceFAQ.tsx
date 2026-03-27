'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need coins to use the machines?',
    a: 'Our machines accept both card and coin payments. You can use a debit or credit card directly at each machine, or use quarters if you prefer. No special laundry card is required.',
  },
  {
    q: 'What wash temperature should I use?',
    a: 'Cold water is recommended for most everyday clothing and colors — it saves energy and is gentler on fabrics. Warm water works well for moderately soiled items, and hot water is best for whites, towels, and bedding. When in doubt, cold is the safest choice.',
  },
  {
    q: 'How long does a wash cycle take?',
    a: 'Wash cycles typically run 28–45 minutes depending on the machine size and selected settings. Drying time varies based on load size and fabric type — allow 30–60 minutes for a full dry.',
  },
  {
    q: 'What size machine do I need?',
    a: 'A medium load machine (25 lbs) handles a standard household load — about 1–2 weeks of clothes for one person. A large machine (45 lbs) is great for families or larger loads. Our X-Large machines (83 lbs) are ideal for comforters, blankets, and bulky items.',
  },
  {
    q: 'Can I wash comforters and large blankets?',
    a: 'Yes — our X-Large machines (83 lbs capacity) are perfect for comforters, duvets, and large blankets that won\'t fit in a standard home washer. We recommend using a large or X-Large dryer to ensure they dry evenly.',
  },
  {
    q: 'Is the laundromat attendant staffed?',
    a: 'Yes, Laundry & Co has attendants on duty during all business hours to assist you, answer questions, and ensure the facility stays clean and well-maintained.',
  },
  {
    q: 'Do you provide detergent?',
    a: 'We have detergent, fabric softener, and dryer sheets available for purchase at the front. You are also welcome to bring your own preferred products.',
  },
]

export default function SelfServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-white px-4 md:px-12 py-6 md:py-10">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4">
        <h3 className="font-bold text-xl text-brand-medium-blue md:text-2xl">
          FAQ&apos;s for Self-Service
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
