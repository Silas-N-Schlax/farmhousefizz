import React from "react"
import { CupSoda } from "lucide-react"


export class SizeComponentSoda extends React.Component {
  get isOpen() { return this.props.openTooltip === this.props.id }

  handleClick(e) {
    e.stopPropagation()
    this.props.setOpenTooltip(this.isOpen ? null : this.props.id)
  }

  render() {
    const { size, id } = this.props

    const msgs = {
      sm: "Small",
      rg: "Regular",
      lg: "Large"
    }

    const sizeModifiers = { sm: 'size-list__item--small', lg: 'size-list__item--large' }

    return (
      <span
        className={`size-list__item ${sizeModifiers[size] || ''} ${this.isOpen ? 'size-list__item--active' : ''}`}
        onClick={this.handleClick.bind(this)}
        id={id}
      >
        <CupSoda className="size-list__icon"/>
        <strong className={`popover ${this.isOpen ? 'popover--open' : ''}`}>Available In {msgs[size]}</strong>
      </span>
    )
  }
}
