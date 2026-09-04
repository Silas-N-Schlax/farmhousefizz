import React from 'react'
import { Star } from 'lucide-react'
import { Building } from 'lucide-react'

export class Footer extends React.Component {
  render() {
    const height = 16; const width = 16;
    const computedStyles = window.getComputedStyle(document.documentElement)
    const color = computedStyles.getPropertyValue('--ff-brand-almond-cream').trim().split("#")[1]
    const currentYear = new Date().getFullYear();
    return (
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__col site-footer__col--brand">
            <a className="site-footer__logo" href="/">
              <span className="brand-lockup">
                <img className="brand-lockup__mark" src="/logo.png" alt="Farmhouse Fizz Logo" />
                <span className="brand-lockup__text">
                  <span className="brand-lockup__name">Farmhouse Fizz</span>
                  <span className="brand-lockup__tag">Soda Bar</span>
                </span>
              </span>
            </a>
            <p className="site-footer__tagline">Handcrafted dirty sodas, mobile across Central North Carolina.</p>
            <span className="social-links">
              <a className="social-links__link" aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/farmhousefizz/"><img alt="" height={height} width={width} src={ 'https://cdn.simpleicons.org/instagram/' + color } /></a>
              <a className="social-links__link" aria-label="Facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61584818212570"><img alt="" height={height} width={width} src={ 'https://cdn.simpleicons.org/facebook/' + color } /></a>
              <a className="social-links__link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/farmhouse-fizz-soda-bar/"><Building size={height} style={{color: "currentColor"}} /></a>
              <a className="social-links__link" aria-label="StreetFoodFinder" target="_blank" rel="noopener noreferrer" href="https://streetfoodfinder.com/farmhousefizz"><img alt="" height={height} width={width} src={ 'https://cdn.simpleicons.org/openstreetmap/' + color } /></a>
              <a className="social-links__link" aria-label="Google reviews" target="_blank" rel="noopener noreferrer" href="https://g.page/r/CShnusOMQkBTEAE/review"><Star size={height} style={{color: "currentColor"}} /></a>
            </span>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__col-title">Explore</span>
            <a className="site-footer__link" href="/menu">Menu</a>
            <a className="site-footer__link" href="/catering">Catering</a>
            <a className="site-footer__link" href="/fqa">FAQ</a>
            <a className="site-footer__link" href="/polls/soda-poll">Soda Poll</a>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__col-title">Get in Touch</span>
            <a className="site-footer__link" href="/about-us">About Us</a>
            <a className="site-footer__link" href="/contact-us">Contact Us</a>
            <a className="btn btn--primary btn--medium site-footer__cta" href="/contact-us">Book Your Event &rarr;</a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© 2025-{currentYear} Farmhouse Fizz Soda Bar. All rights reserved.</p>
          <span className="site-footer__links">
            <a className="site-footer__link" href="/privacy-policy">Privacy Policy</a> <span className="bullet bullet--light"></span>
            <a className="site-footer__link" href="/terms-and-conditions">Terms of Service</a> <span className="bullet bullet--light"></span>
            <a className="site-footer__link" href="/energy-drink-notice">Energy Drink Notice</a>
          </span>
        </div>
      </footer>
    )
  }
}
