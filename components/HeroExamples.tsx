'use client'

import HeroShowcase from './HeroShowcase'
import HeroGlassShowcase from './HeroGlassShowcase'

/**
 * Brand-Aligned Hero Component Examples
 *
 * Pre-configured hero sections with GLAZE//PRO brand messaging
 * from the brand architecture document
 */

/**
 * Homepage Hero - Main brand introduction
 */
export function HomepageHero() {
  return (
    <HeroShowcase
      title="GLAZE//PRO"
      subtitle="Precision in Transparency. Saudi Arabia's specialized architectural glazing systems company — transforming façades with precision-engineered glass solutions that combine beauty, safety, and sustainability."
      ctaText="Request Consultation"
      ctaHref="/contact"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Projects Delivered', value: '480', suffix: '+' },
        { label: 'Avg. Lead Time', value: '14-28', suffix: ' days' },
        { label: 'Glass Systems', value: '6', suffix: '+' }
      ]}
    />
  )
}

/**
 * About Page Hero - Company positioning
 */
export function AboutHero() {
  return (
    <HeroShowcase
      title="Engineering Excellence. Architectural Beauty."
      subtitle="GLAZE//PRO combines Madarek-level engineering precision with Pure Glass aesthetic excellence — delivering Vision 2030-ready architectural glass systems from design to installation."
      ctaText="Our Story"
      ctaHref="/about"
      bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Engineering Precision', value: '100', suffix: '%' },
        { label: 'Saudi Building Code', value: 'Compliant' },
        { label: 'SASO Certified', value: 'Yes' }
      ]}
    />
  )
}

/**
 * Products Page Hero - Product portfolio focus
 */
export function ProductsHero() {
  return (
    <HeroGlassShowcase
      title="High-Performance Glass Systems"
      subtitle="From tempered safety glass to Low-E IGU systems — engineered for Saudi Arabia's climate with proven thermal performance and energy efficiency."
      ctaText="Explore Products"
      ctaHref="/products"
      bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Glass Types', value: '6' },
        { label: 'Best U-Value', value: '1.6', suffix: ' W/m²K' },
        { label: 'SHGC Range', value: '0.42-0.81' }
      ]}
    />
  )
}

/**
 * Projects Page Hero - Portfolio showcase
 */
export function ProjectsHero() {
  return (
    <HeroShowcase
      title="Vision 2030 Projects"
      subtitle="Proudly contributing to Saudi Arabia's architectural transformation — from NEOM to Qiddiya, Diriyah Gate to Boulevard Riyadh City."
      ctaText="View Portfolio"
      ctaHref="/projects"
      bgImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Megaprojects', value: '4', suffix: '+' },
        { label: 'Total Glass Area', value: '50K', suffix: ' m²' },
        { label: 'Cities Served', value: '8' }
      ]}
    />
  )
}

/**
 * Systems Page Hero - Glazing systems focus
 */
export function SystemsHero() {
  return (
    <HeroGlassShowcase
      title="Architectural Glazing Systems"
      subtitle="Unitized curtain walls, frameless partitions, skylights, and structural glazing — complete system design, engineering, and installation services."
      ctaText="Explore Systems"
      ctaHref="/systems"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'System Types', value: '3', suffix: '+' },
        { label: 'Max Height', value: '50', suffix: 'm' },
        { label: 'Wind Load', value: 'High' }
      ]}
    />
  )
}

/**
 * Specifications Page Hero - Technical focus
 */
export function SpecsHero() {
  return (
    <HeroShowcase
      title="Technical Specifications"
      subtitle="Comprehensive technical data for all glass products and systems — U-values, SHGC, light transmission, and Saudi Building Code compliance."
      ctaText="Download Datasheets"
      ctaHref="/specs"
      bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Technical Specs', value: '20', suffix: '+' },
        { label: 'Test Reports', value: 'Available' },
        { label: 'BIM Models', value: 'Yes' }
      ]}
    />
  )
}

/**
 * Contact Page Hero - CTA focused
 */
export function ContactHero() {
  return (
    <HeroGlassShowcase
      title="Let's Transform Your Vision"
      subtitle="Partner with Saudi Arabia's premier architectural glazing company. From initial consultation to final installation — we deliver precision-engineered solutions."
      ctaText="Start Your Project"
      ctaHref="/contact"
      bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Response Time', value: '24', suffix: 'h' },
        { label: 'Free Consultation', value: 'Yes' },
        { label: 'Custom Solutions', value: 'Always' }
      ]}
    />
  )
}

/**
 * Sustainability Hero - Environmental focus
 */
export function SustainabilityHero() {
  return (
    <HeroShowcase
      title="Sustainable Glass Solutions"
      subtitle="Energy-efficient Low-E systems, LEED-compliant products, and sustainable practices aligned with Saudi Vision 2030's environmental goals."
      ctaText="Sustainability Report"
      ctaHref="/sustainability"
      bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Energy Savings', value: '40', suffix: '%' },
        { label: 'LEED Points', value: '3-6' },
        { label: 'Carbon Reduction', value: 'High' }
      ]}
    />
  )
}

/**
 * Careers Hero - Recruitment focus
 */
export function CareersHero() {
  return (
    <HeroGlassShowcase
      title="Join Our Team"
      subtitle="Build your career with Saudi Arabia's leading architectural glazing company. We're looking for engineers, technicians, and professionals who share our commitment to excellence."
      ctaText="View Openings"
      ctaHref="/careers"
      bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'Team Size', value: '50', suffix: '+' },
        { label: 'Nationalization', value: '60', suffix: '%' },
        { label: 'Training Hours', value: '200', suffix: '/year' }
      ]}
    />
  )
}

/**
 * Vision 2030 Hero - Megaprojects focus
 */
export function Vision2030Hero() {
  return (
    <HeroShowcase
      title="Vision 2030 Partner"
      subtitle="Supporting the Kingdom's transformation with precision-engineered glass systems for NEOM, Qiddiya, Diriyah Gate, and Boulevard Riyadh City."
      ctaText="View Megaprojects"
      ctaHref="/projects?filter=vision2030"
      bgImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop"
      kpis={[
        { label: 'NEOM Projects', value: '2', suffix: '+' },
        { label: 'Qiddiya', value: 'Active' },
        { label: 'Boulevard City', value: 'Delivered' }
      ]}
    />
  )
}

/**
 * Generic Brand Hero - Flexible template
 *
 * Use this as a starting point for custom hero sections
 */
export function GenericBrandHero({
  title = 'GLAZE//PRO',
  subtitle = 'Precision in Transparency',
  ctaText = 'Learn More',
  ctaHref = '/',
  kpis = [
    { label: 'Projects Delivered', value: '480', suffix: '+' },
    { label: 'Lead Time', value: '14-28', suffix: ' days' },
    { label: 'Glass Systems', value: '6', suffix: '+' }
  ],
  bgImage
}: {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  kpis?: Array<{ label: string; value: string; suffix?: string }>
  bgImage?: string
}) {
  return (
    <HeroShowcase
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      ctaHref={ctaHref}
      kpis={kpis}
      bgImage={bgImage}
    />
  )
}
