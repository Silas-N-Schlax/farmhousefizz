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
        <div className="legal-doc">
          <h1 className="legal-doc__title">Privacy Policy - Farmhouse Fizz</h1>
          <p className="legal-doc__text"><strong>Effective Date:</strong> January 22nd, 2026</p>

          <p className="legal-doc__text">
            Farmhouse Fizz Soda Bar respects your privacy and is committed to protecting your
            personal information.
          </p>

          <h3 className="legal-doc__heading">Information We Collect</h3>
          <p className="legal-doc__text">
            When you contact us through our website, we may collect your name, email address,
            phone number, and any information you choose to send. This information is
            provided voluntarily by you.
          </p>

          <h3 className="legal-doc__heading">How We Use Your Information</h3>
          <p className="legal-doc__text">
            We use the information you provide solely to respond to inquiries, answer
            questions, and communicate with you regarding our services or events.
          </p>

          <h3 className="legal-doc__heading">How Your Information Is Stored</h3>
          <p className="legal-doc__text">
            Contact form submissions are sent directly to us via email. We do not store this
            information in a database or use it for marketing unless you explicitly request
            further communication.
          </p>

          <h3 className="legal-doc__heading">Sharing Your Information</h3>
          <p className="legal-doc__text">
            We do not sell, trade, or share your personal information with third parties.
          </p>

          <h3 className="legal-doc__heading">Third-Party Links</h3>
          <p className="legal-doc__text">
            Our website may contain links to third-party services such as social media
            platforms or event listing sites. We are not responsible for the privacy
            practices of those websites.
          </p>

          <h3 className="legal-doc__heading">Your Rights</h3>
          <p className="legal-doc__text">
            If you have questions about this policy or would like us to delete a previous
            message, you may contact us at any time.
          </p>

          <h3 className="legal-doc__heading">Contact Us</h3>
          <p className="legal-doc__text">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
          </p>
        </div>
      </>
    )
  }
}
