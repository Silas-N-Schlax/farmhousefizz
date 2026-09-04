import React from 'react'
import { Helmet } from 'react-helmet-async'
import { cateringSchema } from '../assets/seo/catering-schema'
import { Link } from 'react-router-dom'
import { cateringLinks } from '../assets/seo/catering-links'

export class Catering extends React.Component {
  get data() { return this.props.data }

  render() {
    const data = this.data
    return (
      <>
        <Helmet>
          <title>{`${data.metaTitle || "Mobile Beverage Catering Across NC"} | Farmhouse Fizz`}</title>
          <script type='application/ld+json'>
            {JSON.stringify(cateringSchema(data || {}))}
          </script>
          <meta name='description' content={
            data.metaDesc ||
            "Farmhouse Fizz provides mobile beverage catering across North Carolina."
          }></meta>
        </Helmet>

        <div className="page-hero">
          <span className="eyebrow">{data.isLocation ? `${data.locationName}, NC` : "Raleigh–Durham & Central NC"}</span>
          <h1 className='page-title'>{data.title || "Mobile Beverage Catering in Raleigh-Durham, NC"}</h1>
        </div>

        <div className="article">

          <h2>Bring Something Unforgettable</h2>
          {data.firstSection?.map((item, i) => (
            <p className={i === 0 ? 'lede' : undefined} key={i}>{item}</p>
          ))}

          {!data.eventTypeHeader && (
            <>
              <h2>Events We Serve</h2>
              <p>We cater a wide range of private and public events, including weddings and receptions, corporate gatherings, church events, school functions, graduation parties, birthday celebrations, festivals, community events, and private parties.</p>
              <p>If your event brings people together, there is a good chance Farmhouse Fizz Soda Bar can serve it.</p>
            </>
          )}

          {data.eventTypeHeader && (
            <>
              <h2>{data.eventTypeHeader}</h2>
              {data.eventTypeDetails?.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </>
          )}

          {data.main && (
            <>
              <h2>Catering Options</h2>
              <p>We currently offer flexible service options to fit your event needs.</p>
              <p><strong>Unlimited Service</strong> allows guests to enjoy unlimited drinks during your selected service window for one flat event rate.</p>
              <p><strong>Set Drink Packages</strong> provide a fixed number of drinks for your guests, making them ideal for smaller gatherings or events with a defined budget.</p>
              <p>Each event includes a curated menu designed around your guest experience and service needs.</p>
            </>
          )}

          {!data.main && data.locationFocus && (
            <>
              <h2>{data.isLocation ? `Serving ${data.locationName} Events` : data.locationName}</h2>
              {data.locationFocus.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </>
          )}

          <h2>What We Provide</h2>
          <ul className="provide-list">
            <li>Fully self-contained beverage trailer or popup setup</li>
            <li>Professional on-site service staff</li>
            <li>Handcrafted drinks made fresh to order</li>
            <li>Full setup and breakdown</li>
            <li>Menu planning assistance</li>
          </ul>
          <p>We handle the details so you can focus on your guests.</p>

          <h2>Booking &amp; Availability</h2>
          <div className="stat-row">
            <div className="stat">
              <span className="stat__number">14 days</span>
              <span className="stat__label">minimum notice for most bookings</span>
            </div>
            <div className="stat">
              <span className="stat__number">10%</span>
              <span className="stat__label">non-refundable deposit to reserve your date</span>
            </div>
          </div>
          {data.main ? (
            <>
              <p>Because many of our ingredients are ordered online, we require at least 14 days notice for most catering bookings.</p>
              <p>Short-notice bookings may be accepted depending on availability, but may be subject to limited menu options and additional fees.</p>
              <p>A 10% non-refundable deposit is required to reserve your event date. Dates are not guaranteed until your deposit has been received.</p>
              <p>Final payment must be made in full prior to your event unless otherwise agreed upon in writing.</p>
            </>
          ) : (
            <p>Because many of our ingredients are ordered online, we require at least 14 days notice and a 10% non-refundable deposit to reserve your date. See our <Link to="/catering">main catering page</Link> for full booking terms.</p>
          )}

          <h2>Request a Quote</h2>
          <p>Every event is different, and pricing depends on factors such as guest count, service duration, drink selections, event location, and scheduling availability.</p>
          <p>Please use our <Link to="/contact-us">contact form</Link> to request a custom quote and check availability for your event.</p>

          <blockquote className="pull">
            {data.main
              ? <>&ldquo;Let&rsquo;s Fizz Things Up&rdquo; &mdash; whether an intimate gathering or a large-scale celebration, we bring handcrafted drinks and memorable service to your guests.</>
              : (data.ctaNote?.[0] || "View full catering services and details on our main catering page.")}
          </blockquote>

          <div className="cta-inline">
            <Link to="/contact-us" className="btn btn--primary btn--medium">Request a Quote &rarr;</Link>
            <Link to={data.main ? "/menu" : "/catering"} className="btn btn--medium">
              {data.main ? "Preview the Menu" : "View Full Catering Details"}
            </Link>
          </div>

          <h2>More Areas We Serve</h2>
          <div className="explore-links">
            {cateringLinks().map((URL, i) => (
              data.path !== URL.path && (
                <Link className="btn btn--small btn--pill" to={URL.path} key={i}>
                  {URL.label}
                </Link>
              )
            ))}
          </div>

        </div>
      </>
    )
  }
}
