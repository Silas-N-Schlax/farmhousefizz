
import { Helmet } from 'react-helmet-async'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <div className="notFound-card-container">
        <div className="notFound-card">
          <h1>404: Page Not Found</h1>
          <p>Oops. This page fizzled out. Head back to Farmhouse Fizz to find our menu, events, and handcrafted dirty sodas.</p>
          <a style={{textDecoration: "none", color: "var(--molten-lava)"}} href="/">Home</a>
        </div>
      </div>
    </>
  )
}