import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SelectedContext = createContext()

export function SelectedContextProvider({ children }) {
  const [selected, setSelected] = useState(null)

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  )
}

SelectedContextProvider.propTypes = {
  /** Elements to wrap into the provider */
  children: PropTypes.node.isRequired,
}
