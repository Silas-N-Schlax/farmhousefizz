import React from 'react'
import { Notices } from './notices'
import { SizeComponent } from "./size-component"
import { resolvePrices } from '../utils/price'

export class ItemCard extends React.Component {
  state = { imageFailed: false }

  handleImageError = () => {
    this.setState({ imageFailed: true })
  }

  render() {
    const { name, desc, sizes, notices, id, price, largeUpCharge, showPrice, surcharge } = this.props
    const { base, large } = resolvePrices(price, largeUpCharge, surcharge)

    return (
      <div id={id} className="menu-item">
        {this.state.imageFailed ? (
          <div className="menu-item__image menu-item__image--placeholder" aria-hidden="true">
            {name.charAt(0)}
          </div>
        ) : (
          <img
            className="menu-item__image"
            src={"/menu/" + id + ".webp"}
            alt=""
            width="240"
            height="240"
            loading="lazy"
            decoding="async"
            onError={this.handleImageError}
          />
        )}
        <div className="menu-item__body">
          <div className="menu-item__header">
            <h3 className="menu-item__title">{name}</h3>
            {showPrice && <span className="menu-item__price">{base}</span>}
          </div>
          <p className="menu-item__description">{desc}</p>
          <div className="menu-item__meta">
            <span className="size-list">
              {sizes.map((sz, ix) => (
                <SizeComponent size={sz} price={sz === 'lg' ? large : base} showPrice={showPrice} key={ix} />
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
