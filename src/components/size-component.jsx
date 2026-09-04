import React from "react"

const LABELS = { sm: "Small", rg: "Regular", md: "Medium" }

export class SizeComponent extends React.Component {
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
