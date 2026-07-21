import { useState, type FormEvent } from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HeritageTexture } from '@/components/brand/HeritageTexture'
import { IndustrialSilhouette } from '@/components/brand/IndustrialSilhouette'
import { images } from '@/data/images'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

const fieldClass =
  'w-full rounded-xl border-0 bg-[#f3f4f6] px-4 py-3 text-sm text-espresso outline-none transition placeholder:text-cocoa/40 focus:ring-2 focus:ring-bronze/30'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
  },
] as const


export function Footer() {
  const { t, dir } = useLocale()
  const f = t.footer
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <footer className="relative z-20 overflow-visible bg-espresso text-parchment">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(141,98,54,0.25),_transparent_55%)]" />
        <HeritageTexture tone="dark" />
        <div className="absolute inset-x-0 top-0 text-wheat/25">
          <IndustrialSilhouette className="rotate-180" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pt-8 pb-16 lg:grid-cols-[1.2fr_0.8fr_1.2fr] lg:pt-10">
        <div className="space-y-4 lg:pt-12">
          <a href="#top" className="inline-block">
            <img
              src={images.logo}
              alt={t.brand.primary}
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>
          <p className="max-w-sm text-base leading-relaxed text-wheat/80">{f.blurb}</p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-bronze/50 bg-umber text-wheat transition hover:border-wheat/50 hover:bg-cocoa hover:text-parchment"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:pt-[4.75rem]">
          <p className="mb-4 text-base font-semibold text-wheat">{f.linksTitle}</p>
          <ul className="space-y-3 text-base text-parchment/80">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-wheat">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#download" className="transition hover:text-wheat">
                {f.downloadLink}
              </a>
            </li>
          </ul>
        </div>

        <div className="relative z-30 mt-0 rounded-[1.75rem] bg-white p-8 text-espresso shadow-2xl shadow-espresso/50 md:-mt-24 lg:-mt-32">
          <p className="mb-6 font-display text-xl font-bold tracking-tight">
            {f.contactTitle}
          </p>

          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-cocoa">{f.name}</span>
              <input
                required
                name="name"
                placeholder={f.namePlaceholder}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-cocoa">{f.email}</span>
              <input
                required
                type="email"
                name="email"
                placeholder={f.emailPlaceholder}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-cocoa">{f.industry}</span>
              <div className="relative">
                <select
                  required
                  name="industry"
                  defaultValue=""
                  className={cn(fieldClass, 'appearance-none pe-10')}
                >
                  <option value="" disabled>
                    {f.industryPlaceholder}
                  </option>
                  {f.industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span
                  aria-hidden
                  className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-cocoa/50"
                >
                  ▾
                </span>
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-cocoa">{f.message}</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder={f.messagePlaceholder}
                className={cn(fieldClass, 'resize-y')}
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-bronze py-2 ps-2 pe-5 text-sm font-semibold text-parchment shadow-md transition hover:bg-cocoa"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-white text-espresso">
                <FaArrowRight
                  className={cn('size-3', dir === 'rtl' && 'rotate-180')}
                  aria-hidden
                />
              </span>
              {sent ? f.sent : f.submit}
            </button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-parchment/10 py-5 text-center text-sm text-wheat/70">
        © {new Date().getFullYear()} {t.brand.primary}. {f.rights}{' '}
        <a
          href={f.developerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-wheat transition hover:text-parchment"
        >
          {f.developer}
        </a>
      </div>
    </footer>
  )
}
