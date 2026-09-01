import { Coffee, LucideDice1 } from "lucide-react"
import { Notices } from './notices'
import { SizeComponentSoda } from "./size-component-soda"
import { SizeComponentCoffee } from "./size-component-coffee"
import { useState, useEffect} from 'react'

export function ItemCard({name, desc, lq_type, sizes, notices, id}) {
  const [openTooltip, setOpenTooltip] = useState(null)

  useEffect(() => {
    const closeAll = () => setOpenTooltip(null)
    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, [])

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
                setOpenTooltip={setOpenTooltip}
                id={ix}
                key={ix}
              />
            } else {
              return <SizeComponentCoffee
                size={sz}
                openTooltip={openTooltip}
                setOpenTooltip={setOpenTooltip}
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
              setOpenTooltip={setOpenTooltip}
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
