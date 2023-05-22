import './GridCard.css'

// Components
import { Card } from '../Card'

// Helpers
import { getAccountTypeBySymbol } from '../../helpers'

// Hooks
import { useAccounts, useSelected } from '../../hooks'

export function GridCard() {
  const { pages, index, setIndex, loading } = useAccounts()
  const { setSelected } = useSelected()

  if (loading) return null

  return (
    <div className="GridCard">
      {index > 0 && (
        <Card onClick={() => setIndex(index - 1)}>
          <span>{'<<'} Opciones anteriores</span>
        </Card>
      )}
      {pages[index].map((account, index) => (
        <Card
          key={`${index}-${account.n}`}
          onClick={() => setSelected(account)}
        >
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
