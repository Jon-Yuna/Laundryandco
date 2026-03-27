import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import CommitmentsSlider from '@/components/about/CommitmentsSlider'
import CTA from '@/components/sections/CTA'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Us — Forest Hills, Queens',
  description:
    'Learn the story behind Laundry & Co — Forest Hills, Queens. Our mission, commitments to eco-friendly cleaning, and dedication to the community.',
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: siteConfig.url },
        { name: 'About Us', item: `${siteConfig.url}/about` },
      ]} />
      {/* ── Hero banner ── */}
      <section className="relative">
        <div className="hidden md:block relative h-[30vh] w-full">
          <Image
            src="/about/about-bg.jpg"
            alt="Forest Hills, Queens"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
        <h1 className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center text-3xl font-bold uppercase text-brand-dark-blue md:text-6xl md:text-white px-6 py-8 md:p-0">
          Our Story
        </h1>
      </section>

      {/* ── Our Story ── */}
      <section>
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-12 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-16 md:py-20">
          <div className="flex max-w-[590px] flex-1 flex-col gap-6 leading-relaxed text-brand-dark-blue">
            <h2 className="text-2xl font-bold text-brand-dark-blue">Our Story</h2>
            <p>
              At Laundry &amp; Co, we believe laundry should be simple, stress-free, and accessible
              to everyone in Forest Hills and across Queens. Founded with a mission to transform how
              New Yorkers handle this everyday task, we set out to create more than just a
              laundry service — we built a community staple where convenience meets genuine care.
            </p>
            <p>
              It all started with a vision: combine eco-friendly practices, professional expertise,
              and exceptional service into a one-stop solution for busy individuals, families, and
              businesses. From wash-and-fold to dry cleaning and free pickup &amp; delivery, we
              cater to the diverse needs of our neighborhood.
            </p>
            <p>
              What truly sets us apart is our commitment to care. Every load is treated with the
              utmost attention using organic, non-toxic detergents — protecting both your clothes
              and the environment. We go beyond clean laundry; we provide a better experience and a
              positive impact on our community.
            </p>
          </div>

          <div className="relative w-full md:w-[450px] aspect-[4/3]">
            <Image
              src="/about/about-us.jpg"
              alt="Laundry & Co team in Forest Hills"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>
        </div>
      </section>

      {/* ── Commitments slider ── */}
      <section className="bg-brand-beige">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col px-6 pt-8 md:px-12">
          <p className="text-xl font-semibold text-brand-dark-blue md:text-center">
            Discover how we stand out in the industry and stay dedicated to delivering an
            <br className="hidden md:block" /> exceptional experience for our customers.
          </p>
        </div>
        <CommitmentsSlider />
      </section>

      {/* ── Sustainability ── */}
      <section className="bg-brand-beige">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-10 px-6 py-6 md:gap-20 md:px-12 md:py-12">
          {/* Community card */}
          <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-6">
            <p className="max-w-[700px] flex-1 shrink-0 pt-1.5 text-sm leading-relaxed text-brand-dark-blue md:text-center md:text-base">
              Laundry &amp; Co is proud to serve and give back to the Forest Hills and Queens
              community. We partner with local organizations to help deliver essential services to
              families with limited resources — including free laundry assistance days and
              neighborhood outreach events.
            </p>
            <p className="max-w-[700px] flex-1 shrink-0 pt-1.5 text-sm leading-relaxed text-brand-dark-blue md:text-center md:text-base">
              Sign up for our newsletter at the bottom of the page for updates about our next
              community event.
            </p>
          </div>

          {/* Sustainability statement */}
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-20">
            <h3 className="flex-1 shrink-0 text-xl font-black uppercase leading-[1.4] text-brand-dark-blue md:text-3xl">
              Laundry &amp; Co is committed to being a leading laundry service in sustainability
            </h3>
            <p className="flex-1 shrink-0 pt-1.5 text-lg leading-relaxed text-brand-dark-blue">
              Sustainability is at the heart of everything we do. From our energy-efficient
              equipment that uses significantly less water and power, to our chemical-free detergents
              and biodegradable packaging — we&apos;re committed to making Forest Hills and Queens
              a cleaner, greener place, one load at a time.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
