import { getCurrencies } from './getCurrencies'

/**
 *
 * @param {string} name - The name of the currency for which you want to get the symbol.
 * @returns {string} - The symbol associate with the currency. If there are no symbol associated with the currency, returns "Divisa no definida".
 */
export function getCurrencyByName(name) {
  const currencies = getCurrencies()

  if (currencies[name]) return currencies[name]
  else return 'Divisa no definida'
}
