import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Header } from '../../../src/components/Header'

describe('Header test', () => {
  it('Should show the "Hello"', () => {
    const text = 'Hello'

    render(<Header />)
    expect(screen.getByText(text)).toBeDefined()
  })
})
