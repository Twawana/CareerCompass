import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path ? ' active' : ''
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tips', label: 'Get Tips' },
    { path: '/careers', label: 'Career Paths' },
    { path: '/about', label: 'About' },
    { path: '/cv', label: 'Make a CV' },
    { path: '/jarvis', label: 'JARVIS AI' },
  ]

  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img src="/assets/images/logo.jpg" alt="CareerCompass Logo" className="logo-img" />
          </Link>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`${menuOpen ? 'nav-open' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActive(item.path)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`mobile-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>
        </div>
      </div>
    </header>
  )
}

export default Header

