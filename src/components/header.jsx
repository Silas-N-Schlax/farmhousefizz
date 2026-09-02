import React from 'react'

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
        <div className="navbar navbar--secondary site-header__inner">
          <a className="site-header__logo" href="/"><img src="/logo.png" alt="Farmhouse Fizz Logo" /></a>

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
            <a href="/contact-us" className="site-nav__link" onClick={this.handleLinkClick.bind(this)}>Contact Us</a>
            <a href="/about-us" className="site-nav__link" onClick={this.handleLinkClick.bind(this)}>About Us</a>
            <a href="/catering" className="site-nav__link" onClick={this.handleLinkClick.bind(this)}>Catering</a>
            <a href="/menu" className="site-nav__link" onClick={this.handleLinkClick.bind(this)}>Menu</a>
            <a href="/fqa" className="site-nav__link" onClick={this.handleLinkClick.bind(this)}>FAQ</a>
          </nav>
        </div>
      </header>
    )
  }
}
