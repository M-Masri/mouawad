import { Link } from 'react-router-dom'
import { SeoHead } from '@/components/seo/SeoHead'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/i18n/LocaleProvider'

export function NotFoundPage() {
  const { t } = useLocale()
  const n = t.notFound

  return (
    <>
      <SeoHead title={n.title} />
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-bronze uppercase">404</p>
        <h1 className="font-display text-4xl text-parchment">{n.heading}</h1>
        <p className="text-wheat/80">{n.body}</p>
        <Link to="/">
          <Button>{n.back}</Button>
        </Link>
      </section>
    </>
  )
}
