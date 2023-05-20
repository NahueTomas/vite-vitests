import PropTypes from 'prop-types'

import { Header } from '../Header'
import { Footer } from '../Footer'

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  /** Children component to wrap into the Layout */
  children: PropTypes.node.isRequired,
}
