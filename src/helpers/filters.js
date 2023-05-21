export function filterByCurrency(currencies, items) {
  const filteredData = items.filter(({ moneda }) => currencies.includes(moneda))
  return filteredData
}

export function filterByAccountType(accountTypes, items) {
  const filteredData = items.filter(({ tipo_letras }) =>
    accountTypes.includes(tipo_letras)
  )
  return filteredData
}
