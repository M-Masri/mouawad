import { SeoHead } from '@/components/seo/SeoHead'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'
import { Audiences } from '@/components/sections/Audiences'
import { Faq } from '@/components/sections/Faq'
import { AppCta } from '@/components/sections/AppCta'
import { useLocale } from '@/i18n/LocaleProvider'

export function HomePage() {
  const { t } = useLocale()

  return (
    <>
      <SeoHead title={t.meta.title} description={t.meta.description} />
      <Hero />
      <About />
      <Features />
      <Audiences />
      <Faq />
      <AppCta />
    </>
  )
}
