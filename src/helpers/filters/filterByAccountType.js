export function filterByAccountType(accountTypes, items) {
  const filteredData = items.filter(({ tipo_letras }) =>
    accountTypes.includes(tipo_letras)
  )
  return filteredData
}
