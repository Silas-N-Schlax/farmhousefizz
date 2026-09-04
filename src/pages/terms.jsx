import React from 'react'
import { Helmet } from 'react-helmet-async'

export class Terms extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Terms of and Conditions - Farmhouse Fizz</title>
          <meta name="description" content="Farmhouse Fizz Terms and Conditions" />
        </Helmet>

        <div className="page-hero">
          <h1 className='page-title'>Terms &amp; Conditions</h1>
        </div>

        <div className="article article--narrow">
          <p className="article__meta"><strong>Effective Date:</strong> January 22nd, 2026</p>

          <p>
            Welcome to the Farmhouse Fizz Soda Bar website. By using this website, you agree
            to the following terms and conditions.
          </p>

          <h2>Website Use</h2>
          <p>
            This website is provided for general informational purposes only. Content may be
            updated, changed, or removed at any time without notice.
          </p>

          <h2>Services &amp; Availability</h2>
          <p>
            Information about our menu, events, and services is subject to change.
            Availability may vary by location, event, or season, and we do not guarantee
            specific offerings unless confirmed in writing.
          </p>

          <h2>Bookings &amp; Inquiries</h2>
          <p>
            Submitting a contact form or inquiry does not guarantee availability or a
            confirmed booking. All events and services must be scheduled and approved
            directly by Farmhouse Fizz Soda Bar.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and branding, is the
            property of Farmhouse Fizz Soda Bar unless otherwise noted. You may not use or
            reproduce any content without permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may include links to third-party websites or services. We are not
            responsible for the content, policies, or practices of those third parties.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Farmhouse Fizz Soda Bar is not responsible for any damages resulting from the use
            or inability to use this website.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions at any time. Continued use of the
            website indicates acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms &amp; Conditions, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
          </p>
        </div>
      </>
    )
  }
}
