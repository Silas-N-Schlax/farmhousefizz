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
  
  return (
    <span 
      className={`size-icon ${size} ${isOpen ? 'active' : ''}`} 
      onClick={handleClick}
      id={id}
    >
      <Coffee className="icon"/>
      <strong className={`size-icon-pop ${isOpen ? 'active' : ''}`}>Available In {msgs[size]}</strong>
    </span>
  )
}