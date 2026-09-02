import React from 'react'
import { CandyOff } from "lucide-react"
import { MilkOff } from "lucide-react"
import { Leaf } from "lucide-react"
import { Vegan } from "lucide-react"
import { WheatOff } from "lucide-react"
import { FlaskConical } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { Flower2 } from "lucide-react"
import { IdCardLanyard } from "lucide-react"
import { Sprout } from "lucide-react"

export class Notices extends React.Component {
  get isOpen() { return this.props.openTooltip === this.props.id }

  handleClick(e) {
    e.stopPropagation()
    this.props.setOpenTooltip(this.isOpen ? null : this.props.id)
  }

  render() {
    const { notice, id } = this.props

    const msgs = {
      0: "Can be made with sugar-free substitutes on request",
      1: "Can be made with dairy-free alternative on request",
      2: "Clean! Only natural sweeteners, dyes, and flavors!",
      3: "Vegan",
      4: "Gluten Free",
      5: "Contains Artificial Dyes",
      6: "Halal",
      7: "Seasonal Item!",
      8: "18+ or parental consent",
      9: "No Cream"
    }

    return (
      <span
        className={`notice-list__item ${this.isOpen ? 'notice-list__item--active' : ''}`}
        onClick={this.handleClick.bind(this)}
        id={id}
      >
        {getIcon(notice)}
        <strong className={`popover ${this.isOpen ? 'popover--open' : ''}`}>{msgs[notice] ? msgs[notice] : 'error...'}</strong>
      </span>
    )
  }
}

function getIcon(notice) {
  switch(notice) {
    case 0:
      return <CandyOff className="notice-list__icon sg-off"/>
    case 1:
      return <Sprout className="notice-list__icon mk-off"/>
    case 2:
      return <Leaf className="notice-list__icon clean"/>
    case 3:
      return <Vegan className="notice-list__icon vg"/>
    case 4:
      return <WheatOff className="notice-list__icon gf"/>
    case 5:
      return <FlaskConical className="notice-list__icon has-dye"/>
    case 6:
      return <ShieldCheck className="notice-list__icon halal"/>
    case 7:
      return <Flower2 className="notice-list__icon season"/>
    case 8:
      return <IdCardLanyard className="notice-list__icon id-card" />
    case 9:
      return <MilkOff className="notice-list__icon id-card"/>
    default:
  }
}

// 0 = sugar-free option
// 1 = dairy-free option
// 2 = clean (no art dyes, sweeteners, etc...)
// 3 = vegan
// 4 = gluten free
// 5 = has dyes
// 6 = halal
// 7 = seasonal drink
