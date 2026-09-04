import React from 'react'

export class Card extends React.Component {
  render() {
    const { key, title, desc, height, link, linkText, linkUrl, darker } = this.props
    if (link === true) {
      return (
        <div
          classId={key}
          className={darker ? "card card--padded card--shadow-large card--link card--muted" : "card card--padded card--shadow-large card--link"}
          style={{minHeight: height}}
        >
          <h2 className="card__title">{title}</h2>
          <p className="card__body">{desc}</p>
          <div><a className="card__link" href={linkUrl}>{linkText}</a></div>
        </div>
      )
    } else {
      return (
        <div
          classId={key}
          className={darker ? "card card--padded card--shadow-large card--muted" : "card card--padded card--shadow-large"}
          style={{minHeight: height}}
        >
          <h2 className="card__title">{title}</h2>
          <p className="card__body">{desc}</p>
        </div>
      )
    }
  }
}
