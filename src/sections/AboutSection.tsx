import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const ABOUT_TEXT =
  "I’m a Computer Science Engineering student focused on building practical software that blends strong engineering fundamentals with real-world product thinking. I enjoy turning complex problems into useful experiences through thoughtful design, solid backend architecture, and AI-enhanced workflows."

const HIGHLIGHTS = [
  { label: 'Approach', value: 'Build for clarity' },
  { label: 'Mindset', value: 'Ship useful ideas' },
  { label: 'Direction', value: 'Product-minded engineering' },
]

function MoonGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="46" fill="url(#moonGrad)" />
      <circle cx="66" cy="36" r="34" fill="#0C0C0C" />
      <defs>
        <linearGradient id="moonGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#646973" />
          <stop offset="1" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="none" stroke="url(#cubeGrad)" strokeWidth="3" />
      <polygon points="50,4 92,27 50,50 8,27" fill="none" stroke="url(#cubeGrad)" strokeWidth="3" />
      <line x1="50" y1="50" x2="50" y2="96" stroke="url(#cubeGrad)" strokeWidth="3" />
      <defs>
        <linearGradient id="cubeGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#646973" />
          <stop offset="1" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function BlocksGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <rect x="6" y="6" width="40" height="40" rx="6" fill="url(#blockGrad1)" />
      <rect x="54" y="6" width="40" height="40" rx="6" fill="none" stroke="url(#blockGrad2)" strokeWidth="3" />
      <rect x="6" y="54" width="40" height="40" rx="6" fill="none" stroke="url(#blockGrad2)" strokeWidth="3" />
      <rect x="54" y="54" width="40" height="40" rx="6" fill="url(#blockGrad1)" />
      <defs>
        <linearGradient id="blockGrad1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#646973" />
          <stop offset="1" stopColor="#BBCCD7" />
        </linearGradient>
        <linearGradient id="blockGrad2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BBCCD7" />
          <stop offset="1" stopColor="#646973" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function OrbitGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="14" fill="url(#orbGrad)" />
      <ellipse cx="50" cy="50" rx="46" ry="18" stroke="url(#orbGrad)" strokeWidth="2.5" />
      <ellipse cx="50" cy="50" rx="18" ry="46" stroke="url(#orbGrad)" strokeWidth="2.5" transform="rotate(35 50 50)" />
      <defs>
        <linearGradient id="orbGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#646973" />
          <stop offset="1" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <MoonGlyph className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <CubeGlyph className="w-[100px] sm:w-[140px] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <BlocksGlyph className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <OrbitGlyph className="w-[130px] sm:w-[170px] md:w-[220px]" />
      </FadeIn>

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
        <p className="mt-4 text-center text-[#D7E2EA] font-medium uppercase tracking-[0.12em]" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)' }}>
          Chaithanya Nayaka T L
        </p>
      </FadeIn>

      <div className="mt-10 sm:mt-14 md:mt-16 flex w-full max-w-6xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.2} y={25} className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[#D7E2EA] font-medium leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.45rem)' }}
            />
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {HIGHLIGHTS.map((item, index) => (
              <FadeIn key={item.label} delay={0.25 + index * 0.1} y={20}>
                <div className="rounded-[24px] border border-white/10 bg-[#121212] p-5 text-left">
                  <p className="text-[#D7E2EA]/60 uppercase tracking-[0.22em] text-[10px] sm:text-xs">{item.label}</p>
                  <p className="mt-3 text-[#D7E2EA] font-medium uppercase leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                    {item.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-2 sm:mt-4 md:mt-6">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
