import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'lucide-react'
import { useIsMobile } from '@/hooks/useMediaQuery'

const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Diseño']

const projects = [
  { id: 1, title: 'Residencia Moderna', category: 'Residencial', img: '/images/project2.jpg', desc: 'Vivienda unifamiliar de 3 niveles con diseño contemporáneo.' },
  { id: 2, title: 'Centro Comercial', category: 'Comercial', img: '/images/project2.jpg', desc: 'Complejo comercial de 8,000 m² en zona céntrica.' },
  { id: 3, title: 'Bodega Industrial', category: 'Industrial', img: '/images/project2.jpg', desc: 'Instalación industrial con sistema de carga automatizado.' },
  { id: 4, title: 'Diseño de Interiores', category: 'Diseño', img: '/images/project2.jpg', desc: 'Remodelación completa de oficinas corporativas.' },
  { id: 5, title: 'Condominio Residencial', category: 'Residencial', img: '/images/project2.jpg', desc: 'Conjunto habitacional de 24 unidades con áreas comunes.' },
  { id: 6, title: 'Edificio de Oficinas', category: 'Comercial', img: '/images/project2.jpg', desc: 'Torre de oficinas clase A con certificación energética.' },
]

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const isMobile = useIsMobile()

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2C3E50] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7fa8c9] text-sm font-semibold uppercase tracking-widest">Nuestro portafolio</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-5">Proyectos</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Cada proyecto es una historia de compromiso y excelencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-[#2C3E50] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map(({ id, title, category, img, desc }) => (
                <motion.div
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={
                    isMobile
                      ? 'overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100'
                      : 'group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md cursor-pointer'
                  }
                >
                  {isMobile ? (
                    // Móvil: info siempre visible (sin depender del hover)
                    <>
                      <div className="relative">
                        <img src={img} alt={title} className="w-full h-52 object-cover" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#2C3E50] text-white text-xs font-semibold uppercase tracking-widest rounded-full">
                          {category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                        <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{desc}</p>
                      </div>
                    </>
                  ) : (
                    // Escritorio: revelar detalle al hover
                    <>
                      <img src={img} alt={title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-[#2C3E50]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-[#7fa8c9] text-xs font-semibold uppercase tracking-widest">{category}</span>
                        <h3 className="text-white font-bold text-lg mt-1">{title}</h3>
                        <p className="text-white/70 text-sm mt-1">{desc}</p>
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link size={14} className="text-white" />
                      </div>
                      <div className="p-4 group-hover:opacity-0 transition-opacity">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">{category}</span>
                        <h3 className="font-bold text-gray-900">{title}</h3>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
