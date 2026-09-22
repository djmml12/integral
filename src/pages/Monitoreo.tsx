import { motion } from 'motion/react'
import { Tv2, MapPin, FileText, Calendar, Building2, Users } from 'lucide-react'
import { LazyEmbed } from '@/components/ui/LazyEmbed'
import { PageHero } from '@/components/ui/PageHero'
import { fast, EASE_SNAP } from '@/lib/motion'

const TWITCH_CHANNEL = 'djmmsnm'
// `parent` debe coincidir con el dominio que sirve la página.
// Lo tomamos del host actual para que funcione en dev (localhost) y producción.
const twitchHost = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
const TWITCH_SRC = `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${twitchHost}&autoplay=true&muted=true`
const MAPS_SRC = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.90664148875464!2d-91.79453932802467!3d14.964576200295202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sgt!4v1755210126225!5m2!1ses-419!2sgt'

export default function Monitoreo() {
  return (
    <div>
      <PageHero
        eyebrow="Supervisión en tiempo real"
        title="Monitoreo de Obras"
        description="Seguimiento en vivo del avance de nuestros proyectos activos, con transparencia y tecnología."
        descriptionClassName="max-w-2xl mx-auto"
      />

      <section className="py-16 bg-paper">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Stream */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={fast}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tv2 className="text-primary" size={22} />
              <h2 className="text-2xl font-bold text-primary">Cámara en Vivo</h2>
              <span className="flex items-center gap-1.5 px-2.5 py-1 border border-red-500/40 text-red-600 text-xs font-mono-label uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> En vivo
              </span>
            </div>
            <div className="overflow-hidden border border-primary/20 bg-black"
              style={{ aspectRatio: '16/9' }}>
              <LazyEmbed
                src={TWITCH_SRC}
                title="Stream en vivo de la obra"
                label="Toca para ver el stream en vivo"
                icon={<Tv2 size={26} className="text-white" />}
              />
            </div>
            <p className="text-primary/40 text-xs mt-2 text-right font-mono-label">
              * El stream puede no estar disponible fuera del horario de obra (7am–5pm)
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={fast}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-primary" size={22} />
              <h2 className="text-2xl font-bold text-primary">Ubicación de la Obra</h2>
            </div>
            <div className="overflow-hidden border border-primary/20 h-80">
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
            transition={fast}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" size={22} />
              <h2 className="text-2xl font-bold text-primary">Descripción del Proyecto</h2>
            </div>
            <div className="bg-white border border-primary/20 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-paper-line">
                {[
                  { Icon: Building2, label: 'Proyecto', value: 'NOG: 30643384' },
                  { Icon: FileText, label: 'Descripción', value: 'MEJORAMIENTO ESCUELA PRIMARIA CASERIO EL NANCE SAN RAFAEL PIE DE LA CUESTA, SAN MARCOS' },
                  { Icon: Users, label: 'Entidad / Unidad compradora', value: 'MUNICIPALIDAD DE SAN RAFAEL PIE DE LA CUESTA' },
                  { Icon: Calendar, label: 'Empresa Ejecutora', value: 'Constructora Integral' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-primary/40 font-mono-label uppercase mb-0.5">{label}</p>
                      <p className="font-semibold text-primary text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-paper-line p-6">
                <p className="text-[10px] text-primary/40 font-mono-label uppercase mb-2">Avance del proyecto</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2.5 bg-paper border border-paper-line overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 0.8, ease: EASE_SNAP }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm font-bold text-primary shrink-0 font-mono-label">65%</span>
                </div>
                <p className="text-xs text-primary/40 mt-2">Fecha estimada de entrega: Q4 2025</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
