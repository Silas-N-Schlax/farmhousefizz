import React from "react"

const LABELS = { sm: "Small", rg: "Regular", md: "Medium", lg: "Large" }

export class SizeComponent extends React.Component {
  render() {
    const { size, price, showPrice } = this.props

    return (
      <span className="size-list__item">
        {LABELS[size] || size}
        {showPrice && <span className="size-list__item-price">{price}</span>}
      </span>
    )
  }
}
