import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/erp', label: 'Oracle ERP' },
  { path: '/salesforce', label: 'Salesforce' },
  { path: '/servicenow', label: 'ServiceNow' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav__inner container">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-text">PR</span>
            <span className="nav__logo-accent">AI</span>
            <span className="nav__logo-text">MERO</span>
          </Link>

          <div className="nav__links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav__link ${location.pathname === link.path ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="nav__cta">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <button
            className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="nav__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="nav__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="nav__mobile-inner">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`nav__mobile-link ${location.pathname === link.path ? 'nav__mobile-link--active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="nav__mobile-num">0{i + 1}</span>
                      <span className="nav__mobile-label">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="nav__mobile-footer"
                >
                  <Link to="/contact" className="nav__cta" onClick={() => setMenuOpen(false)}>
                    <span>Let's Talk</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
