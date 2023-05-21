import { getCurrencies } from './getCurrencies'

export function getCurrencyByName(name) {
  const currencies = getCurrencies()

  if (currencies[name]) return currencies[name]
  else return 'Divisa no definida'
}
