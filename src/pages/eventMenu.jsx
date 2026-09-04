import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MenuCard } from '../components/menu-card'
import menuData from '../data/menu.json'

export class EventMenu extends React.Component {
  render() {
    const { title, note, itemOverrides } = this.props
    return (
      <>
        <Helmet>
          <title>{title} - Farmhouse Fizz</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="page-hero">
          <h1 className='page-title'>{title}</h1>
          <p className="page-hero__text">{note}</p>
        </div>
        <div className="menu">
          <MenuCard data={menuData} showPrices={true} itemOverrides={itemOverrides} />
        </div>
      </>
    )
  }
}
