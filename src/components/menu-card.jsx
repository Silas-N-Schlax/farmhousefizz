import React from 'react'
import { ItemCard } from './item-card'

export class MenuCard extends React.Component {
  get showPrices() { return this.props.showPrices === true }
  get itemOverrides() { return this.props.itemOverrides || [] }

  get groupedItems() {
    const groupedItems = {}
    this.props.data.forEach((item) => {
      const overridden = this.itemOverrides.includes(item.id)
      if (!item.active && !overridden) return;

      const category = item.category || "Other"

      if (!groupedItems[category]) {
        groupedItems[category] = []
      }
      groupedItems[category].push(item)
    })
    return groupedItems
  }

  render() {
    const categories = Object.entries(this.groupedItems)

    return (
      <>
        <div>
          {categories.map(([category, items]) => {
            const slug = categorySlug(category)
            return (
              <div className="menu-category" id={slug} key={slug}>
                <h2 className="menu-category__tag" id={`${slug}-tag`}>{formatCategory(category)}</h2>
                <div className="menu__grid" aria-labelledby={`${slug}-tag`}>
                  {items.map((item) => (
                    <ItemCard
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
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export function categorySlug(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function formatCategory(category) {
  if (!category) return "Error: Category Empty"
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
