import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface CornerFrameProps {
  children: ReactNode
  className?: string
  /** Color de las marcas de esquina (clase de texto Tailwind). */
  colorClassName?: string
}

/** Envoltorio con marcas de esquina tipo plano técnico alrededor del contenido. */
export function CornerFrame({ children, className, colorClassName = 'text-primary' }: CornerFrameProps) {
  return (
    <div className={cn('relative p-3', className)}>
      <span className={cn('absolute top-0 left-0 w-4 h-4 border-t border-l', colorClassName)} style={{ borderColor: 'currentColor' }} />
      <span className={cn('absolute top-0 right-0 w-4 h-4 border-t border-r', colorClassName)} style={{ borderColor: 'currentColor' }} />
      <span className={cn('absolute bottom-0 left-0 w-4 h-4 border-b border-l', colorClassName)} style={{ borderColor: 'currentColor' }} />
      <span className={cn('absolute bottom-0 right-0 w-4 h-4 border-b border-r', colorClassName)} style={{ borderColor: 'currentColor' }} />
      {children}
    </div>
  )
}
