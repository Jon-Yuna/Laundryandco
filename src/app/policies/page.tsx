import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies | Laundry & Co',
  description:
    'Read the terms of service and company policies for Laundry & Co in Forest Hills, Queens — including liability, pocket policy, stain treatment, and refunds.',
  alternates: { canonical: 'https://www.laundryandco.nyc/policies' },
}

export default function PoliciesPage() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-3xl mx-auto text-sm text-brand-dark-blue lg:py-20">

      <section>
        <h1 className="font-semibold text-lg lg:text-xl mb-6 lg:text-center">
          Company Policies and Terms of Service
        </h1>
        <p>
          At Laundry & Co, our first priority is to provide genuine care for our customers&apos;
          belongings and deliver a positive experience, both in store and across our online platforms.
          That said, laundry is an imperfect practice, and there are inherent limitations and risks
          involved in handling a wide variety of fabrics and items.
        </p>
        <p className="mt-2">
          It is ultimately the customer&apos;s responsibility to inform us of any special care
          instructions, cleaning directions from the manufacturer, or material sensitivities prior
          to drop-off.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-1">General Liability</h2>
        <p className="mb-2">Laundry & Co cannot assume responsibility for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Lost or misplaced items</li>
          <li>Color fading or bleeding</li>
          <li>Shrinkage due to fabric type or previous wash history</li>
          <li>Damage to or deterioration of items with inherent defects or fragility not visible prior to laundering</li>
          <li>Damage to or loss of embellishments, including but not limited to beads, buttons, bells, buckles, or trims</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Pocket Policy</h2>
        <p>
          While we do our absolute best to check pockets for items such as cash, headphones, pens,
          crayons, and other valuables, Laundry & Co is not responsible for any forgotten items.
          Items left in pockets may cause damage to both the item itself and surrounding garments
          during wash or dry cycles.
        </p>
        <p className="mt-2">
          We strongly advise customers to carefully check all pockets and remove any personal
          belongings before submitting garments for service.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Stains and Spot Treatments</h2>
        <p>
          We strive to lift every stain and return your items looking their best. However, some
          stains may be permanent due to the nature of the substance, the fabric type, or how long
          the stain has set. Laundry & Co does not guarantee the complete removal of stains and will
          not be held liable for garments that are returned with remaining discoloration.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Refund Policy</h2>
        <p>
          Laundry & Co does not provide refunds on laundry services. This includes issues involving
          garment shrinkage, color fading, retained stains, or minor damages. Each garment is
          unique, and outcomes can vary depending on fabric condition, care history, and prior wear.
        </p>
      </section>

    </div>
  )
}
