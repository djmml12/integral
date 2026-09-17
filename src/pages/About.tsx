import { motion } from 'motion/react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const values = [
  'Compromiso con la excelencia en cada etapa del proyecto',
  'Uso de materiales de alta calidad y tecnología de vanguardia',
  'Transparencia y comunicación constante con nuestros clientes',
  'Cumplimiento de plazos y presupuestos acordados',
  'Equipo altamente capacitado y certificado',
  'Responsabilidad ambiental en todos nuestros procesos',
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2C3E50] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7fa8c9] text-sm font-semibold uppercase tracking-widest">Nuestra historia</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-5">Acerca de Nosotros</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Más de una década construyendo sueños y forjando confianza en Guatemala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 50, suffix: '+', label: 'Proyectos completados' },
              { target: 10, suffix: '+', label: 'Años de experiencia' },
              { target: 30, suffix: '+', label: 'Profesionales' },
              { target: 100, suffix: '%', label: 'Clientes satisfechos' },
            ].map(({ target, suffix, label }) => (
              <div key={label}>
                <div className="text-4xl font-bold text-[#2C3E50]">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <div className="text-gray-500 text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/images/about-img.webp" alt="Nuestra empresa" className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Brindar soluciones integrales de construcción, diseño y supervisión que superen las expectativas
                de nuestros clientes, garantizando calidad, seguridad y entrega oportuna en cada proyecto.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser la constructora de referencia en Guatemala, reconocida por la excelencia en cada obra,
                la innovación tecnológica y el impacto positivo en las comunidades donde construimos.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C3E50] text-white font-semibold rounded-xl hover:bg-[#3d5166] transition-colors"
            >
              Trabaja con nosotros <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#2C3E50] text-sm font-semibold uppercase tracking-widest">Lo que nos define</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <CheckCircle2 className="text-[#2C3E50] mt-0.5 shrink-0" size={20} />
                <p className="text-gray-700 text-sm leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
