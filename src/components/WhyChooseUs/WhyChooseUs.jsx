import { motion } from 'framer-motion'
import { 
  FaBrain, 
  FaBolt, 
  FaUsers, 
  FaLock, 
  FaChartLine, 
  FaDollarSign,
  FaRocket,
  FaShieldAlt,
  FaCog,
  FaNetworkWired
} from 'react-icons/fa'
import './WhyChooseUs.css'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

const whyFeatures = [
  // Left column - 2 cards
  {
    icon: FaBrain,
    title: 'AI-First',
    text: 'Built around automation and intelligence',
    size: 'large',
    gridArea: '1 / 1 / 3 / 2' // Top-left, spans 2 rows (big)
  },
  {
    icon: FaBolt,
    title: 'Fast Delivery',
    text: '60-day MVP timeline',
    size: 'normal',
    gridArea: '3 / 1 / 4 / 2' // Bottom-left
  },
  // Middle column - 1 big card
  {
    icon: FaUsers,
    title: 'Experts',
    text: 'Certified engineers and specialists',
    size: 'large',
    gridArea: '1 / 2 / 4 / 3' // Middle, spans all 3 rows (big)
  },
  // Right column - 3 cards
  {
    icon: FaChartLine,
    title: 'Scalable',
    text: 'Cloud-native architecture',
    size: 'normal',
    gridArea: '1 / 3 / 2 / 4' // Top-right
  },
  {
    icon: FaDollarSign,
    title: 'ROI Focused',
    text: 'Measurable business results',
    size: 'logo', // Logo style card
    gridArea: '2 / 3 / 3 / 4' // Middle-right, logo
  },
  {
    icon: FaRocket,
    title: 'Innovation',
    text: 'Cutting-edge technology solutions',
    size: 'wide', // Long at bottom
    gridArea: '3 / 3 / 4 / 4' // Bottom-right
  },
]

function WhyChooseUs() {
  return (
    <section className="why-choose-us section" id="why-choose-us">
      {/* SVG gradient definition for icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="why-choose-us-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7e57c2" />
            <stop offset="25%" stopColor="#9575cd" />
            <stop offset="50%" stopColor="#7986cb" />
            <stop offset="75%" stopColor="#5c6bc0" />
            <stop offset="100%" stopColor="#4a2040" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <motion.div
          className="why-choose-us__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.span className="why-choose-us__label" variants={fadeUp}>
            Why Choose Us
          </motion.span>
          
          <motion.h2 className="why-choose-us__title" variants={fadeUp}>
            Why <em>PRAIMERO</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="why-choose-us__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {whyFeatures.map((feature, i) => {
            const IconComponent = feature.icon
            return (
              <motion.div 
                key={i} 
                className={`why-choose-us__card why-choose-us__card--${feature.size}`}
                style={{
                  gridArea: feature.gridArea
                }}
                variants={fadeUp}
              >
                {feature.size === 'logo' ? (
                  <div className="why-choose-us__logo">
                    <span className="why-choose-us__logo-text">PRAIMERO</span>
                  </div>
                ) : (
                  <>
                    <div className="why-choose-us__icon">
                      <IconComponent />
                    </div>
                    <h4 className="why-choose-us__card-title">{feature.title}</h4>
                    <p className="why-choose-us__card-text">{feature.text}</p>
                  </>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
