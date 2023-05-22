import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// API
import { getAccounts } from '../services/api.service'

// Helpers
import { getArrayOfPages, filterByRequisites } from '../helpers'

export const AccountsContext = createContext({
  loading: false,
  error: false,
  accounts: [],
  pages: [],
})

export function AccountsContextProvider({ children }) {
  const [response, setResponse] = useState({
    loading: true,
    error: false,
    accounts: [],
    pages: [],
  })

  async function getData(controller) {
    try {
      // Get accounts from the API
      const accounts = await getAccounts(controller.signal)

      // Filter by account types "CA" & "CC" (there is not include the "Cc" account type)
      // Filter by currency "Dolares" & "Pesos" (there is not include the "$uy" -Pesos Uruguayos- currency)
      const filteredAccounts = filterByRequisites(accounts)

      // Get pages sorted in arrays
      const pages = getArrayOfPages(filteredAccounts)

      setResponse({
        loading: false,
        error: false,
        accounts: filteredAccounts,
        pages,
      })
    } catch (err) {
      setResponse({
        loading: false,
        error: true,
        accounts: [],
        pages: [],
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getData(controller)

    // Unmount the component
    return () => {
      // Abort the fetching
      controller.abort()

      // Reset data
      setResponse({
        loading: false,
        error: false,
        accounts: [],
      })
    }
  }, [])

  return (
    <AccountsContext.Provider value={response}>
      {children}
    </AccountsContext.Provider>
  )
}

AccountsContextProvider.propTypes = {
  /** Elements to wrap into the provider */
  children: PropTypes.node.isRequired,
}
