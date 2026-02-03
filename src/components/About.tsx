import './About.css'

function About() {
  return (
    <section id="om" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span className="about-placeholder-icon">👩‍💼</span>
          </div>
        </div>
        <div className="about-content">
          <h2>Om mig</h2>
          <p className="about-intro">
            Jeg er advokat med speciale i lejeretlige forhold og har dedikeret min karriere
            til at hjælpe både lejere og udlejere med at navigere i den komplekse danske lejelov.
          </p>
          <p>
            Med over 15 års erfaring inden for lejeretten har jeg opbygget en dyb forståelse
            for de udfordringer, som mine klienter står overfor. Jeg tror på, at god juridisk
            rådgivning handler om at lytte, forstå og derefter handle målrettet.
          </p>
          <p>
            Min tilgang er pragmatisk og løsningsorienteret. Jeg bestræber mig altid på at
            finde den bedste løsning for dig - hvad enten det er gennem forhandling,
            Huslejenævnet eller Boligretten.
          </p>
          <div className="about-credentials">
            <div className="credential">
              <span className="credential-icon">🎓</span>
              <div>
                <strong>Uddannelse</strong>
                <span>Cand.jur., Københavns Universitet</span>
              </div>
            </div>
            <div className="credential">
              <span className="credential-icon">📜</span>
              <div>
                <strong>Certificering</strong>
                <span>Beskikket advokat siden 2009</span>
              </div>
            </div>
            <div className="credential">
              <span className="credential-icon">🏛️</span>
              <div>
                <strong>Medlem</strong>
                <span>Advokatsamfundet & Danske Boligadvokater</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
