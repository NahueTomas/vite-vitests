import { describe, expect, it } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'

import { useSelected } from '../../src/hooks'
import { SelectedContextProvider } from '../../src/contexts'

describe('useSelected Tests', () => {
  const account = {
    e: '1',
    n: '872378326710',
    t: '01',
    saldo: '700',
    moneda: 'bs',
    tipo_letras: 'CC',
  }

  it('Should return the default selected account', () => {
    const { result } = renderHook(() => useSelected(), {
      wrapper: SelectedContextProvider,
    })

    // Default value === null
    expect(result.current.selected).toBe(null)
  })

  it('Should return the selected value changed', async () => {
    const { result } = renderHook(() => useSelected(), {
      wrapper: SelectedContextProvider,
    })

    // Changing selected
    act(() => {
      result.current.setSelected(account)
    })

    await waitFor(() => {
      expect(result.current.selected).toBe(account)
    })
  })

  it('Should throw an error', () => {
    // Render without provider
    const { result } = renderHook(() => {
      try {
        useSelected()
      } catch (err) {
        return err
      }
    })

    expect(result.current.message).toBe(
      'Context must be used within a Provider'
    )
  })
})
