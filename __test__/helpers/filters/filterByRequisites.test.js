import { describe, expect, it } from 'vitest'
import { testItems } from './testItems'
import { filterByRequisites } from '../../../src/helpers/filters'

describe('filterByRequisites Test', () => {
  it('Should return an array with all the items with "u$s" or "$" currency and "CC" or "CA" account types', () => {
    // Should return 8 items once pass the filter
    const result = filterByRequisites(testItems)
    expect(result.length).toBe(8)

    // All items should have "moneda" equals to "u$s" or "$"
    const currency = result.every(
      ({ moneda }) => moneda === 'u$s' || moneda === '$'
    )
    expect(currency).toBe(true)

    // All items should have "tipo_letras" equals to "CC" or "CA"
    const accountType = result.every(
      ({ tipo_letras }) => tipo_letras === 'CC' || tipo_letras === 'CA'
    )
    expect(accountType).toBe(true)
  })
})
