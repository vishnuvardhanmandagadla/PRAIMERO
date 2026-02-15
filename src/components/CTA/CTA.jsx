import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBolt, FaBullseye, FaRocket } from 'react-icons/fa'
import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <motion.h2
            className="cta__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            The <em>Revolution</em> Starts Here
          </motion.h2>

          <motion.p
            className="cta__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Transform your enterprise into an unstoppable force. Where intelligence meets innovation, where data becomes destiny, where your competition becomes history.
          </motion.p>

          <motion.div
            className="cta__features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cta__feature">
              <FaBolt className="cta__feature-icon" />
              <span className="cta__feature-text">60-Day MVP Delivery</span>
            </div>
            <div className="cta__feature">
              <FaBullseye className="cta__feature-icon" />
              <span className="cta__feature-text">99% Client Retention</span>
            </div>
            <div className="cta__feature">
              <FaRocket className="cta__feature-icon" />
              <span className="cta__feature-text">24/7 Expert Support</span>
            </div>
          </motion.div>

          <motion.div
            className="cta__actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact" className="cta__btn cta__btn--outline">
              Join the Revolution
            </Link>
            <Link to="/contact" className="cta__btn cta__btn--primary">
              Claim Your Future
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
