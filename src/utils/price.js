const DEFAULT_PRICE = 7.50
const DEFAULT_LARGE_UP_CHARGE = 1.00

function parsePrice(value) {
  if (typeof value !== 'string') return null
  const num = Number(value.replace(/[^0-9.]/g, ''))
  return Number.isFinite(num) ? num : null
}

export function formatPrice(value) {
  return `$${value.toFixed(2)}`
}

export function resolvePrices(price, largeUpCharge, surcharge) {
  const base = parsePrice(price) ?? DEFAULT_PRICE
  const upCharge = parsePrice(largeUpCharge) ?? DEFAULT_LARGE_UP_CHARGE
  const extra = Number(surcharge) || 0

  return {
    base: formatPrice(base + extra),
    large: formatPrice(base + upCharge + extra),
  }
}
