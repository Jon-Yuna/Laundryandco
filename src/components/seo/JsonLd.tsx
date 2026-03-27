import { siteConfig } from '@/config/site'

type BreadcrumbItem = { name: string; item: string }

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LaundryBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    // Serves all these Queens / NYC neighborhoods
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: `${area}, Queens, NY`,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: '10000', // ~6 miles radius in meters
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Laundry Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wash & Fold',
            description:
              'Professional wash, dry, and fold service. Pickup and delivery included.',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '2.50',
            priceCurrency: 'USD',
            referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'LB' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dry Cleaning',
            description:
              'Professional dry cleaning for suits, dresses, and delicate garments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ironing & Press',
            description:
              'Crisp, wrinkle-free results with professional-grade pressing equipment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comforter & Bedding Cleaning',
            description: 'Deep cleaning for duvets, comforters, blankets, and pillows.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stain Removal',
            description: 'Specialist stain treatment for tough, set-in stains.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alterations & Tailoring',
            description: 'Expert hemming, resizing, repairs, and custom adjustments.',
          },
        },
      ],
    },
    sameAs: Object.values(siteConfig.social),
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2400',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What areas do you serve for laundry pickup and delivery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer pickup and delivery across Forest Hills, Rego Park, Kew Gardens, Jackson Heights, Elmhurst, Woodhaven, Richmond Hill, and surrounding Queens neighborhoods.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the pickup and delivery process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply book a pickup through our website or app. We collect your laundry at your door, wash and fold it at our Forest Hills facility, and return it clean and neatly packaged — typically within 24 to 48 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What detergent do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use organic, hypoallergenic, and unscented detergents by default — gentle on skin and free from harsh chemicals. We also include eco-friendly wool dryer balls in place of dryer sheets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get my laundry back?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard turnaround for pickup and delivery is 24–48 hours. For drop-off, we offer Next Day (24 hrs), Same Day (8 hr turnaround, must drop off by 2 pm), and Express (4 hr turnaround, must drop off by 2 pm) options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are you located and what are your hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We're located at 73-12 Austin Street, Queens, New York 11375. For current business hours and same-day drop-off cut-off times, please contact us directly or check our Google listing.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
