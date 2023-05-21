import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Title } from '../../../src/components/Title'

describe('Title test', () => {
  it('Should show title', () => {
    const text = 'TESTING'

    render(<Title>{text}</Title>)
    expect(screen.getByText(text)).toBeDefined()
  })
})
