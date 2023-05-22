import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { server } from '../../../__mocks__/server'
import { errorHandlers } from '../../../__mocks__/errorHandlers'

import { Home } from '../../../src/pages/Home'
import {
  AccountsContextProvider,
  SelectedContextProvider,
} from '../../../src/contexts'

describe('Header test', () => {
  it('Should show the description & title', () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Home />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Checking description
    expect(screen.getByText('Consulta de Saldo')).toBeDefined()

    // Checking title
    expect(screen.getByText('Selecciona la cuenta a consultar')).toBeDefined()
  })

  it('Should show the loading state', () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Home />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Checking loading state
    expect(screen.getByText('Cargando...')).toBeDefined()
  })

  it('Should show the error state', async () => {
    server.use(...errorHandlers)

    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Home />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Checking error state
    const errorMessage = await screen.findByText(
      'Hubo un error al traer los datos de las cuentas'
    )
    expect(errorMessage).toBeDefined()
  })

  it('Should show the accounts', async () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Home />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Checking error state
    const cards = await screen.findAllByText(/Nro:/i)
    expect(cards.length).toBe(5)
  })
})
