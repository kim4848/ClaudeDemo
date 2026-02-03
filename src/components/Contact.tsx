import './Contact.css'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Booking</span>
          <h2>Book din <span className="gradient-text">drømmeferie</span></h2>
          <p>Send en forespørgsel og vi vender tilbage inden for 24 timer</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Navn</label>
                  <input type="text" id="name" name="name" placeholder="Dit fulde navn" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="din@email.dk" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="arrival">Ankomst</label>
                  <input type="date" id="arrival" name="arrival" required />
                </div>
                <div className="form-group">
                  <label htmlFor="departure">Afrejse</label>
                  <input type="date" id="departure" name="departure" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">Antal gæster</label>
                  <select id="guests" name="guests" required>
                    <option value="">Vælg antal</option>
                    <option value="1-2">1-2 personer</option>
                    <option value="3-4">3-4 personer</option>
                    <option value="5-6">5-6 personer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" placeholder="+45 00 00 00 00" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Besked (valgfrit)</label>
                <textarea id="message" name="message" rows={3} placeholder="Evt. særlige ønsker..."></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send forespørgsel
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
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
                <span className="info-label">Booking</span>
                <span className="info-value">Lørdag til lørdag</span>
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
