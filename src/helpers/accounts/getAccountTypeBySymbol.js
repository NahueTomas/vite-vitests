import { getAccountTypes } from './getAccountTypes'

/**
 * Returns an account type depends of its symbol (CC, CA, Cc, CCP)
 *
 * @param {string} symbol - The symbol for which you want to get the account type.
 * @returns {string} - The type of account associated with the symbol. If there are no account type asociate with the symbol returns "No existe ese tipo de cuenta".
 */
export function getAccountTypeBySymbol(symbol) {
  const accountTypes = getAccountTypes()
  const accountNames = Object.keys(accountTypes)

  const findAccountType = accountNames.find(
    (accountName) => accountTypes[accountName] === symbol
  )

  if (findAccountType) return findAccountType
  else return 'No existe ese tipo de cuenta'
}
