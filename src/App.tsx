import { HashRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Monitoreo from './pages/Monitoreo'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/monitoreo" element={<Monitoreo />} />
          </Routes>
        </Layout>
      </HashRouter>
    </MotionConfig>
  )
}
