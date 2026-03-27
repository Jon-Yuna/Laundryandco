import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    heading: 'Quality',
    quote:
      'Laundry & Co is a game-changer! My clothes are always perfectly folded and handled with such care. Their attention to detail and quality is unmatched. Highly recommend!',
    name: 'Phillip B.',
    location: 'Forest Hills, NY',
    avatar: '/testimonials/6.jpg',
  },
  {
    heading: 'Customization',
    quote:
      'The customization options are fantastic! From choosing my detergent to hang-dry preferences, they truly cater to my needs. It\'s like having my laundry done my way, every time!',
    name: 'Max C.',
    location: 'Rego Park, NY',
    avatar: '/testimonials/7.jpg',
  },
  {
    heading: 'Efficiency',
    quote:
      "Got four loads back in under 24 hours, perfectly clean. The speed and effectiveness are unmatched — perfect for anyone with a busy schedule.",
    name: 'Shelby B.',
    location: 'Kew Gardens, NY',
    avatar: '/testimonials/8.jpg',
  },
  {
    heading: 'Support',
    quote:
      'The customer support was amazing! I accidentally entered the wrong address, but they quickly fixed it and ensured my order was delivered on time. Truly outstanding service!',
    name: 'Taylor T.',
    location: 'Jackson Heights, NY',
    avatar: '/testimonials/9.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-brand-beige px-4 py-10 md:px-12 md:py-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4">
        <h2 className="text-4xl font-black text-brand-dark-blue">
          Why customers choose Laundry & Co
        </h2>
        <p className="text-lg text-brand-dark-blue">
          See what sets us apart, and read more about our{' '}
          <Link href="/about" className="cursor-pointer font-bold underline">
            commitments
          </Link>{' '}
          to our customers.
        </p>

        {/* Horizontal scroll row */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pt-4 md:gap-10 md:pt-6 pb-2">
          {testimonials.map(({ heading, quote, name, location, avatar }) => (
            <div
              key={name}
              className="flex min-w-72 flex-col gap-4 rounded-xl bg-brand-dark-beige p-6 text-brand-dark-blue md:min-w-0 md:flex-1"
              style={{ minHeight: '20rem' }}
            >
              <h3 className="text-lg font-bold">{heading}</h3>
              <p className="flex-1 leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                {/* Avatar — shows placeholder circle if image missing */}
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-brand-blue/20">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">{name}</span>
                  <span className="text-sm">{location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
