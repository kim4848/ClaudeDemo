import './About.css'

function About() {
  return (
    <section id="beliggenhed" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-badge">Beliggenhed</span>
          <h2>Mil Palmeras, <span className="text-orange">Costa Blanca</span></h2>
          <p className="about-intro">
            Vores sommerhus ligger i det charmerende Mil Palmeras på den spanske kyst.
            Et autentisk spansk ferieparadis med over 320 solskinsdage om året.
          </p>

          <div className="location-grid">
            <div className="location-card">
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21H7a4 4 0 01-4-4V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12a4 4 0 004 4z"/>
                  <path d="M21 9v8a4 4 0 01-4 4"/>
                </svg>
              </div>
              <div className="location-info">
                <span className="location-value">300m</span>
                <span className="location-label">Til stranden</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <div className="location-info">
                <span className="location-value">45 min</span>
                <span className="location-label">Fra Alicante Lufthavn</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <div className="location-info">
                <span className="location-value">5 min</span>
                <span className="location-label">Til supermarked</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 010 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
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
              <div className="map-pin">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
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
            <div className="map-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
