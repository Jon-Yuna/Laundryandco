import { ReactNode } from 'react'

export default function ServiceMenuSection({ children }: { children: ReactNode }) {
  return (
    <section className="w-full flex flex-col py-2 mt-5 md:py-12 md:mt-20">
      <div className="flex flex-col gap-10 p-6 rounded-xl bg-brand-beige">
        <h2 className="text-2xl md:text-3xl text-brand-dark-blue font-black text-center">
          Laundry Service Menu
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 md:px-0 px-2">
          {children}
        </div>
      </div>
    </section>
  )
}
