import { motion } from 'motion/react'
import { ShiftCard } from '@/components/ui/ShiftCard'
import { Link } from 'react-router-dom'
import { Building2, Pencil, Eye, Wrench, HardHat, TreePine, ArrowRight } from 'lucide-react'

const services = [
  {
    Icon: Building2,
    title: 'Construcción Residencial',
    desc: 'Diseño y construcción de viviendas unifamiliares y multifamiliares con los más altos estándares de calidad, seguridad y confort para tu familia.',
    features: ['Diseño personalizado', 'Materiales de primera', 'Garantía de obra', 'Supervisión constante'],
  },
  {
    Icon: HardHat,
    title: 'Construcción Comercial',
    desc: 'Edificaciones comerciales e industriales que combinan funcionalidad, estética y eficiencia energética para maximizar el rendimiento de tu inversión.',
    features: ['Planos especializados', 'Gestión de permisos', 'Control de calidad', 'Entrega puntual'],
  },
  {
    Icon: Pencil,
    title: 'Diseño Arquitectónico',
    desc: 'Creamos espacios únicos que reflejan tu personalidad y necesidades, integrando tendencias modernas con la funcionalidad que tu proyecto requiere.',
    features: ['Renders 3D', 'Planos constructivos', 'Diseño de interiores', 'Asesoría personalizada'],
  },
  {
    Icon: Eye,
    title: 'Supervisión y Monitoreo',
    desc: 'Supervisión profesional en tiempo real de tus obras en curso. Garantizamos el cumplimiento de especificaciones técnicas, plazos y presupuestos.',
    features: ['Reportes diarios', 'Stream en vivo', 'Control de avance', 'Alertas tempranas'],
  },
  {
    Icon: Wrench,
    title: 'Mantenimiento Integral',
    desc: 'Servicios preventivos y correctivos para preservar el valor y funcionalidad de tus instalaciones. Atención oportuna y soluciones duraderas.',
    features: ['Diagnóstico técnico', 'Plan preventivo', 'Respuesta rápida', 'Garantía de servicio'],
  },
  {
    Icon: TreePine,
    title: 'Paisajismo y Exteriores',
    desc: 'Transformamos tus espacios exteriores en ambientes naturales únicos que complementan y realzan el valor de tu propiedad.',
    features: ['Diseño de jardines', 'Áreas recreativas', 'Iluminación exterior', 'Sistemas de riego'],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2C3E50] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7fa8c9] text-sm font-semibold uppercase tracking-widest">Soluciones completas</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-5">Nuestros Servicios</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para cada etapa de tu proyecto, desde el concepto hasta la entrega.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, desc, features }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <ShiftCard
                  className="h-full bg-white p-8 border border-gray-100"
                  hoverContent={
                    <ul className="space-y-1">
                      {features.map(f => (
                        <li key={f} className="text-white text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7fa8c9] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  }
                  mobileContent={
                    <ul className="space-y-1.5 border-t border-gray-100 pt-4">
                      {features.map(f => (
                        <li key={f} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E50] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2C3E50]/10 flex items-center justify-center mb-5">
                    <Icon className="text-[#2C3E50]" size={26} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </ShiftCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 text-lg mb-6">¿Necesitas un servicio específico? Hablemos.</p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C3E50] text-white font-bold rounded-xl hover:bg-[#3d5166] transition-colors"
            >
              Solicitar cotización <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
