import { useLocale } from '@/i18n/LocaleProvider'

type PhoneMockProps = {
  variant?: 'catalog' | 'track'
  className?: string
}

export function PhoneMock({ variant = 'catalog', className = '' }: PhoneMockProps) {
  const { t } = useLocale()
  const p = t.phone
  const isCatalog = variant === 'catalog'

  return (
    <div
      className={`relative mx-auto w-[220px] rounded-[2rem] border border-wheat/30 bg-espresso p-2 shadow-2xl shadow-espresso/50 sm:w-[250px] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-umber">
        <div className="flex items-center justify-between bg-espresso/80 px-4 py-3">
          <div className="h-2 w-12 rounded-full bg-wheat/40" />
          <div className="size-2 rounded-full bg-bronze" />
        </div>

        <div className="space-y-3 p-4">
          <div className="h-3 w-24 rounded-full bg-parchment/90" />
          <div className="h-2 w-36 rounded-full bg-wheat/40" />

          {isCatalog ? (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {p.products.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-wheat/15 bg-cocoa/40 p-2"
                >
                  <div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-bronze/60 to-wheat/30" />
                  <p className="text-[10px] font-medium text-parchment">{item}</p>
                  <p className="text-[9px] text-wheat">{p.orderNow}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 pt-1">
              <div className="rounded-xl border border-wheat/15 bg-cocoa/40 p-3">
                <p className="text-[10px] text-wheat">{p.orderLabel}</p>
                <p className="mt-1 text-xs font-semibold text-parchment">
                  {p.delivering}
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-espresso">
                  <div className="h-full w-2/3 rounded-full bg-bronze" />
                </div>
              </div>
              {p.steps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-2 rounded-lg bg-espresso/50 px-3 py-2"
                >
                  <span
                    className={`size-2 rounded-full ${i < 2 ? 'bg-wheat' : 'bg-bronze'}`}
                  />
                  <span className="text-[10px] text-parchment/90">{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
