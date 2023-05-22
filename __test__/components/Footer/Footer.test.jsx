import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Footer } from '../../../src/components/Footer'
import { SelectedContext } from '../../../src/contexts'

describe('Footer Tests', () => {
  it('Should not show the button', () => {
    render(
      <SelectedContext.Provider
        value={{ selected: null, setSelected: () => null }}
      >
        <Footer />
      </SelectedContext.Provider>
    )

    const backButton = screen.queryByText('Salir')
    expect(backButton).toBe(null)
  })

  it('Should show the button', () => {
    const accountExample = {
      e: '1',
      n: '872378326701',
      t: '02',
      saldo: '1500',
      moneda: 'u$s',
      tipo_letras: 'CC',
    }

    render(
      <SelectedContext.Provider
        value={{ selected: accountExample, setSelected: () => null }}
      >
        <Footer />
      </SelectedContext.Provider>
    )

    const backButton = screen.queryByText('Salir')
    expect(backButton).toBeDefined()
  })
})
