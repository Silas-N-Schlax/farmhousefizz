
import { Star } from 'lucide-react'
import { Building} from 'lucide-react'

export function Footer () {
  const height = 32; const width = 32; 
  const computedStyles = window.getComputedStyle(document.documentElement)
  const color = computedStyles.getPropertyValue('--gb-text-alt-color').trim().split("#")[1]
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <span className="footer-links">
        <a href="/menu">Menu</a> <span className="cr-sm cr-li"></span>
        <a href="/privacy-policy">Privacy Policy</a> <span className="cr-sm cr-li"></span>
        <a href="/terms-and-conditions">Terms of Service</a> <span className="cr-sm cr-li"></span>
        <a href="/questions-and-answers">FAQ</a> <span className="cr-sm cr-li"></span>
        <a href="/polls/soda-poll">Soda Poll</a> <span className="cr-sm cr-li"></span>
        <a href="/energy-drink-notice">Energy Drink Notice</a>
      </span>
      <span className="socials">
        <a target={"_blank"} href="https://www.instagram.com/farmhousefizz/"><img alt="Instagram link" height={height} width={width} src={ 'https://cdn.simpleicons.org/instagram/' + color } /></a>
        <a target={"_blank"} href="https://www.facebook.com/profile.php?id=61584818212570"><img alt="Facebook link" height={height} width={width} src={ 'https://cdn.simpleicons.org/facebook/' + color } /></a>
        <a target={"_blank"} href="https://www.linkedin.com/company/farmhouse-fizz-soda-bar/"><Building style={{color: "var(--almond-cream)"}} /></a>
        <a target={"_blank"} href="https://streetfoodfinder.com/farmhousefizz"><img alt="StreetFoodFinder link" height={height} width={width} src={ 'https://cdn.simpleicons.org/openstreetmap/' + color } /></a>
        <a target={"_blank"} href="https://g.page/r/CShnusOMQkBTEAE/review"><Star style={{color: "var(--almond-cream)"}} /></a>
      </span>

      <p>© 2025-{currentYear} Farmhouse Fizz Soda Bar. All rights reserved.</p>
    </footer>
  )
}