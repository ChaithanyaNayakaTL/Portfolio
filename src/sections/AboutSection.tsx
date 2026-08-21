import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const ABOUT_TEXT =
  "I’m a Computer Science Engineering student with a strong foundation in Data Structures & Algorithms, software engineering, backend development, and full-stack development. I enjoy building practical applications that combine modern web technologies with AI to solve meaningful real-world problems. My experience includes developing AI-powered accessibility solutions, cloud cost optimization platforms, and intelligent recommendation systems."

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

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-10 sm:mt-14 md:mt-16">
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
        <div className="mt-6 sm:mt-8 md:mt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
