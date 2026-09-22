import { motion } from 'motion/react'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { fast, fastDelay } from '@/lib/motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: ReactNode
  descriptionClassName?: string
}

export function PageHero({ eyebrow, title, description, descriptionClassName }: PageHeroProps) {
  return (
    <section className="bg-paper py-20 relative overflow-hidden border-b border-paper-line">
      <div className="absolute inset-0 text-paper-line blueprint-grid" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={fast}>
          <span className="text-primary/60 font-mono-label text-xs uppercase">{eyebrow}</span>
          <h1 className="text-5xl font-bold text-primary mt-3 mb-5">{title}</h1>
          <motion.div
            className="h-[3px] w-16 bg-accent mx-auto mb-5 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={fastDelay(0.12, 0.4)}
          />
          <p className={cn('text-primary/70 text-lg leading-relaxed', descriptionClassName)}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
