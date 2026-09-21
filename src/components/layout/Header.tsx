import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react'
import { cn, asset } from '@/lib/utils'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Acerca de', to: '/acerca' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Monitoreo', to: '/monitoreo' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Barra superior (oscura). En móvil es el único header: marca + hamburguesa */}
      <div className="bg-[#252525] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
          {/* Marca compacta (solo móvil) */}
          <Link to="/" className="flex items-center lg:hidden">
            <img src={asset('images/logo.png')} alt="Ingeniería Integral" className="h-8 w-auto brightness-0 invert" />
          </Link>

          {/* Datos de contacto (solo escritorio) */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:55555555" className="flex items-center gap-1.5 hover:text-[#7fa8c9] transition-colors">
              <Phone size={13} />
              <span>555-5555</span>
            </a>
            <a href="mailto:contacto@integral.com" className="flex items-center gap-1.5 hover:text-[#7fa8c9] transition-colors">
              <Mail size={13} />
              <span>contacto@integral.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/60">
              <MapPin size={13} />
              <span>Guatemala</span>
            </span>
          </div>

          {/* Redes (escritorio) + botón hamburguesa (móvil) */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2C3E50] transition-colors">
                  <Icon size={13} />
                </a>
              ))}
            </div>

            <button
              className="lg:hidden p-1.5 -mr-1.5 rounded-md text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Nav principal blanco (solo escritorio) */}
      <motion.div
        className={cn(
          'hidden lg:block bg-white transition-shadow duration-300',
          scrolled ? 'shadow-md' : 'shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={asset('images/isotipoInt.png')} alt="Integral" className="h-10 w-auto" />
            <span className="font-bold text-xl text-[#2C3E50]">Constructora Integral</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === to
                    ? 'bg-[#2C3E50] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2C3E50] text-white text-sm font-semibold rounded-lg hover:bg-[#3d5166] transition-colors"
          >
            Cotizar Proyecto
          </Link>
        </div>
      </motion.div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === to
                      ? 'bg-[#2C3E50] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="mt-2 px-5 py-3 bg-[#2C3E50] text-white text-sm font-semibold rounded-lg text-center"
              >
                Cotizar Proyecto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
