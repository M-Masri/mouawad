import { motion, type Variants } from 'framer-motion'
import { HeritageTexture } from '@/components/brand/HeritageTexture'
import { images } from '@/data/images'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

const visuals = [
  images.audiences.home,
  images.audiences.traders,
  images.audiences.fresh,
] as const

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Audiences() {
  const { t } = useLocale()
  const a = t.audiences

  return (
    <section
      id="audiences"
      className="relative overflow-hidden py-24 text-parchment sm:py-32"
    >
      <img
        src={images.audiences.background}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40" />
      <HeritageTexture tone="dark" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-bronze uppercase">
            Mouawad
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl">
            {a.title}
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-bronze/60" />
        </motion.div>

        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
          }}
        >
          {a.items.map((item, i) => {
            const featured = i === 1

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className={cn(
                  'group relative isolate min-h-[420px] overflow-hidden rounded-[2rem] transition duration-700',
                  featured
                    ? 'md:-translate-y-4 md:min-h-[460px] md:shadow-2xl md:shadow-espresso/20'
                    : 'md:mt-6',
                )}
              >
                <img
                  src={visuals[i]}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div
                  className={cn(
                    'absolute inset-0 transition duration-700',
                    featured
                      ? 'bg-gradient-to-t from-espresso via-espresso/55 to-espresso/10 group-hover:from-espresso/95'
                      : 'bg-gradient-to-t from-espresso/90 via-espresso/45 to-transparent group-hover:from-espresso',
                  )}
                />

                <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 md:min-h-0 md:p-8">
                  <span
                    className={cn(
                      'font-display text-5xl leading-none transition duration-500',
                      featured ? 'text-wheat' : 'text-parchment/35 group-hover:text-wheat/70',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                    <div
                      className={cn(
                        'mb-4 h-1 w-10 rounded-full transition duration-500',
                        featured ? 'bg-wheat' : 'bg-bronze group-hover:w-16 group-hover:bg-wheat',
                      )}
                    />
                    <h3 className="font-display text-2xl text-parchment sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-parchment/80 opacity-90 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
