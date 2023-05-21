export function getCurrencies() {
  return {
    ['Dólares']: 'u$s',
    ['Pesos']: '$',
    ['Pesos uruguayos']: '$uy',
    ['Bolivares']: 'bs',
  }
}

export function getCurrency(string) {
  const currencies = getCurrencies()

  if (currencies[string]) return currencies[string]
  else return 'Divisa no definida'
}
