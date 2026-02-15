import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Metrics.css'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

const stats = [
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 3, suffix: '', label: 'Core Platforms' },
  { value: 99, suffix: '%', label: 'Client Retention' },
  { value: 24, suffix: '/7', label: 'Support Coverage' },
]

function Counter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const startValue = 0
    const endValue = value

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div className="metrics__stat-value" ref={ref}>
      {count}{suffix}
    </div>
  )
}

function Metrics() {
  return (
    <section className="metrics section" id="metrics">
      <div className="container">
        <motion.div
          className="metrics__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.span className="metrics__label" variants={fadeUp}>
            Our Impact
          </motion.span>
          
          <motion.h2 className="metrics__title" variants={fadeUp}>
            Measurable <em>Results</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="metrics__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="metrics__stat" variants={fadeUp}>
              <Counter value={stat.value} suffix={stat.suffix} duration={2} />
              <div className="metrics__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics
