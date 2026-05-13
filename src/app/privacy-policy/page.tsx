import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Laundry & Co',
  description:
    'Privacy Policy for Laundry & Co (RUBY LM LLC). Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.laundryandco.nyc/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10 max-w-3xl mx-auto my-8 md:my-16 text-sm text-brand-dark-blue border border-brand-dark-blue/20 rounded-lg">
      <header>
        <h1 className="font-black text-2xl lg:text-3xl mb-2">Privacy Policy</h1>
        <p className="text-brand-medium-blue"><strong>Effective Date:</strong> May 12, 2026</p>
      </header>

      <p>
        <strong>RUBY LM LLC</strong>, doing business as <strong>Laundry &amp; Co</strong> (&quot;Laundry &amp; Co,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), respects your privacy and is committed to protecting it through compliance with this Privacy Policy. This Privacy Policy describes the types of information we collect from users (&quot;User,&quot; &quot;Customer,&quot; or &quot;you&quot;) of our website at https://laundryandco.nyc, our Laundry &amp; Co customer application (powered by Cents), and our laundry services (collectively, the &quot;Services&quot;), and our practices for collecting, using, maintaining, protecting, and disclosing that information.
      </p>

      <p>
        By using our Services, you agree to this Privacy Policy. If you do not agree, please do not use our Services.
      </p>

      <hr className="border-brand-dark-blue/20" />

      <section>
        <h2 className="font-bold text-lg mb-2">1. About Us</h2>
        <p>Laundry &amp; Co is a brand operated by RUBY LM LLC. References to &quot;Laundry &amp; Co&quot; in this Privacy Policy refer to RUBY LM LLC.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">2. Minors</h2>
        <p>Our Services are not intended for persons under 13 years of age, and you must not use our Services if you are under 13. Persons under 18 should use our Services only with the permission of a parent or guardian. If we learn that a child under 13 has provided us with personal information, we will delete that information from our systems.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">3. Information We Collect</h2>
        <p className="mb-2">When you register with, or use certain features of, our Services, we may collect or ask you to provide several types of information, including:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Personal Information</strong>, including your name, email address, phone number, delivery address, and payment information (such as credit card number and billing address).</li>
          <li><strong>Order and Service Information</strong>, including details about your laundry orders, preferences, delivery instructions, and service history.</li>
          <li><strong>Usage Information</strong>, including details about your visits to our website and use of our app, such as traffic data, logs, device information, IP address, operating system, and geolocation.</li>
          <li><strong>Communications</strong>, including records of your correspondence with us, including emails and text messages.</li>
        </ul>
        <p className="mt-2">We collect information directly from you when you provide it, automatically as you use our Services (through cookies and similar technologies), and from third parties, including Cents (the platform that powers our customer-facing app and order management).</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">4. How We Use Your Information</h2>
        <p className="mb-2">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Provide, operate, and maintain the Services</li>
          <li>Process and fulfill your laundry orders, deliveries, and payments</li>
          <li>Communicate with you about your orders, account, and Services (including via SMS, see Section 5)</li>
          <li>Send you transactional notifications, promotional offers, and service updates</li>
          <li>Improve our Services and customer experience</li>
          <li>Carry out our obligations and enforce our rights under any agreements with you</li>
          <li>Comply with applicable laws and respond to legal requests</li>
          <li>Detect, prevent, and address fraud, security issues, or technical problems</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">5. SMS / Text Messaging</h2>
        <p>When you provide your mobile phone number to Laundry &amp; Co (RUBY LM LLC), whether through our website, our Laundry &amp; Co app powered by Cents, in person, or by any other means, <strong>you expressly consent to receive SMS and text messages from Laundry &amp; Co</strong> related to your account, orders, deliveries, promotions, appointment reminders, and other transactional or marketing communications.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong>Message frequency varies</strong> based on your account activity.</li>
          <li><strong>Message and data rates may apply</strong> as determined by your mobile carrier.</li>
          <li><strong>To opt out at any time, reply STOP</strong> to any text message. You may also email us at info@laundryandco.nyc to request removal.</li>
          <li><strong>For help, reply HELP</strong> or contact us at info@laundryandco.nyc.</li>
        </ul>
        <p className="mt-2"><strong>No sharing of SMS data with third parties.</strong> Your mobile phone number, SMS opt-in consent, and any related information collected for the purpose of SMS communication <strong>will NOT be shared, sold, or transferred to any third parties or affiliates for marketing or promotional purposes</strong>. This information is used solely to deliver the communications you have requested from Laundry &amp; Co.</p>
        <p className="mt-2">All categories of information described elsewhere in this Privacy Policy that may be shared with service providers or third parties <strong>exclude</strong> text messaging originator opt-in data and consent. This information is not shared with any third parties.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">6. How We Share Your Information</h2>
        <p className="mb-2">We may share aggregated, anonymized information without restriction. We may share your personal information as follows:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>With service providers</strong> who support our business (such as Cents, our customer ordering platform; payment processors; delivery providers; and IT services), strictly to perform services on our behalf. <strong>Note: This excludes SMS opt-in data, as described in Section 5.</strong></li>
          <li><strong>In connection with a business transaction</strong>, such as a merger, sale of assets, or financing.</li>
          <li><strong>To comply with legal obligations</strong>, court orders, or government requests.</li>
          <li><strong>To enforce our rights or protect the safety</strong> of our customers, employees, or others.</li>
          <li><strong>With your consent</strong> for any other purpose disclosed to you at the time of collection.</li>
        </ul>
        <p className="mt-2">We do not sell your personal information.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">7. Cookies and Tracking Technologies</h2>
        <p>Our website and app may use cookies and similar technologies to recognize your browser, remember your preferences, improve your experience, and gather analytics about how the Services are used. You may block or delete cookies through your browser settings, but doing so may limit certain features.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">8. Data Security</h2>
        <p>We implement reasonable administrative, physical, and technical safeguards designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no system is completely secure, and we cannot guarantee absolute security. If we detect a breach affecting your personal information, we will notify you and applicable authorities as required by law.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">9. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to provide the Services, comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymize it.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">10. Your Rights</h2>
        <p>Depending on your state of residence, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict its use. To exercise any of these rights, please contact us at info@laundryandco.nyc.</p>
        <p className="mt-2"><strong>California Residents:</strong> California&apos;s &quot;Shine the Light&quot; law (Civil Code Section 1798.83) permits California residents to request information about our disclosure of personal information to third parties for their direct marketing purposes. We do not sell or share your personal information with third-party companies for their direct marketing purposes.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">11. Users Outside the United States</h2>
        <p>Our Services are intended only for Users in the United States. If you access our Services from outside the United States, your information may be transferred to and processed in the United States, and is subject to applicable U.S. law.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">12. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. All changes are effective when posted on https://laundryandco.nyc. Your continued use of the Services after changes are posted constitutes acceptance of the updated Privacy Policy.</p>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">13. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:</p>
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
