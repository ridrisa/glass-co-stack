'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface OnePagerProps {
  title?: string
  subtitle?: string
  sections?: {
    heading: string
    content: string | React.ReactNode
  }[]
  cta?: {
    text: string
    href: string
  }
  footer?: {
    contact: string
    email: string
    phone: string
  }
}

/**
 * OnePager Marketing Template
 *
 * Brand-aligned single-page marketing document component
 * Perfect for print or PDF export
 *
 * Usage:
 * <OnePager
 *   title="GLAZE//PRO Product Overview"
 *   sections={[...]}
 * />
 */
export default function OnePager({
  title = 'GLAZE//PRO',
  subtitle = 'Precision in Transparency',
  sections = [],
  cta,
  footer = {
    contact: 'Riyadh, Saudi Arabia',
    email: 'info@glazepro.sa',
    phone: '+966 11 234 5678'
  }
}: OnePagerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto bg-white text-white p-12 shadow-2xl print:shadow-none"
    >
      {/* Header */}
      <header className="mb-12 border-b-2 border-accent pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">
              GLAZE<span className="text-accent">//</span>PRO
            </h1>
            <p className="text-accent text-lg font-medium italic">
              {subtitle}
            </p>
          </div>
          <div className="text-right text-sm text-white/70">
            <p>{new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
          </div>
        </div>
      </header>

      {/* Title Section */}
      {title !== 'GLAZE//PRO' && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-saudi-green rounded-full"></div>
        </div>
      )}

      {/* Dynamic Sections */}
      <div className="space-y-8 mb-12">
        {sections.map((section, idx) => (
          <section key={idx} className="group">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-accent">//</span>
              {section.heading}
            </h3>
            <div className="text-white/80 leading-relaxed">
              {typeof section.content === 'string' ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      {cta && (
        <div className="mb-12 p-8 glass-blue rounded-2xl border-2 border-accent/30 bg-accent/5">
          <h3 className="text-2xl font-bold text-accent mb-4">
            Ready to Transform Your Project?
          </h3>
          <a
            href={cta.href}
            className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {cta.text}
          </a>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-ink/10 pt-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
          <div>
            <p className="font-semibold text-white mb-1">Contact</p>
            <p>{footer.contact}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Email</p>
            <p>
              <a href={`mailto:${footer.email}`} className="text-accent hover:underline">
                {footer.email}
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Phone</p>
            <p>
              <a href={`tel:${footer.phone.replace(/\s/g, '')}`} className="text-accent hover:underline">
                {footer.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} GLAZE//PRO. All rights reserved. // Supporting Vision 2030</p>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }

          @page {
            margin: 1.5cm;
            size: A4;
          }
        }
      `}</style>
    </motion.div>
  )
}

/**
 * Pre-configured One-Pager Templates
 */

// Company Overview One-Pager
export function CompanyOverviewOnePager() {
  const sections = [
    {
      heading: 'Who We Are',
      content: 'GLAZE//PRO is Saudi Arabia\'s premier architectural glazing systems company. We specialize in precision-engineered glass solutions for Vision 2030 megaprojects — from curtain walls to smart glass systems.'
    },
    {
      heading: 'Our Expertise',
      content: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Architectural Glass Systems (Curtain Walls, Frameless Partitions, Skylights)</li>
          <li>High-Performance Glazing (Low-E, IGU, Smart Glass)</li>
          <li>Engineering Collaboration with First-Grade Consultancies</li>
          <li>Saudi Building Code Compliance & SASO Certifications</li>
        </ul>
      )
    },
    {
      heading: 'Key Metrics',
      content: (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center p-4 bg-accent/5 rounded-lg">
            <div className="text-3xl font-bold text-accent">480+</div>
            <div className="text-sm text-white/70 mt-1">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-saudi-green/5 rounded-lg">
            <div className="text-3xl font-bold text-saudi-green">14-28</div>
            <div className="text-sm text-white/70 mt-1">Days Lead Time</div>
          </div>
          <div className="text-center p-4 bg-desert-gold/5 rounded-lg">
            <div className="text-3xl font-bold text-desert-gold">6+</div>
            <div className="text-sm text-white/70 mt-1">Glass Systems</div>
          </div>
        </div>
      )
    },
    {
      heading: 'Vision 2030 Alignment',
      content: 'As a Saudi-based company, we actively support Vision 2030 megaprojects including NEOM, Qiddiya, Diriyah Gate, and Boulevard Riyadh City — contributing to the Kingdom\'s architectural transformation.'
    }
  ]

  return (
    <OnePager
      title="Company Overview"
      subtitle="Engineering Light. Designing Vision."
      sections={sections}
      cta={{
        text: 'Request a Consultation',
        href: '/contact'
      }}
    />
  )
}

// Product Overview One-Pager
export function ProductOverviewOnePager() {
  const sections = [
    {
      heading: 'Tempered Glass',
      content: 'Safety glass with 5× strength. Ideal for façades, partitions, and balustrades. U-value: 5.6 W/m²K | SHGC: 0.81'
    },
    {
      heading: 'Low-E IGU Systems',
      content: 'High-performance insulated glass units. Energy-efficient for Saudi climate. U-value: 1.6 W/m²K | SHGC: 0.42'
    },
    {
      heading: 'Smart Glass (PDLC)',
      content: 'Privacy on demand with switchable opacity. Perfect for conference rooms and luxury interiors. Electronically controlled transparency.'
    },
    {
      heading: 'Curtain Wall Systems',
      content: 'Unitized and stick-built systems for iconic façades. Full engineering support and installation coordination.'
    }
  ]

  return (
    <OnePager
      title="Product Portfolio"
      sections={sections}
      cta={{
        text: 'View Technical Specifications',
        href: '/specs'
      }}
    />
  )
}
