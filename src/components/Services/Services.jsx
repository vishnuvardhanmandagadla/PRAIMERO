import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import ServiceIcon from './ServiceIcon'
import './Services.css'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function Services() {
  return (
    <section className="services section" id="services">
      {/* Animated amoeba gradient blobs */}
      <div className="services__blob services__blob--1" />
      <div className="services__blob services__blob--2" />
      <div className="services__blob services__blob--3" />
      <div className="services__blob services__blob--4" />

      <div className="container">
        <motion.div
          className="services__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.span className="services__label" variants={fadeUp}>
            Our Expertise
          </motion.span>
          <motion.h2 className="services__title" variants={fadeUp}>
            AI-Powered{' '}
            <em>Enterprise Solutions</em>
          </motion.h2>
          <motion.p className="services__subtitle" variants={fadeUp}>
            Delivering intelligent platforms that streamline operations, optimize performance, and drive sustained growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {services.map((service, i) => (
            <motion.article key={service.id} className="service-card" variants={fadeUp}>
              <div className="service-card__icon">
                <ServiceIcon serviceId={service.icon} />
              </div>
              <span className="service-card__num">0{i + 1}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.shortDescription}</p>
              <ul className="service-card__features">
                {service.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <Link to={service.route} className="service-card__link">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
