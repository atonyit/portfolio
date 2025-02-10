import { useEffect, useState } from 'react'
import headerLogo from '/src/assets/diamondLogo.png'
import './Header.css'
import { IoIosMail } from 'react-icons/io'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const ParallaxHeader = () => {
  const [headerHeight, setHeaderHeight] = useState()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newHeight = Math.max(100 - scrollY, 40)
      const newOpacity = Math.max(1 - scrollY / 100, 0)
      setHeaderHeight(newHeight)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 40,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="header" style={{ height: `${headerHeight}px`, opacity }}>
      <nav className="nav flex">
        <a className="button" href="#" onClick={() => scrollToSection('about')}>
          Home
        </a>
        <a className="button" href="#" onClick={() => scrollToSection('about')}>
          About
        </a>
        <a
          className="button"
          href="#"
          onClick={() => scrollToSection('project')}
        >
          Project
        </a>
        <a
          className="button"
          href="#"
          onClick={() => scrollToSection('experiences')}
        >
          Experiences
        </a>
        <h3
          className="button"
          href="#"
          onClick={() => scrollToSection('contact')}
        >
          Contact:
          <IoIosMail className="icon" />
          <FaGithubSquare className="icon" />
          <FaLinkedin className="icon" />
        </h3>
      </nav>
      <img src={headerLogo} alt="Logo" className="logo" />
    </header>
  )
}

export default ParallaxHeader
