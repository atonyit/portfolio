import { useEffect } from 'react'
import Header from './Header'
import resume from './assets/resume.pdf'
import './App.css'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const skills = [
    'C++', 'C', 'C#', 'Python', 'JavaScript', 'SQL', 'R', 'Java',
    'React', 'Node.js', 'Vue.js', 'FastAPI', 'Flask',
    'MySQL', 'PostgreSQL', 'MongoDB',
  ]

  const otherProjects = [
    { label: 'Lead Tracker',        href: 'https://github.com/atonyit/leadTracker' },
    { label: 'Add to Cart',         href: 'https://github.com/atonyit/addToCart' },
    { label: 'Tic-Tac-Toe',         href: 'https://github.com/atonyit/Tic-Tac-Toe' },
    { label: 'Division Calculator',  href: 'https://github.com/atonyit/TestProject' },
  ]

  return (
    <div className="app">
      <Header />

      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-tag">{'// CS @ University of Houston'}</span>
          <h1 className="hero-title">
            Alan<br />
            <span className="name-outline">Tony-Itoyah</span>
          </h1>
          <p className="hero-sub">
            CS student building full-stack apps, game systems, and data pipelines.
            Prev @ Spectral AI & Protiviti. Based in Houston, TX.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Work
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-grid"  aria-hidden="true" />
        <div className="bg-glow"  aria-hidden="true" />
      </section>

      {/* ── About ── */}
      <section id="about" className="section fade-in">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">01</span>
            <span className="label-text">About</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">Who I Am</h2>
            <p className="section-text">
              CS student at UH (Dec '26) with a Math minor, focused on full-stack
              development and systems design. I've shipped production software at Spectral AI and worked enterprise-scale consulting at Protiviti. Active in NSBE, CougarCS, and ColorStack.
            </p>
            <div className="skill-chips">
              {skills.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section fade-in">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">02</span>
            <span className="label-text">Projects</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">What I've Built</h2>
            <a
              href={resume}
              download="resume.pdf"
              className="btn-ghost"
            >
              Resume ↓
            </a>

            {/* featured project */}
            <div className="project-featured">
              <span className="project-featured-tag">Featured · React · Node.js · MySQL</span>
              <h3 className="project-featured-title">Cougar Public Library System</h3>
              <p className="project-featured-desc">
                A full-stack library management platform built as a project in class.
                Supports role-based access for students, librarians, and admins — handling
                borrowing, fines, holds, and device management end to end.
              </p>
              <ul className="project-bullets">
                <li>Borrowing & returns flow: due dates, renewals, timed hold auto-expiry, and late-fee calculation on return</li>
                <li>Admin dashboard with role-based access — manage users, books, devices, soft deletes, and audit reports</li>
                <li>Low-level REST API in Node.js for auth/session handling, pagination, search filters, and transactional MySQL updates</li>
              </ul>
              <div className="project-links">
                <a
                  href="https://github.com/aadibaahmed/Library_Management_System"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* project grid */}
            <div className="projects-grid">
              <div className="project-card">
                <span className="project-tag">Unity · C# · Team of 8</span>
                <h3 className="project-title">Michelin Apocalypse</h3>
                <p className="project-desc">
                  Physics-based co-op restaurant game with three themed levels built
                  in a team of 8. I owned all level design systems — station layouts,
                  navigation flow, and task pressure tuning — and led internal
                  documentation to keep the team aligned across features.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Klawedd/Cooking-Game"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-tag">Hackathon · Translation AI</span>
                <h3 className="project-title">Transl8</h3>
                <p className="project-desc">
                  Translation tool built at a hackathon to break language
                  barriers in fast-paced learning environments. Focused on low-latency
                  translation with a clean, minimal interface.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/aadibaahmed/Transl8"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-tag">.NET · C# · In Progress</span>
                <h3 className="project-title">Task Manager</h3>
                <p className="project-desc">
                  Currently learning .NET by building a full task management app.
                  Working through the ecosystem — REST APIs, EF Core, and
                  building out a clean frontend to go with it.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/atonyit/taskManager"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* smaller/older projects */}
            <p className="older-label">Earlier work & learning projects</p>
            <div className="older-projects">
              {otherProjects.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="older-link"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="section fade-in">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">03</span>
            <span className="label-text">Experience</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">Work</h2>
             <a
              href={resume}
              download="resume.pdf"
              className="btn-ghost"
            >
              Resume ↓
            </a>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-date">May – Jul 2025</span>
                  <span className="timeline-dot" />
                </div>
                <div>
                  <h3 className="timeline-role">Technology Consulting Intern · Protiviti</h3>
                  <p className="timeline-desc">
                    Assisted Oracle Cloud implementation across 3 subsidiaries impacting
                    12+ departments and 150+ users. Collaborated with engineers, analysts,
                    and stakeholders to standardize enterprise-wide data tracking, and
                    facilitated CRP testing to identify system defects before production.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-date">May – Aug 2024</span>
                  <span className="timeline-dot" />
                </div>
                <div>
                  <h3 className="timeline-role">Software Engineering Intern · Spectral AI</h3>
                  <p className="timeline-desc">
                    Owned the full SDLC of an internal tagging portal in Vue.js + FastAPI,
                    enabling streamlined label workflows across multiple teams. Built RESTful
                    APIs and modular frontend components in an Agile environment, and optimized
                    data pipelines to monitor tag lifecycle events — improving data consistency
                    by 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section-last fade-in">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">04</span>
            <span className="label-text">Contact</span>
          </div>
          <div className="section-body">
            <h2 className="section-title contact-heading">
              Let's<br />
              <span className="name-outline">Talk.</span>
            </h2>
            <p className="section-text">
              Open to internships, new grad roles, and interesting projects.
              I respond fast.
            </p>
            <a href="mailto:alanitoyah96@gmail.com" className="btn-primary contact-btn">
              alanitoyah96@gmail.com →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <span className="footer-text">© 2026 Alan Tony-Itoyah</span>
        <span className="footer-text">Houston, TX</span>
      </footer>
    </div>
  )
}

export default App