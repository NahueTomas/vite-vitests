export function getCurrencies() {
  return {
    ['Dólares']: 'u$s',
    ['Pesos']: '$',
    ['Pesos uruguayos']: '$uy',
    ['Bolivares']: 'bs',
  }
}

export function getCurrencyBySymbol(symbol) {
  const currencies = getCurrencies()
  const currencyNames = Object.keys(currencies)

  const findCurrency = currencyNames.find(
    (currencyName) => currencies[currencyName] === symbol
  )

  if (findCurrency) return findCurrency
  else return 'Divisa no definida'
}

export function getCurrencyByName(name) {
  const currencies = getCurrencies()

  if (currencies[name]) return currencies[name]
  else return 'Divisa no definida'
}
