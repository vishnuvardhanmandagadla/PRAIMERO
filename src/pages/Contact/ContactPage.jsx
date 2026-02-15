import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import './ContactPage.css'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero */}
      <section className="contact__hero">
        <div className="contact__hero-grid" />
        <div className="container">
          <motion.div
            className="contact__hero-content"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="contact__breadcrumb" variants={fadeUp}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </motion.div>
            <motion.h1 className="contact__title" variants={fadeUp}>
              Let's Build the<br />
              <em>Future Together</em>
            </motion.h1>
            <motion.p className="contact__subtitle" variants={fadeUp}>
              Tell us about your vision. Our experts will respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact__body section">
        <div className="container">
          <div className="contact__grid">

            {/* Form */}
            <motion.form
              className="contact__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="company">Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="erp">Oracle ERP</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="servicenow">ServiceNow</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                <span>Submit Inquiry</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.form>

            {/* Info sidebar */}
            <motion.div
              className="contact__info"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
            >
              <div className="contact__info-block">
                <span className="contact__info-label">Email</span>
                <a href="mailto:info@praimero.com" className="contact__info-value">
                  info@praimero.com
                </a>
              </div>

              <div className="contact__info-block">
                <span className="contact__info-label">Phone</span>
                <a href="tel:+15550000000" className="contact__info-value">
                  +1 (555) 000-0000
                </a>
              </div>

              <div className="contact__info-block">
                <span className="contact__info-label">Follow Us</span>
                <div className="contact__social">
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
              </div>

              <div className="contact__info-block">
                <span className="contact__info-label">Services</span>
                <div className="contact__info-links">
                  <Link to="/erp">Oracle ERP</Link>
                  <Link to="/salesforce">Salesforce</Link>
                  <Link to="/servicenow">ServiceNow</Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}

export default ContactPage
