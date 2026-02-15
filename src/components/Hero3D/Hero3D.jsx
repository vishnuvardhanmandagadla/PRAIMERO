import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useCallback, useRef, memo } from 'react'
import './Hero3D.css'

const ease = [0.16, 1, 0.3, 1]

// Generate grid positions for cubes (pre-compute transitions for memo stability)
const generateCubes = () => {
  const cubes = []
  const gridSize = 10

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const delay = (row + col) * 0.02
      cubes.push({
        id: `${row}-${col}`,
        row,
        col,
        delay,
        transition: { delay: 0.5 + delay, duration: 0.4, ease },
      })
    }
  }
  return cubes
}

const cubes = generateCubes()
const cubeInitial = { opacity: 0 }
const cubeAnimate = { opacity: 1 }

// Memoized individual cube — only re-renders when its own state changes
const Cube = memo(function Cube({ cube, isHovered, isNearby, isGlowing, onHover, onClick }) {
  const className = `hero__cube${isHovered ? ' hero__cube--hovered' : ''}${isNearby ? ' hero__cube--nearby' : ''}${isGlowing ? ' hero__cube--glow' : ''}`

  return (
    <motion.div
      className={className}
      style={{
        '--row': cube.row,
        '--col': cube.col,
      }}
      initial={cubeInitial}
      animate={cubeAnimate}
      transition={cube.transition}
      onMouseEnter={() => onHover(cube)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(cube)}
    >
      <div className="hero__cube-inner">
        <div className="hero__face hero__face--top" />
        <div className="hero__face hero__face--bottom" />
        <div className="hero__face hero__face--front" />
        <div className="hero__face hero__face--back" />
        <div className="hero__face hero__face--left" />
        <div className="hero__face hero__face--right" />
      </div>
    </motion.div>
  )
})

function Hero3D() {
  const [hoveredCube, setHoveredCube] = useState(null)
  const [nearbyHovered, setNearbyHovered] = useState(new Set())
  const [glowCubes, setGlowCubes] = useState(new Set())
  const [planeWave, setPlaneWave] = useState(null)
  const waveTimers = useRef([])
  const waveKey = useRef(0)

  const handleHover = useCallback((cube) => {
    setHoveredCube(cube?.id || null)

    if (cube) {
      const nearby = new Set()
      cubes.forEach(c => {
        const rowDiff = Math.abs(c.row - cube.row)
        const colDiff = Math.abs(c.col - cube.col)
        if (rowDiff <= 1 && colDiff <= 1 && c.id !== cube.id) {
          nearby.add(c.id)
        }
      })
      setNearbyHovered(nearby)
    } else {
      setNearbyHovered(new Set())
    }
  }, [])

  const handleClick = useCallback((clickedCube) => {
    // Clear any existing wave timers
    waveTimers.current.forEach(t => clearTimeout(t))
    waveTimers.current = []
    setGlowCubes(new Set())

    // Trigger plane wave from clicked cube position
    const cx = ((clickedCube.col * 56 + 52 + 250) / 1100) * 100
    const cy = ((clickedCube.row * 56 + 52 + 250) / 1100) * 100
    waveKey.current += 1
    setPlaneWave({ x: cx, y: cy, key: waveKey.current })

    // Batch glow updates by distance — glow on, then glow off
    const byDist = new Map()
    cubes.forEach(c => {
      const dist = Math.abs(c.row - clickedCube.row) + Math.abs(c.col - clickedCube.col)
      if (!byDist.has(dist)) byDist.set(dist, [])
      byDist.get(dist).push(c.id)
    })

    byDist.forEach((ids, dist) => {
      const delayMs = dist * 60

      // Glow ON
      const onTimer = setTimeout(() => {
        setGlowCubes(prev => {
          const next = new Set(prev)
          ids.forEach(id => next.add(id))
          return next
        })
      }, delayMs)

      // Glow OFF
      const offTimer = setTimeout(() => {
        setGlowCubes(prev => {
          const next = new Set(prev)
          ids.forEach(id => next.delete(id))
          return next
        })
      }, delayMs + 500)

      waveTimers.current.push(onTimer, offTimer)
    })
  }, [])

  return (
    <section className="hero">
      {/* 3D Scene with Plane and Cubes */}
      <div className="hero__scene">
        <div className="hero__scene-container">
          {/* The Base Plane */}
          <div className="hero__plane" />

          {/* Plane wave ripple */}
          {planeWave && (
            <div
              key={planeWave.key}
              className="hero__plane-wave"
              style={{
                '--wave-x': `${planeWave.x}%`,
                '--wave-y': `${planeWave.y}%`,
              }}
            />
          )}

          {/* Grid of Cubes */}
          <div className="hero__cubes-grid">
            {cubes.map((cube) => (
              <Cube
                key={cube.id}
                cube={cube}
                isHovered={hoveredCube === cube.id}
                isNearby={nearbyHovered.has(cube.id)}
                isGlowing={glowCubes.has(cube.id)}
                onHover={handleHover}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__brand"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <h1 className="hero__title">
              PRAIMERO
            </h1>
          </motion.div>

          <motion.h2
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            Empowering Enterprises Through
            <span className="hero__subtitle-accent"> Intelligent Innovation</span>
          </motion.h2>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease }}
          >
            AI-Driven Solutions for Smarter Operations and Scalable Growth. We design and deploy intelligent systems across Oracle, Salesforce, and ServiceNow—enabling enterprises to automate processes, unlock insights, and accelerate performance. PRAIMERO helps organizations move faster, operate smarter, and compete stronger through AI-powered platforms.
          </motion.p>

          <motion.div
            className="hero__tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
          >
            <span>AI</span>
            <span className="hero__tags-sep">•</span>
            <span>ERP</span>
            <span className="hero__tags-sep">•</span>
            <span>CRM</span>
            <span className="hero__tags-sep">•</span>
            <span>CLOUD</span>
            <span className="hero__tags-sep">•</span>
            <span>AUTOMATION</span>
            <span className="hero__tags-sep">•</span>
            <span>ANALYTICS</span>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease }}
          >
            <Link to="/#services" className="hero__btn hero__btn--outline">
              <span>Explore Solutions</span>
            </Link>
            <Link to="/contact" className="hero__btn hero__btn--primary">
              <span>Start Your Transformation</span>
              <span className="hero__btn-icon">+</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero3D
