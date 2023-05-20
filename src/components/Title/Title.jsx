import PropTypes from 'prop-types'
import './Title.css'

export function Title({ children }) {
  return <h1 className="Title">{children}</h1>
}

Title.propTypes = {
  /** Children node to wrap into the title */
  children: PropTypes.node.isRequired,
}
