import { useContext } from 'react'
import { SelectedContext } from '../contexts'

export function useSelected() {
  const selectedContext = useContext(SelectedContext)
  if (selectedContext === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return selectedContext
}
