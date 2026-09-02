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
        <div className="embed-frame">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScThzWyGxWcOiXeR-cwvaDxOL3L5--JaY5LjoK0c8hvIGHVAg/viewform?embedded=true" width="640" height="1403" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </>
    )
  }
}
