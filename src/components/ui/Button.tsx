import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { springPop } from '@/lib/motion'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        transition={springPop}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-mono-label uppercase font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          {
            'bg-primary text-paper hover:bg-primary-light': variant === 'primary',
            'border border-primary text-primary hover:bg-primary hover:text-paper': variant === 'outline',
            'text-primary hover:bg-primary/10': variant === 'ghost',
          },
          {
            'px-4 py-2 text-xs': size === 'sm',
            'px-6 py-3 text-xs': size === 'md',
            'px-8 py-4 text-sm': size === 'lg',
          },
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = 'Button'
