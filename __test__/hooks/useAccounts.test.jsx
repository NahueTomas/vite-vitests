import { describe, expect, it } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useAccounts } from '../../src/hooks'
import { AccountsContextProvider } from '../../src/contexts'

import { server } from '../../__mocks__/server'
import { errorHandlers } from '../../__mocks__/errorHandlers'

describe('useAccounts Tests', () => {
  it('Should return the default data', () => {
    const { result } = renderHook(() => useAccounts(), {
      wrapper: AccountsContextProvider,
    })

    // Checking default values
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(false)
    expect(result.current.accounts).toEqual([])
    expect(result.current.pages).toEqual([])
  })

  it('Should return error at request', async () => {
    server.use(...errorHandlers)

    const { result } = renderHook(() => useAccounts(), {
      wrapper: AccountsContextProvider,
    })

    // Esperando resultados
    await act(() => {
      setTimeout(() => {}, 300)
    })

    // Checking default values
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(true)
    expect(result.current.accounts).toEqual([])
    expect(result.current.pages).toEqual([])
  })

  it('Should return the data', async () => {
    const { result } = renderHook(() => useAccounts(), {
      wrapper: AccountsContextProvider,
    })

    // Esperando resultados
    await act(() => {
      setTimeout(() => {}, 300)
    })

    // Checking the values
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(false)

    // 8 accounts
    expect(result.current.accounts.length).toEqual(8)

    // 2 pages
    expect(result.current.pages.length).toBe(2)
  })

  it('Should throw an error', () => {
    // Render without provider
    const { result } = renderHook(() => {
      try {
        useAccounts()
      } catch (err) {
        return err
      }
    })

    expect(result.current.message).toBe(
      'Context must be used within a Provider'
    )
  })
})
