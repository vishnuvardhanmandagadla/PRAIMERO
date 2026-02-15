import { motion } from 'framer-motion'
import './ERPModel3D.css'

const layers = [
  { label: 'Finance' },
  { label: 'Supply Chain' },
  { label: 'HCM' },
  { label: 'Analytics' }
]

function ERPModel3D() {
  return (
    <motion.div
      className="erp-model"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <div className="erp-model__stack">
        {layers.map((layer, i) => (
          <div key={i} className="erp-model__layer" style={{ '--i': i }}>
            <div className="erp-model__face erp-model__face--top" />
            <div className="erp-model__face erp-model__face--front" />
            <div className="erp-model__face erp-model__face--back" />
            <div className="erp-model__face erp-model__face--left" />
            <div className="erp-model__face erp-model__face--right" />
            <span className="erp-model__label">{layer.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ERPModel3D
