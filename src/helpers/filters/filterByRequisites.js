// Helpers
import {
  filterByAccountType,
  filterByCurrency,
  getAccountTypeByName,
  getCurrencyByName,
} from '../../helpers'

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
