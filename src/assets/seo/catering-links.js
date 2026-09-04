import cateringData from '../data/cateringPages.json'

export function cateringLinks() {
  return cateringData
    .filter((page) => page.path && page.path !== '/catering')
    .map((page) => ({
      path: page.path,
      label: page.metaTitle || "North Carolina"
    }))
}