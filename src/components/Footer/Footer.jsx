import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TextHoverEffect from '../ui/TextHoverEffect'
import './Footer.css'

const ease = [0.16, 1, 0.3, 1]

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Link to="/" className="footer__logo">
              <span>PR</span>
              <span className="footer__logo-accent">AI</span>
              <span>MERO</span>
            </Link>
            <p className="footer__tagline">
              Enterprise AI solutions designed for scale, security, and sustained success.
            </p>
          </motion.div>

          <div className="footer__links-grid">
            <motion.div
              className="footer__col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li><Link to="/erp">Oracle ERP</Link></li>
                <li><Link to="/salesforce">Salesforce</Link></li>
                <li><Link to="/servicenow">ServiceNow</Link></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer__col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
            >
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer__col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
            >
              <h4 className="footer__heading">Get in Touch</h4>
              <ul className="footer__list">
                <li><a href="mailto:info@praimero.com" className="footer__highlight">info@praimero.com</a></li>
                <li><a href="tel:+15550000000">+1 (555) 000-0000</a></li>
              </ul>
              <div className="footer__social">
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Large PRAIMERO text hover effect */}
        <div className="footer__hover-text">
          <TextHoverEffect text="PRAIMERO" />
        </div>

        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} PRAIMERO. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
