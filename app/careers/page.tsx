import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Contracting Co - Join Our Team',
  description: "Explore career opportunities with Contracting Co. We're looking for talented professionals in construction, engineering, project management, and support roles.",
}

const openPositions = [
  {
    title: 'Senior Project Manager',
    department: 'Project Management',
    location: 'Multiple Locations',
    type: 'Full-time',
  },
  {
    title: 'Structural Engineer',
    department: 'Engineering',
    location: 'Houston, TX',
    type: 'Full-time',
  },
  {
    title: 'Safety Coordinator',
    department: 'HSE',
    location: 'Los Angeles, CA',
    type: 'Full-time',
  },
  {
    title: 'Estimator',
    department: 'Pre-Construction',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Field Superintendent',
    department: 'Field Operations',
    location: 'Atlanta, GA',
    type: 'Full-time',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build your career with industry leaders
            </p>
          </div>

          <div className="glass rounded-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Why Join Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Competitive Benefits
                </h3>
                <p className="text-white/80">
                  Comprehensive health insurance, retirement plans, and performance bonuses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Career Development
                </h3>
                <p className="text-white/80">
                  Ongoing training, certification support, and clear advancement pathways.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Diverse Projects
                </h3>
                <p className="text-white/80">
                  Work on challenging, high-profile projects across multiple sectors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  Team Culture
                </h3>
                <p className="text-white/80">
                  Collaborative environment with experienced professionals and mentorship.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, idx) => (
                <div
                  key={idx}
                  className="glass rounded-xl p-6 hover:scale-[1.01] transition-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 rounded-lg bg-accent text-ink font-semibold hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

