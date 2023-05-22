import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { GridCardSkeleton } from '../../../src/components/GridCard'

describe('GridCardSkeleton Tests', () => {
  it('Should show the loading message', () => {
    render(<GridCardSkeleton />)

    expect(screen.getByText('Cargando...')).toBeDefined()
  })
})
