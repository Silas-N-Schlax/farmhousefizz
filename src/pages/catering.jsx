
import { Helmet } from 'react-helmet-async'

export function Catering({ data }) {
  return (
    <>
      <Helmet>
        <title>{data.metaTitle || "Mobile Beverage Catering Across NC"} | Farmhouse Fizz</title>
        <meta
          name="description"
          content={data.metaDesc || "Farmhouse Fizz provides mobile beverage catering across Raleigh-Durham and Central North Carolina, serving dirty sodas, handcrafted lemonades, and custom drink experiences for weddings, corporate events, and celebrations."}
        />
      </Helmet>
      <>
        <h1 className='page-title'>{data.title || "Mobile Beverage Catering in Raleigh-Durham, NC"}</h1>

        <div className="info-content">

          <h2>Bring Something Unforgettable</h2>
          {data.firstSection.map((item, i) => {
            return (
              <p key={i}>{item}</p>
            )
          })}

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
              {data.eventTypeDetails.map((item, i) => {
                return (<p key={i}>{item}</p>)
              })}
            </>
          )}


          <h2>Catering Options</h2>
          <p>We currently offer flexible service options to fit your event needs.</p>
          <p><strong>Unlimited Service</strong> allows guests to enjoy unlimited drinks during your selected service window for one flat event rate.</p>
          <p><strong>Set Drink Packages</strong> provide a fixed number of drinks for your guests, making them ideal for smaller gatherings or events with a defined budget.</p>
          <p>Each event includes a curated menu designed around your guest experience and service needs.</p>

          <h2>What We Provide</h2>
          <p>Every booking includes our fully self-contained beverage trailer or popup setup, professional on-site service staff, handcrafted drinks made fresh to order, full setup and breakdown, and menu planning assistance to ensure your event runs smoothly.</p>
          <p>We handle the details so you can focus on your guests.</p>

          <h2>Booking & Availability</h2>
          <p>Because many of our ingredients are ordered online, we require at least 14 days notice for most catering bookings.</p>
          <p>Short-notice bookings may be accepted depending on availability, but may be subject to limited menu options and additional fees.</p>
          <p>A 10% non-refundable deposit is required to reserve your event date. Dates are not guaranteed until your deposit has been received.</p>
          <p>Final payment must be made in full prior to your event unless otherwise agreed upon in writing.</p>

          <h2>Request a Quote</h2>
          <p>Every event is different, and pricing depends on factors such as guest count, service duration, drink selections, event location, and scheduling availability.</p>
          <p>Please use our <a href="./contact-us">contact form</a> to request a custom quote and check availability for your event.</p>

          <h2>Let’s Fizz Things Up</h2>
          <p>Whether you are planning an intimate gathering or a large-scale celebration, Farmhouse Fizz is ready to bring handcrafted drinks and memorable service to your guests.</p>
          <p>Reach out today to check availability and start planning your event.</p>

        </div>
      </>
    </>
  )
}