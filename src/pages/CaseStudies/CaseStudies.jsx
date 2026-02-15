import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import Footer from '../../components/Footer/Footer'
import './CaseStudies.css'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function CaseStudies() {
  return (
    <motion.main
      className="case-studies"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="case-studies__hero section">
        <div className="container">
          <motion.div
            className="case-studies__hero-content"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h1 className="case-studies__title" variants={fadeUp}>
              Real Enterprise <em>Transformations</em>
            </motion.h1>
            <motion.p className="case-studies__subtitle" variants={fadeUp}>
              Measurable impact through AI-driven systems. See how we've helped enterprises achieve significant results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="case-studies__grid section">
        <div className="container">
          <div className="case-studies__cards">
            {caseStudies.map((caseStudy, i) => (
              <motion.div
                key={caseStudy.id}
                className="case-studies__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="case-studies__card-header">
                  <span className="case-studies__industry">{caseStudy.industry}</span>
                  {caseStudy.confidential && (
                    <span className="case-studies__confidential">Confidential</span>
                  )}
                </div>
                <h3 className="case-studies__card-title">{caseStudy.company}</h3>
                <p className="case-studies__card-platform">{caseStudy.platform}</p>
                <div className="case-studies__card-result">
                  <span className="case-studies__result-metric">{caseStudy.resultMetric}</span>
                  <span className="case-studies__result-label">{caseStudy.resultLabel}</span>
                  <span className="case-studies__result-time">{caseStudy.resultTimeframe}</span>
                </div>
                <Link to={`/case-studies/${caseStudy.id}`} className="case-studies__card-link">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies__cta section">
        <div className="container">
          <motion.div
            className="case-studies__cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Enterprise?</h2>
            <p>Let's discuss how we can deliver similar results for your organization.</p>
            <Link to="/contact" className="case-studies__cta-btn">
              Book Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}

export default CaseStudies
