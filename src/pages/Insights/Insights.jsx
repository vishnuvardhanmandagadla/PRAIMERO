import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogs } from '../../data/blogs'
import Footer from '../../components/Footer/Footer'
import './Insights.css'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function Insights() {
  return (
    <motion.main
      className="insights"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="insights__hero section">
        <div className="container">
          <motion.div
            className="insights__hero-content"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h1 className="insights__title" variants={fadeUp}>
              Insights & <em>Research</em>
            </motion.h1>
            <motion.p className="insights__subtitle" variants={fadeUp}>
              AI + Enterprise Strategy. Deep dives into how artificial intelligence transforms business operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="insights__grid section">
        <div className="container">
          <div className="insights__cards">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                className="insights__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="insights__card-header">
                  <span className="insights__category">{blog.category}</span>
                  <span className="insights__read-time">{blog.readTime}</span>
                </div>
                <h3 className="insights__card-title">
                  <Link to={`/insights/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="insights__card-excerpt">{blog.excerpt}</p>
                <div className="insights__card-footer">
                  <span className="insights__date">
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <Link to={`/insights/${blog.slug}`} className="insights__read-more">
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}

export default Insights
