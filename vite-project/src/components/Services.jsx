import React from 'react'

const Services = () => {

const services = [
  "Web Design",
  "Branding",
  "UI/UX",
  "Development",
  "SEO",
  "Content"
];
  return (
     <section id="services">
      <h2>Services</h2>

      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  )
}

export default Services