'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideProps {
  type?: 'title' | 'content' | 'two-column' | 'image' | 'metrics' | 'closing'
  title?: string
  subtitle?: string
  content?: ReactNode
  leftContent?: ReactNode
  rightContent?: ReactNode
  image?: string
  metrics?: {
    value: string
    label: string
    color?: 'accent' | 'saudi-green' | 'desert-gold'
  }[]
  footer?: boolean
  className?: string
}

/**
 * PresentationSlide Component
 *
 * Brand-aligned presentation slide system for GLAZE//PRO
 * Supports multiple layouts optimized for architectural presentations
 *
 * Usage:
 * <PresentationSlide type="title" title="GLAZE//PRO" subtitle="Company Overview" />
 */
export default function PresentationSlide({
  type = 'content',
  title,
  subtitle,
  content,
  leftContent,
  rightContent,
  image,
  metrics = [],
  footer = true,
  className = ''
}: SlideProps) {
  const slideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className={`relative w-full aspect-video bg-gradient-to-br from-ink via-paper to-ink text-white overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-saudi-green rounded-full blur-3xl"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 h-full flex flex-col p-16">
        {/* Slide Content Based on Type */}
        {type === 'title' && (
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-8xl font-bold mb-6">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-md opacity-50">//</span>
              </span>PRO
            </h1>
            {title && title !== 'GLAZE//PRO' && (
              <h2 className="text-5xl font-bold text-white/90 mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-3xl text-accent font-medium italic">{subtitle}</p>
            )}
          </div>
        )}

        {type === 'content' && (
          <>
            <div className="mb-8">
              {title && (
                <h2 className="text-5xl font-bold text-white mb-3 flex items-center gap-4">
                  <span className="text-accent">//</span>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-2xl text-white/70">{subtitle}</p>
              )}
            </div>
            <div className="flex-1 text-2xl text-white/90 leading-relaxed">
              {content}
            </div>
          </>
        )}

        {type === 'two-column' && (
          <>
            <div className="mb-8">
              {title && (
                <h2 className="text-5xl font-bold text-white mb-3 flex items-center gap-4">
                  <span className="text-accent">//</span>
                  {title}
                </h2>
              )}
            </div>
            <div className="flex-1 grid grid-cols-2 gap-12">
              <div className="text-xl text-white/90 leading-relaxed">
                {leftContent}
              </div>
              <div className="text-xl text-white/90 leading-relaxed">
                {rightContent}
              </div>
            </div>
          </>
        )}

        {type === 'image' && (
          <>
            {title && (
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-white mb-3 flex items-center gap-4">
                  <span className="text-accent">//</span>
                  {title}
                </h2>
              </div>
            )}
            <div className="flex-1 relative rounded-2xl overflow-hidden glass-light">
              {image ? (
                <img
                  src={image}
                  alt={title || 'Slide image'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <p className="text-2xl">Image placeholder</p>
                </div>
              )}
            </div>
          </>
        )}

        {type === 'metrics' && (
          <>
            {title && (
              <div className="mb-12">
                <h2 className="text-5xl font-bold text-white mb-3 flex items-center gap-4">
                  <span className="text-accent">//</span>
                  {title}
                </h2>
              </div>
            )}
            <div className="flex-1 grid grid-cols-3 gap-8">
              {metrics.map((metric, idx) => {
                const colorClass =
                  metric.color === 'saudi-green'
                    ? 'text-saudi-green bg-saudi-green/10'
                    : metric.color === 'desert-gold'
                    ? 'text-desert-gold bg-desert-gold/10'
                    : 'text-accent bg-accent/10'

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    className={`${colorClass} rounded-2xl p-8 flex flex-col justify-center items-center text-center`}
                  >
                    <div className="text-7xl font-bold mb-4">{metric.value}</div>
                    <div className="text-2xl text-white/90">{metric.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </>
        )}

        {type === 'closing' && (
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold text-white mb-8">{title || 'Thank You'}</h2>
            {subtitle && <p className="text-3xl text-white/70 mb-12">{subtitle}</p>}
            {content && <div className="text-2xl text-white/90">{content}</div>}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="mt-auto pt-8 flex justify-between items-end text-sm text-white/50">
            <div>
              <p className="font-bold text-white/70">
                GLAZE<span className="text-accent">//</span>PRO
              </p>
              <p className="italic text-accent/70">Precision in Transparency</p>
            </div>
            <div className="text-right">
              <p>Riyadh, Saudi Arabia</p>
              <p>info@glazepro.sa | +966 11 234 5678</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Pre-built Presentation Templates
 */

// Company Introduction Deck
export function CompanyIntroSlides() {
  return (
    <>
      {/* Title Slide */}
      <PresentationSlide
        type="title"
        title="Company Introduction"
        subtitle="Precision in Transparency"
      />

      {/* Who We Are */}
      <PresentationSlide
        type="content"
        title="Who We Are"
        content={
          <div className="space-y-6">
            <p>
              GLAZE//PRO is Saudi Arabia's premier architectural glazing systems company,
              specializing in precision-engineered glass solutions for Vision 2030 megaprojects.
            </p>
            <ul className="space-y-4 text-xl list-disc list-inside">
              <li>First-grade engineering collaboration</li>
              <li>Saudi Building Code compliant</li>
              <li>SASO certified products</li>
              <li>480+ projects delivered across KSA</li>
            </ul>
          </div>
        }
      />

      {/* Key Metrics */}
      <PresentationSlide
        type="metrics"
        title="Key Metrics"
        metrics={[
          { value: '480+', label: 'Projects Delivered', color: 'accent' },
          { value: '14-28', label: 'Days Lead Time', color: 'saudi-green' },
          { value: '6+', label: 'Glass Systems', color: 'desert-gold' }
        ]}
      />

      {/* Product Range */}
      <PresentationSlide
        type="two-column"
        title="Product Range"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent mb-4">Glass Products</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Tempered Glass</li>
              <li>Laminated Safety Glass</li>
              <li>Low-E IGU Systems</li>
              <li>Smart Glass (PDLC)</li>
              <li>Fire-Rated Glass</li>
              <li>Mirror & Back-Painted</li>
            </ul>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-saudi-green mb-4">Glazing Systems</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Curtain Wall (Unitized)</li>
              <li>Stick-Built Systems</li>
              <li>Frameless Partitions</li>
              <li>Skylights & Canopies</li>
              <li>Glass Balustrades</li>
              <li>Structural Glazing</li>
            </ul>
          </div>
        }
      />

      {/* Vision 2030 Alignment */}
      <PresentationSlide
        type="content"
        title="Vision 2030 Alignment"
        subtitle="Supporting the Kingdom's Transformation"
        content={
          <div className="space-y-6">
            <p>
              As a Saudi-based company, we actively contribute to Vision 2030 megaprojects:
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-light p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-accent mb-2">NEOM</h4>
                <p className="text-lg text-white/80">Futuristic city glazing systems</p>
              </div>
              <div className="glass-light p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-accent mb-2">Qiddiya</h4>
                <p className="text-lg text-white/80">Entertainment capital facades</p>
              </div>
              <div className="glass-light p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-accent mb-2">Diriyah Gate</h4>
                <p className="text-lg text-white/80">Heritage district architecture</p>
              </div>
              <div className="glass-light p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-accent mb-2">Boulevard City</h4>
                <p className="text-lg text-white/80">Riyadh urban development</p>
              </div>
            </div>
          </div>
        }
      />

      {/* Closing Slide */}
      <PresentationSlide
        type="closing"
        title="Let's Build Together"
        subtitle="Transform Your Vision into Reality"
        content={
          <div className="glass-light p-12 rounded-2xl max-w-3xl mx-auto">
            <p className="text-3xl font-semibold text-accent mb-6">Contact Us</p>
            <p className="text-2xl mb-2">info@glazepro.sa</p>
            <p className="text-2xl mb-6">+966 11 234 5678</p>
            <p className="text-xl text-white/70">Riyadh, Saudi Arabia</p>
          </div>
        }
      />
    </>
  )
}

// Product Showcase Deck
export function ProductShowcaseSlides() {
  return (
    <>
      <PresentationSlide
        type="title"
        title="Product Portfolio"
        subtitle="High-Performance Architectural Glass"
      />

      <PresentationSlide
        type="content"
        title="Low-E IGU Systems"
        subtitle="Energy Efficiency for Saudi Climate"
        content={
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center glass-blue p-6 rounded-xl">
                <div className="text-5xl font-bold font-mono text-accent mb-2">1.6</div>
                <div className="text-lg">W/m²K</div>
                <div className="text-sm text-white/60 mt-1">U-Value</div>
              </div>
              <div className="text-center glass-blue p-6 rounded-xl">
                <div className="text-5xl font-bold font-mono text-accent mb-2">0.42</div>
                <div className="text-lg">SHGC</div>
                <div className="text-sm text-white/60 mt-1">Solar Heat Gain</div>
              </div>
              <div className="text-center glass-blue p-6 rounded-xl">
                <div className="text-5xl font-bold font-mono text-accent mb-2">70%</div>
                <div className="text-lg">VLT</div>
                <div className="text-sm text-white/60 mt-1">Light Transmission</div>
              </div>
            </div>
            <ul className="space-y-3 text-xl mt-8">
              <li>✓ Superior thermal insulation for Saudi climate</li>
              <li>✓ Reduced cooling costs up to 40%</li>
              <li>✓ LEED-compliant energy performance</li>
              <li>✓ Saudi Building Code certified</li>
            </ul>
          </div>
        }
      />

      <PresentationSlide
        type="closing"
        title="Request Technical Specifications"
        content={
          <p className="text-2xl text-white/80">
            Visit <span className="text-accent font-bold">glazepro.sa/specs</span> for detailed datasheets
          </p>
        }
      />
    </>
  )
}
