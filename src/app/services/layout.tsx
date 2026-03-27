'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const serviceTabs = [
  { label: 'Delivery', href: '/services/delivery' },
  { label: 'Drop-Off', href: '/services/drop-off' },
  { label: 'Self-Service', href: '/services/self-service' },
  { label: 'Commercial', href: '/services/commercial' },
]

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const rawPathname = usePathname()
  const pathname = rawPathname.replace(/\/$/, '')

  return (
    <div>
      {/* Service tab navigation */}
      <div className="w-full bg-brand-beige py-3 md:py-4 flex gap-2 md:gap-3 md:justify-center px-4 md:px-0 overflow-auto">
        {serviceTabs.map(({ label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex-shrink-0 rounded-full px-4 py-1.5 text-sm md:text-base font-semibold transition-colors text-brand-blue',
                active
                  ? 'bg-brand-dark-blue/15'
                  : 'hover:bg-brand-dark-blue/10'
              )}
            >
              {label}
            </Link>
          )
        })}
      </div>
      {children}
    </div>
  )
}
