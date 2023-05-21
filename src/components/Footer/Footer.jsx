import './Footer.css'

// Hooks
import { useSelected } from '../../hooks'

export function Footer() {
  const { selected, setSelected } = useSelected()

  return (
    <footer className="Footer">
      {selected !== null && (
        <button className="Footer__btn" onClick={() => setSelected(null)}>
          Salir
        </button>
      )}
    </footer>
  )
}
