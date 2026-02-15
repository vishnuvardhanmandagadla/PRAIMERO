import { motion } from 'framer-motion'
import './ServiceNowModel3D.css'

function Gear({ className, teethCount, label }) {
  const teeth = Array.from({ length: teethCount }, (_, i) =>
    (360 / teethCount) * i
  )

  return (
    <div className={`sn-gear ${className}`}>
      {/* Teeth sit behind the body — body covers their bases */}
      {teeth.map((angle, i) => (
        <div
          key={i}
          className="sn-gear__tooth"
          style={{ '--a': `${angle}deg` }}
        />
      ))}
      {/* Main circular body */}
      <div className="sn-gear__body" />
      {/* Inner decorative ring with spoke pseudo-elements */}
      <div className="sn-gear__ring" />
      {/* Center hub */}
      <div className="sn-gear__hub" />
      {/* Counter-rotating label */}
      <span className="sn-gear__label">{label}</span>
    </div>
  )
}

function ServiceNowModel3D() {
  return (
    <motion.div
      className="sn-model"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <div className="sn-model__assembly">
        <Gear className="sn-gear--lg" teethCount={12} label="ITSM" />
        <Gear className="sn-gear--sm1" teethCount={8} label="ITOM" />
        <Gear className="sn-gear--sm2" teethCount={8} label="CSM" />
      </div>
    </motion.div>
  )
}

export default ServiceNowModel3D
