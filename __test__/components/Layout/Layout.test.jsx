import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Layout } from '../../../src/components/Layout'
import {
  SelectedContext,
  SelectedContextProvider,
  AccountsContext,
  AccountsContextProvider,
} from '../../../src/contexts'

describe('Layout Tests with fake data', () => {
  const pages = [
    [
      {
        e: '1',
        n: '872378326701',
        t: '02',
        saldo: '1500',
        moneda: 'u$s',
        tipo_letras: 'CC',
      },
      {
        e: '1',
        n: '872378326702',
        t: '01',
        saldo: '-600',
        moneda: '$',
        tipo_letras: 'Cc',
      },
    ],
  ]

  const accounts = [
    {
      e: '1',
      n: '872378326701',
      t: '02',
      saldo: '1500',
      moneda: 'u$s',
      tipo_letras: 'CC',
    },
    {
      e: '1',
      n: '872378326702',
      t: '01',
      saldo: '-600',
      moneda: '$',
      tipo_letras: 'Cc',
    },
  ]

  it('Should show the Header and Home ', () => {
    render(
      <SelectedContext.Provider value={{ selected: null }}>
        <AccountsContext.Provider
          value={{
            pages,
            accounts,
            loading: false,
            error: false,
            index: 0,
            setIndex: function () {
              null
            },
          }}
        >
          <Layout />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Should show the Header
    expect(screen.getByText('Hello')).toBeDefined()

    // Should show the Home
    expect(screen.getByText('Selecciona la cuenta a consultar')).toBeDefined()

    // Should render the Home content
    expect(screen.getByText(/872378326701/i)).toBeDefined()
    expect(screen.getByText(/872378326702/i)).toBeDefined()

    // Does not show the back button
    const exitButton = screen.queryAllByText('Salir')
    expect(exitButton.length).toBe(0)
  })

  it('Should show the Header and AccountDetails & the exit button ', () => {
    render(
      <SelectedContext.Provider
        value={{
          selected: {
            e: '1',
            n: '872378326701',
            t: '02',
            saldo: '1500',
            moneda: 'u$s',
            tipo_letras: 'CC',
          },
        }}
      >
        <AccountsContext.Provider
          value={{ pages, accounts, loading: false, error: false }}
        >
          <Layout />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Should show the Header
    expect(screen.getByText('Hello')).toBeDefined()

    // Should show the Home
    expect(screen.getByText('Este es tu saldo actual')).toBeDefined()

    // Does not show the back button
    expect(screen.getByText('Salir')).toBeDefined()
  })
})

describe('Layout Test with data from MSW', () => {
  it('Should show the Header and Home ', () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Layout />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Should show the Header
    expect(screen.getByText('Hello')).toBeDefined()

    // Should show the Home
    expect(screen.getByText('Selecciona la cuenta a consultar')).toBeDefined()

    // Should render the Home loading state
    expect(screen.getByText('Cargando...')).toBeDefined()

    // Does not show the exit button
    const exitButton = screen.queryAllByText('Salir')
    expect(exitButton.length).toBe(0)
  })

  it('Should show the Home first page of accounts ', async () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Layout />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Cards
    const cards = await screen.findAllByText(/Nro:/i)
    expect(cards.length).toBe(5)

    // Should show the next page button
    const nextButton = screen.queryAllByText(/Más opciones >>/i)
    expect(nextButton.length).toBe(1)
  })

  it('Should show the Home second and last page of accounts ', async () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Layout />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Await to fetch data
    await screen.findAllByText(/Nro:/i)

    // Click on next page
    const nextButton = screen.queryByText(/Más opciones >>/i)
    fireEvent.click(nextButton)

    // Should not have the next button
    expect(screen.queryAllByText(/Más opciones >>/i).length).toBe(0)

    // Should have the back button
    const backButton = screen.queryAllByText(/<< Opciones anteriores/i)
    expect(backButton.length).toBe(1)
  })

  it('Should show the account details ', async () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Layout />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Await to fetch data
    const cards = await screen.findAllByText(/Nro:/i)

    // Click on the card
    fireEvent.click(cards[2])

    // Checking all the data
    expect(screen.getByText('Este es tu saldo actual')).toBeDefined()
    expect(screen.getByText('Saldo de la cuenta: 569')).toBeDefined()
    expect(
      screen.getByText('Tipo de la cuenta: Cuenta Corriente en Pesos')
    ).toBeDefined()
    expect(screen.getByText('Número de la cuenta: 872378326705')).toBeDefined()

    // Should show the exit button
    const exitButton = screen.queryAllByText('Salir')
    expect(exitButton).toBeDefined()
  })

  it('Should show the account details and go back to the home ', async () => {
    render(
      <SelectedContextProvider>
        <AccountsContextProvider>
          <Layout />
        </AccountsContextProvider>
      </SelectedContextProvider>
    )

    // Await to fetch data
    const cards = await screen.findAllByText(/Nro:/i)

    // Click on the card
    fireEvent.click(cards[2])

    // Checking that we are looking the account details
    expect(screen.getByText('Este es tu saldo actual')).toBeDefined()

    // Click on the exit button
    const exitButton = screen.queryByText('Salir')
    fireEvent.click(exitButton)

    // Checking that we are at home
    expect(screen.getByText('Selecciona la cuenta a consultar')).toBeDefined()
  })
})
