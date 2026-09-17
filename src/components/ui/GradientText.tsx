import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  const Component = animate ? motion.span : 'span'
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-[#2C3E50] via-[#3d5166] to-[#2C3E50] bg-clip-text text-transparent bg-[length:200%_auto]',
        animate && 'animate-gradient',
        className
      )}
      {...(animate ? {
        initial: { backgroundPosition: '0% center' },
        animate: { backgroundPosition: '200% center' },
        transition: { duration: 4, repeat: Infinity, ease: 'linear' }
      } : {})}
    >
      {children}
    </Component>
  )
}
