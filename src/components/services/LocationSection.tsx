import { MapPin, Bus, Train } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="w-full flex flex-col md:py-12 md:gap-10 py-5 gap-5 px-4 md:px-12">
      <h2 className="text-3xl text-brand-dark-blue font-black text-center">
        Located in Forest Hills, Queens
      </h2>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20">

        {/* Map placeholder — replace with <iframe> once embed URL is ready */}
        <div className="w-full md:w-[40%] aspect-square overflow-hidden flex-shrink-0 relative border-black border-4 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9966351341386!2d-73.84280522337582!3d40.71809057139272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261cad524b15d%3A0xd3d1a23a6e5efda8!2sLaundry%20%26%20Co!5e0!3m2!1sen!2sin!4v1774089097033!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Laundry & Co location"
          />
        </div>

        {/* Address + transit */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center">
            <MapPin className="text-brand-beige" size={40} />
          </div>

          <h3 className="text-3xl text-center font-bold text-brand-dark-blue">
            73-12 Austin Street, Queens, New York 11375
          </h3>

          <div className="flex flex-col md:flex-row md:items-start justify-center w-full mt-6 gap-6 md:gap-0">
            <div className="flex flex-1 flex-col text-brand-blue text-xl justify-center items-center gap-1">
              <Bus className="text-blue-400" size={48} />
              <span>Bus Stop</span>
              <strong className="text-base text-brand-dark-blue">Q23, Q60</strong>
            </div>

            <div className="flex flex-1 flex-col text-brand-blue text-xl justify-center items-center gap-1">
              <Train className="text-blue-400" size={48} />
              <span>Subway</span>
              <strong className="text-base text-brand-dark-blue">
                <div className="flex flex-col gap-1 items-center">
                  <div className="inline-flex items-center gap-1">
                    <span className="bg-[#0039A6] text-white font-bold w-5 h-5 rounded-full text-[11px] flex items-center justify-center">E</span>
                    <span className="bg-[#0039A6] text-white font-bold w-5 h-5 rounded-full text-[11px] flex items-center justify-center">F</span>
                    <span className="bg-[#0039A6] text-white font-bold w-5 h-5 rounded-full text-[11px] flex items-center justify-center">M</span>
                    <span className="bg-[#EE352E] text-white font-bold w-5 h-5 rounded-full text-[11px] flex items-center justify-center">R</span>
                  </div>
                  <span className="font-normal text-sm">Forest Hills–71st Ave</span>
                </div>
              </strong>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=73-12+Austin+Street+Queens+NY+11375"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-dark-blue px-8 py-3 font-bold text-brand-beige text-xl hover:bg-brand-blue transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
