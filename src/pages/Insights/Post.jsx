import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../../data/blogs'
import Footer from '../../components/Footer/Footer'
import './Post.css'

function Post() {
  const { slug } = useParams()
  const post = blogs.find(b => b.slug === slug)

  if (!post) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <Link to="/insights">Back to Insights</Link>
      </div>
    )
  }

  return (
    <motion.main
      className="post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article className="post__article">
        <div className="post__hero section">
          <div className="container">
            <motion.div
              className="post__breadcrumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/insights">Insights</Link>
              <span>/</span>
              <span>{post.title}</span>
            </motion.div>

            <motion.div
              className="post__header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="post__meta">
                <span className="post__category">{post.category}</span>
                <span className="post__read-time">{post.readTime}</span>
                <span className="post__date">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h1 className="post__title">{post.title}</h1>
              <p className="post__excerpt">{post.excerpt}</p>
              <div className="post__author">
                <div>
                  <div className="post__author-name">{post.author.name}</div>
                  <div className="post__author-role">{post.author.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="post__content section">
          <div className="container">
            <div 
              className="post__body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <div className="post__cta section">
          <div className="container">
            <motion.div
              className="post__cta-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Transform Your Enterprise?</h2>
              <p>Let's discuss how AI can drive measurable results for your organization.</p>
              <Link to="/contact" className="post__cta-btn">
                Book Strategy Call
              </Link>
            </motion.div>
          </div>
        </div>
      </article>

      <Footer />
    </motion.main>
  )
}

export default Post
