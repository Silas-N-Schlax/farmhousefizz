
import { Helmet } from 'react-helmet-async'
import { MenuCard } from '../components/menu-card'
import menuData from '../data/menu.json'

export function Menu() {
  return (
    <>
      <Helmet>
        <title>Menu - Farmhouse Fizz</title>
        <meta name="description" content="Explore our menu of handcrafted dirty sodas, custom flavors, and classic favorites, made fresh and served from our mobile soda trailer." />
      </Helmet>
      <div className="menu-title">
        <h1 className='page-title'>Catering with Farmhouse Fizz</h1>
        <p>Subject to change and limited availability</p>
      </div>
      <div className="menu">
        <MenuCard data={menuData} />
      </div>
    </>
  )
}
