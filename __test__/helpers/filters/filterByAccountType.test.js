import { describe, expect, it } from 'vitest'
import { testItems } from './testItems'
import { filterByAccountType } from '../../../src/helpers/filters'

describe('Filter items', () => {
  it('Should return an array with all "CC" accounts', () => {
    const result = filterByAccountType(['CC'], testItems)
    expect(result.length).toBe(7)
  })

  it('Should return an array with all "CCP" accounts', () => {
    const result = filterByAccountType(['CCP'], testItems)
    expect(result.length).toBe(1)
  })

  it('Should return an array with all "CA" accounts', () => {
    const result = filterByAccountType(['CA'], testItems)
    expect(result.length).toBe(4)
  })

  it('Should return an array with all "Cc" accounts', () => {
    const result = filterByAccountType(['Cc'], testItems)
    expect(result.length).toBe(1)
  })
})
