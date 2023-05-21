import PropTypes from 'prop-types'
import './AccountDetails.css'

// Components
import { Title } from '../../components/Title'
import { Description } from '../../components/Description'

// Helpers
import { getAccountTypeBySymbol, getCurrencyBySymbol } from '../../helpers'

export function AccountDetails({ saldo, tipo_letras, n, moneda }) {
  return (
    <main className="AccountDetails">
      <section className="AccountDetails__info">
        <Description>Consulta de saldo</Description>
        <Title>Este es tu saldo actual</Title>
      </section>

      <section className="AccountDetails__data">
        <p>Saldo de la cuenta: {saldo}</p>
        <p>
          Tipo de la cuenta: {getAccountTypeBySymbol(tipo_letras)} en{' '}
          {getCurrencyBySymbol(moneda)}
        </p>
        <p>Número de la cuenta: {n}</p>
      </section>
    </main>
  )
}

AccountDetails.propTypes = {
  /** Account balance */
  saldo: PropTypes.string.isRequired,
  /** Account type */
  tipo_letras: PropTypes.string.isRequired,
  /** Number account */
  n: PropTypes.string.isRequired,
  /** Currency account */
  moneda: PropTypes.string.isRequired,
}
