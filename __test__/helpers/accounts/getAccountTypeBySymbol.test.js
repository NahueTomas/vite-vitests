import { describe, expect, it } from 'vitest'
import { getAccountTypeBySymbol } from '../../../src/helpers/accounts'

describe('Get account type by symbol', () => {
  it('Should return "CA" name', () => {
    const currency = getAccountTypeBySymbol('CA')
    expect(currency).toBe('Caja de Ahorro')
  })

  it('Should return "CC" name', () => {
    const currency = getAccountTypeBySymbol('CC')
    expect(currency).toBe('Cuenta Corriente')
  })

  it('Should return "CCP" name', () => {
    const currency = getAccountTypeBySymbol('CCP')
    expect(currency).toBe('I dont know 1')
  })

  it('Should return "Cc" name', () => {
    const currency = getAccountTypeBySymbol('Cc')
    expect(currency).toBe('I dont know 2')
  })

  it('Should return "No existe ese tipo de cuenta"', () => {
    const currency = getAccountTypeBySymbol('TESTING')
    expect(currency).toBe('No existe ese tipo de cuenta')
  })
})
