import { useFadeIn } from '../hooks/useFadeIn'

const skillGroups = [
  {
    title: 'Odoo stack',
    description:
      'Terbiasa menangani custom module, views, access rights, report, dan alur bisnis.',
    items: ['Odoo framework', 'OWL', 'Python', 'QWeb reporting'],
  },
  {
    title: 'Backend and data',
    description:
      'Membangun logika stabil, integrasi aman, dan data yang mudah dirawat.',
    items: ['PostgreSQL', 'REST API', 'Integrasi pihak ketiga', 'Troubleshooting performa'],
  },
  {
    title: 'Delivery mindset',
    description:
      'Nyaman menangani kebutuhan user, bug, dan perbaikan proses bisnis.',
    items: ['Linux environment', 'Postman', 'Client support', 'Requirement translation'],
  },
]

const strengths = [
  'Mengubah kebutuhan operasional jadi workflow yang realistis',
  'Menjaga implementasi tetap rapi meski banyak request',
  'Membuat report yang benar-benar dipakai user',
]

const additionalCapabilities = [
  'Burp Suite untuk cek request, response, dan debug integrasi',
  'API inspection untuk validasi payload, auth flow, dan troubleshooting',
  'Pendekatan integrasi yang aman saat menangani data dan endpoint',
  'Investigasi teknis untuk mencari akar masalah sebelum perbaikan',
]

const Skills = () => {
  const { domRef, isVisible } = useFadeIn()

  return (
    <section id="skills" className="section-shell">
      <div
        ref={domRef}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-heading">
          <span className="eyebrow">Keahlian utama</span>
          <h2>Bagian yang paling sering saya kerjakan di Odoo</h2>
          <p>
            Fokus saya bukan hanya coding, tapi memastikan modul, report, dan
            integrasi benar-benar membantu kerja tim.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="pill-list">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="strengths-panel">
          {strengths.map((strength) => (
            <div key={strength} className="strength-item">
              <span className="strength-dot" aria-hidden="true" />
              <p>{strength}</p>
            </div>
          ))}
        </div>

        <div className="additional-panel">
          <div className="section-heading section-heading-compact">
            <span className="eyebrow">Additional capabilities</span>
            <h2>Cybersecurity awareness dan investigasi teknis juga jadi bagian cara saya bekerja</h2>
            <p>
              Fokus utama saya tetap di Odoo development, tapi saya juga terbiasa
              memeriksa alur request, integrasi, dan masalah teknis.
            </p>
          </div>

          <div className="additional-grid">
            {additionalCapabilities.map((item) => (
              <div key={item} className="additional-item">
                <span className="additional-mark" aria-hidden="true">+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
