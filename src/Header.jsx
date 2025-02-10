import { useEffect, useState } from "react";
import headerLogo from '/src/assets/diamondLogo.png';
import './Header.css';

const ParallaxHeader = () => {
  const [headerHeight, setHeaderHeight] = useState(100);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(100 - scrollY, 40);
      const newOpacity = Math.max(1 - scrollY / 100, 0);
      setHeaderHeight(newHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 40,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header" style={{ height: `${headerHeight}px`, opacity }}>
      <img src={headerLogo} alt="Logo" className="logo" />
      <nav className="nav">
        <button onClick={() => scrollToSection("about")} >About</button>
        <button onClick={() => scrollToSection("project")} >Project</button>
        <button onClick={() => scrollToSection("experiences")} >Experiences</button>
        <button onClick={() => scrollToSection("contact")} >Contact Me</button>
      </nav>
    </header>
  );
};

export default ParallaxHeader;