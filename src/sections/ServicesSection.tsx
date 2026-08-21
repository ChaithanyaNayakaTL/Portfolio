import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Core Engineering',
    description:
      'C / C++, Python, Data Structures & Algorithms, SQL, REST APIs, and backend development.',
  },
  {
    number: '02',
    name: 'Product Development',
    description:
      'Full-stack web applications with React, FastAPI, MongoDB, Firebase, and secure authentication.',
  },
  {
    number: '03',
    name: 'AI & Computer Vision',
    description:
      'AI/ML applications using YOLOv8 and OCR, with a focus on useful, accessible real-world experiences.',
  },
  {
    number: '04',
    name: 'Cloud Applications',
    description:
      'Cloud-based products using AWS Pricing API, Firebase, Google Maps API, and deployment-ready APIs.',
  },
  {
    number: '05',
    name: 'Backend & API Engineering',
    description:
      'FastAPI, REST APIs, JWT, API Integration, MongoDB, H2.',
  },
  {
    number: '06',
    name: 'Tools I Work With',
    description:
      'Git, GitHub, VS Code, Docker, Postman.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="relative mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={20}>
            <div className="skill-card group">
              <div className="skill-card-front">
                <div className="flex items-center justify-between gap-4">
                  <span className="skill-number">{service.number}</span>
                  <div className="skill-divider" />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="skill-title">{service.name}</h3>
                </div>
              </div>

              <div className="skill-card-back">
                <p className="skill-back-copy">{service.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
