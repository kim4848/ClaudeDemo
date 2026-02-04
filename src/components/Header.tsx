import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="#huset" className="logo">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Casa Mil Palmeras</span>
              <span className="logo-tagline">Feriehus i Spanien</span>
            </div>
          </a>
        </div>

        <nav className="nav">
          <a href="#huset" className="nav-link">Huset</a>
          <a href="#faciliteter" className="nav-link">Faciliteter</a>
          <a href="#beliggenhed" className="nav-link">Beliggenhed</a>
          <a href="#priser" className="nav-link">Priser</a>
          <a href="#kontakt" className="nav-link">Kontakt</a>
        </nav>

        <div className="header-right">
          <a href="tel:+4512345678" className="phone-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>+45 12 34 56 78</span>
          </a>
          <a href="#kontakt" className="cta-button">
            Book nu
          </a>
        </div>

        <button className="mobile-menu-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
