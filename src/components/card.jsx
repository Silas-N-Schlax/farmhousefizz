

export function Card({ key, title, desc, height, link, linkText, linkUrl, darker }) {
  if (link === true) {
    return (
      <div 
        classId={key} 
        className={darker ? "card link darker" : "card link"} 
        style={{height: height}} 
      >
        <h2>{title}</h2>
        <p>{desc}</p>
        <div><a href={linkUrl}>{linkText}</a></div>
      </div>
    )
  } else {
    return (
      <div 
        classId={key} 
        className={darker ? "card darker" : "card"} 
        style={{height: height}} 
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    )
  }
}