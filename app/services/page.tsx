'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlassShimmer from '@/components/GlassShimmer'
import { glassFloat, fadeUp } from '@/lib/motionPresets'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'EPC Projects',
    description: 'End-to-end Engineering, Procurement, and Construction services for complex industrial and infrastructure projects. We manage the entire lifecycle from design to commissioning.',
    features: [
      'Integrated project delivery',
      'Risk mitigation & management',
      'Procurement optimization',
      'Commissioning & handover',
    ],
    href: '/services/epc',
  },
  {
    title: 'Design-Build',
    description: 'Single-source responsibility for design and construction, accelerating project delivery while maintaining quality and cost control.',
    features: [
      'Accelerated project timelines',
      'Cost certainty',
      'Seamless design-construct integration',
      'Reduced change orders',
    ],
    href: '/services/design-build',
  },
  {
    title: 'Construction Management',
    description: 'Professional construction management services ensuring projects are delivered on time, on budget, and to the highest quality standards.',
    features: [
      'Project scheduling & coordination',
      'Cost control & reporting',
      'Quality assurance & control',
      'Stakeholder communication',
    ],
    href: '/services/cm',
  },
  {
    title: 'Turnkey Solutions',
    description: 'Complete project delivery from concept to occupancy. We handle every aspect so you can focus on your core business.',
    features: [
      'Single point of responsibility',
      'Comprehensive project management',
      'Streamlined communication',
      'Faster time-to-market',
    ],
    href: '/services/turnkey',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to your project needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.href}
                {...glassFloat}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassShimmer className="p-8 h-full">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-slate-600">
                      <svg
                        className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-block text-accent font-semibold hover:underline"
                >
                  Learn More →
                </a>
                </GlassShimmer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

