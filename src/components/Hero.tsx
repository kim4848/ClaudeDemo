import './Hero.css'

function Hero() {
  return (
    <section id="huset" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Ledigt nu
          </div>

          <h1>
            Din ferie ved
            <span className="gradient-text"> Middelhavet</span>
            <br />starter her
          </h1>

          <p className="hero-subtitle">
            Moderne feriehus i Mil Palmeras, Spanien. 300 meter til stranden,
            privat terrasse og pool. Perfekt til familien.
          </p>

          <div className="hero-cta">
            <a href="#kontakt" className="btn-primary">
              Book dit ophold
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#faciliteter" className="btn-secondary">Se faciliteter</a>
          </div>
        </div>

        <div className="hero-cards">
          <div className="feature-card card-1">
            <span className="card-icon">🛏️</span>
            <div className="card-content">
              <span className="card-value">3</span>
              <span className="card-label">Soveværelser</span>
            </div>
          </div>

          <div className="feature-card card-2">
            <span className="card-icon">🏖️</span>
            <div className="card-content">
              <span className="card-value">300m</span>
              <span className="card-label">Til stranden</span>
            </div>
          </div>

          <div className="feature-card card-3">
            <span className="card-icon">☀️</span>
            <div className="card-content">
              <span className="card-value">320+</span>
              <span className="card-label">Soldage om året</span>
            </div>
          </div>

          <div className="feature-card card-4">
            <span className="card-icon">🏊</span>
            <div className="card-content">
              <span className="card-value">Pool</span>
              <span className="card-label">Fælles pool</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
