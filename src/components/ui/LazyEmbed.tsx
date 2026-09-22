import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { springPop } from '@/lib/motion'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface LazyEmbedProps {
  src: string
  title: string
  className?: string
  /** Texto del botón de carga (ej. "Toca para ver el stream"). */
  label?: string
  /** Icono/contenido opcional dentro del placeholder. */
  icon?: ReactNode
  /** Forzar carga inmediata (por defecto: inmediata en escritorio, diferida en móvil). */
  eager?: boolean
  /** Permitir pantalla completa. */
  allowFullScreen?: boolean
}

/**
 * Embebe un iframe pesado (Twitch, Google Maps...).
 * En móvil muestra un placeholder y solo descarga el contenido al tocarlo,
 * para no consumir datos del usuario sin su consentimiento.
 */
export function LazyEmbed({
  src,
  title,
  className,
  label = 'Toca para cargar',
  icon,
  eager,
  allowFullScreen = true,
}: LazyEmbedProps) {
  const isMobile = useIsMobile()
  // En escritorio carga directo; en móvil espera al tap (salvo override).
  const loadEager = eager ?? !isMobile
  const [loaded, setLoaded] = useState(loadEager)

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className={cn('w-full h-full', className)}
        style={{ border: 0 }}
        allowFullScreen={allowFullScreen}
        loading="lazy"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={cn(
        'group w-full h-full flex flex-col items-center justify-center gap-3 bg-primary text-white cursor-pointer',
        className
      )}
      aria-label={label}
    >
      <motion.span
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.88 }}
        transition={springPop}
        className="w-16 h-16 border border-white/25 flex items-center justify-center group-hover:bg-white/10 transition-colors"
      >
        {icon ?? <Play size={26} className="text-white ml-1" />}
      </motion.span>
      <span className="text-sm font-medium text-white/80">{label}</span>
      <span className="text-xs text-white/40">Se cargará solo cuando lo solicites</span>
    </button>
  )
}
