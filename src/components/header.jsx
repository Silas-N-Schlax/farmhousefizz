import React from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.onKey = this.onKey.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKey)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKey)
  }

  onKey(e) {
    if (e.key === 'Escape') this.setState({ open: false })
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  handleLinkClick() {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <header className="site-header">
        <a className="site-header__skip-link" href="#main-content">Skip to content</a>
        <div className="navbar navbar--secondary site-header__inner">
          <a className="site-header__logo" href="/">
            <span className="brand-lockup">
              <img className="brand-lockup__mark" src="/logo.png" alt="Farmhouse Fizz Logo" />
              <span className="brand-lockup__text">
                <span className="brand-lockup__name">Farmhouse Fizz</span>
                <span className="brand-lockup__tag">Soda Bar</span>
              </span>
            </span>
          </a>

          <button
            className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={this.toggleOpen.bind(this)}
          >
            <span className="nav-toggle__bar"></span>
            <span className="nav-toggle__bar"></span>
            <span className="nav-toggle__bar"></span>
          </button>

          <nav className={`site-nav ${open ? 'site-nav--open' : ''}`}>
            <NavLink end to="/" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>Home</NavLink>
            <NavLink to="/catering" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>Catering</NavLink>
            <NavLink to="/menu" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>Menu</NavLink>
            <NavLink to="/fqa" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>FAQ</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>Contact Us</NavLink>
            <NavLink to="/about-us" className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`} onClick={this.handleLinkClick.bind(this)}>About Us</NavLink>
            <NavLink to="/contact-us" className="btn btn--primary btn--small site-nav__cta" onClick={this.handleLinkClick.bind(this)}>Book Us</NavLink>
          </nav>
        </div>
      </header>
    )
  }
}
