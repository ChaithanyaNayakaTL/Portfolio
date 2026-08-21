import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Let&apos;s talk
          </h2>
          <p className="text-[#D7E2EA]/70 font-light max-w-md" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
            Interested in working together or discussing software engineering opportunities, projects, and innovative ideas? Feel free to reach out.
          </p>
          <ContactButton href="mailto:chathu123tl@gmail.com" label="Email Me" />

          <div className="card" aria-label="social links">
            <a className="social-link1" href="http://linkedin.com/in/chaithanyatl" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a className="social-link2" href="https://github.com/ChaithanyaNayakaTL" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a className="social-link3" href="mailto:chathu123tl@gmail.com" aria-label="Email">
              <Mail />
            </a>
            <a className="social-link4" href="https://drive.google.com/" target="_blank" rel="noreferrer" aria-label="Resume">
              <FileText />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
