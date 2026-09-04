import React from "react"

const LABELS = { sm: "Small", rg: "Regular" }

export class SizeComponentSoda extends React.Component {
  render() {
    const { size, largeUpCharge } = this.props
    const label = size === 'lg' ? `Large +${largeUpCharge}` : LABELS[size]

    return (
      <span className="size-list__item">
        {label}
      </span>
    )
  }
}
