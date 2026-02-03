import './Hero.css'

function Hero() {
  return (
    <section id="huset" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Feriehus til leje</div>
          <h1>Dit drømmehus ved <span className="highlight">Middelhavet</span></h1>
          <p className="hero-subtitle">
            Oplev den perfekte ferie i vores charmerende sommerhus i Mil Palmeras, Spanien.
            Tæt på stranden, med palmer og sol - perfekt til drinks og afslapning.
          </p>
          <div className="hero-cta">
            <a href="#kontakt" className="primary-button">Forespørg booking</a>
            <a href="#faciliteter" className="secondary-button">Se faciliteter</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-icon">🛏️</span>
              <span className="stat-number">3</span>
              <span className="stat-label">Soveværelser</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🏊</span>
              <span className="stat-number">300m</span>
              <span className="stat-label">Til stranden</span>
            </div>
            <div className="stat">
              <span className="stat-icon">☀️</span>
              <span className="stat-number">320</span>
              <span className="stat-label">Soldage/år</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
