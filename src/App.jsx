import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/Landing/LandingPage'
import Intro from './components/Intro/Intro'

// Lazy-load non-landing pages for faster initial load
const ERPPage = lazy(() => import('./pages/ERP/ERPPage'))
const SalesforcePage = lazy(() => import('./pages/Salesforce/SalesforcePage'))
const ServiceNowPage = lazy(() => import('./pages/ServiceNow/ServiceNowPage'))
const CaseStudies = lazy(() => import('./pages/CaseStudies/CaseStudies'))
const CaseDetail = lazy(() => import('./pages/CaseStudies/CaseDetail'))
const Insights = lazy(() => import('./pages/Insights/Insights'))
const Post = lazy(() => import('./pages/Insights/Post'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))

function App() {
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [location.pathname])

  const [introComplete, setIntroComplete] = useState(() => {
    // Always show intro on home page, regardless of localStorage
    if (location.pathname !== '/') {
      return true
    }
    return false
  })

  useEffect(() => {
    if (location.pathname !== '/') {
      setIntroComplete(true)
    }
  }, [location.pathname])

  const handleIntroComplete = () => {
    setIntroComplete(true)
    window.dispatchEvent(new CustomEvent('introAnimationComplete'))
  }

  const shouldShowIntro = !introComplete && location.pathname === '/'

  return (
    <>
      {shouldShowIntro && <Intro onComplete={handleIntroComplete} />}
      <div className="site-wrapper site-wrapper--visible">
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/erp" element={<ERPPage />} />
              <Route path="/salesforce" element={<SalesforcePage />} />
              <Route path="/servicenow" element={<ServiceNowPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:id" element={<CaseDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<Post />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
