import cateringData from '../data/cateringPages.json'

export function cateringLinks() {
  let links = []
  cateringData.map((page) => {
    if (page.path !=  '/catering' && page.path) { links.push({
      path: page.path || '/catering',
      label: page.metaTitle || "North Carolina"
    })}
  })
  return links
}