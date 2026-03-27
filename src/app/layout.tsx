import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1a3f6e',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // respects notch / Dynamic Island safe-area insets
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Core service keywords
    'laundry service Forest Hills NY',
    'laundry pickup delivery Forest Hills',
    'dry cleaning Forest Hills Queens',
    'wash and fold Forest Hills',
    'same day laundry Queens NYC',
    'laundry delivery service Queens',
    // Neighborhood targeting
    'laundry service Rego Park',
    'laundry pickup Kew Gardens',
    'dry cleaning Woodhaven NY',
    'laundry delivery Richmond Hill Queens',
    'laundry service Jackson Heights',
    'wash and fold Flushing Queens',
    'laundry delivery Elmhurst NY',
    'dry cleaning Corona Queens',
    'laundry service Sunnyside Queens',
    // Intent-based keywords
    'laundry near me Forest Hills',
    'dry cleaner near me Queens',
    'pickup laundry service NYC',
    'affordable laundry service Queens',
    'best laundry service Forest Hills NYC',
    // Service-specific
    'eco-friendly laundry NYC',
    'comforter cleaning Queens',
    'shirt ironing delivery NYC',
    'stain removal service Queens',
    'alterations tailoring Forest Hills',
  ],
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: 'black-translucent',
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} | Laundry Pickup & Delivery — Forest Hills, Queens`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Laundry & Dry Cleaning in Forest Hills, Queens NYC`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Forest Hills, Queens NYC`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  // Geo meta for local SEO
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'Forest Hills, Queens, New York',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    'mobile-web-app-capable': 'yes',
    // place:location — valid OG extension for location data
    'place:location:latitude': String(siteConfig.geo.latitude),
    'place:location:longitude': String(siteConfig.geo.longitude),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        {/* React 19 hoists these <link> tags to <head> automatically */}
        <link rel="preconnect" href="https://app.trycents.com" />
        <link rel="dns-prefetch" href="https://app.trycents.com" />
        <LocalBusinessJsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
