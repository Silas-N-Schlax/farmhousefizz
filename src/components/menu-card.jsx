import React from 'react'
import { ItemCard } from './item-card'

export class MenuCard extends React.Component {
  get showPrices() { return this.props.showPrices === true }
  get itemOverrides() { return this.props.itemOverrides || [] }

  get groupedItems() {
    const groupedItems = []
    this.props.data.forEach((item) => {
      const overridden = this.itemOverrides.includes(item.name)
      if (!item.active && !overridden) return;

      const category = item.category || "Other";

      if (!groupedItems[category]) {
        groupedItems[category] = [];
      }
      groupedItems[category].push(item);
    })
    return groupedItems
  }

  render() {
    return (
      <>
        <div>
          {Object.entries(this.groupedItems).map((group, index) => {
            return (
              <div className="menu-category" key={index}>
                <h2 className="menu-category__tag">{formatCategory(group[0])}</h2>
                <div className="menu__grid">
                  {group[1].map((item, index) => {
                    return <ItemCard
                      name={item.name}
                      desc={item.desc}
                      sizes={item.sizes}
                      notices={item.notices}
                      price={item.price}
                      largeUpCharge={item.largeUpCharge}
                      showPrice={this.showPrices}
                      id={item.id}
                      key={item.id}
                    />
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

function formatCategory(category) {
  if (!category) return "Error: Category Empty"
  category = category.split("-")
  category.map((word, index) => { category[index] = word.charAt(0).toUpperCase() + word.slice(1) })
  return category.join(" ")
}
