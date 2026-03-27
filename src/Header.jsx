import { useEffect, useState } from 'react'
import headerLogo from '/src/assets/diamondLogo.png'
import './Header.css'
import { IoIosMail } from 'react-icons/io'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const ParallaxHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 64, behavior: 'smooth' })
    }
  }

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

        {/* Nav */}
        <nav className="nav" aria-label="Main navigation">
          {[
            { label: 'About', id: 'about' },
            { label: 'Projects', id: 'project' },
            { label: 'Experience', id: 'experiences' },
          ].map(({ label, id }) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Contact icons */}
        <div className="contact-icons">
          <a
            href="mailto:your@email.com"
            className="icon-link"
            aria-label="Email"
          >
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
        </div>
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