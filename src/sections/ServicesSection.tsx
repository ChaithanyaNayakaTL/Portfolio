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
    name: 'Tools I Work With',
    description:
      'React, FastAPI, YOLOv8, MongoDB, Firebase, H2 Database, Git, GitHub, and VS Code.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
