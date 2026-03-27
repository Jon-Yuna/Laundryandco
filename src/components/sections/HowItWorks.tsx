import { Truck, Smartphone, MapPin, Package } from 'lucide-react'

const steps = [
  {
    icon: Truck,
    text: 'Schedule a pickup and delivery time that works best for you',
  },
  {
    icon: Smartphone,
    text: 'Receive updates throughout the process via email and text',
  },
  {
    icon: MapPin,
    text: 'Track your driver as soon as they are en route to you',
  },
  {
    icon: Package,
    text: 'Place your laundry in any bag and hand it to our driver or leave it at your door',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full px-4 py-10 md:px-12 md:py-20 bg-neutral-100">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-10 md:flex-row">

        {/* Left — video + label */}
        <div className="flex flex-1 flex-shrink-0 flex-col gap-6">
          <h2 className="w-full text-center text-2xl font-black uppercase leading-snug text-brand-dark-blue md:text-5xl">
            Getting Started with your first pickup
          </h2>

          <div className="w-full max-w-lg mx-auto">
            <div className="group relative w-full cursor-pointer overflow-hidden rounded-xl border-4 border-black">
              {/* Replace src with /media/laundry.webm once asset is in public/ */}
              <video
                src="/media/home-page.mp4"
                className="w-full aspect-video object-cover"
                loop
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster="/media/bridge.jpg"
              />
              {/* Fallback poster when video not loaded */}
              <div className="absolute inset-0 -z-10 bg-brand-blue/10" aria-hidden="true" />
            </div>
          </div>
          <p className="text-center text-xl font-bold text-neutral-800">
            Watch how easy laundry day can be!
          </p>
        </div>

        {/* Right — steps */}
        <div className="flex flex-1 flex-shrink-0 flex-col gap-6">
          {steps.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white md:h-14 md:w-14 md:text-3xl">
                <Icon className="h-5 w-5 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <p className="max-w-xl text-lg text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
