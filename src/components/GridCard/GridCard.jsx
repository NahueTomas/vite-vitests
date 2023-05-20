import PropTypes from 'prop-types'

export function GridCard({ accounts }) {
  return (
    <div>
      {accounts.map((account, index) => (
        <p key={index}>
          <small>{JSON.stringify(account)}</small>
        </p>
      ))}
    </div>
  )
}

GridCard.propTypes = {
  /** Accounts to render in the grid */
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      e: PropTypes.string.isRequired,
      n: PropTypes.string.isRequired,
      t: PropTypes.string.isRequired,
      saldo: PropTypes.string.isRequired,
      moneda: PropTypes.string.isRequired,
      tipo_letras: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
