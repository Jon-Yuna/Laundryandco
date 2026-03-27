export const siteConfig = {
  name: 'Laundry & Co',
  tagline: 'Premium Laundry & Dry Cleaning — Forest Hills, NYC',
  description:
    'Professional laundry pickup and delivery service in Forest Hills, Queens, NYC. Wash & fold, dry cleaning, and ironing with free pickup. Serving Forest Hills, Rego Park, Kew Gardens, Woodhaven, and all of Queens. Book online today.',
  url: 'https://www.laundryandco.nyc',
  bookingUrl: 'https://app.trycents.com/order/business/OWMw/Ym04',
  phone: '+1 (718) 704-7808',
  email: 'hello@laundryandco.nyc',
  address: {
    street: '73-12 Austin Street',
    city: 'Queens',
    borough: 'Queens',
    state: 'NY',
    zip: '11375',
  },
  geo: {
    latitude: 40.7219,
    longitude: -73.8458,
  },
  serviceAreas: [
    'Forest Hills',
    'Rego Park',
    'Kew Gardens',
    'Kew Gardens Hills',
    'Woodhaven',
    'Richmond Hill',
    'Jamaica',
    'Flushing',
    'Jackson Heights',
    'Elmhurst',
    'Corona',
    'Sunnyside',
    'Astoria',
    'Long Island City',
    'Ridgewood',
  ],
  social: {
    instagram: 'https://instagram.com/laundryandco.nyc',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Laundry & Co',
  },
} as const

export type SiteConfig = typeof siteConfig
