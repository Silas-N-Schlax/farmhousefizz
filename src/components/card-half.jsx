import React from 'react'

export class CardHalf extends React.Component {
  render() {
    const { height, content } = this.props
    return (
      <div className="split-panel" style={{minHeight: height}}>
        <div className="split-panel__side split-panel__side--primary">
          <h3 className="split-panel__title">{content.left.title}</h3>
          <p className="split-panel__text">{content.left.text}</p>
        </div>
        <div className="split-panel__side split-panel__side--secondary">
          <h3 className="split-panel__title">{content.right.title}</h3>
          <p className="split-panel__text">{content.right.text}</p>
        </div>
      </div>
    )
  }
}
