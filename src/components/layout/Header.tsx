import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { LanguageSwitch } from '@/components/ui/LanguageSwitch'
import { images } from '@/data/images'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

export function Header() {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-2 transition duration-500 sm:px-6">
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[1.5rem] border px-3 py-2 transition duration-500 sm:rounded-[2rem] sm:px-5',
          scrolled
            ? 'border-parchment/15 bg-espresso/80 shadow-xl shadow-espresso/40 backdrop-blur-xl'
            : 'border-transparent bg-transparent shadow-none',
        )}
      >
        <a href="#top" className="group flex shrink-0 items-center">
          <img
            src={images.logo}
            alt={t.brand.primary}
            className="h-11 w-auto object-contain transition duration-300 group-hover:opacity-90 sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-parchment/75 transition duration-300 hover:text-wheat"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageSwitch />
          <a href="#download">
            <Button className="px-5 py-2 text-sm">{t.header.download}</Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-parchment/20 text-parchment"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-4 mt-2 rounded-2xl border border-parchment/15 bg-espresso/95 p-4 backdrop-blur-xl sm:mx-6 md:hidden">
          <nav className="flex flex-col gap-3">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-base text-parchment/90 hover:bg-umber"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#download" onClick={() => setOpen(false)}>
              <Button className="w-full">{t.header.download}</Button>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
