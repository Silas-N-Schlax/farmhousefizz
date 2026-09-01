import { CupSoda } from "lucide-react"


export function SizeComponentSoda({size, openTooltip, setOpenTooltip, id}) {
  const isOpen = openTooltip === id;

  const handleClick = (e) => {
    e.stopPropagation()
    setOpenTooltip(isOpen ? null : id)
  }

  const msgs = {
    sm: "Small",
    rg: "Regular",
    lg: "Large"
  }

  const sizeModifiers = { sm: 'size-list__item--small', lg: 'size-list__item--large' }

  return (
    <span
      className={`size-list__item ${sizeModifiers[size] || ''} ${isOpen ? 'size-list__item--active' : ''}`}
      onClick={handleClick}
      id={id}
    >
      <CupSoda className="size-list__icon"/>
      <strong className={`popover ${isOpen ? 'popover--open' : ''}`}>Available In {msgs[size]}</strong>
    </span>
  )
}