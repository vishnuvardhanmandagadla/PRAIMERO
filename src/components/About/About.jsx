import { motion } from 'framer-motion'
import './About.css'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '3', label: 'Core Platforms' },
  { value: '99%', label: 'Client Retention' },
  { value: '24/7', label: 'Support Coverage' },
]

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__wrapper">
          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.span className="about__label" variants={fadeUp}>
              Who We Are
            </motion.span>
            
            <motion.h2 className="about__title" variants={fadeUp}>
              Redefining{' '}
              <em className="about__highlight">Enterprise Intelligence</em>
            </motion.h2>
            
            <motion.p className="about__text" variants={fadeUp}>
              PRAIMERO is a specialized enterprise AI consulting firm dedicated to transforming how organizations operate in the digital economy.
            </motion.p>
            
            <motion.p className="about__text" variants={fadeUp}>
              Our certified engineers and AI specialists combine platform mastery with advanced analytics to deliver solutions that are scalable, secure, and future-ready.
            </motion.p>

            <motion.p className="about__text" variants={fadeUp}>
              We believe artificial intelligence must be embedded at the core of enterprise decision-making. Our solutions go beyond implementation—driving measurable business outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="about__image-placeholder">
              {/* Image placeholder - can be replaced with actual image */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
