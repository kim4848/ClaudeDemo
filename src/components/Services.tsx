import './Services.css'

const services = [
  {
    icon: '📋',
    title: 'Lejekontrakter',
    description: 'Gennemgang og udarbejdelse af lejekontrakter. Sikrer at dine rettigheder er beskyttet og vilkårene er fair.'
  },
  {
    icon: '💰',
    title: 'Huslejetvister',
    description: 'Hjælp ved uenighed om huslejens størrelse, reguleringer eller tilbagebetaling af for meget betalt leje.'
  },
  {
    icon: '🏠',
    title: 'Fraflytning & Istandsættelse',
    description: 'Rådgivning ved fraflytning, istandsættelseskrav og tvister om depositum og forudbetalt leje.'
  },
  {
    icon: '⚠️',
    title: 'Opsigelse & Ophævelse',
    description: 'Bistand ved opsigelse eller ophævelse af lejemål - både som lejer og udlejer.'
  },
  {
    icon: '🔧',
    title: 'Vedligeholdelse',
    description: 'Tvister om vedligeholdelsespligt, mangler ved lejemålet og udlejers pligt til udbedring.'
  },
  {
    icon: '⚖️',
    title: 'Huslejenævn & Boligret',
    description: 'Repræsentation i sager ved Huslejenævnet og Boligretten. Jeg fører din sag fra start til slut.'
  }
]

function Services() {
  return (
    <section id="ydelser" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Mine ydelser</h2>
          <p>Jeg tilbyder specialiseret juridisk rådgivning inden for alle aspekter af dansk lejelov</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
