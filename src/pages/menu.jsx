import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MenuCard } from '../components/menu-card'
import menuData from '../data/menu.json'

export class Menu extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Menu - Farmhouse Fizz</title>
          <meta name="description" content="Explore our menu of handcrafted dirty sodas, custom flavors, and classic favorites, made fresh and served from our mobile soda trailer." />
        </Helmet>
        <div className="page-hero">
          <h1 className='page-title'>Our Menu</h1>
          <p className="page-hero__text">Subject to change and limited availability.</p>
        </div>
        <div className="menu">
          <MenuCard data={menuData} showPrices={true} />
        </div>
      </>
    )
  }
}
