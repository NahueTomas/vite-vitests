import { useContext } from 'react'
import { AccountsContext } from '../contexts'

export function useAccounts() {
  const response = useContext(AccountsContext)
  if (response === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return response
}
