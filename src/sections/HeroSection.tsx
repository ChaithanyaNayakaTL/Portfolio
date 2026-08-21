import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const PORTRAIT_SRC = '/avatar.png'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center gap-3 px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-batman-btn"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m Chai
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[41%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[min(78vw,620px)] sm:w-[min(58vw,680px)] lg:w-[min(48vw,760px)] pointer-events-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src={PORTRAIT_SRC}
              alt="Portrait of Aizen"
              className="block w-full max-h-[72vh] object-contain object-bottom select-none pointer-events-none"
              onError={(event) => { event.currentTarget.style.display = 'none' }}
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            software engineer | full-stack &amp; AI developer{`\n`}Tumkur, Karnataka, India
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
