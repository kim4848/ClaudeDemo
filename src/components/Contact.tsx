import BookingForm from './BookingForm'
import './Contact.css'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-badge">Booking</span>
          <h2>Book din <span className="text-orange">drømmeferie</span></h2>
          <p>Vælg dine datoer i kalenderen og send en booking forespørgsel</p>
        </div>

        <div className="contact-content contact-content-full">
          <div className="booking-wrapper">
            <BookingForm />
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Priser fra</span>
                <span className="info-value info-price">500 EUR / uge</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Minimum ophold</span>
                <span className="info-value">4 dage</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Telefon</span>
                <a href="tel:+4512345678" className="info-value">+45 12 34 56 78</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
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
