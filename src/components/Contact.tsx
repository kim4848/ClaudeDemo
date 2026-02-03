import './Contact.css'

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Kontakt mig</h2>
          <p className="contact-intro">
            Har du spørgsmål om din lejeretlige situation? Book en gratis og uforpligtende
            indledende samtale, hvor vi kan vurdere din sag.
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
                <a href="mailto:kontakt@lejeretsadvokaten.dk">kontakt@lejeretsadvokaten.dk</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Adresse</strong>
                <span>Vestergade 42, 1. sal<br />1456 København K</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Åbningstider</strong>
                <span>Man-Fre: 09:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send en besked</h3>
            <div className="form-group">
              <label htmlFor="name">Navn</label>
              <input type="text" id="name" name="name" placeholder="Dit fulde navn" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="din@email.dk" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" placeholder="+45 00 00 00 00" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Emne</label>
              <select id="subject" name="subject" required>
                <option value="">Vælg emne</option>
                <option value="lejekontrakt">Lejekontrakt</option>
                <option value="huslejetvist">Huslejetvist</option>
                <option value="fraflytning">Fraflytning & Istandsættelse</option>
                <option value="opsigelse">Opsigelse</option>
                <option value="andet">Andet</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Besked</label>
              <textarea id="message" name="message" rows={5} placeholder="Beskriv kort din situation..." required></textarea>
            </div>
            <button type="submit" className="submit-button">Send besked</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
