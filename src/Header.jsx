import { useEffect, useState } from 'react'
import headerLogo from '/src/assets/diamondLogo.png'
import './Header.css'
import { IoIosMail } from 'react-icons/io'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const ParallaxHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [activeSection, setActiveSection] = useState('')

useEffect(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    { threshold: 0.7 }
  )

  sections.forEach((s) => observer.observe(s))
  return () => observer.disconnect()
}, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 64, behavior: 'smooth' })
    }
    // close menu after clicking a link
    setMenuOpen(false)
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <div
          className="logo-wrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={headerLogo} alt="Logo" className="logo" />
        </div>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Contact icons */}
        <div className="contact-icons">
          <a href="mailto:your@email.com" className="icon-link" aria-label="Email">
            <IoIosMail />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Hamburger — only visible on mobile via CSS */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            className={`mobile-nav-link ${activeSection === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Scroll progress */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </header>
  )
}

export default ParallaxHeader