import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PhoneMock } from '@/components/ui/PhoneMock'
import { images } from '@/data/images'
import { useLocale } from '@/i18n/LocaleProvider'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Features() {
  const { t } = useLocale()
  const f = t.features
  const [browse, order, track, wholesale] = f.items

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-umber py-24 text-parchment sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(189,154,101,0.12),_transparent_50%)]" />
      <img
        src={images.features.pattern}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.22] mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:hidden">
          <p className="text-sm font-semibold tracking-widest text-bronze uppercase">
            {f.tag}
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream">{f.title}</h2>
          <p className="mt-3 text-wheat/80">{f.subtitle}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[220px_220px_220px] lg:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.article
            variants={cardVariants}
            className="relative min-h-[240px] overflow-hidden rounded-[2rem] border border-wheat/15 bg-espresso/50 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-0"
          >
            <img
              src={images.features.browse}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="font-display text-2xl text-cream">{browse.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-parchment/85">
                {browse.text}
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="flex min-h-[220px] flex-col justify-center rounded-[2rem] border border-wheat/15 bg-bronze/30 p-6 sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:min-h-0 lg:p-8"
          >
            <p className="text-xs font-semibold tracking-widest text-wheat uppercase">
              {f.tag}
            </p>
            <h2 className="mt-3 font-display text-2xl leading-snug text-cream sm:text-3xl">
              {f.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-wheat/85">
              {f.subtitle}
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="relative flex min-h-[280px] flex-col items-center justify-end overflow-hidden rounded-[2rem] border border-wheat/15 bg-espresso/60 px-4 pt-6 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:min-h-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(141,98,54,0.35),_transparent_65%)]" />
            <div className="relative mb-3 scale-90 animate-float sm:scale-100">
              <PhoneMock variant="track" className="!w-[180px] sm:!w-[200px]" />
            </div>
            <div className="relative z-10 w-full pb-5 text-center">
              <p className="font-display text-lg text-cream">{track.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-wheat/80">
                {track.text}
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="relative min-h-[180px] overflow-hidden rounded-[2rem] border border-wheat/15 bg-cocoa/40 lg:col-start-1 lg:row-start-3 lg:min-h-0"
          >
            <img
              src={images.features.accent}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-espresso/40" />
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-wheat/15 bg-espresso/50 sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:min-h-0"
          >
            <img
              src={images.features.order}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/35 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6 lg:p-8">
              <div>
                <p className="font-display text-2xl text-cream sm:text-3xl">
                  {order.title}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-parchment/85">
                  {order.text}
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="flex min-h-[200px] flex-col justify-between rounded-[2rem] border border-wheat/20 bg-gradient-to-br from-bronze to-cocoa p-6 lg:col-start-4 lg:row-start-3 lg:min-h-0"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-wheat uppercase">
                {f.tag}
              </p>
              <h3 className="mt-2 font-display text-xl text-cream">
                {wholesale.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-parchment/80">
                {wholesale.text}
              </p>
            </div>
            <a href="#download" className="mt-5 block">
              <Button
                variant="light"
                className="w-full rounded-full !bg-cream text-espresso shadow-md hover:!bg-wheat hover:text-espresso"
              >
                {f.cta}
              </Button>
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
