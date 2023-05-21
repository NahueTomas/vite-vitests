export function getAccountTypes() {
  return {
    ['Cuenta Corriente']: 'CC',
    ['Caja de Ahorro']: 'CA',
    ['No idea']: 'CCP',
  }
}

export function getAccountTypeBySymbol(symbol) {
  const accountTypes = getAccountTypes()
  const accountNames = Object.keys(accountTypes)

  const findAccountType = accountNames.find(
    (accountName) => accountTypes[accountName] === symbol
  )

  if (findAccountType) return findAccountType
  else return 'No existe ese tipo de cuenta'
}

export function getAccountByName(name) {
  const accountTypes = getAccountTypes()

  if (accountTypes[name]) return accountTypes[name]
  else return 'No existe ese tipo de cuenta'
}
