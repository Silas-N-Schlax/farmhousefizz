

import React, { useState, useEffect } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header>
      <div className="head">
        <a className="logo" href="/"><img src="/src/assets/images/logo.png" alt="Farmhouse Fizz Logo" /></a>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${open ? 'open' : ''}`}>
          <a href="/contact-us" className="lk" onClick={handleLinkClick}>Contact Us</a>
          <a href="/about-us" className="lk" onClick={handleLinkClick}>About Us</a>
          <a href="/menu" className="lk" onClick={handleLinkClick}>Menu</a>
          <a href="/questions-and-answers" className="lk" onClick={handleLinkClick}>FAQ</a>
        </nav>
      </div>
    </header>
  )
}