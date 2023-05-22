// Helpers
import {
  filterByAccountType,
  filterByCurrency,
  getAccountTypeByName,
  getCurrencyByName,
} from '../../helpers'

/**
 * Filters accounts by specific requisites. Only "Dólares" or "Pesos" currencies and "Cuenta Corriente" or "Caja de Ahorro" accounts
 *
 * @param {Object[]} accounts - The accounts to filter.
 * @returns {Object[]} - The filtered accounts based on the specified requisites.
 */
export function filterByRequisites(accounts) {
  // Filter items by currency "dolares" & "pesos"
  const dolarAndPesoItems = filterByCurrency(
    [getCurrencyByName('Pesos'), getCurrencyByName('Dólares')],
    accounts
  )

  // Filter items by account type "CA" && "CC" (doesnt include "Cc" accounts)
  const ccAndcaAccounts = filterByAccountType(
    [
      getAccountTypeByName('Cuenta Corriente'),
      getAccountTypeByName('Caja de Ahorro'),
    ],
    dolarAndPesoItems
  )

  return ccAndcaAccounts
}
