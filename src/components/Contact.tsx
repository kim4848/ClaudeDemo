import BookingForm from './BookingForm'
import './Contact.css'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Booking</span>
          <h2>Book din <span className="gradient-text">drømmeferie</span></h2>
          <p>Vælg dine datoer i kalenderen og send en booking forespørgsel</p>
        </div>

        <div className="contact-content contact-content-full">
          <div className="booking-wrapper">
            <BookingForm />
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">💶</div>
              <div className="info-content">
                <span className="info-label">Priser fra</span>
                <span className="info-value">500 EUR / uge</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📅</div>
              <div className="info-content">
                <span className="info-label">Minimum ophold</span>
                <span className="info-value">4 dage</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <span className="info-label">Telefon</span>
                <a href="tel:+4512345678" className="info-value">+45 12 34 56 78</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a href="mailto:booking@milpalmeras.dk" className="info-value">booking@milpalmeras.dk</a>
              </div>
            </div>

            <div className="perks-list">
              <div className="perk">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Ingen booking-gebyr
              </div>
              <div className="perk">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Fleksibel afbestilling
              </div>
              <div className="perk">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Slutrengøring inkluderet
              </div>
              <div className="perk">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Sengetøj og håndklæder inkl.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
