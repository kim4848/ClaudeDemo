import './About.css'

function About() {
  return (
    <section id="beliggenhed" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-label">Beliggenhed</span>
          <h2>Mil Palmeras, <span className="gradient-text">Costa Blanca</span></h2>
          <p className="about-intro">
            Vores sommerhus ligger i det charmerende Mil Palmeras på den spanske kyst.
            Et autentisk spansk ferieparadis med over 320 solskinsdage om året.
          </p>

          <div className="location-grid">
            <div className="location-card">
              <div className="location-icon">🏖️</div>
              <div className="location-info">
                <span className="location-value">300m</span>
                <span className="location-label">Til stranden</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">✈️</div>
              <div className="location-info">
                <span className="location-value">45 min</span>
                <span className="location-label">Fra Alicante Lufthavn</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">🛒</div>
              <div className="location-info">
                <span className="location-value">5 min</span>
                <span className="location-label">Til supermarked</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">🍽️</div>
              <div className="location-info">
                <span className="location-value">10+</span>
                <span className="location-label">Restauranter i nærheden</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-map">
          <a
            href="https://maps.app.goo.gl/6unC4Cv3XUuXVdK19"
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >
            <div className="map-visual">
              <div className="map-pin">📍</div>
              <div className="map-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>
            <div className="map-content">
              <span className="map-title">Se på kort</span>
              <span className="map-address">Mil Palmeras, 03191 Alicante, Spanien</span>
            </div>
            <svg className="map-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
