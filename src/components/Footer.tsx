import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🏖️</span>
              <span className="footer-logo-text">Casa Mil Palmeras</span>
            </div>
            <p className="footer-tagline">
              Dit ferieparadis ved Middelhavet
            </p>
          </div>

          <div className="footer-nav">
            <a href="#huset">Huset</a>
            <a href="#faciliteter">Faciliteter</a>
            <a href="#beliggenhed">Beliggenhed</a>
            <a href="#kontakt">Booking</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Casa Mil Palmeras
          </p>
          <div className="footer-contact">
            <a href="mailto:booking@milpalmeras.dk">booking@milpalmeras.dk</a>
            <span className="footer-dot"></span>
            <a href="tel:+4512345678">+45 12 34 56 78</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
