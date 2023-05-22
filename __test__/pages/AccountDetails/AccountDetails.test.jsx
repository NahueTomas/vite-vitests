import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { AccountDetails } from '../../../src/pages/AccountDetails'

describe('Header test', () => {
  const data = {
    e: '1',
    n: '872378326710',
    t: '01',
    saldo: '700',
    moneda: 'bs',
    tipo_letras: 'CC',
  }

  it('Should show the title & data', () => {
    render(<AccountDetails {...data} />)

    // Checking the description & title
    expect(screen.getByText('Consulta de Saldo')).toBeDefined()
    expect(screen.getByText('Este es tu saldo actual')).toBeDefined()

    // Checking data
    expect(screen.getByText(`Saldo de la cuenta: ${data.saldo}`))
    expect(screen.getByText(`Tipo de la cuenta: Cuenta Corriente en Bolivares`))
    expect(screen.getByText(`Número de la cuenta: ${data.n}`))
  })
})
