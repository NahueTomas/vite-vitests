import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getAccounts } from '../services/api.service'

export const AccountsContext = createContext({
  loading: false,
  error: false,
  accounts: [],
})

export function AccountsContextProvider({ children }) {
  const [response, setResponse] = useState({
    loading: false,
    error: false,
    accounts: [],
  })

  async function getData(controller) {
    try {
      const accounts = await getAccounts(controller.signal)
      setResponse({
        loading: false,
        error: false,
        accounts,
      })
    } catch (err) {
      console.log(err)
      setResponse({
        loading: false,
        error: true,
        accounts: [],
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
