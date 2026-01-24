
import { Helmet } from 'react-helmet-async'

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of and Conditions - Farmhouse Fizz</title>
        <meta name="description" content="Farmhouse Fizz Terms and Conditions" />
      </Helmet>
      <div className="legal-content">
        <h1>Terms of and Conditions</h1>
        <p className="effective"><strong>Effective Date:</strong> January 22nd, 2026</p>

        <p>
          Welcome to the Farmhouse Fizz Soda Bar website. By using this website, you agree
          to the following terms and conditions.
        </p>

        <h3>Website Use</h3>
        <p>
          This website is provided for general informational purposes only. Content may be
          updated, changed, or removed at any time without notice.
        </p>

        <h3>Services &amp; Availability</h3>
        <p>
          Information about our menu, events, and services is subject to change.
          Availability may vary by location, event, or season, and we do not guarantee
          specific offerings unless confirmed in writing.
        </p>

        <h3>Bookings &amp; Inquiries</h3>
        <p>
          Submitting a contact form or inquiry does not guarantee availability or a
          confirmed booking. All events and services must be scheduled and approved
          directly by Farmhouse Fizz Soda Bar.
        </p>

        <h3>Intellectual Property</h3>
        <p>
          All content on this website, including text, images, logos, and branding, is the
          property of Farmhouse Fizz Soda Bar unless otherwise noted. You may not use or
          reproduce any content without permission.
        </p>

        <h3>Third-Party Links</h3>
        <p>
          This website may include links to third-party websites or services. We are not
          responsible for the content, policies, or practices of those third parties.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          Farmhouse Fizz Soda Bar is not responsible for any damages resulting from the use
          or inability to use this website.
        </p>

        <h3>Changes to These Terms</h3>
        <p>
          We may update these Terms &amp; Conditions at any time. Continued use of the
          website indicates acceptance of the updated terms.
        </p>

        <h3>Contact</h3>
        <p>
          If you have questions about these Terms &amp; Conditions, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
        </p>
      </div>
    </>
  )
}