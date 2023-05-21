import { describe, expect, it } from 'vitest'
import { getCurrencyBySymbol } from '../../../src/helpers/currencies'

describe('Get currency by symbol', () => {
  it('Should return "u$s" name', () => {
    const currency = getCurrencyBySymbol('u$s')
    expect(currency).toBe('Dólares')
  })

  it('Should return "$" name', () => {
    const currency = getCurrencyBySymbol('$')
    expect(currency).toBe('Pesos')
  })

  it('Should return "$uy" name', () => {
    const currency = getCurrencyBySymbol('$uy')
    expect(currency).toBe('Pesos uruguayos')
  })

  it('Should return "bs" name', () => {
    const currency = getCurrencyBySymbol('bs')
    expect(currency).toBe('Bolivares')
  })
})
