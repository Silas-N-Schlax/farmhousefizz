
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
        <a href="/terms-of-service">Terms of Service</a> <span className="cr-sm cr-li"></span>
        <a href="/questions-and-answers">FAQ</a> <span className="cr-sm cr-li"></span>
        <a href="/polls/soda-poll">Soda Poll</a>
      </span>
      <span className="socials">
        <a href=""><img height={height} width={width} src={ 'https://cdn.simpleicons.org/instagram/' + color } /></a>
        <a href=""><img height={height} width={width} src={ 'https://cdn.simpleicons.org/facebook/' + color } /></a>
        <a href="https://streetfoodfinder.com/farmhousefizz"><img height={height} width={width} src={ 'https://cdn.simpleicons.org/openstreetmap/' + color } /></a>
        <a href=""><img height={height} width={width} src={ 'https://cdn.simpleicons.org/googlecalendar/' + color } /></a>
      </span>

      <p>© 2025-{currentYear} Farmhouse Fizz Soda Bar. All rights reserved.</p>
    </footer>
  )
}