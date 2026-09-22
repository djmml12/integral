import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { springSnap } from '@/lib/motion'
import { type ReactNode } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface ShiftCardProps {
  className?: string
  children: ReactNode
  /** Detalle que aparece sobre la card al hacer hover (solo escritorio). */
  hoverContent?: ReactNode
  /** Detalle mostrado de forma fija debajo del contenido (solo móvil/táctil). */
  mobileContent?: ReactNode
}

export function ShiftCard({ className, children, hoverContent, mobileContent }: ShiftCardProps) {
  const isMobile = useIsMobile()

  // En táctil no existe hover: renderizamos una card plana con el detalle
  // siempre visible, sin blur ni overlay inalcanzable.
  if (isMobile) {
    return (
      <div className={cn('relative overflow-hidden bg-white border border-paper-line', className)}>
        {children}
        {mobileContent && <div className="mt-4">{mobileContent}</div>}
      </div>
    )
  }

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden bg-white border border-paper-line cursor-pointer',
        className
      )}
      whileHover={{ y: -6 }}
      transition={springSnap}
    >
      <div className="transition-all duration-200 ease-out group-hover:blur-[1px] group-hover:scale-105">
        {children}
      </div>
      {hoverContent && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6">
          {hoverContent}
        </div>
      )}
    </motion.div>
  )
}
