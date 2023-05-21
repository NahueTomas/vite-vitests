import { describe, expect, it } from 'vitest'
import { currencies } from './testItems'
import { getCurrencies } from '../../../src/helpers/currencies'

describe('Get currencies', () => {
  it('Should return all the currencies correcly', () => {
    const curreciesFromHelper = getCurrencies()
    expect(currencies).to.deep.equal(curreciesFromHelper)
  })
})
