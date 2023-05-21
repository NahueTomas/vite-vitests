import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Description } from '../../../src/components/Description'

describe('Description test', () => {
  it('Should show the text', () => {
    const text = 'TESTING'

    render(<Description>{text}</Description>)
    expect(screen.getByText(text)).toBeDefined()
  })
})
