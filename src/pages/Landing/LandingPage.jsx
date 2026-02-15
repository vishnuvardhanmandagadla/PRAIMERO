import { motion } from 'framer-motion'
import Hero3D from '../../components/Hero3D/Hero3D'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import CTA from '../../components/CTA/CTA'
import Footer from '../../components/Footer/Footer'

function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero3D />
      <About />
      <Services />
      <CTA />
      <Footer />
    </motion.main>
  )
}

export default LandingPage
