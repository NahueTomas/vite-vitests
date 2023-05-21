import { describe, expect, it } from 'vitest'

import { getArrayOfPages } from '../../../src/helpers'
import {
  testItems1,
  expectedOutput1,
  testItems2,
  expectedOutput2,
} from './testItems'

describe('getArrayPage sorting items', () => {
  it('Should return 3 pages', () => {
    const result = getArrayOfPages(testItems1)

    expect(expectedOutput1).to.deep.equal(result)
  })

  it('Should return one page with 6 items', () => {
    const result = getArrayOfPages(testItems2)

    expect(expectedOutput2).to.deep.equal(result)
  })
})
