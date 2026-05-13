import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Laundry & Co',
  description:
    'Terms of Service for Laundry & Co (RUBY LM LLC). Read the terms that govern your use of our laundry services.',
  alternates: { canonical: 'https://www.laundryandco.nyc/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10 max-w-3xl mx-auto my-8 md:my-16 text-sm text-brand-dark-blue border border-brand-dark-blue/20 rounded-lg">
      <header>
        <h1 className="font-black text-2xl lg:text-3xl mb-2">Terms of Service</h1>
        <p className="text-brand-medium-blue"><strong>Effective Date:</strong> May 12, 2026</p>
      </header>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by <strong>RUBY LM LLC</strong>, doing business as <strong>Laundry &amp; Co</strong> (&quot;Laundry &amp; Co,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including our website at https://laundryandco.nyc, our Laundry &amp; Co customer application (powered by Cents), and all related laundry pickup, delivery, wash, dry, and fold services (collectively, the &quot;Services&quot;).
      </p>

      <p>
        By using our Services, you (&quot;Customer&quot; or &quot;you&quot;) agree to be bound by these Terms. If you do not agree, please do not use our Services.
      </p>

      <hr className="border-brand-dark-blue/20" />

      <section>
        <h2 className="font-bold text-lg mb-2">1. About Us</h2>
        <p>Laundry &amp; Co is a brand operated by RUBY LM LLC, a limited liability company. References to &quot;Laundry &amp; Co&quot; in these Terms and elsewhere refer to RUBY LM LLC.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">2. Garment Care, Missing or Damaged Goods</h2>
        <p className="mb-2">Laundry &amp; Co will use industry-standard efforts to ensure that washing, drying, and folding services are maintained at industry-standard quality. The following terms apply to all garments accepted for service:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>We accept all Customer garments on the basis of weight and do not perform a piece-by-piece count.</li>
          <li>Due to time constraints, we do not read manufacturer-suggested care and washing/drying labels.</li>
          <li>We use only front-load washers with a fast extraction cycle to wash all Customer clothes.</li>
          <li>We accept no liability for damage due to normal wear and tear or shrinkage during washing and drying.</li>
          <li>We accept no liability for &quot;special care&quot; or delicate items that require special attention to be cleaned.</li>
          <li>We reserve the right to refuse cleaning any garment.</li>
          <li>We do not guarantee removal of all stains.</li>
          <li>We are not responsible for the loss of or damage to any personal or non-cleanable items left in clothing or bags, such as money, jewelry, or other belongings.</li>
          <li>We ask each Customer to determine whether they can accept the loss of any garment. If you cannot, please do not leave it with us.</li>
          <li>We reserve the right to send Customer garments to any of our affiliated facilities for washing, drying, and folding services.</li>
          <li>Customers must notify Laundry &amp; Co within <strong>5 business days</strong> of receipt of a delivery of any lost or damaged items from that particular delivery. Failure to do so constitutes a waiver of any claim for lost or damaged items from that delivery.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">3. Allergy Notice</h2>
        <p>Please be aware that Laundry &amp; Co washes clothes in shared washing machines where different detergents are used. Small amounts of prior detergents, which may not be hypoallergenic or to which you may have an allergy, may not be completely rinsed out of these washing machines. By voluntarily using our Services, you acknowledge this possibility and assume the risk of any resulting injury.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">4. SMS / Text Messaging Communications</h2>
        <p>By providing your mobile phone number to Laundry &amp; Co (RUBY LM LLC), whether through our website, our Laundry &amp; Co app powered by Cents, in person, or by any other means, <strong>you expressly consent to receive SMS and text messages from Laundry &amp; Co</strong> related to your account, orders, deliveries, promotions, appointment reminders, and other transactional or marketing communications.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong>Message frequency varies</strong> based on your account activity.</li>
          <li><strong>Message and data rates may apply</strong> as determined by your mobile carrier.</li>
          <li><strong>To opt out at any time, reply STOP</strong> to any text message you receive from us. You may also contact us at info@laundryandco.nyc to request removal.</li>
          <li><strong>For help, reply HELP</strong> or contact us at info@laundryandco.nyc.</li>
          <li><strong>Your phone number and SMS opt-in consent will NOT be shared, sold, or transferred to any third parties for marketing purposes.</strong> This information is used solely to deliver the communications you have requested from Laundry &amp; Co.</li>
        </ul>
        <p className="mt-2">By consenting to receive SMS messages, you confirm that you are the account holder or have authorization to use the mobile phone number provided.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">5. Payment</h2>
        <p>Payment for all Services is processed through our Laundry &amp; Co app (powered by Cents). By placing an order, you authorize Laundry &amp; Co to charge the payment method on file for the total amount of the order, including any applicable taxes and fees.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">6. Disclaimer of Warranties</h2>
        <p className="uppercase">Laundry &amp; Co&apos;s liability under these Terms shall be limited to general money damages in an amount not to exceed the charges paid by the Customer for the Services under which the damages are alleged to have occurred. This liability shall be the extent of Laundry &amp; Co&apos;s liability regardless of the form in which any legal or equitable action may be brought, and the foregoing shall constitute the Customer&apos;s exclusive remedy. In no event will Laundry &amp; Co be held liable or responsible for any consequential, special, indirect, incidental, or punitive loss or damages, whether or not Laundry &amp; Co knew or should have known of the likelihood of any loss or damages. Laundry &amp; Co disclaims all warranties, express or implied, with respect to the Services rendered under these Terms.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">7. Subscription Services (if applicable)</h2>
        <p className="mb-2">If you subscribe to a Laundry &amp; Co membership or subscription program, the following additional terms apply:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>The specific details of all subscription services, including features, benefits, pricing, and any required commitment duration, are displayed in the Laundry &amp; Co app at the time of subscription.</li>
          <li>Certain subscriptions may require a minimum subscription term or minimum spend commitment. By subscribing, you agree to any specified minimum term or financial commitment.</li>
          <li>Subscriptions auto-renew at the end of each term unless canceled. Cancellations requested before the end of a minimum required term will not result in a refund for the remaining period unless otherwise specified.</li>
          <li>You may opt out of automatic renewal through the Laundry &amp; Co app or by contacting us at info@laundryandco.nyc.</li>
          <li>Subscription payments are non-refundable, except as required by applicable law.</li>
          <li>Laundry &amp; Co reserves the right to modify subscription terms or pricing. Significant changes will be communicated in advance, and you may cancel without penalty if you do not agree, provided the cancellation is submitted within 30 days of receiving notice.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">8. Suspension and Termination</h2>
        <p>Laundry &amp; Co reserves the right to suspend or terminate any Customer&apos;s access to the Services if there is a breach of these Terms. Upon termination, the Customer will no longer have access to the Services, and any prepaid subscription amounts may be forfeited, subject to applicable law.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">9. Modifications to These Terms</h2>
        <p>We may update these Terms from time to time to reflect changes in our practices or applicable law. All changes are effective when posted on https://laundryandco.nyc. Your continued use of the Services after changes are posted constitutes acceptance of the updated Terms.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">10. Governing Law</h2>
        <p>These Terms are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict-of-law principles.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">11. Entire Agreement</h2>
        <p>These Terms constitute the complete and exclusive agreement between you and Laundry &amp; Co (RUBY LM LLC) regarding the Services, and supersede any prior agreements between us on this subject.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <div className="mt-2">
          <p><strong>RUBY LM LLC</strong> (doing business as Laundry &amp; Co)</p>
          <p>Email: <a href="mailto:info@laundryandco.nyc" className="underline hover:text-brand-blue">info@laundryandco.nyc</a></p>
          <p>Phone: <a href="tel:917-656-2854" className="underline hover:text-brand-blue">917-656-2854</a></p>
          <p>Website: <a href="https://laundryandco.nyc" className="underline hover:text-brand-blue">https://laundryandco.nyc</a></p>
        </div>
      </section>
    </div>
  )
}
