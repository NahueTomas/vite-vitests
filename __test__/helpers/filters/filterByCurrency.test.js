import { describe, expect, it } from 'vitest'
import { testItems } from './testItems'
import { filterByCurrency } from '../../../src/helpers/filters'

describe('Filter items', () => {
  it('Should return an array with all "bs" items', () => {
    const result = filterByCurrency(['bs'], testItems)
    expect(result.length).toBe(1)
  })

  it('Should return an array with all "u$s" items', () => {
    const result = filterByCurrency(['u$s'], testItems)
    expect(result.length).toBe(3)
  })

  it('Should return an array with all "$" items', () => {
    const result = filterByCurrency(['$'], testItems)
    expect(result.length).toBe(7)
  })

  it('Should return an array with all "$uy" items', () => {
    const result = filterByCurrency(['$uy'], testItems)
    expect(result.length).toBe(2)
  })
})
