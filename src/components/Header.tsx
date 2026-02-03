import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🏖️</span>
          <span className="logo-text">Casa Mil Palmeras</span>
        </div>
        <nav className="nav">
          <a href="#huset">Huset</a>
          <a href="#faciliteter">Faciliteter</a>
          <a href="#beliggenhed">Beliggenhed</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a href="#kontakt" className="cta-button">Book nu</a>
      </div>
    </header>
  )
}

export default Header
