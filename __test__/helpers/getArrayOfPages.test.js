import { describe, expect, it } from 'vitest'

import { getArrayOfPages } from '../../src/helpers'
import { testItems, expectedOutput } from './testItems'

describe('getArrayPage sorting items', () => {
  it('Should sort all the items correctly', () => {
    const result = getArrayOfPages(testItems)

    expect(expectedOutput).to.deep.equal(result)
  })
})
