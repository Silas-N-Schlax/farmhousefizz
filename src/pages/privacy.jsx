import React from 'react'
import { Helmet } from 'react-helmet-async'

export class Privacy extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Privacy Policy - Farmhouse Fizz</title>
          <meta name="description" content="Farmhouse Fizz Privacy Policy" />
        </Helmet>

        <div className="page-hero">
          <h1 className='page-title'>Privacy Policy</h1>
        </div>

        <div className="article article--narrow">
          <p className="article__meta"><strong>Effective Date:</strong> January 22nd, 2026</p>

          <p>
            Farmhouse Fizz Soda Bar respects your privacy and is committed to protecting your
            personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you contact us through our website, we may collect your name, email address,
            phone number, and any information you choose to send. This information is
            provided voluntarily by you.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to inquiries, answer
            questions, and communicate with you regarding our services or events.
          </p>

          <h2>How Your Information Is Stored</h2>
          <p>
            Contact form submissions are sent directly to us via email. We do not store this
            information in a database or use it for marketing unless you explicitly request
            further communication.
          </p>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party services such as social media
            platforms or event listing sites. We are not responsible for the privacy
            practices of those websites.
          </p>

          <h2>Your Rights</h2>
          <p>
            If you have questions about this policy or would like us to delete a previous
            message, you may contact us at any time.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
          </p>
        </div>
      </>
    )
  }
}
