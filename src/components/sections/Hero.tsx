import { siteConfig } from '@/data/site'
import { images } from '@/data/images'
import { HeritageTexture } from '@/components/brand/HeritageTexture'
import { IndustrialSilhouette } from '@/components/brand/IndustrialSilhouette'
import { StoreBadge } from '@/components/ui/StoreBadge'
import { PhoneMock } from '@/components/ui/PhoneMock'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

export function Hero() {
  const { t, locale } = useLocale()
  const h = t.hero

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={images.hero.background}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-espresso via-espresso/85 to-espresso/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(189,154,101,0.18),_transparent_45%)]" />
      <HeritageTexture tone="dark" className="opacity-[0.1]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-6 pt-36 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-32">
        <div className="animate-rise space-y-7">
          <p
            className={cn(
              'font-display font-black leading-none text-parchment',
              locale === 'en'
                ? 'text-3xl tracking-[0.08em] uppercase sm:text-5xl lg:text-6xl'
                : 'text-4xl sm:text-5xl lg:text-6xl',
            )}
          >
            {h.brand}
          </p>
          {locale === 'en' ? (
            <p className="font-display text-sm font-bold tracking-[0.35em] text-wheat uppercase">
              Factories · Heritage · Craft
            </p>
          ) : (
            <p className="font-display text-sm font-bold tracking-[0.2em] text-wheat">
              حرفة · تراث · صناعة
            </p>
          )}
          <p className="max-w-lg text-base leading-relaxed text-parchment/80 sm:text-lg">
            {h.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <StoreBadge
              store="google"
              label={h.playStore}
              href={siteConfig.storeLinks.googlePlay}
            />
            <StoreBadge
              store="apple"
              label={h.appStore}
              href={siteConfig.storeLinks.appStore}
            />
          </div>
        </div>

        <div className="animate-float relative flex justify-center lg:justify-end">
          <div className="absolute -inset-8 rounded-full bg-bronze/20 blur-3xl" />
          <PhoneMock variant="catalog" className="relative rotate-[-4deg]" />
        </div>
      </div>
    </section>
  )
}
