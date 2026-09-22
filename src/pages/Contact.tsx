import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { LazyEmbed } from '@/components/ui/LazyEmbed'
import { PageHero } from '@/components/ui/PageHero'
import { fast, fastDelay, springPop } from '@/lib/motion'

const MAPS_SRC = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.90664148875464!2d-91.79453932802467!3d14.964576200295202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sgt!4v1755210126225!5m2!1ses-419!2sgt'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Hablemos"
        title="Contáctanos"
        description="Estamos listos para hacer realidad tu próximo proyecto."
      />

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={fast}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Información de contacto</h2>
              <p className="text-primary/60 text-sm">Responderemos tu consulta en menos de 24 horas.</p>
            </div>

            {[
              { Icon: Phone, label: 'Teléfono', value: '555-5555', href: 'tel:55555555' },
              { Icon: Mail, label: 'Correo electrónico', value: 'contacto@integral.com', href: 'mailto:contacto@integral.com' },
              { Icon: MapPin, label: 'Ubicación', value: 'Guatemala', href: '#' },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-start gap-4 p-4 bg-white border border-paper-line hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-primary/40 font-mono-label uppercase">{label}</p>
                  <p className="font-semibold text-primary">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={fastDelay(0.08)}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-paper-line p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="text-primary mb-4" size={56} />
                  <h3 className="text-2xl font-bold text-primary mb-2">¡Mensaje enviado!</h3>
                  <p className="text-primary/60">Te contactaremos pronto. Gracias por escribirnos.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-primary mb-6">Envíanos un mensaje</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary/80 mb-1.5">Nombre</label>
                      <input
                        name="nombre" value={form.nombre} onChange={handleChange} required
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 border border-paper-line focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary/80 mb-1.5">Teléfono</label>
                      <input
                        name="telefono" value={form.telefono} onChange={handleChange}
                        placeholder="Tu número de teléfono"
                        className="w-full px-4 py-3 border border-paper-line focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-1.5">Correo electrónico</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 border border-paper-line focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-1.5">Mensaje</label>
                    <textarea
                      name="mensaje" value={form.mensaje} onChange={handleChange} required rows={5}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      className="w-full px-4 py-3 border border-paper-line focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={springPop}
                    className="w-full py-3.5 bg-primary text-white font-mono-label text-xs uppercase hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Enviar mensaje
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="overflow-hidden h-80 border border-paper-line">
            <LazyEmbed
              src={MAPS_SRC}
              title="Ubicación Constructora Integral"
              label="Toca para ver el mapa"
              icon={<MapPin size={26} className="text-white" />}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
