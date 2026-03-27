import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Delivery',
    href: '/services/delivery',
    image: '/services/delivery.jpg',
  },
  {
    title: 'Drop-Off',
    href: '/services/drop-off',
    image: '/services/drop.jpg',
  },
  {
    title: 'Self-Service',
    href: '/services/self-service',
    image: '/services/self.jpg',
  },
  {
    title: 'Commercial',
    href: '/services/commercial',
    image: '/services/commercial.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-brand-beige px-4 py-6 md:px-12 md:py-16">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6">

        {/* Header row */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-black uppercase text-brand-dark-blue md:text-4xl">
            Our Services
          </h2>
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-md border border-black px-6 py-1 text-sm font-bold uppercase transition-colors hover:bg-black hover:text-brand-beige"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar md:gap-9">
          {services.map(({ title, href, image }) => (
            <div key={title} className="flex min-w-72 flex-1 flex-col gap-2 md:min-w-0">
              {/* Portrait card */}
              <Link
                href={href}
                className="group relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Placeholder gradient when no image asset exists */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-dark-blue/40" />
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 288px, 25vw"
                />
                {/* Explore overlay */}
                <div className="absolute bottom-6 left-1/2 w-1/2 -translate-x-1/2 rounded-md bg-white p-3 text-center font-bold uppercase text-brand-blue transition-colors hover:bg-brand-beige/90">
                  Explore
                </div>
              </Link>

              <h3 className="w-full text-center text-xl font-black uppercase tracking-wider text-brand-dark-blue md:mt-0 mt-1">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
