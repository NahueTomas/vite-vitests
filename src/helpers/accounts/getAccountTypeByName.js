import { getAccountTypes } from './getAccountTypes'

export function getAccountTypeByName(name) {
  const accountTypes = getAccountTypes()

  if (accountTypes[name]) return accountTypes[name]
  else return 'No existe ese tipo de cuenta'
}
