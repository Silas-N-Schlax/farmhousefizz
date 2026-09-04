import React from "react"

const LABELS = { sm: "Small", rg: "Regular", md: "Medium" }

export class SizeComponent extends React.Component {
  render() {
    const { size, largeUpCharge, showPrice } = this.props
    const label = size === 'lg' ? `Large${showPrice ? ` +${largeUpCharge}` : ''}` : LABELS[size]

    return (
      <span className="size-list__item">
        {label}
      </span>
    )
  }
}
