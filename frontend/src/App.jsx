import { useState } from 'react'
import {
  certificates,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolioData'
import './App.css'

const ArrowIcon = () => <span aria-hidden="true">↗</span>

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home" onClick={closeMenu}>
          <span className="brand-mark">YN</span>
          <span>{profile.shortName}</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Change color theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> {profile.availability}</div>
            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <ArrowIcon /></a>
              {profile.resumeUrl ? (
                <a className="button secondary" href={profile.resumeUrl} download>Download CV <span aria-hidden="true">↓</span></a>
              ) : (
                <a className="button secondary" href={`mailto:${profile.email}?subject=CV request`}>Request CV <ArrowIcon /></a>
              )}
            </div>
            <div className="social-row" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} <ArrowIcon />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile placeholder">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="portrait-placeholder">YN</div>
              <div className="profile-card-copy">
                <span>Based in</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <div className="floating-label label-code">&lt;/&gt; Build</div>
            <div className="floating-label label-create">✦ Create</div>
          </div>
        </section>

        <section className="marquee" aria-label="Professional qualities">
          <div>
            <span>Creative Developer</span><i>✦</i>
            <span>Problem Solver</span><i>✦</i>
            <span>Continuous Learner</span><i>✦</i>
            <span>Detail Oriented</span><i>✦</i>
          </div>
        </section>

        <section className="section about" id="about">
          <SectionHeading eyebrow="About me" title="I turn ideas into useful digital experiences." />
          <div className="about-grid">
            <div className="about-copy">
              <p>{profile.about[0]}</p>
              <p>{profile.about[1]}</p>
              <a className="text-link" href="#contact">Let&apos;s work together <ArrowIcon /></a>
            </div>
            <div className="stats-grid">
              {profile.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <SectionHeading
            eyebrow="Tech stack"
            title="Tools I use to bring products to life."
            description="A practical toolkit covering the complete development process—from interface to deployment."
          />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-number">0{index + 1}</span>
                  <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeading
            eyebrow="Selected projects"
            title="A few things I’m proud to have built."
            description="Projects that combine thoughtful design, clean code, and real-world problem solving."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-preview project-preview-${index + 1}`}>
                  <div className="browser-frame">
                    <div className="browser-bar"><i /><i /><i /></div>
                    <div className="mock-interface">
                      <span className="mock-sidebar" />
                      <div className="mock-content">
                        <span className="mock-heading" />
                        <div className="mock-cards"><i /><i /><i /></div>
                        <span className="mock-chart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-copy">
                  <span className="project-index">Featured project / 0{index + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowIcon /></a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">Source code <ArrowIcon /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section certificates" id="certificates">
          <SectionHeading
            eyebrow="Certificates"
            title="Learning that keeps moving forward."
            description="Courses and credentials that strengthened my technical foundation."
          />
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <a className="certificate-card" href={certificate.url} target="_blank" rel="noreferrer" key={certificate.title}>
                <div className="certificate-top">
                  <span className="certificate-seal">✦</span>
                  <span className="certificate-year">{certificate.year}</span>
                </div>
                <div>
                  <p>{certificate.issuer}</p>
                  <h3>{certificate.title}</h3>
                </div>
                <span className="verify-link">View credential <ArrowIcon /></span>
                <span className="certificate-number">0{index + 1}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">Get in touch</p>
            <h2>Have a project in mind?<br />Let&apos;s make it happen.</h2>
            <p>I’m open to freelance work, internships, and full-time opportunities. Send me a message and I’ll get back to you.</p>
            <a className="button light" href={`mailto:${profile.email}`}>Start a conversation <ArrowIcon /></a>
          </div>
          <div className="contact-orbit" aria-hidden="true"><span>✦</span></div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">YN</span>
          <span>{profile.shortName}</span>
        </a>
        <p>Designed &amp; built with care · {new Date().getFullYear()}</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
