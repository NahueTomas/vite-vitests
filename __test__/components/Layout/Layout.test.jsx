import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Layout } from '../../../src/components/Layout'
import { SelectedContext } from '../../../src/contexts'

describe('Layout Tests', () => {
  it('Should show the Header and Home ', () => {
    render(
      <SelectedContext.Provider value={{ selected: null }}>
        <Layout />
      </SelectedContext.Provider>
    )

    // Should show the Header
    expect(screen.getByText('NCR')).toBeDefined()

    // Should show the Home
    expect(screen.getByText('Selecciona la cuenta a consultar')).toBeDefined()

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
        <Layout />
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
