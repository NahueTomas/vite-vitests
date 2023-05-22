import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { GridCardError } from '../../../src/components/GridCard'

describe('GridCardError Tests', () => {
  it('Should show the error message', () => {
    render(<GridCardError />)

    expect(
      screen.getByText('Hubo un error al traer los datos de las cuentas')
    ).toBeDefined()
  })
})
