import { useRef, useState, useCallback, useId } from 'react'
import { motion } from 'framer-motion'

function TextHoverEffect({ text, duration = 0 }) {
  const svgRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })
  const uid = useId().replace(/:/g, '')

  const handleMouseMove = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const cx = ((e.clientX - rect.left) / rect.width) * 100
    const cy = ((e.clientY - rect.top) / rect.height) * 100
    setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` })
  }, [])

  const gradientId = `textGrad-${uid}`
  const maskGradId = `revealGrad-${uid}`
  const maskId = `revealMask-${uid}`

  const textStyle = {
    fontFamily: "'Inter Tight', 'Arial Black', sans-serif",
    fontSize: '140px',
    fontWeight: 800,
    letterSpacing: '0.05em',
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1200 280"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: 'default' }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0a1f" />
          <stop offset="20%" stopColor="#2d1b3d" />
          <stop offset="40%" stopColor="#4a2040" />
          <stop offset="60%" stopColor="#6a4c9a" />
          <stop offset="80%" stopColor="#7e57c2" />
          <stop offset="100%" stopColor="#2d1b3d" />
        </linearGradient>

        <motion.radialGradient
          id={maskGradId}
          gradientUnits="userSpaceOnUse"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          initial={{ r: '0%' }}
          animate={hovered ? { r: '80%' } : { r: '0%' }}
          transition={{ duration: duration || 0.4, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${maskGradId})`} />
        </mask>
      </defs>

      {/* Layer 1: Stroke outline (always visible) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="1"
        stroke="rgba(0,0,0,0.25)"
        fill="transparent"
        paintOrder="stroke"
        strokeLinejoin="round"
        style={textStyle}
      >
        {text}
      </text>

      {/* Layer 2: Animated stroke-draw on hover */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="1.2"
        fill="transparent"
        paintOrder="stroke"
        strokeLinejoin="round"
        style={textStyle}
        initial={{ strokeDashoffset: 1800, strokeDasharray: 1800 }}
        animate={hovered
          ? { strokeDashoffset: 0, stroke: 'rgba(0,0,0,0.4)' }
          : { strokeDashoffset: 1800, stroke: 'rgba(0,0,0,0)' }
        }
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>

      {/* Layer 3: Gradient fill revealed by cursor mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={`url(#${gradientId})`}
        mask={`url(#${maskId})`}
        style={textStyle}
      >
        {text}
      </text>
    </svg>
  )
}

export default TextHoverEffect
