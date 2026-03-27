import { useEffect } from 'react'
import Header from './Header'
import resume from './assets/resume.pdf'
import './App.css'
import alanPhoto from './assets/alan.jpeg'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // small delay so cards are fully painted before we observe them
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.bento-card')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      )

      cards.forEach((card) => observer.observe(card))
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const skills = [
    'C++',
    'C',
    'C#',
    'Python',
    'JavaScript',
    'SQL',
    'R',
    'Java',
    'React',
    '.NET',
    'Node.js',
    'Vue.js',
    'FastAPI',
    'Flask',
    'MySQL',
    'PostgreSQL',
    'MongoDB'
  ]

  return (
    <div className="app">
      <Header />

      {/* ---- Hero ---- */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            CS @ University of Houston
          </div>

          <h1 className="hero-title">
            Alan
            <br />
            <span className="hero-title-outline">Tony-Itoyah</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              Building full-stack apps, game systems,
              <br />
              and data pipelines. Houston, TX.
            </p>
            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => scrollTo('projects')}
              >
                See my work
              </button>
              <a
                href={resume}
                download="Alan_Tony-Itoyah_Resume.pdf"
                className="btn-ghost"
              >
                Resume ↓
              </a>
            </div>
          </div>

          {/* <span className="hero-deco">01</span> */}
        </div>
      </section>

      {/* ---- About (bento grid) ---- */}
      <section id="about" className="section">
        <div className="section-tag">About me</div>
        <div className="bento-grid">
          {/* big bio card */}
          <div className="bento-card bento-bio">
            <span className="card-label">Who I am</span>
            <p className="bio-text">
              CS student at UH graduating Dec '26 with a Math minor. I've
              shipped production software at Spectral AI and done
              enterprise-scale consulting at Protiviti. Active in NSBE,
              CougarCS, and ColorStack.
            </p>
            <div className="bio-tags">
              <span>Full-stack dev</span>
              <span>Systems design</span>
              {/* <span>Applied ML</span> */}
            </div>
          </div>

          {/* flip card — front shows photo, back shows fun facts */}
          <div className="bento-card bento-flip-wrap">
            <div className="flip-card">
              <div className="flip-front">
                <img
                  src={alanPhoto}
                  alt="Alan Tony-Itoyah"
                  className="flip-photo"
                />
                <span className="flip-hint">flip me ↗</span>
              </div>
              <div className="flip-back">
                <span className="card-label">When I'm not coding...</span>
                <ul className="fun-facts">
                  <li>Basketball — I try to hoop as often as I can!</li>
                  <li>
                    I've been weightlifting since middle school and recently got
                    into distance running
                  </li>
                  <li>I LOVE reading fiction books!</li>
                  {/* <li>✈️ Traveling when I can</li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* currently card */}
          <div className="bento-card bento-currently">
            <span className="card-label">Currently</span>
            <ul className="currently-list">
              <li>📚 Learning .NET & C#</li>
              <li>🎯 Grinding LeetCode</li>
              <li>🚀 Open to 2026 roles</li>
            </ul>
          </div>

          {/* location card */}
          <div className="bento-card bento-location">
            <span className="location-city">Houston</span>
            <span className="location-state">Texas, USA</span>
          </div>

          {/* skills card — wide */}
          <div className="bento-card bento-skills">
            <span className="card-label">Tech stack</span>
            <div className="skill-chips">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* clubs card */}
          <div className="bento-card bento-clubs">
            <span className="card-label">Communities</span>
            <div className="club-list">
              <span>NSBE</span>
              <span>CougarCS</span>
              <span>ColorStack</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Projects (bento grid) ---- */}
      <section id="projects" className="section">
        <div className="section-tag">Projects</div>
        <div className="bento-grid projects-bento">
          {/* featured — spans 2 columns */}
          <div className="bento-card bento-featured">
            <div className="featured-header">
              <span className="featured-stack">React · Node.js · MySQL</span>
            </div>
            <h3 className="featured-title">Cougar Public Library System</h3>
            <p className="featured-desc">
              Full-stack library management platform with role-based access for
              students, librarians, and admins. Handles borrowing, fines, holds,
              and device management end to end.
            </p>
            <ul className="featured-bullets">
              <li>
                Borrowing & returns: due dates, renewals, auto-expiry, late fees
              </li>
              <li>
                Admin dashboard — users, books, devices, soft deletes, audit
                reports
              </li>
              <li>
                REST API in Node.js for auth, pagination, and transactional
                MySQL
              </li>
            </ul>
            <a
              href="https://github.com/aadibaahmed/Library_Management_System"
              target="_blank"
              rel="noreferrer"
              className="featured-link"
            >
              GitHub →
            </a>
          </div>

          {/* project cards */}
          <div className="bento-card bento-project">
            <span className="card-label">Unity · C# · Team of 8</span>
            <h3 className="project-name">Michelin Apocalypse</h3>
            <p className="project-blurb">
              Physics-based co-op restaurant game with four themed levels. Owned
              all level design systems — station layouts, navigation flow, and
              task pressure tuning.
            </p>
            <a
              href="https://github.com/Klawedd/Cooking-Game"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub →
            </a>
          </div>

          <div className="bento-card bento-project">
            <span className="card-label">Hackathon · Translation AI</span>
            <h3 className="project-name">Transl8</h3>
            <p className="project-blurb">
              Translation tool built at a hackathon to break language barriers
              in fast-paced learning environments.
            </p>
            <a
              href="https://github.com/aadibaahmed/Transl8"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub →
            </a>
          </div>

          <div className="bento-card bento-project bento-project--wip">
            <span className="wip-badge">In progress</span>
            <span className="card-label">.NET · C#</span>
            <h3 className="project-name">Task Manager</h3>
            <p className="project-blurb">
              Learning .NET by building a full task management app — REST APIs,
              EF Core, and a clean frontend.
            </p>
            <a
              href="https://github.com/atonyit/taskManager"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub →
            </a>
          </div>

          {/* mini older projects card */}
          <div className="bento-card bento-older">
            <span className="card-label">Other work</span>
            <div className="older-links">
              <a
                href="https://github.com/ninatra/COSC-4368"
                target="_blank"
                rel="noreferrer"
              >
                Connect Four AI (Minimax/Alpha-Beta)
              </a>
              <a
                href="https://github.com/atonyit/leadTracker"
                target="_blank"
                rel="noreferrer"
              >
                Lead Tracker
              </a>
              <a
                href="https://github.com/atonyit/addToCart"
                target="_blank"
                rel="noreferrer"
              >
                Add to Cart
              </a>
              <a
                href="https://github.com/atonyit/Tic-Tac-Toe"
                target="_blank"
                rel="noreferrer"
              >
                Tic-Tac-Toe
              </a>
              {/* <a href="https://github.com/atonyit/TestProject" target="_blank" rel="noreferrer">Division Calc</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Experience ---- */}
      <section id="experience" className="section">
        <div className="section-tag">Experience</div>
        <div className="bento-grid exp-bento">
          <div className="bento-card bento-exp">
            <div className="exp-header">
              <span className="exp-date">May – Jul 2025</span>
              <span className="exp-badge">Consulting</span>
            </div>
            <h3 className="exp-role">Technology Consulting Intern</h3>
            <span className="exp-company">Protiviti</span>
            <p className="exp-desc">
              Assisted Oracle Cloud implementation across 3 subsidiaries
              impacting 12+ departments and 150+ users. Standardized
              enterprise-wide data tracking and facilitated CRP testing to catch
              defects before production.
            </p>
          </div>

          <div className="bento-card bento-exp bento-exp--accent">
            <div className="exp-header">
              <span className="exp-date">May – Aug 2024</span>
              <span className="exp-badge">Software Engineering</span>
            </div>
            <h3 className="exp-role">Software Engineering Intern</h3>
            <span className="exp-company">Spectral AI</span>
            <p className="exp-desc">
              Owned full SDLC of an internal tagging portal in Vue.js + FastAPI.
              Built RESTful APIs and modular frontend components in an Agile
              environment — improved data consistency by 20%.
            </p>
          </div>

          {/* stat cards */}
          <div className="bento-card bento-stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Internships</span>
          </div>

          <div className="bento-card bento-stat">
            <span className="stat-num">20%</span>
            <span className="stat-label">
              Data consistency improvement @ Spectral AI
            </span>
          </div>

          <div className="bento-card bento-stat">
            <span className="stat-num">150+</span>
            <span className="stat-label">Users impacted @ Protiviti</span>
          </div>
        </div>
      </section>

      {/* ---- Contact ---- */}
      <section id="contact" className="section">
        <div className="section-tag">Contact</div>
        <div className="contact-block">
          <h2 className="contact-title">
            Let's build
            <br />
            <span className="contact-outline">something.</span>
          </h2>
          <p className="contact-sub">Open to internships and new grad roles.</p>
          <div className="contact-links">
            <a href="mailto:alanitoyah96@gmail.com" className="btn-primary">
              alanitoyah96@gmail.com →
            </a>
            <a href="tel:4694386126" className="btn-ghost">
              469-438-6126 →
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-text">© Soon...</span>
        {/* <span className="footer-text">Houston, TX</span> */}
      </footer>
    </div>
  )
}

export default App
