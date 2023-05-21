import { describe, expect, it } from 'vitest'
import { accountTypes } from './testItems'
import { getAccountTypes } from '../../../src/helpers/accountTypes'

describe('Get account types', () => {
  it('Should return all the account types correcly', () => {
    const curreciesFromHelper = getAccountTypes()
    expect(accountTypes).to.deep.equal(curreciesFromHelper)
  })
})
