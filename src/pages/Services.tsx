import { motion } from 'motion/react'
import { ShiftCard } from '@/components/ui/ShiftCard'
import { PageHero } from '@/components/ui/PageHero'
import { MotionLink } from '@/components/ui/MotionLink'
import { fast, stagger, springPop } from '@/lib/motion'
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
      <PageHero
        eyebrow="Soluciones completas"
        title="Nuestros Servicios"
        description="Ofrecemos soluciones integrales para cada etapa de tu proyecto, desde el concepto hasta la entrega."
        descriptionClassName="max-w-2xl mx-auto"
      />

      {/* Services grid */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, desc, features }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={stagger(i, 0.06)}
                viewport={{ once: true }}
              >
                <ShiftCard
                  className="h-full bg-white p-8"
                  hoverContent={
                    <ul className="space-y-1">
                      {features.map(f => (
                        <li key={f} className="text-white text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  }
                  mobileContent={
                    <ul className="space-y-1.5 border-t border-paper-line pt-4">
                      {features.map(f => (
                        <li key={f} className="text-primary/60 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <div className="w-14 h-14 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-bold text-primary text-xl mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </ShiftCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={fast}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-primary/70 text-lg mb-6">¿Necesitas un servicio específico? Hablemos.</p>
            <MotionLink
              to="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={springPop}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-mono-label text-xs uppercase hover:bg-primary-light transition-colors"
            >
              Solicitar cotización <ArrowRight size={18} />
            </MotionLink>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
