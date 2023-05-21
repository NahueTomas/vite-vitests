import PropTypes from 'prop-types'
import './Card.css'

export function Card({ children, ...props }) {
  return (
    <div className="Card" {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  /** Children node to wrap into the card */
  children: PropTypes.node.isRequired,
}
