
import { Helmet } from 'react-helmet-async'

export function EnergyDrinkNotice() {
  return (
    <>
      <Helmet>
        <title>Energy Drink Notice - Farmhouse Fizz</title>
        <meta name="description" content="Farmhouse Fizz Notice on Energy Drinks and Caffeine" />
      </Helmet>
      <div className="legal-content">
        <h1>Energy Drink and Caffeine Notice</h1>
        <p><strong>Last Updated:</strong> April 9th, 2026</p>

        <p>
          Energy drinks, caffeine shots, and other caffeinated beverages are consumed at your own risk.
        </p>

        <p>
          We do not serve energy drinks or caffeine shots to anyone under 18 without a parent or legal guardian present. We reserve the right to request valid identification if age is in question.
        </p>

        <p>
          Customers are responsible for monitoring their total daily caffeine intake. According to the U.S. Food and Drug Administration, up to 400 mg of caffeine per day is generally considered safe for healthy adults.
        </p>

        <p>
          Some of our beverages, particularly larger energy drinks, may contain up to 200 mg of caffeine per serving. Energy shots cannot and will not be added to energy drinks for any reason.
        </p>

        <p>
          Caffeine consumption is not recommended for children, individuals under 18 without supervision, pregnant or nursing individuals, or those who are sensitive to caffeine. This includes, but is not limited to, individuals with heart conditions, high blood pressure, or other underlying medical concerns.
        </p>

        <p>
          We reserve the right to refuse service to anyone at our sole discretion for health, safety, legal, or operational reasons.
        </p>

        <p>
          By purchasing and consuming these products, you acknowledge and accept all risks associated with caffeine consumption and agree that you are solely responsible for your health and well-being.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Notice, please contact us at <a href="mailto:silas@farmhousefizz.com">silas@farmhousefizz.com</a>.
        </p>
      </div>
    </>
  )
}