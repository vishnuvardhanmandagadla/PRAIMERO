import { motion } from 'framer-motion'
import Hero3D from '../../components/Hero3D/Hero3D'
import About from '../../components/About/About'
import Metrics from '../../components/Metrics/Metrics'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Partners from '../../components/Partners/Partners'
import Services from '../../components/Services/Services'
import CTA from '../../components/CTA/CTA'
import Footer from '../../components/Footer/Footer'
import './LandingPage.css'

function LandingPage() {
  return (
    <motion.main
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero3D />
      <About />
      <Partners />
      <Services />
      <Metrics />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </motion.main>
  )
}

export default LandingPage
