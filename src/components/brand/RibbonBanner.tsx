import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type RibbonBannerProps = {
  children: ReactNode
  className?: string
}

/** Layered ribbon banner accent from brand visual language. */
export function RibbonBanner({ children, className }: RibbonBannerProps) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center px-5 py-1.5 font-display text-xs font-bold tracking-[0.22em] text-parchment uppercase',
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 -start-2 w-3 bg-bronze [clip-path:polygon(40%_0,100%_0,100%_100%,40%_100%,0_50%)]"
      />
      <span
        aria-hidden
        className="absolute inset-y-0 -end-2 w-3 bg-bronze [clip-path:polygon(0_0,60%_0,100%_50%,60%_100%,0_100%)]"
      />
      <span className="absolute inset-0 bg-gradient-to-b from-cocoa to-umber shadow-md" />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
