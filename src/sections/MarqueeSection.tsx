import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface QuoteCard {
  id: string
  index: string
  title: string
  paragraph: string
  image: string
  icon: ReactNode
}

const QUOTES: QuoteCard[] = [
  {
    id: '01',
    index: '01',
    title: 'Identity',
    paragraph: "It's not who I am underneath, but what I do that defines me.",
    image: '/bat.jpg',
    icon: '◌',
  },
  {
    id: '02',
    index: '02',
    title: 'Drive',
    paragraph: "My motto is if you want to win the lottery, you've got to make money to buy a ticket.",
    image: '/jake.jpg',
    icon: '◍',
  },
  {
    id: '03',
    index: '03',
    title: 'Habit',
    paragraph: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    image: '/greekmind.jpg',
    icon: '◎',
  },
  {
    id: '04',
    index: '04',
    title: 'Belief',
    paragraph: 'The body achieves what the mind believes.',
    image: '/greekbody.jpg',
    icon: '◐',
  },
  {
    id: '05',
    index: '05',
    title: 'Work',
    paragraph: 'What I believe, sir, is that good things come to those who work their asses off.',
    image: '/work.jpg',
    icon: '◉',
  },
]

export default function MarqueeSection() {
  const [activeId, setActiveId] = useState<string | null>('01')

  const cards = QUOTES

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="px-5 pb-8 sm:px-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-[#D7E2EA]/50 uppercase tracking-[0.25em] text-xs sm:text-sm">Quotes I Beileve</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <div className="flex gap-2 sm:gap-3 pb-4">
          {cards.map((item) => {
            const expanded = activeId === item.id

            return (
              <motion.div
                key={item.id}
                layout
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId('01')}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId('01')}
                onClick={() => setActiveId(item.id)}
                animate={{ flex: expanded ? 3 : 1.25, maxWidth: expanded ? 'min(500px, 34vw)' : 'min(150px, 15vw)' }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                className="relative flex-1 min-w-[64px] snap-start overflow-hidden rounded-[26px] bg-[#0C0C0C] cursor-pointer"
                style={{ height: 400 }}
              >
                <div className="absolute inset-0 block">
                  <motion.img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    animate={{
                      scale: expanded ? 1.04 : 1,
                      opacity: expanded ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  />

                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: expanded
                        ? 'linear-gradient(180deg, rgba(12,12,12,0.05) 0%, rgba(12,12,12,0.15) 45%, rgba(12,12,12,0.9) 100%)'
                        : 'linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.65) 100%)',
                    }}
                    transition={{ duration: 0.35 }}
                  />

                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-[26px]"
                    animate={{
                      boxShadow: expanded
                        ? 'inset 0 0 0 1px rgba(255,255,255,0.14), 0 24px 60px rgba(0,0,0,0.55)'
                        : 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="absolute left-4 top-4 z-10 text-xs font-semibold text-white/90 sm:text-sm">
                    {item.index}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                    <motion.p
                      initial={false}
                      animate={{
                        opacity: expanded ? 1 : 0,
                        height: expanded ? 'auto' : 0,
                        marginBottom: expanded ? 12 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-sm leading-relaxed text-white/90 sm:text-[15px]"
                    >
                      {item.paragraph}
                    </motion.p>

                    <div className="flex items-center gap-2 text-white">
                      <span className="flex-shrink-0 opacity-90 text-base">{item.icon}</span>
                      <motion.span
                        initial={false}
                        animate={{ opacity: expanded ? 1 : 0, width: expanded ? 'auto' : 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden whitespace-nowrap text-sm font-medium sm:text-[15px]"
                      >
                        {item.title}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
