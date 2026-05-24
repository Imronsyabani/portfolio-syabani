import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { projects } from '../data/projects'

const experienceItems = [
  {
    role: 'Developer',
    company: 'PT Alpha Solusi Teknologi (Alphasoft)',
    period: 'Juni 2021 - Sekarang',
    points: [
      'Mengembangkan modul Purchase, Accounting, Sales, Manufacturing, Inventory, HR, dan Portal User.',
      'Mengerjakan custom field, workflow, dan report sesuai kebutuhan klien.',
      'Menangani debugging, optimasi performa, dan integrasi seperti Jubelio.',
      'Terbiasa menjaga solusi tetap stabil di berbagai kebutuhan klien.',
    ],
  },
  {
    role: 'Network Monitoring Intern',
    company: 'PT IPWAN',
    period: 'Februari 2021 - April 2021',
    points: [
      'Memantau jaringan ATM agar uptime dan respons insiden tetap cepat.',
      'Berkoordinasi dengan tim lapangan untuk analisis dan penyelesaian gangguan.',
      'Menyusun laporan latency dan performa untuk evaluasi operasional.',
    ],
  },
]

const metrics = [
  { value: '29+', label: 'enterprise client delivered' },
  { value: '10+', label: 'scope modul dan workflow' },
  { value: 'End-to-end', label: 'dari requirement sampai handover' },
]

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-media">
        {!imageFailed && project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-badge">{getInitials(project.name)}</div>
        )}
      </div>
      <div>
        <p className="project-name">{project.name}</p>
        <span className="project-link">Buka referensi</span>
      </div>
    </a>
  )
}

const Experience = () => {
  const { domRef, isVisible } = useFadeIn()

  return (
    <section id="experience" className="section-shell section-shell-accent">
      <div
        ref={domRef}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="section-heading">
          <span className="eyebrow">Pengalaman kerja</span>
          <h2>Pengalaman membangun sistem yang dipakai tim operasional</h2>
          <p>
            Saya terbiasa bekerja di area penting untuk bisnis: transaksi,
            approval, stok, accounting, reporting, dan integrasi.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="timeline">
          {experienceItems.map((item) => (
            <article key={`${item.role}-${item.company}`} className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>

              <ul className="experience-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section-heading section-heading-compact">
          <span className="eyebrow">Selected clients</span>
          <h2>Beberapa organisasi yang pernah saya dukung</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
