import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './GridCard.css'

// Components
import { Card } from '../Card'

// Helpers
import {
  filterByAccountType,
  filterByCurrency,
  getAccountTypeByName,
  getAccountTypeBySymbol,
  getArrayOfPages,
  getCurrencyByName,
} from '../../helpers'

export function GridCard({ accounts }) {
  const [pages, setPages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setPages(getPages(accounts))
  }, [accounts])

  if (!pages[index]) return null

  return (
    <div className="GridCard">
      {index > 0 && (
        <Card onClick={() => setIndex(index - 1)}>
          <span>{'<<'} Opciones anteriores</span>
        </Card>
      )}
      {pages[index].map((account, index) => (
        <Card key={`${index}-${account.n}`}>
          <span>{getAccountTypeBySymbol(account.tipo_letras)}</span>
          <span>Nro: {account.n}</span>
        </Card>
      ))}
      {!!pages[index + 1] && (
        <Card onClick={() => setIndex(index + 1)}>
          <span>Más opciones {'>>'}</span>
        </Card>
      )}
    </div>
  )
}

function getPages(accounts) {
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

  // Get items sorted by pages
  return getArrayOfPages(ccAndcaAccounts)
}

GridCard.propTypes = {
  /** Accounts to render in the grid */
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      e: PropTypes.string.isRequired,
      n: PropTypes.string.isRequired,
      t: PropTypes.string.isRequired,
      saldo: PropTypes.string.isRequired,
      moneda: PropTypes.string.isRequired,
      tipo_letras: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
