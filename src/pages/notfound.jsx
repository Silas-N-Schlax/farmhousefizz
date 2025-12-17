
import { Helmet } from 'react-helmet-async'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <h1>404 - Page Not Found</h1>
    </>
  )
}