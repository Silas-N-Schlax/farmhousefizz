
import { Helmet } from 'react-helmet-async'

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Farmhouse Fizz</title>
        <meta name="description" content="Farmhouse Fizz Privacy Policy" />
      </Helmet>
      <div className="legal-content">
        <h1>Privacy Policy - Farmhouse Fizz</h1>
        <p><strong>Effective Date:</strong> January 22nd, 2026</p>

        <p>
          Farmhouse Fizz Soda Bar respects your privacy and is committed to protecting your
          personal information.
        </p>

        <h3>Information We Collect</h3>
        <p>
          When you contact us through our website, we may collect your name, email address,
          phone number, and any information you choose to send. This information is
          provided voluntarily by you.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We use the information you provide solely to respond to inquiries, answer
          questions, and communicate with you regarding our services or events.
        </p>

        <h3>How Your Information Is Stored</h3>
        <p>
          Contact form submissions are sent directly to us via email. We do not store this
          information in a database or use it for marketing unless you explicitly request
          further communication.
        </p>

        <h3>Sharing Your Information</h3>
        <p>
          We do not sell, trade, or share your personal information with third parties.
        </p>

        <h3>Third-Party Links</h3>
        <p>
          Our website may contain links to third-party services such as social media
          platforms or event listing sites. We are not responsible for the privacy
          practices of those websites.
        </p>

        <h3>Your Rights</h3>
        <p>
          If you have questions about this policy or would like us to delete a previous
          message, you may contact us at any time.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
        </p>
      </div>
    </>
  )
}