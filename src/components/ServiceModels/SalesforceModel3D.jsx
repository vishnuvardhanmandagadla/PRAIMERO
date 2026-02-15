import { motion } from 'framer-motion'
import './SalesforceModel3D.css'

const orbits = [
  { id: 'sales',     label: 'Sales',   size: 160, tilt: 0,   speed: 7  },
  { id: 'service',   label: 'Service', size: 220, tilt: 55,  speed: 10 },
  { id: 'marketing', label: 'Mktg',    size: 240, tilt: 115, speed: 13 },
  { id: 'commerce',  label: 'Comm',    size: 290, tilt: 160, speed: 16 }
]

function SalesforceModel3D() {
  return (
    <motion.div
      className="sf-model"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <div className="sf-model__system">
        {/* Central hub with pulse rings via ::before / ::after */}
        <div className="sf-model__hub">
          <span className="sf-model__hub-label">CRM</span>
        </div>

        {/* Orbit rings + orbiting nodes */}
        {orbits.map(o => (
          <div
            key={o.id}
            className={`sf-model__orbit sf-model__orbit--${o.id}`}
            style={{
              '--size': `${o.size}px`,
              '--tilt': `${o.tilt}deg`,
              '--speed': `${o.speed}s`
            }}
          >
            {/* Invisible pivot that spins around orbit center */}
            <div className="sf-model__track">
              {/* Node counter-rotates to stay upright */}
              <div className="sf-model__node">
                <span className="sf-model__node-label">{o.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SalesforceModel3D
