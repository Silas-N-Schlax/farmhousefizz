
export function CardHalf({ height, content}) {
  return (
    <div className="card-half" style={{height: height}}>
      <div className="left card-half-part">
        <h2>{content.left.title}</h2>
        <p>{content.left.text}</p>
      </div>
      <div className="right card-half-part">
        <h2>{content.right.title}</h2>
        <p>{content.right.text}</p>
      </div>
    </div>
  )
}