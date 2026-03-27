'use client'

import { useRef, useState, useEffect } from 'react'

export default function Commitment() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {})
        } else {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  function togglePlay() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="w-full bg-white px-4 py-12 md:px-12 md:py-20" id="commitment-section">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Video */}
        <div
          className="w-full md:w-[35%] flex-shrink-0 relative cursor-pointer overflow-hidden"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/media/field-laundry.mp4"
            className="w-full aspect-square object-cover"
            loop
            muted
            playsInline
            preload="none"
            poster="/about/store.jpg"
          />
          <div className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-beige flex items-center justify-center rounded-full">
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
              </svg>
            )}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-[25px] md:text-5xl font-black text-brand-dark-blue uppercase w-full leading-snug">
            Our commitment to you
          </h2>
          <p className="leading-relaxed text-gray-700">
            Carefully handled by our professionally trained laundry experts; cleaned in top-of-the-line
            machines; processed with hypoallergenic organic detergent; and delivered to you with the
            utmost care. We value every step of our process and honor those who make it possible, all
            while staying committed to sustainability. Ultimately, we deliver a full-service laundry
            experience that&apos;s unmatched in quality and care, ensuring your clothes come back
            fresher, cleaner, and more comfortable than ever.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              className="inline-flex bg-brand-blue hover:bg-brand-blue/90 transition-all rounded-md text-brand-beige gap-2 items-center py-2 px-4 text-xl"
              href="/about"
            >
              <span>Our Story</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
