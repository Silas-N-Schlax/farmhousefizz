import React from 'react'
import { Helmet } from 'react-helmet-async'

export class SodaPoll extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Soda Poll - Farmhouse Fizz</title>
          <meta name="description" content="Help shape our menu. Vote on flavors, mixes, and new ideas for Farmhouse Fizz dirty sodas and see what others are loving." />
        </Helmet>

        <div className="page-hero">
          <span className="eyebrow">Have A Say</span>
          <h1 className='page-title'>Soda Poll</h1>
          <p className="page-hero__text">Help shape our menu. Vote on flavors, mixes, and new ideas for Farmhouse Fizz dirty sodas and see what others are loving.</p>
        </div>

        <div className="embed-card">
          <div className="embed-card__chrome">
            <span className="embed-card__dot"></span>
            <span className="embed-card__dot"></span>
            <span className="embed-card__dot"></span>
          </div>
          <div className="embed-frame">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScThzWyGxWcOiXeR-cwvaDxOL3L5--JaY5LjoK0c8hvIGHVAg/viewform?embedded=true" width="640" height="1403" frameBorder="0" marginheight="0" marginwidth="0">Loading&hellip;</iframe>
          </div>
        </div>
      </>
    )
  }
}
