import { motion } from 'motion/react'
import { Tv2, MapPin, FileText, Calendar, Building2, Users } from 'lucide-react'
import { LazyEmbed } from '@/components/ui/LazyEmbed'

const TWITCH_CHANNEL = 'djmmsnm'
// `parent` debe coincidir con el dominio que sirve la página.
// Lo tomamos del host actual para que funcione en dev (localhost) y producción.
const twitchHost = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
const TWITCH_SRC = `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${twitchHost}&autoplay=true&muted=true`
const MAPS_SRC = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.90664148875464!2d-91.79453932802467!3d14.964576200295202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sgt!4v1755210126225!5m2!1ses-419!2sgt'

export default function Monitoreo() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2C3E50] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7fa8c9] text-sm font-semibold uppercase tracking-widest">Supervisión en tiempo real</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-5">Monitoreo de Obras</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Seguimiento en vivo del avance de nuestros proyectos activos, con transparencia y tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Stream */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tv2 className="text-[#2C3E50]" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Cámara en Vivo</h2>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> EN VIVO
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black"
              style={{ aspectRatio: '16/9' }}>
              <LazyEmbed
                src={TWITCH_SRC}
                title="Stream en vivo de la obra"
                label="Toca para ver el stream en vivo"
                icon={<Tv2 size={26} className="text-white" />}
              />
            </div>
            <p className="text-gray-400 text-xs mt-2 text-right">
              * El stream puede no estar disponible fuera del horario de obra (7am–5pm)
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-[#2C3E50]" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Ubicación de la Obra</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80">
              <LazyEmbed
                src={MAPS_SRC}
                title="Ubicación de la obra"
                label="Toca para ver el mapa"
                icon={<MapPin size={26} className="text-white" />}
              />
            </div>
          </motion.div>

          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#2C3E50]" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Descripción del Proyecto</h2>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {[
                  { Icon: Building2, label: 'Proyecto', value: 'NOG: 30643384' },
                  { Icon: FileText, label: 'Descripción', value: 'MEJORAMIENTO ESCUELA PRIMARIA CASERIO EL NANCE SAN RAFAEL PIE DE LA CUESTA, SAN MARCOS' },
                  { Icon: Users, label: 'Entidad / Unidad compradora', value: 'MUNICIPALIDAD DE SAN RAFAEL PIE DE LA CUESTA' },
                  { Icon: Calendar, label: 'Empresa Ejecutora', value: 'Constructora Integral' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2C3E50]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#2C3E50]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="font-semibold text-gray-800 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 p-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Avance del proyecto</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#2C3E50] to-[#7fa8c9] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#2C3E50] shrink-0">65%</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Fecha estimada de entrega: Q4 2025</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
