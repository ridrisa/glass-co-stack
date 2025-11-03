import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QualityBadges from '@/components/QualityBadges'
import MetricMarquee from '@/components/MetricMarquee'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Credentials & Certifications | Contracting Co',
  description: 'View our ISO certifications, safety credentials, insurance coverage, and industry licenses. We maintain the highest standards in quality, safety, and environmental management.',
}

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health & Safety',
  },
  {
    name: 'OSHA 30-Hour',
    description: 'Safety Training Certification',
  },
  {
    name: 'LEED Accredited',
    description: 'Green Building Practices',
  },
  {
    name: 'State Contractor License',
    description: 'Licensed in 12 States',
  },
]

export default function CredentialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Credentials & Compliance
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Committed to excellence through rigorous standards and continuous improvement
            </p>
          </div>

          <QualityBadges badges={certifications} />

          <MetricMarquee
            metrics={[
              { label: 'Safety TRIR', value: 0.45, prefix: '', suffix: '' },
              { label: 'LTIF Rate', value: 0.12, prefix: '', suffix: '' },
              { label: 'Zero Lost-Time Incidents', value: 365, suffix: ' days' },
              { label: 'Compliance Audit Score', value: 98, suffix: '%' },
            ]}
            className="mt-20"
          />

          <div className="mt-20 glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Insurance & Bonding
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  General Liability
                </h3>
                <p className="text-slate-700">$50M aggregate coverage</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Workers Compensation
                </h3>
                <p className="text-slate-700">Full coverage for all employees</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Performance Bonds
                </h3>
                <p className="text-slate-700">Up to $200M single project capacity</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Professional Liability
                </h3>
                <p className="text-slate-700">$25M E&O coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

