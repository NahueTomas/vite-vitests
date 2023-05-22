import { getAccountTypes } from './getAccountTypes'

/**
 *
 * @param {string} name - The name of the account type for which you want to get the symbol.
 * @returns {string} - The symbol associate with the account type. If there are no symbol associated with the account type, returns "No existe ese tipo de cuenta".
 */
export function getAccountTypeByName(name) {
  const accountTypes = getAccountTypes()

  if (accountTypes[name]) return accountTypes[name]
  else return 'No existe ese tipo de cuenta'
}
