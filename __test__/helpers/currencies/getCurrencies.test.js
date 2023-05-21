import { describe, expect, it } from 'vitest'
import { currencies } from './testItems'
import { getCurrencies, getCurrency } from '../../../src/helpers/currencies'

describe('Get currencies', () => {
  it('Should return all the currencies correcly', () => {
    const curreciesFromHelper = getCurrencies()
    expect(currencies).to.deep.equal(curreciesFromHelper)
  })
})

describe('Get currency', () => {
  it('Should return Dolar symbol', () => {
    const currency = getCurrency('Dólares')
    expect(currency).toBe('u$s')
  })

  it('Should return Peso symbol', () => {
    const currency = getCurrency('Pesos')
    expect(currency).toBe('$')
  })

  it('Should return Uruguayian Peso symbol', () => {
    const currency = getCurrency('Pesos uruguayos')
    expect(currency).toBe('$uy')
  })

  it('Should return Bolivares symbol', () => {
    const currency = getCurrency('Bolivares')
    expect(currency).toBe('bs')
  })
})
