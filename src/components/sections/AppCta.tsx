import { siteConfig } from '@/data/site'
import { images } from '@/data/images'
import { PhoneMock } from '@/components/ui/PhoneMock'
import { StoreBadge } from '@/components/ui/StoreBadge'
import { useLocale } from '@/i18n/LocaleProvider'

export function AppCta() {
  const { t } = useLocale()
  const c = t.appCta

  return (
    <section
      id="download"
      className="relative isolate overflow-visible bg-umber py-16 sm:py-20 lg:py-28"
    >
      <img
        src={images.appCta.pattern}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.22] mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-wheat/20 bg-gradient-to-br from-espresso to-cocoa/40 shadow-2xl shadow-espresso/40 sm:rounded-[2rem]">
          <div className="relative grid items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-14">
            {/* Text first on mobile / tablet */}
            <div className="order-1 space-y-5 text-center sm:space-y-6 lg:order-2 lg:text-start">
              <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl md:text-4xl">
                {c.title}
              </h2>
              <div className="mx-auto h-px w-16 bg-bronze/50 lg:mx-0" />
              <p className="mx-auto max-w-md text-sm leading-relaxed text-wheat/85 sm:text-base md:text-lg lg:mx-0">
                {c.subtitle}
              </p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
                <StoreBadge
                  store="google"
                  label={c.playStore}
                  href={siteConfig.storeLinks.googlePlay}
                  className="w-full justify-center sm:w-auto"
                />
                <StoreBadge
                  store="apple"
                  label={c.appStore}
                  href={siteConfig.storeLinks.appStore}
                  className="w-full justify-center sm:w-auto"
                />
              </div>
            </div>

            {/* Phones */}
            <div className="order-2 relative flex min-h-[240px] items-end justify-center gap-2 pb-2 sm:min-h-[300px] sm:gap-4 md:min-h-[340px] lg:order-1 lg:min-h-0 lg:items-center lg:pb-0">
              <PhoneMock
                variant="catalog"
                className="relative z-10 !mx-0 !w-[135px] -rotate-6 scale-95 animate-float sm:!w-[180px] sm:scale-100 md:!w-[210px] lg:!w-[230px]"
              />
              <PhoneMock
                variant="track"
                className="relative top-4 !mx-0 !w-[135px] rotate-6 scale-95 sm:top-6 sm:!w-[180px] sm:scale-100 md:top-8 md:!w-[210px] lg:!w-[230px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
