'use client'

import { motion } from 'framer-motion'

interface ProposalSection {
  title: string
  content: React.ReactNode
}

interface ProposalProps {
  // Client Information
  clientName: string
  projectName: string
  date?: string
  proposalNumber?: string

  // Proposal Sections
  executiveSummary?: string
  scope?: ProposalSection[]
  specifications?: {
    glassType: string
    uValue: string
    shgc: string
    thickness: string
    dimensions: string
  }[]
  timeline?: {
    phase: string
    duration: string
    milestone: string
  }[]
  pricing?: {
    item: string
    quantity: string
    unit: string
    price: string
  }[]
  terms?: string[]

  // Footer
  validUntil?: string
  contactPerson?: string
  contactEmail?: string
  contactPhone?: string
}

/**
 * ProposalTemplate Component
 *
 * Professional proposal document for architectural glazing projects
 * Aligned with GLAZE//PRO brand architecture
 *
 * Usage:
 * <ProposalTemplate
 *   clientName="ABC Development"
 *   projectName="Riyadh Tower Façade"
 *   specifications={[...]}
 * />
 */
export default function ProposalTemplate({
  clientName,
  projectName,
  date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  proposalNumber = `PROP-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
  executiveSummary = '',
  scope = [],
  specifications = [],
  timeline = [],
  pricing = [],
  terms = [],
  validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US'),
  contactPerson = 'Sales Department',
  contactEmail = 'info@glazepro.sa',
  contactPhone = '+966 11 234 5678'
}: ProposalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto bg-white text-ink shadow-2xl print:shadow-none"
    >
      {/* Cover Page */}
      <div className="min-h-screen bg-gradient-to-br from-ink via-paper to-ink text-white p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-saudi-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h1>
            <p className="text-accent text-xl font-medium italic">
              Precision in Transparency
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-sm text-slate-500 mb-6">
            <p>Proposal Number: {proposalNumber}</p>
            <p>Date: {date}</p>
          </div>

          <h2 className="text-4xl font-bold mb-2">
            Technical Proposal
          </h2>
          <h3 className="text-2xl text-accent font-semibold mb-8">
            {projectName}
          </h3>

          <div className="glass-light p-6 rounded-xl">
            <p className="text-sm text-slate-700 mb-2">Prepared for:</p>
            <p className="text-2xl font-bold">{clientName}</p>
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          <p>GLAZE//PRO | Riyadh, Saudi Arabia</p>
          <p>{contactEmail} | {contactPhone}</p>
        </div>
      </div>

      {/* Executive Summary */}
      {executiveSummary && (
        <section className="p-12">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Executive Summary
          </h2>
          <div className="prose prose-lg max-w-none text-ink/80 leading-relaxed">
            <p>{executiveSummary}</p>
          </div>
        </section>
      )}

      {/* Scope of Work */}
      {scope.length > 0 && (
        <section className="p-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Scope of Work
          </h2>
          <div className="space-y-6">
            {scope.map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-ink mb-3">
                  {idx + 1}. {section.title}
                </h3>
                <div className="text-ink/80 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {specifications.length > 0 && (
        <section className="p-12">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="p-4 text-left font-semibold">Glass Type</th>
                  <th className="p-4 text-left font-semibold font-mono">U-Value</th>
                  <th className="p-4 text-left font-semibold font-mono">SHGC</th>
                  <th className="p-4 text-left font-semibold">Thickness</th>
                  <th className="p-4 text-left font-semibold">Dimensions</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-ink/10 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-4 font-medium text-ink">{spec.glassType}</td>
                    <td className="p-4 font-mono text-accent">{spec.uValue}</td>
                    <td className="p-4 font-mono text-accent">{spec.shgc}</td>
                    <td className="p-4 text-ink/80">{spec.thickness}</td>
                    <td className="p-4 text-ink/80">{spec.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-ink/60 italic">
            <p>* All specifications comply with Saudi Building Code requirements</p>
            <p>* SASO certification available upon request</p>
          </div>
        </section>
      )}

      {/* Project Timeline */}
      {timeline.length > 0 && (
        <section className="p-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Project Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">{phase.phase}</h3>
                  <p className="text-ink/70">{phase.milestone}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-lg font-bold text-accent">{phase.duration}</div>
                  <div className="text-sm text-ink/60">Duration</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing (Optional - Comment out for confidential proposals) */}
      {pricing.length > 0 && (
        <section className="p-12">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Investment Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 text-left font-semibold">Item</th>
                  <th className="p-4 text-right font-semibold">Quantity</th>
                  <th className="p-4 text-left font-semibold">Unit</th>
                  <th className="p-4 text-right font-semibold">Price (SAR)</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-ink/10 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-4 font-medium text-ink">{item.item}</td>
                    <td className="p-4 text-right font-mono text-ink/80">{item.quantity}</td>
                    <td className="p-4 text-ink/80">{item.unit}</td>
                    <td className="p-4 text-right font-mono text-accent font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-ink/60 italic">
            <p>* Prices are subject to final measurements and specifications</p>
            <p>* VAT (15%) to be added as applicable</p>
          </div>
        </section>
      )}

      {/* Terms & Conditions */}
      {terms.length > 0 && (
        <section className="p-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
            <span className="text-accent">//</span>
            Terms & Conditions
          </h2>
          <ul className="space-y-3">
            {terms.map((term, idx) => (
              <li key={idx} className="flex gap-3 text-ink/80">
                <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{term}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Signature & Acceptance */}
      <section className="p-12">
        <h2 className="text-3xl font-bold text-ink mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Proposal Acceptance
        </h2>
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-xl mb-8">
          <p className="text-ink/80 mb-6">
            This proposal is valid until <strong className="text-accent">{validUntil}</strong>
          </p>
          <div className="grid grid-cols-2 gap-12 mt-8">
            <div>
              <div className="border-b-2 border-ink/30 pb-2 mb-2">
                <p className="text-sm text-ink/60 mb-8">Client Signature</p>
              </div>
              <p className="text-sm text-ink/60">Date: _________________</p>
            </div>
            <div>
              <div className="border-b-2 border-ink/30 pb-2 mb-2">
                <p className="text-sm text-ink/60 mb-8">GLAZE//PRO Representative</p>
              </div>
              <p className="text-sm text-ink/60">Date: _________________</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-ink mb-4">
            Ready to Begin?
          </h3>
          <p className="text-ink/70 mb-6">
            Contact us to discuss this proposal or request modifications
          </p>
          <div className="inline-block bg-accent/10 p-6 rounded-xl">
            <p className="text-sm text-ink/70 mb-2">Contact Person</p>
            <p className="text-lg font-bold text-ink">{contactPerson}</p>
            <p className="text-accent mt-2">
              <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
            </p>
            <p className="text-ink/70">
              <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="hover:underline">{contactPhone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white p-8 text-center text-sm">
        <p className="mb-2">
          GLAZE//PRO | Riyadh, Saudi Arabia | CR: 1234567890
        </p>
        <p className="text-slate-500">
          © {new Date().getFullYear()} GLAZE//PRO. All rights reserved. // Supporting Vision 2030
        </p>
      </footer>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }

          @page {
            margin: 1cm;
            size: A4;
          }

          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </motion.div>
  )
}

/**
 * Example Proposal - Curtain Wall Project
 */
export function CurtainWallProposal() {
  return (
    <ProposalTemplate
      clientName="ABC Development Company"
      projectName="Riyadh Boulevard Tower - Façade Glazing System"
      executiveSummary="GLAZE//PRO is pleased to submit this technical proposal for the architectural glazing system for Riyadh Boulevard Tower. Our solution combines high-performance Low-E IGU systems with unitized curtain wall installation, delivering both aesthetic excellence and energy efficiency in line with Saudi Building Code requirements."
      scope={[
        {
          title: 'Supply of Glazing Materials',
          content: 'Provision of all glass units including Low-E coated IGU systems, laminated safety glass, and spandrel panels as per approved shop drawings and architectural specifications.'
        },
        {
          title: 'Curtain Wall System Installation',
          content: 'Complete unitized curtain wall installation including aluminum framing, structural glazing, weather sealing, and integration with building structure. Installation by certified technicians following manufacturer guidelines and safety protocols.'
        },
        {
          title: 'Testing & Commissioning',
          content: 'Comprehensive testing including air infiltration, water penetration, structural performance, and thermal performance. Full commissioning and handover documentation.'
        }
      ]}
      specifications={[
        {
          glassType: 'Low-E IGU (Double Glazed)',
          uValue: '1.6 W/m²K',
          shgc: '0.42',
          thickness: '24mm (6mm+12mm+6mm)',
          dimensions: 'Max 2400mm × 3600mm'
        },
        {
          glassType: 'Laminated Safety Glass',
          uValue: '5.5 W/m²K',
          shgc: '0.79',
          thickness: '13.52mm (6mm+1.52PVB+6mm)',
          dimensions: 'Max 2400mm × 3600mm'
        }
      ]}
      timeline={[
        {
          phase: 'Shop Drawing Approval',
          duration: '2 weeks',
          milestone: 'Finalized drawings submitted and approved'
        },
        {
          phase: 'Material Procurement',
          duration: '4 weeks',
          milestone: 'Glass fabrication and delivery to site'
        },
        {
          phase: 'Installation',
          duration: '8 weeks',
          milestone: 'Complete façade installation'
        },
        {
          phase: 'Testing & Handover',
          duration: '2 weeks',
          milestone: 'Final commissioning and documentation'
        }
      ]}
      terms={[
        'Proposal validity: 30 days from date of submission',
        'Payment terms: 30% advance, 40% upon delivery, 30% upon completion',
        'Warranty: 2 years on materials and workmanship, 10 years on IGU seals',
        'Price includes delivery to site, installation, and testing',
        'Excludes structural modifications, scaffolding, and site access',
        'Subject to final site measurements and engineering coordination'
      ]}
    />
  )
}
