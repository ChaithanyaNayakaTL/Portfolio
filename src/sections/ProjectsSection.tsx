import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

interface Project {
  number: string
  category: string
  name: string
  href: string
  description: string
  technologies: string[]
  accent: string
  imageSrc: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'AI / Computer Vision / Accessibility',
    name: 'SmartShop',
    href: 'https://github.com/ChaithanyaNayakaTL/AI-Assistive-shopping-for-Visually-Impaired',
    description: 'An assistive shopping system that recognizes products, extracts details with OCR, and guides users with voice interaction.',
    technologies: ['Python', 'FastAPI', 'YOLOv8', 'OCR'],
    accent: '#F5B942',
    imageSrc: '/smartshop.png',
  },
  {
    number: '02',
    category: 'Cloud / Full-Stack / Optimization',
    name: 'Costra',
    href: 'https://github.com/ChaithanyaNayakaTL/Cloud-Cost-Optimizer',
    description: 'A cloud cost platform with live AWS pricing insights and rule-based recommendations for reducing infrastructure spend.',
    technologies: ['React', 'FastAPI', 'AWS Pricing API', 'Firebase', 'JWT'],
    accent: '#5ED6B3',
    imageSrc: '/costra.png',
  },
  {
    number: '03',
    category: 'Android / Maps / Recommendation System',
    name: 'MatsyaMitra+',
    href: 'https://github.com/naanu-adithya/MatsyaMitra',
    description: 'A multilingual fishing-zone recommender combining advisories, weather, maps, safety alerts, and crowd-aware recommendations.',
    technologies: ['Android Studio', 'Firebase', 'Google Maps API'],
    accent: '#78B7FF',
    imageSrc: '/matsyamitra.png',
  },
]

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-[32px] border border-white/10 bg-[#151515]">
      <img src={project.imageSrc} alt={`${project.name} project preview`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-transparent" />
      <div className="relative flex h-full flex-col justify-between gap-12">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/50">
          <span>Featured build</span>
          <span style={{ color: project.accent }}>● concept</span>
        </div>
        <div>
          <div className="mb-5 h-px w-full bg-white/15"><div className="h-px w-2/5" style={{ backgroundColor: project.accent }} /></div>
          <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-white/60">{technology}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={ref} className="h-[85vh] flex items-start sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div style={{ scale }} className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{project.number}</span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">{project.category}</span>
              <span className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-3xl md:text-4xl">{project.name}</span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>
        <div className="flex-1 min-h-0"><ProjectArtwork project={project} /></div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Projects</h2>
      </FadeIn>
      <div className="flex flex-col gap-6">{PROJECTS.map((project, i) => <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />)}</div>
    </section>
  )
}
