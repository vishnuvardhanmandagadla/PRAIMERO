import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import Footer from '../../components/Footer/Footer'
import SalesforceModel3D from '../../components/ServiceModels/SalesforceModel3D'
import '../ERP/ServicePage.css'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function SalesforcePage() {
  const service = services.find(s => s.id === 'salesforce')

  return (
    <motion.main
      className="sp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="sp__hero">
        <div className="sp__hero-bg">
          <div className="sp__hero-gradient" />
          <div className="sp__hero-grid" />
        </div>
        <div className="sp__hero-model">
          <SalesforceModel3D />
        </div>
        <div className="container">
          <motion.div
            className="sp__hero-content"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="sp__breadcrumb" variants={fadeUp}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>{service.title}</span>
            </motion.div>
            <motion.h1 className="sp__title" variants={fadeUp}>
              Salesforce
              <em> AI Ecosystem</em>
            </motion.h1>
            <motion.p className="sp__desc" variants={fadeUp}>
              Transform customer engagement through intelligent CRM automation.
            </motion.p>
            <motion.div className="sp__tags" variants={fadeUp}>
              {service.features.map((f, i) => (
                <span key={i} className="sp__tag">{f}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="sp__modules section">
        {/* Animated blue amoeba gradient blobs */}
        <div className="sp__modules-blob sp__modules-blob--1" />
        <div className="sp__modules-blob sp__modules-blob--2" />
        <div className="sp__modules-blob sp__modules-blob--3" />
        <div className="sp__modules-blob sp__modules-blob--4" />
        <div className="container">
          <motion.h2
            className="sp__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            AI-Enhanced <em>Solutions</em>
          </motion.h2>
          <div className="sp__modules-grid">
            {service.modules.map((m, i) => (
              <motion.div
                key={i}
                className="sp__module"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="sp__module-num">0{i + 1}</span>
                <h3>{m.name}</h3>
                <p>{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp__benefits section">
        <div className="container">
          <motion.h2
            className="sp__section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Business <em>Impact</em>
          </motion.h2>
          <ul className="sp__benefits-list">
            {service.benefits.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="sp__check">&#10003;</span>
                {b}
              </motion.li>
            ))}
          </ul>
          <Link to="/contact" className="sp__cta-btn">
            Accelerate Growth
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}

export default SalesforcePage
