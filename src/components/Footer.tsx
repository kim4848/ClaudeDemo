import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <span className="footer-logo-text">Casa Mil Palmeras</span>
            </div>
            <p className="footer-tagline">
              Dit ferieparadis ved Middelhavet - Moderne feriehus i Mil Palmeras, Spanien
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <nav className="footer-nav">
                <a href="#huset">Huset</a>
                <a href="#faciliteter">Faciliteter</a>
                <a href="#beliggenhed">Beliggenhed</a>
                <a href="#kontakt">Booking</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Kontakt</h4>
              <div className="footer-contact-info">
                <a href="mailto:booking@milpalmeras.dk" className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  booking@milpalmeras.dk
                </a>
                <a href="tel:+4512345678" className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +45 12 34 56 78
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Casa Mil Palmeras. Alle rettigheder forbeholdes.
          </p>
          <div className="footer-badges">
            <span className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Sikker booking
            </span>
            <span className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Ingen skjulte gebyrer
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
