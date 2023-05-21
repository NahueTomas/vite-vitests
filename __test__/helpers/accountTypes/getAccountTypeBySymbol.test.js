import { describe, expect, it } from 'vitest'
import { getAccountTypeBySymbol } from '../../../src/helpers/accountTypes'

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
    expect(currency).toBe('No idea')
  })
})
