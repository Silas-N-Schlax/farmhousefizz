
import { Helmet } from 'react-helmet-async'

export function SodaPoll() {
  return (
    <>
      <Helmet>
        <title>Soda Poll - Farmhouse Fizz</title>
        <meta name="description" content="View our menu at Farmhouse Fizz." />
      </Helmet>
      <div className="google-form">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScThzWyGxWcOiXeR-cwvaDxOL3L5--JaY5LjoK0c8hvIGHVAg/viewform?embedded=true" width="640" height="1403" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </>
  )
}