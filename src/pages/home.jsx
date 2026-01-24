import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Cards } from '../components/cards'
import { CardHalf } from '../components/card-half'

export function Home() {

  return (
    <>
      <Helmet>
        <title>Farmhouse Fizz</title>
        <meta name="description" content="Farmhouse Fizz Home Page" />
      </Helmet>
      <div className="content">
        <div className="image-banner">
          {/* <img src="/src/assets/images/banner-img.jpg" alt="" /> */}
          <div className="blur"></div>
          <div className="info">
            <h1 className="title">Farmhouse Fizz Soda Bar</h1>
            <span className="tags">
              <p>Custom Crafted Dirty Sodas</p> <span className="cr-sm cr-li"></span>
              <p>Mobile</p> <span className="cr-sm cr-li"></span>
              <p>Non-Alcoholic</p>
            </span>
          </div>
        </div>
        <div className="section">
          <div className="sc-hd">
            <h2>More Then Just Soda</h2>
            <p>Farmhouse Fizz is a family-run soda bar built on quality drinks, hard work, and doing things the right way. We serve handcrafted dirty sodas at events across North Carolina.</p>
          </div>
          <Cards height={175} data={
            [
              {
                title: "Family Built",
                desc: "Created by a family, run with care, and focused on learning, responsibility, and teamwork."
              },
              {
                title: "Handcrafted Drinks",
                desc: "Every drink is made to order with custom flavors, real ingredients, and no shortcuts. Only delicious drinks"
              },
              {
                title: "On The Move",
                desc: "We are a mobile concession trailer, serving festivals, fairs, weddings, parties, and private events."
              }
            ]
          }></Cards>
        </div>
        <div className="section bnr lf" style={{backgroundColor: "var(--gb-secondary-color)"}}>
          <h2>100% Non-Alcoholic & Family-Friendly</h2>
          <p>All drinks are non-alcoholic and suitable for all ages. From sodas to flavored waters, and more always in the works!</p>
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
        <div className="section bnr ctr" style={{backgroundColor: "var(--gb-primary-color)"}}>
          <h2>Ready to Bring the Fizz?</h2>
          <p>Follow us or reach out to book your event.</p>
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
                desc: "Check our social media or StreetFoodFinder to see where we’re serving next.",
                url: "https://streetfoodfinder.com/farmhousefizz",
                text: "Farmhouse Fizz Locator"
              },
            ]
          } link={true}></Cards>
        </div>
      </div>
    </>
  )
}