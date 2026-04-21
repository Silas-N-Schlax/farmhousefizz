import { CandyOff } from "lucide-react"
import { MilkOff } from "lucide-react"
import { Leaf } from "lucide-react"
import { Vegan } from "lucide-react"
import { WheatOff } from "lucide-react"
import { FlaskConical } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { Flower2 } from "lucide-react"
import { IdCardLanyard } from "lucide-react"

export function Notices({notice, openTooltip, setOpenTooltip, id}) {
  const isOpen = openTooltip === id

  const handleClick = (e) => {
    e.stopPropagation()
    setOpenTooltip(isOpen ? null : id)
  }

  const msgs = {
    0: "Can be made with sugar-free substitutes on request",
    1: "Can be made with dairy-free alternative on request",
    2: "Clean! Only natural sweeteners, dyes, and flavors!",
    3: "Vegan",
    4: "Gluten Free",
    5: "Contains Artificial Dyes",
    6: "Halal",
    7: "Seasonal Item!",
    8: "18+ or parental consent"
  }

  return (
    <span
      className={`notice-icon ${isOpen ? 'active' : ''}`}
      onClick={handleClick}
      id={id}
    >
      {getIcon(notice)}
      <strong className={`notice-icon-pop ${isOpen ? 'active' : ''}`}>{msgs[notice] ? msgs[notice] : 'error...'}</strong>
    </span>
  )
}

function getIcon(notice) {
  switch(notice) {
    case 0:
      return <CandyOff className="notice sg-off"/>
    case 1:
      return <MilkOff className="notice mk-off"/>
    case 2:
      return <Leaf className="notice clean"/>
    case 3:
      return <Vegan className="notice vg"/>
    case 4:
      return <WheatOff className="notice gf"/>
    case 5:
      return <FlaskConical className="notice has-dye"/>
    case 6:
      return <ShieldCheck className="notice halal"/>
    case 7:
      return <Flower2 className="notice season"/>
    case 8:
      return <IdCardLanyard className="notice id-card"/>
    default:
  }
}

// 0 = sugar-free option
// 1 = dairy-free option
// 2 = clean (no art dyes, sweeteners, etc...)
// 3 = vegan
// 4 = gluten free
// 5 = has dyes
// 6 = halal
// 7 = seasonal drink