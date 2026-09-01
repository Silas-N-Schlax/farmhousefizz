import { Coffee } from "lucide-react"


export function SizeComponentCoffee({size, openTooltip, setOpenTooltip, id}) {
  const isOpen = openTooltip === id

  const handleClick = (e) => {
    e.stopPropagation()
    setOpenTooltip(isOpen ? null : id)
  }

  const msgs = {
    sm: "Small",
    md: "Medium",
    lg: "Large"
  }
  
  const sizeModifiers = { sm: 'size-list__item--small', md: 'size-list__item--medium', lg: 'size-list__item--large' }

  return (
    <span
      className={`size-list__item ${sizeModifiers[size] || ''} ${isOpen ? 'size-list__item--active' : ''}`}
      onClick={handleClick}
      id={id}
    >
      <Coffee className="size-list__icon"/>
      <strong className={`popover ${isOpen ? 'popover--open' : ''}`}>Available In {msgs[size]}</strong>
    </span>
  )
}