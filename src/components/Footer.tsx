import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">⚖️</span>
              <span className="footer-logo-text">Lejerets Advokaten</span>
            </div>
            <p className="footer-description">
              Specialiseret juridisk rådgivning inden for dansk lejelov.
              Jeg hjælper både lejere og udlejere med at finde de bedste løsninger.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Ydelser</h4>
              <ul>
                <li><a href="#ydelser">Lejekontrakter</a></li>
                <li><a href="#ydelser">Huslejetvister</a></li>
                <li><a href="#ydelser">Fraflytning</a></li>
                <li><a href="#ydelser">Opsigelse</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Kontakt</h4>
              <ul>
                <li><a href="tel:+4512345678">+45 12 34 56 78</a></li>
                <li><a href="mailto:kontakt@lejeretsadvokaten.dk">kontakt@lejeretsadvokaten.dk</a></li>
                <li>Vestergade 42, 1. sal</li>
                <li>1456 København K</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Information</h4>
              <ul>
                <li><a href="#om">Om mig</a></li>
                <li><a href="#kontakt">Book møde</a></li>
                <li><a href="#ydelser">Priser</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lejerets Advokaten. Alle rettigheder forbeholdes.</p>
          <p className="footer-legal">CVR: 12345678 | Medlem af Advokatsamfundet</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
