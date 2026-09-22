import { motion } from 'motion/react'
import { asset } from '@/lib/utils'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { MotionLink } from '@/components/ui/MotionLink'
import { springPop } from '@/lib/motion'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Acerca de', to: '/acerca' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Monitoreo', to: '/monitoreo' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Contact bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 text-sm font-mono-label">
          <a href="tel:55555555" className="flex flex-col items-center gap-2 hover:text-accent transition-colors">
            <Phone size={22} className="text-accent" />
            <span>555-5555</span>
          </a>
          <a href="mailto:contacto@integral.com" className="flex flex-col items-center gap-2 hover:text-accent transition-colors">
            <Mail size={22} className="text-accent" />
            <span>contacto@integral.com</span>
          </a>
          <span className="flex flex-col items-center gap-2 text-white/60">
            <MapPin size={22} className="text-accent" />
            <span>Guatemala</span>
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={asset('images/logo.png')} alt="Ingeniería Integral" className="h-9 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Transformamos tus ideas en realidades sólidas con compromiso, calidad y profesionalismo.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Instagram, label: 'Instagram' },
            ].map(({ Icon, label }) => (
              <motion.a key={label} href="#" aria-label={label}
                whileHover={{ scale: 1.12, rotate: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={springPop}
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors">
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-mono-label text-xs uppercase mb-4 text-accent">Navegación</h4>
          <ul className="space-y-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <MotionLink
                  to={to}
                  whileHover={{ x: 4 }}
                  transition={springPop}
                  className="inline-block text-white/70 hover:text-white text-sm transition-colors"
                >
                  {label}
                </MotionLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter placeholder */}
        <div>
          <h4 className="font-mono-label text-xs uppercase mb-4 text-accent">Cotización Rápida</h4>
          <p className="text-white/60 text-sm mb-4">¿Tienes un proyecto en mente? Contáctanos.</p>
          <MotionLink
            to="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={springPop}
            className="inline-block px-5 py-2.5 border border-white/30 text-white font-mono-label text-xs uppercase hover:bg-accent hover:border-accent hover:text-primary transition-colors"
          >
            Escribenos
          </MotionLink>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white/40 text-xs font-mono-label">
          © {new Date().getFullYear()} DLAB. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
