import { useEffect, useRef, useState } from 'react'
interface Signal {
  number: string
  title: string
  detail: string
  imagePosition: string
}

const SIGNALS: Signal[] = [
  { number: '01', title: 'Coding setup', detail: 'Laptop + editor + shipped ideas', imagePosition: '0% 0%' },
  { number: '02', title: 'AI / technology', detail: 'Computer vision with purpose', imagePosition: '33.33% 0%' },
  { number: '03', title: 'Problem solving', detail: 'Algorithms, systems, architecture', imagePosition: '0% 100%' },
  { number: '04', title: 'Personality', detail: 'Anime-inspired cyberpunk energy', imagePosition: '66.66% 100%' },
  { number: '05', title: 'Engineering', detail: 'College roots, practical builds', imagePosition: '33.33% 0%' },
  { number: '06', title: 'Future / ambition', detail: 'Building toward bigger worlds', imagePosition: '33.33% 100%' },
  { number: '07', title: 'Hackathons', detail: 'Teams, deadlines, bold prototypes', imagePosition: '66.66% 0%' },
  { number: '08', title: 'Gaming', detail: 'Competition, strategy, play', imagePosition: '100% 100%' },
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [...SIGNALS, ...SIGNALS]
  const row2 = [...SIGNALS.slice(4), ...SIGNALS, ...SIGNALS.slice(0, 4)]

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="px-5 pb-8 sm:px-8 md:px-10">
        <p className="text-[#D7E2EA]/50 uppercase tracking-[0.25em] text-xs sm:text-sm">Build signals / 08</p>
      </div>
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {row1.map((signal, i) => (
          <SignalTile
            key={`row1-${i}`}
            signal={signal}
          />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {row2.map((signal, i) => (
          <SignalTile
            key={`row2-${i}`}
            signal={signal}
          />
        ))}
      </div>
    </section>
  )
}

function SignalTile({ signal }: { signal: Signal }) {
  return (
    <article className="relative flex h-[220px] w-[300px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-6 sm:h-[270px] sm:w-[420px] sm:p-8" style={{ backgroundImage: "url('/build-signals.png')", backgroundPosition: signal.imagePosition, backgroundSize: '400% 200%' }}>
      <div className="absolute inset-0 bg-[#0C0C0C]/20" />
      <div className="relative flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/45">{signal.number}</span>
      </div>
      <div className="relative">
        <h3 className="text-xl font-medium uppercase text-[#D7E2EA] sm:text-2xl">{signal.title}</h3>
        <p className="mt-2 text-sm uppercase tracking-wider text-[#D7E2EA]/55">{signal.detail}</p>
      </div>
    </article>
  )
}
