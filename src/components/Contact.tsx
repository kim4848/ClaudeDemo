import './Contact.css'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Book dit ophold</h2>
          <p className="contact-intro">
            Interesseret i at leje vores sommerhus i Mil Palmeras?
            Send os en forespørgsel, og vi vender tilbage med priser og ledige perioder.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Telefon</strong>
                <a href="tel:+4512345678">+45 12 34 56 78</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:booking@milpalmeras.dk">booking@milpalmeras.dk</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💶</span>
              <div>
                <strong>Priser fra</strong>
                <span>500 EUR / uge (afhængig af sæson)</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📅</span>
              <div>
                <strong>Bookingperiode</strong>
                <span>Lørdag til lørdag (min. 1 uge)</span>
              </div>
            </div>
          </div>

          <div className="booking-highlights">
            <div className="highlight-item">
              <span>✓</span> Ingen booking-gebyr
            </div>
            <div className="highlight-item">
              <span>✓</span> Fleksibel afbestilling
            </div>
            <div className="highlight-item">
              <span>✓</span> Slutrengøring inkluderet
            </div>
            <div className="highlight-item">
              <span>✓</span> Sengetøj og håndklæder inkl.
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send forespørgsel</h3>
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
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" placeholder="+45 00 00 00 00" />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Antal gæster</label>
                <select id="guests" name="guests" required>
                  <option value="">Vælg antal</option>
                  <option value="1-2">1-2 personer</option>
                  <option value="3-4">3-4 personer</option>
                  <option value="5-6">5-6 personer</option>
                </select>
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
            <div className="form-group">
              <label htmlFor="message">Besked (valgfrit)</label>
              <textarea id="message" name="message" rows={4} placeholder="Evt. særlige ønsker eller spørgsmål..."></textarea>
            </div>
            <button type="submit" className="submit-button">Send forespørgsel</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
