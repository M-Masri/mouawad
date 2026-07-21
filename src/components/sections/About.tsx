import { motion, type Variants } from 'framer-motion'
import { HeritageTexture } from '@/components/brand/HeritageTexture'
import { images } from '@/data/images'
import { useLocale } from '@/i18n/LocaleProvider'

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function About() {
  const { t } = useLocale()
  const a = t.about

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F4] py-24 text-espresso sm:py-32"
    >
      <HeritageTexture tone="light" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative mx-auto h-[420px] w-full max-w-md">
          <img
            src={images.about.primary}
            alt={a.imageAlt1}
            className="absolute top-0 start-0 z-10 h-64 w-52 rounded-3xl object-cover shadow-2xl shadow-espresso/30 sm:h-72 sm:w-60"
          />
          <img
            src={images.about.secondary}
            alt={a.imageAlt2}
            className="absolute end-0 bottom-0 h-56 w-48 rounded-3xl object-cover shadow-2xl shadow-espresso/30 sm:h-64 sm:w-56"
          />
          <div className="absolute inset-8 -z-0 rounded-[2rem] bg-gradient-to-br from-wheat/50 to-bronze/30" />
        </div>

        <div className="space-y-6">
          <span className="inline-block text-sm font-semibold tracking-widest text-bronze uppercase">
            {a.tag}
          </span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">{a.title}</h2>
          {a.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-cocoa">
              {p}
            </p>
          ))}

          <motion.ul
            className="space-y-5 pt-4"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {a.points.map((point, i) => (
              <motion.li
                key={point.title}
                variants={itemVariants}
                className="flex gap-4"
              >
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-espresso text-sm font-semibold text-parchment">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-semibold text-umber">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cocoa">{point.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
