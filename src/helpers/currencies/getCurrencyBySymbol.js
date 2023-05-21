import { getCurrencies } from './getCurrencies'

export function getCurrencyBySymbol(symbol) {
  const currencies = getCurrencies()
  const currencyNames = Object.keys(currencies)

  const findCurrency = currencyNames.find(
    (currencyName) => currencies[currencyName] === symbol
  )

  if (findCurrency) return findCurrency
  else return 'Divisa no definida'
}
