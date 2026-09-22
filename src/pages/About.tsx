import { motion } from 'motion/react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { PageHero } from '@/components/ui/PageHero'
import { CornerFrame } from '@/components/ui/CornerFrame'
import { Link } from 'react-router-dom'
import { asset } from '@/lib/utils'
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
      <PageHero
        eyebrow="Nuestra historia"
        title="Acerca de Nosotros"
        description="Más de una década construyendo sueños y forjando confianza en Guatemala."
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-paper-line">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 50, suffix: '+', label: 'Proyectos completados' },
              { target: 10, suffix: '+', label: 'Años de experiencia' },
              { target: 30, suffix: '+', label: 'Profesionales' },
              { target: 100, suffix: '%', label: 'Clientes satisfechos' },
            ].map(({ target, suffix, label }) => (
              <div key={label}>
                <div className="h-[2px] w-8 bg-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <div className="text-primary/60 text-sm font-mono-label uppercase mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CornerFrame colorClassName="text-primary">
              <img src={asset('images/project2.jpg')} alt="Nuestra empresa" className="w-full object-cover aspect-[4/3]" />
            </CornerFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Misión</h2>
              <div className="h-[3px] w-12 bg-accent mb-4" />
              <p className="text-primary/70 leading-relaxed">
                Brindar soluciones integrales de construcción, diseño y supervisión que superen las expectativas
                de nuestros clientes, garantizando calidad, seguridad y entrega oportuna en cada proyecto.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Visión</h2>
              <div className="h-[3px] w-12 bg-accent mb-4" />
              <p className="text-primary/70 leading-relaxed">
                Ser la constructora de referencia en Guatemala, reconocida por la excelencia en cada obra,
                la innovación tecnológica y el impacto positivo en las comunidades donde construimos.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-mono-label text-xs uppercase hover:bg-primary-light transition-colors"
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
            <span className="text-primary font-mono-label text-xs uppercase">Lo que nos define</span>
            <h2 className="text-4xl font-bold text-primary mt-2">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 border border-paper-line hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <p className="text-primary/70 text-sm leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
