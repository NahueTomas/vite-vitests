import './Home.css'

// Components
import { Title } from '../../components/Title'
import { Description } from '../../components/Description'
import {
  GridCard,
  GridCardSkeleton,
  GridCardError,
} from '../../components/GridCard'

// Hooks
import { useAccounts } from '../../hooks'

export function Home() {
  const { error, loading, accounts } = useAccounts()

  return (
    <main className="Home">
      <section className="Home__info">
        <Description>Consulta de Saldo</Description>
        <Title>Selecciona la cuenta a consultar</Title>
      </section>
      <section className="Home__grid">
        {error && <GridCardError />}
        {loading && <GridCardSkeleton />}

        {accounts.length && !loading && !error ? (
          <GridCard accounts={accounts} />
        ) : null}
      </section>
    </main>
  )
}
