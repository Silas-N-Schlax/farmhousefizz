import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { UnpackArt, IceArt, SyrupArt, SodaArt, CreamArt, StirArt, EnjoyArt } from '../components/kit-art'

const STEPS = [
  {
    title: "Take everything out",
    text: "Your whole kit is packed inside the cup. Pull it all out and set it on the counter.",
    art: <UnpackArt />,
  },
  {
    title: "Add ice",
    text: "Fill the empty cup with ice.",
    art: <IceArt />,
  },
  {
    title: "Pour in the syrup",
    text: "Empty the syrup over the ice. It sinks right to the bottom.",
    art: <SyrupArt />,
  },
  {
    title: "Pour the soda",
    text: "Go slowly! Soda fizzes up when it hits the ice, so pour a little at a time so it doesn't overflow. Leave some room at the top for the cream.",
    art: <SodaArt />,
  },
  {
    title: "Add the cream",
    text: "Pour the cream on top and watch it swirl down into the soda.",
    art: <CreamArt />,
  },
  {
    title: "Lid on and stir",
    text: "Pop the lid on and give it a good stir so the syrup from the bottom mixes all the way through.",
    art: <StirArt />,
  },
  {
    title: "Enjoy!!!",
    text: "That's it. Your dirty soda is ready to sip.",
    art: <EnjoyArt />,
  },
]

export class SodaKit extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Dirty Soda Kit Instructions - Farmhouse Fizz</title>
          <meta name="description" content="How to put together your Farmhouse Fizz dirty soda kit in seven easy steps." />
        </Helmet>

        <header className="page-hero">
          <span className="eyebrow">Dirty Soda Kit</span>
          <h1 className="page-title">Build Your Drink</h1>
          <p className="page-hero__text">Everything comes packed in the cup. Seven easy steps and you're sipping.</p>
        </header>

        <section className="kit-steps">
          <ol className="kit-steps__list">
            {STEPS.map(({ title, text, art }, i) => (
              <li className={`kit-step${i === STEPS.length - 1 ? ' kit-step--finale' : ''}`} key={title}>
                <div className="kit-step__art">
                  {art}
                </div>
                <div className="kit-step__body">
                  <span className="kit-step__number">Step {i + 1}</span>
                  <h2 className="kit-step__title">{title}</h2>
                  <p className="kit-step__text">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="kit-steps__cta">
            <Link to="/menu" className="btn btn--primary btn--medium">See the Menu</Link>
            <Link to="/contact-us" className="btn btn--secondary btn--medium">Book Us</Link>
          </div>
        </section>
      </>
    )
  }
}
