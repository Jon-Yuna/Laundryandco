import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  mediaSrc?: string
  mediaType?: 'image' | 'video'
  poster?: string
  children: ReactNode
}

export default function ServicePageHero({ title, description, mediaSrc, mediaType = 'video', poster, children }: Props) {
  return (
    <section className="w-full px-4 md:px-12 md:py-20 py-6 bg-white">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col">
        {/* Hero row */}
        <div className="w-full flex flex-col md:flex-row gap-10 md:items-center">
          {/* Left: copy */}
          <div className="flex-1 flex-shrink-0 flex flex-col gap-4">
            <h1 className="md:text-5xl text-3xl font-black text-brand-dark-blue mb-2">{title}</h1>
            <p className="text-lg text-brand-dark-blue leading-relaxed">{description}</p>
          </div>

          {/* Right: media */}
          <div className="flex-1 flex-shrink-0">
            {mediaSrc && mediaType === 'image' ? (
              <div className="relative w-full aspect-video">
                <Image
                  src={mediaSrc}
                  alt={title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : mediaSrc && mediaType === 'video' ? (
              <video
                src={mediaSrc}
                className="w-full aspect-video object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={poster}
              />
            ) : (
              <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-dark-blue/40 flex items-center justify-center">
                <span className="text-brand-dark-blue font-semibold text-sm opacity-60">
                  Coming soon
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Service menu */}
        {children}
      </div>
    </section>
  )
}
