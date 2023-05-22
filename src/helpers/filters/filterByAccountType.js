/**
 * Filters by account types.
 *
 * @param {string[]} accountTypes - Account types that you want to use to filter.
 * @param {Object[]} items - Elements to filter.
 * @returns {Object[]} - Filered elements.
 */
export function filterByAccountType(accountTypes, items) {
  const filteredData = items.filter(({ tipo_letras }) =>
    accountTypes.includes(tipo_letras)
  )
  return filteredData
}
