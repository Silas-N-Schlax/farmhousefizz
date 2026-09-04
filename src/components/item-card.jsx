import React from 'react'
import { Notices } from './notices'
import { SizeComponentSoda } from "./size-component-soda"
import { SizeComponentCoffee } from "./size-component-coffee"

const DEFAULT_PRICE = "$7.50"
const DEFAULT_LARGE_UP_CHARGE = "$1.00"

export class ItemCard extends React.Component {
  render() {
    const { name, desc, lq_type, sizes, notices, id, price, largeUpCharge } = this.props
    const displayPrice = price || DEFAULT_PRICE
    const displayLargeUpCharge = largeUpCharge || DEFAULT_LARGE_UP_CHARGE

    return (
      <div id={id} className="menu-item">
        <img className="menu-item__image" src={"/menu/" + id + ".jpg" } alt={"picture of " + name} />
        <div className="menu-item__body">
          <div className="menu-item__header">
            <h3 className="menu-item__title">{name}</h3>
            <span className="menu-item__price">{displayPrice}</span>
          </div>
          <p className="menu-item__description">{desc}</p>
          <div className="menu-item__meta">
            <span className="size-list">
              {sizes.map((sz, ix) => {
                if (lq_type === 0) {
                  return <SizeComponentSoda size={sz} largeUpCharge={displayLargeUpCharge} key={ix} />
                } else {
                  return <SizeComponentCoffee size={sz} largeUpCharge={displayLargeUpCharge} key={ix} />
                }
              })}
            </span>
            <div className="notice-list">
             {notices.map((not, ix) => {
              if (not === null) {
                return
              } else {
                return <Notices notice={not} key={ix} />
              }
             })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
