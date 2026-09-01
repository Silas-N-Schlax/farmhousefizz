
export function CardHalf({ height, content}) {
  return (
    <div className="split-panel" style={{minHeight: height}}>
      <div className="split-panel__side split-panel__side--primary">
        <h2>{content.left.title}</h2>
        <p>{content.left.text}</p>
      </div>
      <div className="split-panel__side split-panel__side--secondary">
        <h2>{content.right.title}</h2>
        <p>{content.right.text}</p>
      </div>
    </div>
  )
}