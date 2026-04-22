
import { Helmet } from 'react-helmet-async'
import { MenuCard } from '../components/menu-card'

export function Menu() {
  return (
    <>
      <Helmet>
        <title>Menu - Farmhouse Fizz</title>
        <meta name="description" content="Explore our menu of handcrafted dirty sodas, custom flavors, and classic favorites, made fresh and served from our mobile soda trailer." />
      </Helmet>
      <div className="menu-title">
        <h1>Our Menu</h1>
        <p>Subject to change and limited availability</p>
        <p><i>Drink images will be uploaded soon!</i></p>
      </div>
      <div className="menu">
        <MenuCard data={[
          {
            name: "Test drink #1",
            desc: "Sprite with blue raspberry and vanilla cream",
            lq_type: 0, // 0 = cold, 1 = hot
            sizes: ["sm", "rg", "lg"],
            notices: [1, 0, 1], // sugar-free, has dyes, etc...
            id: "0000", // used for images, and div id for now
            active: false
          },
          {
            name: "Ruby Riot",
            desc: "Mt. Dew • Raspberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0001",
            active: true
          },
          {
            name: "Solar Flare",
            desc: "Mt. Dew • Candied Orange • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0002",
            active: true
          },
          {
            name: "Electric Charm",
            desc: "Sprite • Cherry • Lime • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, ], 
            id: "0003",
            active: false
          },
          {
            name: "Coconut Tide",
            desc: "Sprite • Blue Raspberry • Coconut Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 0, 5], 
            id: "0004",
            active: true
          },
          {
            name: "Creamy Root",
            desc: "Root Beer • Vanilla • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0005",
            active: true
          },
          {
            name: "Blissful Butterbeer",
            desc: "Root Beer • Butterscotch • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0006",
            active: true
          },
          {
            name: "Caramel S'mores",
            desc: "Root Beer • Marshmallow • Caramel • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0007",
            active: true
          },
          {
            name: "Dr. C. Cherry",
            desc: "Dr. Pepper • Cherry • Choc. Syrup • Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0008",
            active: true
          },
          {
            name: "Dr. Fizzberry",
            desc: "Dr. Pepper • Strawberry • Blackberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0009",
            active: true
          },
          {
            name: "Cherry Island Punch",
            desc: "Pepsi/Coke/Sprite  • Cherry • Lime • Coconut Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0010",
            active: true
          },
          {
            name: "Razzle Cola",
            desc: "Pepsi/Coke • Blue Raspberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 0, 5], 
            id: "0011",
            active: true
          },
          {
            name: "Berry Truffle",
            desc: "Cheerwine • Strawberry • Choc. Syrup • Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 5], 
            id: "0012",
            active: true
          },
          {
            name: "Peach Paradise",
            desc: "Sparkling Water • Peach • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0013",
            active: true
          },
          {
            name: "Strawberry Bliss",
            desc: "Sparkling Water • Strawberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0014",
            active: true
          },
          {
            name: "Midnight Bloom",
            desc: "Sparkling Water • Black Raspberry • Blackberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0015",
            active: true
          },
          {
            name: "Sunrise Brew",
            desc: "Cold Brew Coffee • Lemonade • Coconut Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0016",
            active: true
          },
          {
            name: "Berry Bean",
            desc: "Cold Brew Coffee • Strawberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0017",
            active: true
          },
          {
            name: "Winter Sunset",
            desc: "Lemonade • Winter Citrus • Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0018",
            active: true
          },
          {
            name: "Sunburst",
            desc: "Lemonade • Yuzu Pineapple Citrus • Cream",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "0019",
            active: true
          },
          {
            name: "Almost Float",
            desc: "Root Beer/Dr. Pepper/Pepsi/Coke • Vanilla • Sweetened Condensed Milk",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [5], 
            id: "0020",
            active: false
          },
          {
            name: "Classic Hot Chocolate",
            desc: "Whole Milk Hot Chocolate • Whipped Cream • 1 Topping (Rotating selection)",
            lq_type: 1,
            sizes: ["sm", "lg"],
            notices: [7], 
            id: "0021",
            active: false
          },
          {
            name: "Your Way Cocoa",
            desc: "Whole Milk Hot Chocolate • Whipped Cream • 1 Topping (Rotating selection) • 3-4 pumps of syrup",
            lq_type: 1,
            sizes: ["sm", "lg"],
            notices: [7], 
            id: "0022",
            active: false
          },
          {
            name: "Peach Panic",
            desc: "Orange Horror Liquid Death/Orange Celsius/Orange Kiss Alani • Preach • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg"],
            notices: [1, 8], 
            id: "0023",
            active: true
          },
          {
            name: "Berry Meltdown",
            desc: "Scary Strawberry Liquid Death/Murder Mystery Liquid Death/Pink Slush Alani • Strawberry • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg"],
            notices: [1, 8], 
            id: "0024",
            active: true
          },
          {
            name: "Citrus Overload",
            desc: "Tropical Terror Liquid Death/Sparkling Tropical Vibe Celsius • Yuzu Pineapple Citrus • Vanilla Cream",
            lq_type: 0,
            sizes: ["rg"],
            notices: [1, 8], 
            id: "0025",
            active: true
          },
          {
            name: "",
            desc: "",
            lq_type: 0,
            sizes: ["rg", "lg"],
            notices: [1, 2], 
            id: "00",
            active: false // Template DO NOT DELETE, just hide.
          }
          
        ]} />
      </div>
    </>
  )
}