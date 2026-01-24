
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function DropdownCards({data, index}) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div 
        className="fqa-card"
        id={index}
      >
        <button
          className={`fqa-que ${open ? 'active' : ''}`}
          aria-expanded={open}
          aria-label="Toggle fqa"
          onClick={() => setOpen(!open)}
        >
          {data.question}
          <ArrowUp className='arrow' />
        </button>
        <div className={`fqa-ans ${open ? 'active' : ''}`}>
          {data.answer.map((item, index) => (
            <p id={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  )
}