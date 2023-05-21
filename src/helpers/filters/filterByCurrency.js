export function filterByCurrency(currencies, items) {
  const filteredData = items.filter(({ moneda }) => currencies.includes(moneda))
  return filteredData
}
