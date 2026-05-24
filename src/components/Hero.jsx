import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const quickFacts = [
  {
    label: 'Current focus',
    value: 'Aplikasi bisnis, integrasi, dan workflow',
  },
  {
    label: 'Experience',
    value: 'Sejak 2021 membangun solusi untuk klien',
  },
  {
    label: 'Strength',
    value: 'Mengubah proses rumit jadi sistem yang stabil',
  },
]

const Hero = () => {
  const { domRef, isVisible } = useFadeIn()
  const [showImage, setShowImage] = useState(true)

  return (
    <section className="hero">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <div
        ref={domRef}
        className={`hero-content fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="hero-copy">
          <span className="eyebrow">Portfolio Imron Syabani</span>
          <h1>
            Developer untuk sistem kerja yang rapi, cepat, dan relevan.
          </h1>
          <p className="hero-lead">
            Saya membangun aplikasi, integrasi, dan alur kerja digital agar
            operasional tim berjalan lebih efisien.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="button-primary">
              Lihat pengalaman
            </a>
            <a href="#skills" className="button-secondary">
              Lihat skill utama
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Nama</span>
              <strong>Imron Syabani</strong>
            </div>
            <div>
              <span className="meta-label">Lahir</span>
              <strong>05 Oktober 2002</strong>
            </div>
            <div>
              <span className="meta-label">Perusahaan</span>
              <strong>PT Alpha Solusi Teknologi</strong>
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="profile-card">
            <div className="profile-frame">
              {showImage ? (
                <img
                  src="/profile.png"
                  alt="Imron Syabani"
                  className="profile-image"
                  onError={() => setShowImage(false)}
                />
              ) : (
                <div className="profile-placeholder">
                  <span>IS</span>
                  <p>Tambahkan `public/profile.png` untuk foto profil</p>
                </div>
              )}
            </div>

            <div className="profile-caption">
              <p className="profile-role">Developer</p>
              <div className="social-links">
                <a
                  href="https://instagram.com/syabani._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@syabani._</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/imron-syabani-b9b752226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="fact-panel">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="fact-item">
                <span>{fact.label}</span>
                <p>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
