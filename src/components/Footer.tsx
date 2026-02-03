import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🏖️</span>
              <span className="footer-logo-text">Casa Mil Palmeras</span>
            </div>
            <p className="footer-description">
              Dit ferieparadis ved den spanske Middelhavskyst.
              Nyd sol, strand og afslapning i vores charmerende sommerhus.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#huset">Huset</a></li>
                <li><a href="#faciliteter">Faciliteter</a></li>
                <li><a href="#beliggenhed">Beliggenhed</a></li>
                <li><a href="#kontakt">Book nu</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Kontakt</h4>
              <ul>
                <li><a href="tel:+4512345678">+45 12 34 56 78</a></li>
                <li><a href="mailto:booking@milpalmeras.dk">booking@milpalmeras.dk</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Beliggenhed</h4>
              <ul>
                <li>Mil Palmeras</li>
                <li>03191 Alicante</li>
                <li>Spanien</li>
                <li><a href="https://maps.app.goo.gl/6unC4Cv3XUuXVdK19" target="_blank" rel="noopener noreferrer">Se på kort</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Casa Mil Palmeras. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
