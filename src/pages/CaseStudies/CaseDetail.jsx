import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import Footer from '../../components/Footer/Footer'
import './CaseDetail.css'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function CaseDetail() {
  const { id } = useParams()
  const caseStudy = caseStudies.find(cs => cs.id === id)

  if (!caseStudy) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Case Study Not Found</h1>
        <Link to="/case-studies">Back to Case Studies</Link>
      </div>
    )
  }

  return (
    <motion.main
      className="case-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="case-detail__hero section">
        <div className="container">
          <motion.div
            className="case-detail__breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/case-studies">Case Studies</Link>
            <span>/</span>
            <span>{caseStudy.company}</span>
          </motion.div>

          <motion.div
            className="case-detail__header"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="case-detail__meta" variants={fadeUp}>
              <span className="case-detail__industry">{caseStudy.industry}</span>
              <span className="case-detail__platform">{caseStudy.platform}</span>
              {caseStudy.confidential && (
                <span className="case-detail__confidential">Confidential</span>
              )}
            </motion.div>
            <motion.h1 className="case-detail__title" variants={fadeUp}>
              {caseStudy.company}
            </motion.h1>
            <motion.div className="case-detail__result" variants={fadeUp}>
              <span className="case-detail__result-metric">{caseStudy.resultMetric}</span>
              <span className="case-detail__result-label">{caseStudy.resultLabel}</span>
              <span className="case-detail__result-time">in {caseStudy.resultTimeframe}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="case-detail__content section">
        <div className="container">
          <div className="case-detail__grid">
            <div className="case-detail__main">
              <motion.section
                className="case-detail__section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Client Overview</h2>
                <p>{caseStudy.overview}</p>
              </motion.section>

              <motion.section
                className="case-detail__section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Problem Statement</h2>
                <p>{caseStudy.problem}</p>
              </motion.section>

              <motion.section
                className="case-detail__section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Solution Architecture</h2>
                <p>{caseStudy.solution}</p>
              </motion.section>

              <motion.section
                className="case-detail__section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Implementation Stack</h2>
                <ul className="case-detail__stack">
                  {caseStudy.stack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                className="case-detail__section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Business Results</h2>
                <ul className="case-detail__results">
                  {caseStudy.results.map((result, i) => (
                    <li key={i}>
                      <span className="case-detail__check">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </section>

      <section className="case-detail__cta section">
        <div className="container">
          <motion.div
            className="case-detail__cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Achieve Similar Results?</h2>
            <p>Book a strategy call to discuss how we can transform your enterprise.</p>
            <Link to="/contact" className="case-detail__cta-btn">
              Book Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}

export default CaseDetail
