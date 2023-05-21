// Components
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Home } from '../../pages/Home'
import { AccountDetails } from '../../pages/AccountDetails'

// Hooks
import { useSelected } from '../../hooks'

export function Layout() {
  const { selected } = useSelected()

  return (
    <>
      <Header />
      {selected === null ? (
        <Home />
      ) : (
        <AccountDetails
          saldo={selected.saldo}
          tipo_letras={selected.tipo_letras}
          n={selected.n}
          moneda={selected.moneda}
        />
      )}
      <Footer />
    </>
  )
}
