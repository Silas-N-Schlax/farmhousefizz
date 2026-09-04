import React from 'react'

const LABELS = {
  0: "Sugar-Free Option",
  1: "Dairy-Free Option",
  2: "Clean",
  3: "Vegan",
  4: "Gluten-Free",
  5: "Contains Dyes",
  6: "Halal",
  7: "Seasonal",
  8: "18+",
  9: "No Cream"
}

export class Notices extends React.Component {
  render() {
    const { notice } = this.props

    return (
      <span className="notice-list__item">
        {LABELS[notice] || '?'}
      </span>
    )
  }
}
