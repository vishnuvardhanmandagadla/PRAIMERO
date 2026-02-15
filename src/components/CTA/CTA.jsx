import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
            The AI your enterprise deserves
          </motion.h2>

          <motion.p
            className="cta__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Elevate your operations, your insights, and your impact with AI that's built for enterprise transformation.
          </motion.p>

          <motion.div
            className="cta__actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact" className="cta__btn cta__btn--outline">
              Start Free Trial
            </Link>
            <Link to="/contact" className="cta__btn cta__btn--primary">
              Get A Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
