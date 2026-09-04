import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cards } from '../components/cards'
import { CardHalf } from '../components/card-half'
import { Calender } from '../components/calender'

export class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Farmhouse Fizz - Dirty Sodas & More!</title>
          <meta name="description" content="Handcrafted dirty sodas, italian waters, dirty lemonades, dirty cold brew, and more, served from our mobile soda trailer across central North Carolina. Family built, event ready, and always refreshing." />
        </Helmet>
        <div className="page">
          <div className="hero">
            <div className="hero__media">
              <img className="hero__image" src="/banner-image.jpg" alt="" width={2227} height={1354} fetchPriority="high" />
            </div>
            <div className="hero__content">
              <div className="hero__badge">
                <img className="hero__badge-mark" src="/logo.png" alt="" />
                <span className="hero__badge-text">Mobile Soda Bar &middot; Central NC</span>
              </div>
              <h1 className="hero__title">Farmhouse Fizz Soda Bar</h1>
              <ul className="hero__tags">
                <li className="hero__tag">Dirty Sodas</li>
                <li className="hero__tag">Mobile</li>
                <li className="hero__tag">Non-Alcoholic</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section__header">
              <span className="eyebrow">Family Built &middot; Est. 2025</span>
              <h2 className="section__title">More Than Just Soda</h2>
              <p className="section__text">Farmhouse Fizz is a family-run soda bar built on quality drinks, hard work, and doing things the right way. We serve handcrafted dirty sodas at events across North Carolina.</p>
            </div>
            <Cards height={175} data={
              [
                {
                  title: "Family Built",
                  desc: "Created by a family, run with care, and focused on learning, responsibility, and teamwork."
                },
                {
                  title: "Handcrafted Drinks",
                  desc: "Every drink is made to order with custom flavors, and no shortcuts. Only delicious drinks."
                },
                {
                  title: "On The Move",
                  desc: "We are a mobile concession trailer, serving festivals, fairs, weddings, parties, and private events."
                }
              ]
            }></Cards>
          </div>
          <div className="section banner banner--left banner--secondary">
            <h2 className="banner__title">100% Non-Alcoholic & Family-Friendly</h2>
            <p className="banner__text">All drinks are non-alcoholic and suitable for all ages. From sodas to flavored waters, and more always in the works!</p>
          </div>
          <div className="section">
            <CardHalf height={200} content={
              {
                left: {
                  title: "What is a Dirty Soda?",
                  text: "A dirty soda combines soda, flavored syrups or juices with a touch of cream."
                },
                right: {
                  title: "Why We Love Them",
                  text: "Simple, highly customizable, and surprisingly good once you try one."
                }
              }
            }
            ></CardHalf>
          </div>
          <div className="section banner banner--center banner--primary">
            <h2 className="banner__title">Ready to Bring the Fizz?</h2>
            <p className="banner__text">Follow us or reach out to book your event.</p>
          </div>
          <div className="section">
            <Cards height={200} data={
              [
                {
                  title: "Book Us for Your Event",
                  desc: "Planning a party, wedding, or special event? Reach out for a quote today.",
                  url: "/contact-us",
                  text: "Contact Us"
                },
                {
                  title: "View our Menu",
                  desc: "Explore our current menu online. Items and availability may change.",
                  url: "/menu",
                  text: "View Menu"
                },
                {
                  title: "Find Us Today",
                  desc: "Check our social media, StreetFoodFinder, or below to see where we’re serving next.",
                  url: "https://streetfoodfinder.com/farmhousefizz",
                  text: "Farmhouse Fizz Locator"
                },
              ]
            } link={true}></Cards>
          </div>
          <div className="section banner banner--center banner--accent">
            <h2 className="banner__title">Catch the Fizz on the Road</h2>
            <p className="banner__text">See our upcoming public events, pop-ups, and markets across Central North Carolina on our live calendar.</p>
          </div>
          <div className="section">
            <Calender/>
          </div>
        </div>
      </>
    )
  }
}
