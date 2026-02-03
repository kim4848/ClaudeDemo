import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">Lejerets Advokaten</span>
        </div>
        <nav className="nav">
          <a href="#ydelser">Ydelser</a>
          <a href="#om">Om mig</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a href="#kontakt" className="cta-button">Gratis vurdering</a>
      </div>
    </header>
  )
}

export default Header
