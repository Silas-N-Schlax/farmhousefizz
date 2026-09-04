import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export class NotFound extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404 - Page Not Found</title>
          <meta name="description" content="Page Not Found" />
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="not-found">
          <div className="not-found__card">
            <span className="not-found__code">404</span>
            <h1 className="not-found__title">Page Not Found</h1>
            <p className="not-found__text">Oops. This page fizzled out. Head back to Farmhouse Fizz to find our menu, events, and handcrafted dirty sodas.</p>
            <div className="not-found__actions">
              <Link to="/" className="btn btn--primary btn--medium">Back Home</Link>
              <Link to="/menu" className="btn btn--secondary btn--medium">See the Menu</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
