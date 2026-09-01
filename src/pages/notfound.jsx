
import { Helmet } from 'react-helmet-async'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <div className="not-found">
        <div className="not-found__card">
          <h1>404: Page Not Found</h1>
          <p>Oops. This page fizzled out. Head back to Farmhouse Fizz to find our menu, events, and handcrafted dirty sodas.</p>
          <a style={{textDecoration: "none", color: "var(--op-color-primary-base)"}} href="/">Home</a>
        </div>
      </div>
    </>
  )
}