import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

type LanguageSwitchProps = {
  className?: string
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { locale, setLocale } = useLocale()

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-parchment/25 bg-espresso/50 p-1 text-xs font-semibold backdrop-blur-sm',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('ar')}
        className={cn(
          'rounded-full px-3 py-1.5 transition duration-300',
          locale === 'ar'
            ? 'bg-bronze text-parchment shadow-sm'
            : 'text-parchment/70 hover:text-wheat',
        )}
        aria-pressed={locale === 'ar'}
      >
        ع
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={cn(
          'rounded-full px-3 py-1.5 transition duration-300',
          locale === 'en'
            ? 'bg-bronze text-parchment shadow-sm'
            : 'text-parchment/70 hover:text-wheat',
        )}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
