import './Home.css'
import { useEffect, useState } from 'react'

// API
import { getAccounts } from '../../services/api.service'

// Components
import { Title } from '../Title'
import { Description } from '../Description'
import { GridCard, GridCardSkeleton, GridCardError } from '../GridCard'

export function Home() {
  const [response, setResponse] = useState({
    loading: true,
    error: false,
    accounts: [],
  })

  async function getData(controller) {
    try {
      const accounts = await getAccounts(controller.signal)
      setResponse({
        loading: false,
        error: false,
        accounts,
      })
    } catch (err) {
      console.log(err)
      setResponse({
        loading: false,
        error: true,
        accounts: [],
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getData(controller)

    // Unmount the component
    return () => {
      // Abort the fetching
      controller.abort()

      // Reset data
      setResponse({
        loading: false,
        error: false,
        accounts: [],
      })
    }
  }, [])

  return (
    <main className="Home">
      <section className="Home__info">
        <Description>Consulta de Saldo</Description>
        <Title>Selecciona la cuenta a consultar</Title>
      </section>
      <section>
        {response.error && <GridCardError />}
        {response.loading && <GridCardSkeleton />}
        {response.accounts.length && !response.loading && (
          <GridCard accounts={response.accounts} />
        )}
      </section>
    </main>
  )
}
