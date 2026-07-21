import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeritageTexture } from '@/components/brand/HeritageTexture'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/cn'

export function Faq() {
  const { t, locale } = useLocale()
  const faq = t.faq
  const [openId, setOpenId] = useState<string | null>('0-0')

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-parchment py-24 text-espresso sm:py-32"
    >
      <HeritageTexture tone="light" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {faq.title}
        </motion.h2>
        <div className="mx-auto mt-5 h-px w-20 bg-bronze/50" />

        <div key={locale} className="mt-14 grid gap-10 lg:grid-cols-2">
          {faq.groups.map((group, gi) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: gi * 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-5 text-sm font-semibold tracking-widest text-bronze uppercase">
                {group.heading}
              </p>
              <div className="space-y-3">
                {group.items.map((item, ii) => {
                  const id = `${gi}-${ii}`
                  const open = openId === id
                  return (
                    <motion.div
                      key={item.q}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.18 + ii * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden rounded-2xl border border-cocoa/20 bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center gap-4 px-5 py-4 text-start"
                        onClick={() => setOpenId(open ? null : id)}
                        aria-expanded={open}
                      >
                        <span className="font-display text-lg font-bold text-bronze">
                          {String(ii + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-semibold">{item.q}</span>
                        <span
                          className={cn(
                            'text-bronze transition duration-300',
                            open && 'rotate-180',
                          )}
                        >
                          ▾
                        </span>
                      </button>
                      <div
                        className={cn(
                          'grid transition-all duration-300',
                          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-4 text-sm leading-relaxed text-cocoa">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
