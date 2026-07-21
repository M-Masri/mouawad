import { cn } from '@/lib/cn'

type IndustrialSilhouetteProps = {
  className?: string
}

/**
 * Decorative industrial-heritage skyline from brand visual language:
 * mountains, factory tower, chimneys, windmill, trees.
 */
export function IndustrialSilhouette({ className }: IndustrialSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 800 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn('pointer-events-none h-auto w-full', className)}
    >
      {/* Mountain backdrop */}
      <path
        d="M0 220V128L90 70l70 48 95-78 85 62 110-70 95 58 95-42 80 52 80-30V220H0Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M0 220V150l70 40 60-35 80 45 100-55 90 40 120-50 85 35 95-40 100 30V220H0Z"
        fill="currentColor"
        opacity="0.28"
      />

      {/* Tall trees */}
      <path d="M70 220v-70l12-40 12 40v70H70Z" fill="currentColor" opacity="0.45" />
      <path d="M720 220v-55l10-32 10 32v55h-20Z" fill="currentColor" opacity="0.4" />

      {/* Factory block + tower */}
      <rect x="250" y="118" width="160" height="102" fill="currentColor" opacity="0.5" />
      <rect x="310" y="55" width="40" height="165" fill="currentColor" opacity="0.55" />
      <rect x="300" y="42" width="60" height="18" fill="currentColor" opacity="0.55" />
      {/* Windows */}
      <rect x="265" y="135" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="290" y="135" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="355" y="135" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="380" y="135" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="265" y="170" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="290" y="170" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="355" y="170" width="14" height="18" fill="#140904" opacity="0.35" />
      <rect x="380" y="170" width="14" height="18" fill="#140904" opacity="0.35" />

      {/* Chimneys */}
      <rect x="430" y="88" width="14" height="132" fill="currentColor" opacity="0.5" />
      <rect x="456" y="105" width="12" height="115" fill="currentColor" opacity="0.45" />
      <path d="M430 88c8-18 14-18 14 0" stroke="currentColor" strokeWidth="3" opacity="0.35" />

      {/* Windmill */}
      <circle cx="560" cy="130" r="6" fill="currentColor" opacity="0.55" />
      <rect x="556" y="130" width="8" height="90" fill="currentColor" opacity="0.5" />
      <path
        d="M560 130 L610 105 M560 130 L510 105 M560 130 L535 175 M560 130 L585 175"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Ground ribbon line */}
      <path
        d="M0 218h800"
        stroke="currentColor"
        strokeWidth="4"
        opacity="0.25"
      />
    </svg>
  )
}
