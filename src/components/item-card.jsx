import React from 'react'
import { Coffee, LucideDice1 } from "lucide-react"
import { Notices } from './notices'
import { SizeComponentSoda } from "./size-component-soda"
import { SizeComponentCoffee } from "./size-component-coffee"

export class ItemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { openTooltip: null }
    this.closeAll = this.closeAll.bind(this)
    this.setOpenTooltip = this.setOpenTooltip.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.closeAll)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeAll)
  }

  closeAll() {
    this.setState({ openTooltip: null })
  }

  setOpenTooltip(value) {
    this.setState({ openTooltip: value })
  }

  render() {
    const { name, desc, lq_type, sizes, notices, id } = this.props
    const { openTooltip } = this.state

    return (
      <div id={id} className="menu-item">
        <img className="menu-item__image" src={"/menu/" + id + ".jpg" } alt={"picture of " + name} />
        <div className="menu-item__body">
          <h2 className="menu-item__title">{name}</h2>
          <p className="menu-item__description">{desc}</p>
          <span className="size-list">
            {sizes.map((sz, ix) => {
              if (lq_type === 0) {
                return <SizeComponentSoda
                  size={sz}
                  openTooltip={openTooltip}
                  setOpenTooltip={this.setOpenTooltip}
                  id={ix}
                  key={ix}
                />
              } else {
                return <SizeComponentCoffee
                  size={sz}
                  openTooltip={openTooltip}
                  setOpenTooltip={this.setOpenTooltip}
                  id={ix}
                  key={ix}
                />
              }
            })}
          </span>
          <div className="notice-list">
           {notices.map((not, ix) => {
            if (not === null) {
              return
            } else {
              return <Notices
                notice={not}
                openTooltip={openTooltip}
                setOpenTooltip={this.setOpenTooltip}
                id={`${ix}.notice`}
                key={ix}
              />
            }
           })}
          </div>
        </div>
      </div>
    )
  }
}
