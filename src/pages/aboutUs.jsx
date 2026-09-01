
import { Helmet } from 'react-helmet-async'

export function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Farmhouse Fizz</title>
        <meta name="description" content="Learn how Farmhouse Fizz Soda Bar began as a family dream and grew into a mobile dirty soda trailer serving central North Carolina events." />
      </Helmet>
      <h1 className='page-title'>Who is Farmhouse Fizz?</h1>
      <div className="info-content">
        <h2 className="info-content__heading">Who we are</h2>
        <p className="info-content__text">Farmhouse Fizz Soda Bar began as a simple dream, an idea rooted in the desire to build something meaningful together as a family. In late 2025, John (father) and Silas (son) Schlax began turning that vision into reality, laying the foundation for what would soon become Farmhouse Fizz.</p>
        <p className="info-content__text">At its core, Farmhouse Fizz was created to give the seven Schlax kids a place to learn real-world skills before stepping fully into adulthood. From teamwork and responsibility to customer service and work ethic, the business was designed to be both an opportunity and a training ground. Alongside that mission came a second passion, bringing classic dirty sodas and handcrafted non-alcoholic drinks to the streets and events of central North Carolina and beyond.</p>
        <p className="info-content__text">The journey was anything but easy. From custom-building the trailer by hand to navigating regulations, logistics, and the realities of running a small business, every step required learning, patience, and perseverance. Progress came slowly at times, but always forward.</p>
        <p className="info-content__text">With hopes of opening in February 2026, Farmhouse Fizz is the result of countless hours, hard lessons, and a shared commitment to doing things well the first time. What started as an idea has grown into a family-run business focused on quality drinks, friendly service, and creating something lasting together, no matter the challenge along the way.</p>

        <h2 className="info-content__heading">What is a Dirty Soda?</h2>
        <p className="info-content__text">The dirty soda, as we know it today, originated in Utah as a non-alcoholic alternative to drinks such as alcohol, tea, and coffee. While the concept has been around for years, it gained widespread popularity around 2010 when Swig opened its first location and helped bring dirty sodas into the mainstream.</p>
        <p className="info-content__text">You know the why, but what about the what? A dirty soda has three simple parts, none of which are alcohol. First, a base soda. Second, flavored syrups or fruit juices. Third, cream, typically a sweet cream or half-and-half.</p>
        <p className="info-content__text">Before you click away in disgust, hear us out. Before we tried it, we thought it sounded like a terrible idea too. Who adds cream to soda? That said, once we tried it, there was no going back. Why settle for a plain Dr. Pepper when you could have a creamy vanilla blackberry Dr. Pepper?</p>

        <h2 className="info-content__heading">Our Setup</h2>
        <p className="info-content__text">Farmhouse Fizz Soda Bar operates from a self-contained concession trailer with a farmhouse vibe. We are set up for all types of events, from street vending and festivals to corporate events, weddings, and backyard parties.</p>
        <p className="info-content__text">Guests order directly from our menu at the service window, where a team member is always ready to help guide them through our customization process. Just give us a little patience if we are busy. Every drink is made to order, because guessing what you want would end poorly for everyone.</p>

        <h2 className="info-content__heading">Where You’ll Find Us</h2>
        <p className="info-content__text">We move, it is kind of our thing. To keep up with us, follow Farmhouse Fizz on Instagram, Facebook, and or StreetFoodFinder.</p>
        <p className="info-content__text">You will find us at a wide variety of public events like fairs and festivals, as well as private catered events including weddings, corporate gatherings, parties, and more.</p>

        <h2 className="info-content__heading">Ready to Fizz Things Up?</h2>
        <p className="info-content__text">Whether you are planning an event, hosting a gathering, or just trying to track down your next favorite drink, we would love to serve you. Follow us on social media to see where we will be next, or reach out to book Farmhouse Fizz for your upcoming event.</p>
        <p className="info-content__text">We will bring the trailer, the drinks, and the good vibes. You bring the people.</p>

      </div>
    </>
  )
}