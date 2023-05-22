import { getCurrencies } from './getCurrencies'

/**
 * Returns an account type depends of its symbol (CC, CA, Cc, CCP)
 *
 * @param {string} symbol - The symbol for which you want to get the currency name.
 * @returns {string} - The currency associated with the symbol. If there are no currency asociate with the symbol returns "Divisa no definida".
 */
export function getCurrencyBySymbol(symbol) {
  const currencies = getCurrencies()
  const currencyNames = Object.keys(currencies)

  const findCurrency = currencyNames.find(
    (currencyName) => currencies[currencyName] === symbol
  )

  if (findCurrency) return findCurrency
  else return 'Divisa no definida'
}
