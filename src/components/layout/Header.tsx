'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { List, X, UserCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const leftLinks = [
  { label: 'Services', href: '/services' },
]

const rightLinks = [
  { label: 'About Us', href: '/about' },
]

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // Focus first link when drawer opens; return focus to hamburger when it closes
  useEffect(() => {
    if (open) {
      drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    } else {
      hamburgerRef.current?.focus()
    }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Lock body scroll while drawer is open (prevents page scrolling behind drawer on mobile)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed inset-y-0 left-0 z-[100] w-3/4 max-w-xs bg-brand-beige py-8 px-5 transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col gap-7">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl text-neutral-800 inline-flex font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit rounded-xl border border-black px-4 py-1.5 text-xl text-neutral-800"
          >
            Book Now
          </a>
        </div>
      </div>
      {/* Drawer backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[99] bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main navbar */}
      <header className="fixed top-0 left-0 z-50 h-20 w-full bg-brand-beige px-4 md:h-24 md:px-8 flex items-center justify-center">
        <div className="flex w-full max-w-screen-xl items-center justify-between">

          {/* Left */}
          <div className="flex flex-1 items-center gap-3">
            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              className="text-brand-blue text-2xl md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={26} /> : <List size={26} />}
            </button>

            {/* Desktop left links */}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center rounded-full bg-brand-dark-blue px-5 py-2 text-sm font-bold text-brand-beige hover:bg-brand-blue transition-colors"
            >
              Book Now
            </a>
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden md:flex items-center rounded-full border border-brand-blue px-4 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered logo */}
          <Link href="/" className="flex-shrink-0 px-2">
            {/* Replace with <Image> once logo asset is added to public/ */}
            <span className="text-2xl font-black tracking-tight text-brand-dark-blue md:text-3xl">
              {siteConfig.name}
            </span>
          </Link>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden md:flex items-center rounded-full border border-brand-blue px-4 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#footer"
              className="hidden md:flex items-center gap-1.5 rounded-full border border-brand-blue px-4 py-1.5 text-sm font-medium text-brand-blue hover:bg-brand-blue/10 transition-colors"
              aria-label="Contact"
            >
              <UserCircle className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer so content starts below fixed nav */}
      <div className="h-20 md:h-24" aria-hidden="true" />
    </>
  )
}
