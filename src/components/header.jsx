

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
    <header className="site-header">
      <div className="navbar navbar--secondary site-header__inner">
        <a className="site-header__logo" href="/"><img src="/logo.png" alt="Farmhouse Fizz Logo" /></a>

        <button
          className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle__bar"></span>
          <span className="nav-toggle__bar"></span>
          <span className="nav-toggle__bar"></span>
        </button>

        <nav className={`site-nav ${open ? 'site-nav--open' : ''}`}>
          <a href="/contact-us" className="site-nav__link" onClick={handleLinkClick}>Contact Us</a>
          <a href="/about-us" className="site-nav__link" onClick={handleLinkClick}>About Us</a>
          <a href="/catering" className="site-nav__link" onClick={handleLinkClick}>Catering</a>
          <a href="/menu" className="site-nav__link" onClick={handleLinkClick}>Menu</a>
          <a href="/fqa" className="site-nav__link" onClick={handleLinkClick}>FAQ</a>
        </nav>
      </div>
    </header>
  )
}