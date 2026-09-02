import React from 'react'
import { Star } from 'lucide-react'
import { Building } from 'lucide-react'

export class Footer extends React.Component {
  render() {
    const height = 32; const width = 32;
    const computedStyles = window.getComputedStyle(document.documentElement)
    const color = computedStyles.getPropertyValue('--ff-brand-carbon-black').trim().split("#")[1]
    const currentYear = new Date().getFullYear();
    return (
      <footer className="site-footer">
        <span className="site-footer__links">
          <a className="site-footer__link" href="/menu">Menu</a> <span className="bullet bullet--light"></span>
          <a className="site-footer__link" href="/privacy-policy">Privacy Policy</a> <span className="bullet bullet--light"></span>
          <a className="site-footer__link" href="/terms-and-conditions">Terms of Service</a> <span className="bullet bullet--light"></span>
          <a className="site-footer__link" href="/fqa">FAQ</a> <span className="bullet bullet--light"></span>
          <a className="site-footer__link" href="/polls/soda-poll">Soda Poll</a> <span className="bullet bullet--light"></span>
          <a className="site-footer__link" href="/energy-drink-notice">Energy Drink Notice</a>
        </span>
        <span className="social-links">
          <a className="social-links__link" target={"_blank"} href="https://www.instagram.com/farmhousefizz/"><img alt="Instagram link" height={height} width={width} src={ 'https://cdn.simpleicons.org/instagram/' + color } /></a>
          <a className="social-links__link" target={"_blank"} href="https://www.facebook.com/profile.php?id=61584818212570"><img alt="Facebook link" height={height} width={width} src={ 'https://cdn.simpleicons.org/facebook/' + color } /></a>
          <a className="social-links__link" target={"_blank"} href="https://www.linkedin.com/company/farmhouse-fizz-soda-bar/"><Building style={{color: "var(--ff-brand-carbon-black)"}} /></a>
          <a className="social-links__link" target={"_blank"} href="https://streetfoodfinder.com/farmhousefizz"><img alt="StreetFoodFinder link" height={height} width={width} src={ 'https://cdn.simpleicons.org/openstreetmap/' + color } /></a>
          <a className="social-links__link" target={"_blank"} href="https://g.page/r/CShnusOMQkBTEAE/review"><Star style={{color: "var(--ff-brand-carbon-black)"}} /></a>
        </span>

        <p className="site-footer__copyright">© 2025-{currentYear} Farmhouse Fizz Soda Bar. All rights reserved.</p>
      </footer>
    )
  }
}
