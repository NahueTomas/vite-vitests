import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import { server } from '../../__mocks__/server'
import { errorHandlers } from '../../__mocks__/errorHandlers'

import { useContext } from 'react'
import { AccountsContext, AccountsContextProvider } from '../../src/contexts'

describe('SelectedContext tests', () => {
  const TestComponent = () => {
    const { loading, error, accounts, pages } = useContext(AccountsContext)
    return (
      <div>
        <p>Loading: {JSON.stringify(loading)}</p>
        <p>Error: {JSON.stringify(error)}</p>
        <p>Accounts: {JSON.stringify(accounts)}</p>
        <p>Pages: {JSON.stringify(pages)}</p>
      </div>
    )
  }

  it('Should show the loading state', async () => {
    render(
      <AccountsContextProvider>
        <TestComponent />
      </AccountsContextProvider>
    )

    await waitFor(() => {
      // Loading true
      expect(screen.getByText('Loading: true')).toBeDefined()

      // Error false
      expect(screen.getByText('Error: false')).toBeDefined()

      // Accounts & Pages without content
      expect(screen.getByText('Accounts: []')).toBeDefined()
      expect(screen.getByText('Pages: []')).toBeDefined()
    })
  })

  it('Should show the error state', async () => {
    server.use(...errorHandlers)

    render(
      <AccountsContextProvider>
        <TestComponent />
      </AccountsContextProvider>
    )

    // Error true
    const error = await screen.findByText('Error: true')
    expect(error).toBeDefined()

    // Loading false
    expect(screen.getByText('Loading: false')).toBeDefined()

    // Accounts & Pages without content
    expect(screen.getByText('Accounts: []')).toBeDefined()
    expect(screen.getByText('Pages: []')).toBeDefined()
  })

  it('Should show the data loaded', async () => {
    render(
      <AccountsContextProvider>
        <TestComponent />
      </AccountsContextProvider>
    )

    // Accounts & Pages with content
    const accounts = await screen.findByText(/Accounts: \[\{/i)
    expect(accounts).toBeDefined()
    expect(screen.getByText(/Pages: \[\[\{/i)).toBeDefined()

    // Loading and Error = false
    expect(screen.getByText('Loading: false')).toBeDefined()
    expect(screen.getByText('Error: false')).toBeDefined()
  })
})
