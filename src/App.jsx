import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/Landing/LandingPage'

// Lazy-load non-landing pages for faster initial load
const ERPPage = lazy(() => import('./pages/ERP/ERPPage'))
const SalesforcePage = lazy(() => import('./pages/Salesforce/SalesforcePage'))
const ServiceNowPage = lazy(() => import('./pages/ServiceNow/ServiceNowPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))

function App() {
  const location = useLocation()

  return (
    <>
      <div className="site-wrapper site-wrapper--visible">
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/erp" element={<ERPPage />} />
              <Route path="/salesforce" element={<SalesforcePage />} />
              <Route path="/servicenow" element={<ServiceNowPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
