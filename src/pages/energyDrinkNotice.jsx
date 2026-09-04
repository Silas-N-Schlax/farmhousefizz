import React from 'react'
import { Helmet } from 'react-helmet-async'

export class EnergyDrinkNotice extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Energy Drink Notice - Farmhouse Fizz</title>
          <meta name="description" content="Farmhouse Fizz Notice on Energy Drinks and Caffeine" />
        </Helmet>

        <header className="page-hero">
          <span className="eyebrow">Safety Notice</span>
          <h1 className='page-title'>Energy Drink &amp; Caffeine Notice</h1>
          <p className="page-hero__text">What to know before ordering a caffeinated beverage with us.</p>
        </header>

        <article className="article article--narrow">
          <p className="article__meta"><strong>Last Updated:</strong> April 9th, 2026</p>

          <p className="lede">
            Energy drinks, caffeine shots, and other caffeinated beverages are consumed at your own risk.
          </p>

          <div className="stat-row">
            <div className="stat">
              <span className="stat__number">18+</span>
              <span className="stat__label">Without a parent or guardian present</span>
            </div>
            <div className="stat">
              <span className="stat__number">200 mg</span>
              <span className="stat__label">Caffeine per serving, larger drinks</span>
            </div>
            <div className="stat">
              <span className="stat__number">400 mg</span>
              <span className="stat__label">FDA daily limit, healthy adults</span>
            </div>
          </div>

          <h2 id="age">Age Restriction</h2>
          <p>
            We do not serve energy drinks or caffeine shots to anyone under 18 without a parent or legal guardian present. We reserve the right to request valid identification if age is in question.
          </p>

          <h2 id="content">Caffeine Content</h2>
          <p>
            Customers are responsible for monitoring their total daily caffeine intake. According to the U.S. Food and Drug Administration, up to 400 mg of caffeine per day is generally considered safe for healthy adults.
          </p>
          <p>
            Some of our beverages, particularly larger energy drinks, may contain up to 200 mg of caffeine per serving. Energy shots cannot and will not be added to energy drinks for any reason.
          </p>

          <h2 id="avoid">Who Should Avoid Caffeine</h2>
          <p>
            Caffeine consumption is not recommended for children, individuals under 18 without supervision, pregnant or nursing individuals, or those who are sensitive to caffeine. This includes, but is not limited to, individuals with heart conditions, high blood pressure, or other underlying medical concerns.
          </p>

          <h2 id="refusal">Right to Refuse Service</h2>
          <p>
            We reserve the right to refuse service to anyone at our sole discretion for health, safety, legal, or operational reasons.
          </p>

          <h2 id="acknowledgement">Acknowledgement of Risk</h2>
          <p>
            By purchasing and consuming these products, you acknowledge and accept all risks associated with caffeine consumption and agree that you are solely responsible for your health and well-being.
          </p>

          <h2 id="contact">Contact Us</h2>
          <p>
            If you have any questions about this Notice, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
          </p>
        </article>
      </>
    )
  }
}
