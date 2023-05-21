import { getAccountTypes } from './getAccountTypes'

export function getAccountTypeBySymbol(symbol) {
  const accountTypes = getAccountTypes()
  const accountNames = Object.keys(accountTypes)

  const findAccountType = accountNames.find(
    (accountName) => accountTypes[accountName] === symbol
  )

  if (findAccountType) return findAccountType
  else return 'No existe ese tipo de cuenta'
}
