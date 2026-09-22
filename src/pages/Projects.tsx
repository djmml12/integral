import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'lucide-react'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { asset, cn } from '@/lib/utils'
import { PageHero } from '@/components/ui/PageHero'

const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Diseño']

const projects = [
  { id: 1, title: 'Residencia Moderna', category: 'Residencial', img: asset('images/project2.jpg'), desc: 'Vivienda unifamiliar de 3 niveles con diseño contemporáneo.' },
  { id: 2, title: 'Centro Comercial', category: 'Comercial', img: asset('images/project2.jpg'), desc: 'Complejo comercial de 8,000 m² en zona céntrica.' },
  { id: 3, title: 'Bodega Industrial', category: 'Industrial', img: asset('images/project2.jpg'), desc: 'Instalación industrial con sistema de carga automatizado.' },
  { id: 4, title: 'Diseño de Interiores', category: 'Diseño', img: asset('images/project2.jpg'), desc: 'Remodelación completa de oficinas corporativas.' },
  { id: 5, title: 'Condominio Residencial', category: 'Residencial', img: asset('images/project2.jpg'), desc: 'Conjunto habitacional de 24 unidades con áreas comunes.' },
  { id: 6, title: 'Edificio de Oficinas', category: 'Comercial', img: asset('images/project2.jpg'), desc: 'Torre de oficinas clase A con certificación energética.' },
]

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const isMobile = useIsMobile()

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      <PageHero
        eyebrow="Nuestro portafolio"
        title="Proyectos"
        description="Cada proyecto es una historia de compromiso y excelencia."
      />

      {/* Filter + Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-14 font-mono-label text-xs uppercase">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'px-5 py-2 border transition-colors',
                  active === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-primary/60 border-paper-line hover:border-primary/40'
                )}
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
                      ? 'overflow-hidden bg-white border border-paper-line'
                      : 'group relative overflow-hidden bg-paper cursor-pointer'
                  }
                >
                  {isMobile ? (
                    // Móvil: info siempre visible (sin depender del hover)
                    <>
                      <div className="relative">
                        <img src={img} alt={title} className="w-full h-52 object-cover" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-[10px] font-mono-label uppercase">
                          {category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-primary text-lg">{title}</h3>
                        <p className="text-primary/60 text-sm mt-1.5 leading-relaxed">{desc}</p>
                      </div>
                    </>
                  ) : (
                    // Escritorio: revelar detalle al hover
                    <>
                      <img src={img} alt={title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-accent text-[10px] font-mono-label uppercase">{category}</span>
                        <h3 className="text-white font-bold text-lg mt-1">{title}</h3>
                        <p className="text-white/70 text-sm mt-1">{desc}</p>
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link size={14} className="text-white" />
                      </div>
                      <div className="p-4 group-hover:opacity-0 transition-opacity">
                        <span className="text-xs text-primary/50 font-mono-label uppercase">{category}</span>
                        <h3 className="font-bold text-primary">{title}</h3>
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
