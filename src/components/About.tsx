import './About.css'

function About() {
  return (
    <section id="beliggenhed" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-map-placeholder">
            <a
              href="https://maps.app.goo.gl/6unC4Cv3XUuXVdK19"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <span className="map-icon">📍</span>
              <span className="map-text">Se på Google Maps</span>
            </a>
          </div>
        </div>
        <div className="about-content">
          <h2>Beliggenhed</h2>
          <p className="about-intro">
            Vores sommerhus ligger i det charmerende Mil Palmeras på den spanske Costa Blanca,
            kendt for sit fantastiske klima og smukke strande.
          </p>
          <p>
            Området byder på dejlige restauranter, hyggelige barer og lokale markeder.
            Her kan du nyde autentisk spansk atmosfære og fantastisk mad til rimelige priser.
          </p>
          <p>
            Med over 320 solskinsdage om året er Mil Palmeras det perfekte rejsemål
            til en afslappende badeferie med familien eller vennerne.
          </p>
          <div className="about-credentials">
            <div className="credential">
              <span className="credential-icon">🏖️</span>
              <div>
                <strong>Stranden</strong>
                <span>300m til den smukke sandstrand</span>
              </div>
            </div>
            <div className="credential">
              <span className="credential-icon">✈️</span>
              <div>
                <strong>Lufthavn</strong>
                <span>45 min fra Alicante Lufthavn</span>
              </div>
            </div>
            <div className="credential">
              <span className="credential-icon">🛒</span>
              <div>
                <strong>Indkøb</strong>
                <span>Supermarkeder i gåafstand</span>
              </div>
            </div>
            <div className="credential">
              <span className="credential-icon">🍽️</span>
              <div>
                <strong>Restauranter</strong>
                <span>Mange spisesteder i nærheden</span>
              </div>
            </div>
          </div>
          <div className="address-box">
            <h4>Adresse</h4>
            <p>
              Mil Palmeras<br />
              03191 Alicante<br />
              Spanien
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
