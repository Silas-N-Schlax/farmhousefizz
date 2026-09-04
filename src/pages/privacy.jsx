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

        <header className="page-hero">
          <span className="eyebrow">Legal</span>
          <h1 className='page-title'>Privacy Policy</h1>
          <p className="page-hero__text">How we collect, use, and protect the information you share with us.</p>
        </header>

        <article className="article article--narrow">
          <p className="article__meta"><strong>Effective Date:</strong> January 22nd, 2026</p>

          <p className="lede">
            Farmhouse Fizz Soda Bar respects your privacy and is committed to protecting your
            personal information.
          </p>

          <nav className="explore-links" aria-label="Sections in this policy">
            <a className="btn btn--secondary btn--small" href="#collect">Information We Collect</a>
            <a className="btn btn--secondary btn--small" href="#use">How We Use It</a>
            <a className="btn btn--secondary btn--small" href="#storage">How It's Stored</a>
            <a className="btn btn--secondary btn--small" href="#sharing">Sharing</a>
            <a className="btn btn--secondary btn--small" href="#third-party">Third-Party Links</a>
            <a className="btn btn--secondary btn--small" href="#rights">Your Rights</a>
            <a className="btn btn--secondary btn--small" href="#contact">Contact Us</a>
          </nav>

          <h2 id="collect">Information We Collect</h2>
          <p>
            When you contact us through our website, we may collect your name, email address,
            phone number, and any information you choose to send. This information is
            provided voluntarily by you.
          </p>

          <h2 id="use">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to inquiries, answer
            questions, and communicate with you regarding our services or events.
          </p>

          <h2 id="storage">How Your Information Is Stored</h2>
          <p>
            Contact form submissions are sent directly to us via email. We do not store this
            information in a database or use it for marketing unless you explicitly request
            further communication.
          </p>

          <h2 id="sharing">Sharing Your Information</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties.
          </p>

          <h2 id="third-party">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party services such as social media
            platforms or event listing sites. We are not responsible for the privacy
            practices of those websites.
          </p>

          <h2 id="rights">Your Rights</h2>
          <p>
            If you have questions about this policy or would like us to delete a previous
            message, you may contact us at any time.
          </p>

          <h2 id="contact">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
          </p>
        </article>
      </>
    )
  }
}
