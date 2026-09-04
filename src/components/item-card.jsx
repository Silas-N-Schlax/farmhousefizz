import React from 'react'
import { Notices } from './notices'
import { SizeComponent } from "./size-component"

const DEFAULT_PRICE = "$7.50"
const DEFAULT_LARGE_UP_CHARGE = "$1.00"

export class ItemCard extends React.Component {
  render() {
    const { name, desc, sizes, notices, id, price, largeUpCharge, showPrice } = this.props
    const displayPrice = price || DEFAULT_PRICE
    const displayLargeUpCharge = largeUpCharge || DEFAULT_LARGE_UP_CHARGE

    return (
      <div id={id} className="menu-item">
        <img className="menu-item__image" src={"/menu/" + id + ".jpg" } alt={"picture of " + name} />
        <div className="menu-item__body">
          <div className="menu-item__header">
            <h3 className="menu-item__title">{name}</h3>
            {showPrice && <span className="menu-item__price">{displayPrice}</span>}
          </div>
          <p className="menu-item__description">{desc}</p>
          <div className="menu-item__meta">
            <span className="size-list">
              {sizes.map((sz, ix) => (
                <SizeComponent size={sz} largeUpCharge={displayLargeUpCharge} showPrice={showPrice} key={ix} />
              ))}
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
