import { describe, expect, it } from 'vitest'

import { getArrayOfPages } from '../../../src/helpers'
import {
  testItems1,
  expectedOutput1,
  testItems2,
  expectedOutput2,
  testItems3,
  expectedOutput3,
  testItems4,
  expectedOutput4,
} from './testItems'

describe('getArrayPage sorting items', () => {
  it('Should return 3 pages (5 items, 4 items, 4 items)', () => {
    const result = getArrayOfPages(testItems1)

    expect(expectedOutput1).to.deep.equal(result)
  })

  it('Should return one page with 6 items', () => {
    const result = getArrayOfPages(testItems2)

    expect(expectedOutput2).to.deep.equal(result)
  })

  it('Should return 3 pages (5, 4, 5)', () => {
    const result = getArrayOfPages(testItems3)

    expect(expectedOutput3).to.deep.equal(result)
  })

  it('Should return 3 pages (5, 4, 4, 2)', () => {
    const result = getArrayOfPages(testItems4)
    expect(expectedOutput4).to.deep.equal(result)
  })
})
