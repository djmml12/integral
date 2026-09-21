import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '@/lib/utils'
import { motion, useInView } from 'motion/react'
import { ShiftCard } from '@/components/ui/ShiftCard'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import {
  Building2, Pencil, Eye, Wrench,
  ShieldCheck, Trophy, Handshake,
  ArrowRight, ChevronDown
} from 'lucide-react'

// ── Hero ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-fit relative flex flex-col items-center justify-center overflow-hidden bg-[#2C3E50] py-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3d5166] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#1a2a38] rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1 lg:py-1.5 rounded-full border border-white/20 text-white/70 text-xs lg:text-sm mb-[2.5svh] lg:mb-6 backdrop-blur-sm">
            Construcción · Diseño · Monitoreo
          </span>
          <h1 className="text-[length:min(9vw,6svh,3rem)] lg:text-7xl font-bold text-white leading-tight mb-[2svh] lg:mb-6">
            Construimos tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7fa8c9] to-[#a8c8e0]">
              visión
            </span>
          </h1>
          <p className="text-[length:max(0.75rem,min(4vw,2.6svh,1.125rem))] lg:text-xl text-white/70 max-w-2xl mx-auto mb-[3svh] lg:mb-10 leading-relaxed">
            Con experiencia, tecnología de vanguardia y un equipo altamente capacitado,
            hacemos realidad tus proyectos con seguridad y excelencia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-[1.5svh] sm:gap-4"
        >
          <Link
            to="/contacto"
            className="px-8 h-[max(2.5rem,6svh)] lg:h-auto lg:py-4 text-sm lg:text-base bg-white text-[#2C3E50] font-bold rounded-xl hover:bg-[#7fa8c9] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            Cotizar Proyecto <ArrowRight size={18} />
          </Link>
          <Link
            to="/proyectos"
            className="px-8 h-[max(2.5rem,6svh)] lg:h-auto lg:py-4 text-sm lg:text-base inline-flex items-center border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ver Proyectos
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-[3svh] lg:mt-20 grid grid-cols-3 gap-3 lg:gap-8 max-w-lg mx-auto"
        >
          {[
            { target: 50, suffix: '+', label: 'Proyectos' },
            { target: 10, suffix: '+', label: 'Años exp.' },
            { target: 100, suffix: '%', label: 'Satisfacción' },
          ].map(({ target, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="text-[length:min(8vw,4.5svh)] lg:text-3xl font-bold text-white leading-tight">
                <AnimatedCounter target={target} suffix={suffix} />
              </div>
              <div className="text-white/50 text-xs lg:text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────
const services = [
  {
    Icon: Building2,
    title: 'Construcción',
    desc: 'Edificación de proyectos residenciales, comerciales e industriales con los más altos estándares de calidad.',
    img: asset('images/s1.png'),
  },
  {
    Icon: Pencil,
    title: 'Diseño',
    desc: 'Diseño arquitectónico y de interiores que combina funcionalidad, estética y eficiencia para tu espacio ideal.',
    img: asset('images/s2.png'),
  },
  {
    Icon: Eye,
    title: 'Monitoreo',
    desc: 'Supervisión en tiempo real de obras en curso para garantizar el cumplimiento de plazos y estándares.',
    img: asset('images/s3.png'),
  },
  {
    Icon: Wrench,
    title: 'Mantenimiento',
    desc: 'Servicios integrales de mantenimiento preventivo y correctivo para preservar el valor de tu inversión.',
    img: asset('images/s1.png'),
  },
]

function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#2C3E50] text-sm font-semibold uppercase tracking-widest">Nuestros servicios</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Lo que hacemos</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Soluciones completas para cada etapa de tu proyecto de construcción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ShiftCard
                className="h-full p-6 border border-gray-100"
                hoverContent={
                  <p className="text-white text-sm leading-relaxed">{desc}</p>
                }
              >
                <div className="w-12 h-12 rounded-xl bg-[#2C3E50]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#2C3E50]" size={22} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed md:line-clamp-3">{desc}</p>
              </ShiftCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-[#2C3E50] font-semibold hover:underline"
          >
            Ver todos los servicios <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#2C3E50]/5 rounded-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#2C3E50]/10 rounded-2xl" />
            <img
              src={asset('images/about-img.webp')}
              alt="Acerca de Constructora Integral"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 z-20 bg-[#2C3E50] text-white rounded-xl px-5 py-4">
              <div className="text-3xl font-bold"><AnimatedCounter target={10} suffix="+" /></div>
              <div className="text-white/70 text-sm">Años de experiencia</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[#2C3E50] text-sm font-semibold uppercase tracking-widest">Acerca de nosotros</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Construimos más que espacios,<br />construimos confianza
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              En Constructora Integral, transformamos tus ideas en realidades sólidas. Con un equipo de expertos,
              materiales de alta calidad y un compromiso inquebrantable con la excelencia, aseguramos que tu
              proyecto se entregue a tiempo y con los mejores estándares.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Desde el diseño hasta la entrega final, trabajamos con transparencia, profesionalismo y pasión
              para hacer que cada proyecto supere tus expectativas.
            </p>
            <Link
              to="/acerca"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C3E50] text-white font-semibold rounded-xl hover:bg-[#3d5166] transition-colors"
            >
              Conoce más <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Why Us ────────────────────────────────────────────────────────────
const reasons = [
  {
    Icon: Trophy,
    title: 'Compromiso y Calidad en Cada Proyecto',
    desc: 'Con un equipo de expertos, materiales de alta calidad y un compromiso inquebrantable con la excelencia, aseguramos que tu proyecto se entregue a tiempo y con los mejores estándares.',
  },
  {
    Icon: ShieldCheck,
    title: 'Experiencia y Seguridad para tu Inversión',
    desc: 'Con años de experiencia, tecnología de vanguardia y un equipo altamente capacitado, hacemos realidad tus proyectos con seguridad y eficiencia. ¡Tu tranquilidad es nuestra prioridad!',
  },
  {
    Icon: Handshake,
    title: 'Construimos Más que Espacios, Construimos Confianza',
    desc: 'Desde el diseño hasta la entrega final, trabajamos con transparencia, profesionalismo y pasión para hacer que cada proyecto supere tus expectativas.',
  },
]

function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7fa8c9] text-sm font-semibold uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="text-4xl font-bold text-white mt-2">¿Por qué trabajar con nosotros?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Icon className="text-[#7fa8c9]" size={26} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact CTA ───────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2C3E50] to-[#1a2a38] rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Cuéntanos tu idea y te damos una cotización sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C3E50] font-bold rounded-xl hover:bg-[#7fa8c9] hover:text-white transition-colors"
          >
            Escribenos ahora <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <ContactCTA />
    </>
  )
}
