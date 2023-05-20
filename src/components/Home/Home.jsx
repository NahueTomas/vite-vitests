import './Home.css'

// Components
import { Title } from '../Title'
import { Description } from '../Description'

export function Home() {
  return (
    <main className="Home">
      <section className="Home__info">
        <Description>Consulta de Saldo</Description>
        <Title>Selecciona la cuenta a consultar</Title>
      </section>
    </main>
  )
}
