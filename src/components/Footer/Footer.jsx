import './Footer.css'

export function Footer() {
  return (
    <footer className="Footer">
      <button
        className="Footer__btn"
        onClick={() => alert('This button doesnt do anything')}
      >
        Salir
      </button>
    </footer>
  )
}
