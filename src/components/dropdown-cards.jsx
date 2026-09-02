
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function DropdownCards({data, index}) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div
        className="faq__item"
        id={index}
      >
        <button
          className={`faq__question ${open ? 'faq__question--open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle faq"
          onClick={() => setOpen(!open)}
        >
          {data.question}
          <ArrowUp className='faq__marker' />
        </button>
        <div className={`faq__answer ${open ? 'faq__answer--open' : ''}`}>
          {data.answer.map((item, index) => (
            <p id={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  )
}