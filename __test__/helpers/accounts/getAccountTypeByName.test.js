import { describe, expect, it } from 'vitest'
import { getAccountTypeByName } from '../../../src/helpers/accounts'

describe('Test getAccountTypeByName', () => {
  it('Should return "Cuenta Corriente" symbol', () => {
    const currency = getAccountTypeByName('Cuenta Corriente')
    expect(currency).toBe('CC')
  })

  it('Should return "Caja de Ahorro" symbol', () => {
    const currency = getAccountTypeByName('Caja de Ahorro')
    expect(currency).toBe('CA')
  })

  it('Should return "I dont know 1" symbol', () => {
    const currency = getAccountTypeByName('I dont know 1')
    expect(currency).toBe('CCP')
  })

  it('Should return "I dont know 2" symbol', () => {
    const currency = getAccountTypeByName('I dont know 2')
    expect(currency).toBe('Cc')
  })

  it('Should return "No existe ese tipo de cuenta"', () => {
    const currency = getAccountTypeByName('TESTING')
    expect(currency).toBe('No existe ese tipo de cuenta')
  })
})
