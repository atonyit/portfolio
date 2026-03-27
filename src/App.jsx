import Header from './Header'
import './App.css'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header />

      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-tag">{'// CS Student & Developer'}</span>
          <h1 className="hero-title">
            Your<br />
            <span className="name-outline">Name</span>
          </h1>
          <p className="hero-sub">
            Building at the intersection of AI, systems, and software engineering.
            Based in Houston, TX.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('project')}>
              View Work
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Background effects */}
        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-grid"  aria-hidden="true" />
        <div className="bg-glow"  aria-hidden="true" />
      </section>

      {/* ── About ── */}
      <section id="about" className="section">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">01</span>
            <span className="label-text">About</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">Who I Am</h2>
            <p className="section-text">
              I'm a Computer Science student at the University of Houston,
              passionate about learning new technolgies, distributed systems, and
              building software that actually matters. When I'm not coding
              I'm reading fiction books or working out!
            </p>

            <div className="skill-chips">
              {['Python', 'React', 'Node.js', 'R', 'Java', 'SQL', 'Git'].map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="project" className="section">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">02</span>
            <span className="label-text">Projects</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">What I've Built</h2>

            <div className="projects-grid">
              <div className="project-card">
                <span className="project-tag">React · Node.js · MongoDB</span>
                <h3 className="project-title">Project One</h3>
                <p className="project-desc">
                  A brief description of what this project does, the problem
                  it solves, and what you learned building it.
                </p>
                <div className="project-links">
                  <a href="#" className="project-link">GitHub →</a>
                  <a href="#" className="project-link">Live →</a>
                </div>
              </div>

              <div className="project-card">
                <span className="project-tag">Python · ML · Scikit-learn</span>
                <h3 className="project-title">Project Two</h3>
                <p className="project-desc">
                  Another project description. What was the tech challenge?
                  What's the outcome or metric that shows it worked?
                </p>
                <div className="project-links">
                  <a href="#" className="project-link">GitHub →</a>
                </div>
              </div>

              <div className="project-card project-card--accent">
                <span className="project-tag">Add yours</span>
                <h3 className="project-title">Your Next Project</h3>
                <p className="project-desc">
                  Got something in progress? Throw it here. Even WIPs show
                  initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experiences" className="section">
        <div className="section-inner">
          <div className="section-label">
            <span className="label-num">03</span>
            <span className="label-text">Experience</span>
          </div>
          <div className="section-body">
            <h2 className="section-title">Where I've Been</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-date">2023 – Present</span>
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-role">Role · Company</h3>
                  <p className="timeline-desc">
                    What you did, what you built, what impact it had.
                    Keep it punchy — one or two sentences.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-date">2022 – 2023</span>
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-role">Role · Company</h3>
                  <p className="timeline-desc">
                    Another experience. Or a relevant course / club leadership /
                    research position — it all counts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section-last">
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
              Open to internships, projects, and interesting conversations.
              Shoot me a message and I'll get back to you fast.
            </p>
            <a href="mailto:your@email.com" className="btn-primary contact-btn">
              your@email.com →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <span className="footer-text">© 2026 Your Name · Built with React</span>
        <span className="footer-text">Houston, TX</span>
      </footer>
    </div>
  )
}

export default App