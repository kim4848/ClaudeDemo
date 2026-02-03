import './Services.css'

const features = [
  {
    icon: '🛏️',
    title: '3 Soveværelser',
    description: 'Rummelige soveværelser med komfortable senge og aircondition. Plads til hele familien.'
  },
  {
    icon: '🚿',
    title: '2 Badeværelser',
    description: 'Moderne badeværelser med bruser. Håndklæder og toiletartikler er inkluderet.'
  },
  {
    icon: '🏊',
    title: 'Fælles Pool',
    description: 'Adgang til stor fælles swimmingpool lige om hjørnet. Perfekt til afkøling i varmen.'
  },
  {
    icon: '🌴',
    title: 'Privat Terrasse',
    description: 'Hyggelig terrasse med havemøbler og grill. Ideel til aftensmad under stjernerne.'
  },
  {
    icon: '❄️',
    title: 'Aircondition',
    description: 'Alle rum har aircondition, så du kan holde dig kølig selv på de varmeste dage.'
  },
  {
    icon: '📶',
    title: 'Gratis WiFi',
    description: 'Højhastigheds internet i hele huset, så du kan holde kontakten med hjemmet.'
  },
  {
    icon: '🍳',
    title: 'Fuldt Køkken',
    description: 'Veludstyret køkken med komfur, ovn, køleskab og opvaskemaskine.'
  },
  {
    icon: '🚗',
    title: 'Parkering',
    description: 'Gratis privat parkeringsplads til bilen lige ved huset.'
  },
  {
    icon: '🏖️',
    title: 'Tæt på Strand',
    description: 'Kun 300 meter til den smukke sandstrand. Tag en morgendykkert før morgenmad!'
  }
]

function Services() {
  return (
    <section id="faciliteter" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Husets faciliteter</h2>
          <p>Alt hvad du har brug for til en perfekt ferie ved Middelhavet</p>
        </div>
        <div className="services-grid">
          {features.map((feature, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
