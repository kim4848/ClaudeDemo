import './Services.css'

const features = [
  {
    icon: '🛏️',
    title: '3 Soveværelser',
    description: 'Komfortable soveværelser med aircondition'
  },
  {
    icon: '🚿',
    title: '2 Badeværelser',
    description: 'Moderne badeværelser med bruser'
  },
  {
    icon: '🏊',
    title: 'Fælles Pool',
    description: 'Stor pool lige om hjørnet'
  },
  {
    icon: '🌴',
    title: 'Privat Terrasse',
    description: 'Med havemøbler og grill'
  },
  {
    icon: '❄️',
    title: 'Aircondition',
    description: 'I alle rum'
  },
  {
    icon: '📶',
    title: 'Gratis WiFi',
    description: 'Højhastigheds internet'
  }
]

function Services() {
  return (
    <section id="faciliteter" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">Faciliteter</span>
          <h2>Alt hvad du behøver til den <span className="gradient-text">perfekte ferie</span></h2>
          <p>Vores hus er udstyret med alt det moderne komfort du forventer</p>
        </div>
        <div className="services-grid">
          {features.map((feature, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <span className="service-icon">{feature.icon}</span>
              </div>
              <div className="service-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-extra">
          <div className="extra-item">
            <span>🍳</span>
            <span>Fuldt køkken</span>
          </div>
          <div className="extra-item">
            <span>🚗</span>
            <span>Gratis parkering</span>
          </div>
          <div className="extra-item">
            <span>🧺</span>
            <span>Vaskemaskine</span>
          </div>
          <div className="extra-item">
            <span>📺</span>
            <span>Smart TV</span>
          </div>
          <div className="extra-item">
            <span>🧹</span>
            <span>Slutrengøring inkl.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
