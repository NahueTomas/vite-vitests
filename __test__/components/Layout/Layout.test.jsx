import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Layout } from '../../../src/components/Layout'
import { SelectedContext, AccountsContext } from '../../../src/contexts'

describe('Layout Tests', () => {
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
          value={{ pages, accounts, loading: false, error: false }}
        >
          <Layout />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Should show the Header
    expect(screen.getByText('NCR')).toBeDefined()

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
    expect(screen.getByText('NCR')).toBeDefined()

    // Should show the Home
    expect(screen.getByText('Este es tu saldo actual')).toBeDefined()

    // Does not show the back button
    expect(screen.getByText('Salir')).toBeDefined()
  })
})
