import './Services.css'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: '3 Soveværelser',
    description: 'Komfortable rum med aircondition og kvalitetssenge'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: '2 Badeværelser',
    description: 'Moderne faciliteter med bruser og håndklæder'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Fælles Pool',
    description: 'Stor pool med liggestole lige om hjørnet'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    title: 'Privat Terrasse',
    description: 'Med havemøbler, grill og sol fra morgen til aften'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
      </svg>
    ),
    title: 'Aircondition',
    description: 'Klimaanlæg i alle rum for behagelig temperatur'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0114.08 0"/>
        <path d="M1.42 9a16 16 0 0121.16 0"/>
        <path d="M8.53 16.11a6 6 0 016.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    title: 'Gratis WiFi',
    description: 'Højhastigheds internet i hele huset'
  }
]

const extraAmenities = [
  { icon: '🍳', text: 'Fuldt køkken' },
  { icon: '🚗', text: 'Gratis parkering' },
  { icon: '🧺', text: 'Vaskemaskine' },
  { icon: '📺', text: 'Smart TV' },
  { icon: '🧹', text: 'Slutrengøring inkl.' }
]

function Services() {
  return (
    <section id="faciliteter" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">Faciliteter</span>
          <h2>Alt hvad du behøver til den <span className="text-orange">perfekte ferie</span></h2>
          <p>Vores hus er udstyret med alt det moderne komfort du forventer - og lidt til</p>
        </div>

        <div className="services-grid">
          {features.map((feature, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {feature.icon}
              </div>
              <div className="service-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-extras">
          <h3>Derudover får du også</h3>
          <div className="extras-list">
            {extraAmenities.map((item, index) => (
              <div key={index} className="extra-item">
                <span className="extra-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
