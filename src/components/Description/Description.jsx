import PropTypes from 'prop-types'
import './Description.css'

export function Description({ children }) {
  return <p className="Description">{children}</p>
}

Description.propTypes = {
  /** Children node to wrap into the description */
  children: PropTypes.node.isRequired,
}
