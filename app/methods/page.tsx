import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Methods | Contracting Co - EPC, Design-Build, QA/QC, HSE',
  description: 'Learn about our construction methodologies including EPC delivery, design-build, construction management, and our commitment to quality assurance and health & safety excellence.',
}

const methods = [
  {
    title: 'EPC Delivery',
    description: 'Integrated Engineering, Procurement, and Construction approach for complex projects.',
    details: [
      'Single point of responsibility',
      'Risk mitigation through early involvement',
      'Optimized design-construct coordination',
      'Streamlined procurement and logistics',
    ],
  },
  {
    title: 'Design-Build',
    description: 'Accelerated project delivery with cost certainty through integrated design and construction.',
    details: [
      'Reduced project duration by 15-30%',
      'Cost savings through value engineering',
      'Fewer change orders and disputes',
      'Enhanced collaboration',
    ],
  },
  {
    title: 'Quality Assurance & Control',
    description: 'Rigorous QA/QC processes ensuring consistent quality across all project phases.',
    details: [
      'ISO 9001 certified quality systems',
      'Independent third-party inspections',
      'Digital quality management platform',
      'Continuous improvement programs',
    ],
  },
  {
    title: 'Health, Safety & Environment',
    description: 'Zero-harm culture with industry-leading HSE performance and environmental stewardship.',
    details: [
      'ISO 45001 certified safety management',
      'TRIR below industry average',
      'Environmental compliance (ISO 14001)',
      'Regular safety training and audits',
    ],
  },
]

export default function MethodsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Methods
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Proven methodologies delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method, idx) => (
              <div key={idx} className="glass rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {method.title}
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <ul className="space-y-3">
                  {method.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-white/70">
                      <svg
                        className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

