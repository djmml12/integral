import { Link } from 'react-router-dom'
import { asset } from '@/lib/utils'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

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
    <footer className="bg-[#252525] text-white">
      {/* Contact bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 text-sm">
          <a href="tel:55555555" className="flex flex-col items-center gap-2 hover:text-[#7fa8c9] transition-colors">
            <Phone size={22} className="text-[#7fa8c9]" />
            <span>555-5555</span>
          </a>
          <a href="mailto:contacto@integral.com" className="flex flex-col items-center gap-2 hover:text-[#7fa8c9] transition-colors">
            <Mail size={22} className="text-[#7fa8c9]" />
            <span>contacto@integral.com</span>
          </a>
          <span className="flex flex-col items-center gap-2 text-white/60">
            <MapPin size={22} className="text-[#7fa8c9]" />
            <span>Guatemala</span>
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={asset('images/isotipoInt.png')} alt="Integral" className="h-10 w-auto brightness-0 invert" />
            <span className="font-bold text-lg">Constructora Integral</span>
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
              <a key={label} href="#" aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2C3E50] transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/40">Navegación</h4>
          <ul className="space-y-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter placeholder */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/40">Cotización Rápida</h4>
          <p className="text-white/60 text-sm mb-4">¿Tienes un proyecto en mente? Contáctanos.</p>
          <Link
            to="/contacto"
            className="inline-block px-5 py-2.5 bg-[#2C3E50] text-white text-sm font-semibold rounded-lg hover:bg-[#3d5166] transition-colors"
          >
            Escribenos
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Constructora Integral. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
