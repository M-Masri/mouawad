import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { RibbonBanner } from '@/components/brand/RibbonBanner'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

type StoreBadgeProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  store: 'google' | 'apple'
  label: string
}

export function StoreBadge({ store, label, className, ...props }: StoreBadgeProps) {
  const { t } = useLocale()

  return (
    <a
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border border-parchment/25 bg-espresso/80 px-5 py-3 text-parchment shadow-lg shadow-espresso/40 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-wheat/50 hover:bg-umber',
        className,
      )}
      {...props}
    >
      {store === 'google' ? (
        <FaGooglePlay className="size-5 shrink-0 text-parchment" aria-hidden />
      ) : (
        <FaApple className="size-5 shrink-0 text-parchment" aria-hidden />
      )}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] tracking-wide text-wheat uppercase">
          {store === 'google' ? t.storeBadge.google : t.storeBadge.apple}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </a>
  )
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <RibbonBanner>{children}</RibbonBanner>
}
