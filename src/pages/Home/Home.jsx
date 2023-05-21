import './Home.css'
import { useContext } from 'react'

// Components
import { Title } from '../../components/Title'
import { Description } from '../../components/Description'
import {
  GridCard,
  GridCardSkeleton,
  GridCardError,
} from '../../components/GridCard'

// Contexts
import { AccountsContext } from '../../contexts'

export function Home() {
  const { error, loading, accounts } = useContext(AccountsContext)

  return (
    <main className="Home">
      <section className="Home__info">
        <Description>Consulta de Saldo</Description>
        <Title>Selecciona la cuenta a consultar</Title>
      </section>
      <section className="Home__grid">
        {error && <GridCardError />}
        {loading && <GridCardSkeleton />}
        {accounts.length && !loading && <GridCard accounts={accounts} />}
      </section>
    </main>
  )
}
