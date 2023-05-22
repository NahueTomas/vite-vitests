/**
 * Filters items by currency.
 *
 * @param {string[]} currencies - The currencies to use as filtering criteria.
 * @param {Object[]} items - The items to filter.
 * @returns {Object[]} - The items filtered by currency.
 */
export function filterByCurrency(currencies, items) {
  const filteredData = items.filter(({ moneda }) => currencies.includes(moneda))
  return filteredData
}
