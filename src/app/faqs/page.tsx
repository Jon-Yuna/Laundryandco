import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'FAQs | Laundry & Co',
  description:
    'Answers to the most common questions about Laundry & Co — pickup & delivery, drop-off, self-service, pricing, detergents, and more. Serving Forest Hills and Queens, NY.',
  alternates: { canonical: 'https://www.laundryandco.nyc/faqs' },
}

const faqs = [
  {
    q: 'What areas do you serve for laundry pickup and delivery?',
    a: 'We offer pickup and delivery across Forest Hills, Rego Park, Kew Gardens, Jackson Heights, Elmhurst, Woodhaven, Richmond Hill, and surrounding Queens neighborhoods. Not sure if we cover your area? Reach out and we\'ll confirm.',
  },
  {
    q: 'How does the pickup and delivery process work?',
    a: 'Simply book a pickup through our website or app. We\'ll collect your laundry at your door, wash and fold it at our Forest Hills facility, and return it clean and neatly packaged — typically within 24 to 48 hours. You\'ll receive real-time updates throughout the process.',
  },
  {
    q: 'What detergent do you use?',
    a: 'We use organic, hypoallergenic, and unscented detergents by default — gentle on skin and free from harsh chemicals. We also include eco-friendly wool dryer balls in place of dryer sheets. If you have a preferred detergent or specific sensitivities, let us know when booking.',
  },
  {
    q: 'Is there a minimum weight for pickup and delivery orders?',
    a: 'Yes, our pickup and delivery service has a minimum order weight. Please check the pricing section or contact us directly for the current minimums. Drop-off Wash Dry Fold has a 15 lb minimum; our Wash Dry Bag service has no minimum.',
  },
  {
    q: 'Can I request specific wash and dry settings?',
    a: 'Absolutely. We offer full flexibility — you can specify your preferred wash temperature, dry temperature, and any special care instructions when placing your order. Our team will follow your preferences for every load.',
  },
  {
    q: 'How long does it take to get my laundry back?',
    a: 'Standard turnaround for pickup and delivery is 24–48 hours. For drop-off, we offer Next Day (24 hrs), Same Day (8 hr turnaround, must drop off by 2 pm), and Express (4 hr turnaround, must drop off by 2 pm) options.',
  },
  {
    q: 'Do you offer dry cleaning or specialty garment care?',
    a: 'Our core services include wash & fold, wash & bag, self-service laundry, and commercial laundry. For specialty garment care or delicate items, contact us before drop-off so we can advise on the best approach.',
  },
  {
    q: 'What happens if an item is damaged or lost?',
    a: 'We treat every garment with the utmost care. However, as outlined in our policies, we cannot assume responsibility for pre-existing damage, color fading, shrinkage due to fabric type, or items left in pockets. If you have a concern after receiving your order, please contact us right away and we\'ll do our best to make it right.',
  },
  {
    q: 'Do you offer commercial or business laundry services?',
    a: 'Yes — we work with local businesses, restaurants, salons, gyms, and other organizations that require regular, high-volume laundry. Contact us to discuss a custom commercial plan that fits your needs and schedule.',
  },
  {
    q: 'Where are you located and what are your hours?',
    a: 'We\'re located at 73-12 Austin Street, Queens, New York 11375. For current business hours and same-day drop-off cut-off times, please contact us directly or check our Google listing for the most up-to-date information.',
  },
]

export default function FAQsPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 lg:py-20 flex flex-col gap-6">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'FAQs', item: `${siteConfig.url}/faqs` },
      ]} />
      <h1 className="text-3xl font-black text-brand-dark-blue md:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="text-brand-dark-blue/70 leading-relaxed">
        Everything you need to know about our laundry services in Forest Hills, Queens.
      </p>

      <div className="mt-4 flex flex-col divide-y divide-brand-dark-blue/10">
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="flex flex-col gap-2 py-6">
            <h2 className="font-semibold text-brand-dark-blue">{q}</h2>
            <p className="text-sm leading-relaxed text-brand-dark-blue/70">{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
