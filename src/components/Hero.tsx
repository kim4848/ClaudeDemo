import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Specialiseret rådgivning inden for <span className="highlight">dansk lejelov</span></h1>
          <p className="hero-subtitle">
            Som lejer eller udlejer kan lejereglerne være komplekse at navigere i.
            Jeg hjælper dig med at forstå dine rettigheder og sikrer det bedste resultat for din sag.
          </p>
          <div className="hero-cta">
            <a href="#kontakt" className="primary-button">Book gratis vurdering</a>
            <a href="#ydelser" className="secondary-button">Se mine ydelser</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Års erfaring</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Sager vundet</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Tilfredse klienter</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">👨‍⚖️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
