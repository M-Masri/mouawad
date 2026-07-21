import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze disabled:opacity-50'

  const variants = {
    primary:
      'bg-bronze text-parchment hover:bg-wheat hover:text-espresso shadow-lg shadow-espresso/30',
    secondary:
      'border border-parchment/40 bg-white/10 text-parchment backdrop-blur-sm hover:bg-white/20',
    ghost: 'text-parchment hover:text-wheat',
    light: 'bg-parchment text-espresso hover:bg-wheat',
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
