import PropTypes from 'prop-types'
import { useState } from 'react'
import './GridCard.css'

// Components
import { Card } from '../Card'

// Helpers
import { getAccountTypeBySymbol } from '../../helpers'

// Hooks
import { useAccounts } from '../../hooks'

export function GridCard() {
  const { pages } = useAccounts()
  const [index, setIndex] = useState(0)

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
