import { describe, expect, it, vi, afterEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Card } from '../../../src/components/Card'

describe('Card test', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Should show the content', () => {
    const text = 'TESTING'

    render(<Card>{text}</Card>)
    expect(screen.getByText(text)).toBeDefined()
  })

  it('Should call the function onClick', () => {
    const text = 'TESTING'
    const handleClick = vi.fn()

    render(<Card onClick={handleClick}>{text}</Card>)

    const card = screen.getByText(text)

    // No clicks
    expect(handleClick).toHaveBeenCalledTimes(0)

    // First click
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledTimes(1)

    // Second click
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
