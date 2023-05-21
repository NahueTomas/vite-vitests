import { describe, expect, it } from 'vitest'
import { getCurrencyByName } from '../../../src/helpers/currencies'

describe('Get currency by name', () => {
  it('Should return Dolar symbol', () => {
    const currency = getCurrencyByName('Dólares')
    expect(currency).toBe('u$s')
  })

  it('Should return Peso symbol', () => {
    const currency = getCurrencyByName('Pesos')
    expect(currency).toBe('$')
  })

  it('Should return Uruguayian Peso symbol', () => {
    const currency = getCurrencyByName('Pesos uruguayos')
    expect(currency).toBe('$uy')
  })

  it('Should return Bolivares symbol', () => {
    const currency = getCurrencyByName('Bolivares')
    expect(currency).toBe('bs')
  })

  it('Should return "Divisa no definida"', () => {
    const currency = getCurrencyByName('TESTING')
    expect(currency).toBe('Divisa no definida')
  })
})
