'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import GlassShimmer from '../GlassShimmer'
import { useLanguage } from '@/lib/language'

const testimonials = [
  {
    id: 1,
    quote: "GLAZE//PRO delivered exceptional precision on our NEOM project. Their technical expertise and commitment to deadlines made them an invaluable partner.",
    author: "Ahmed Al-Saud",
    role: "Project Director",
    company: "NEOM Development",
    rating: 5,
  },
  {
    id: 2,
    quote: "The Low-E IGU systems exceeded our energy efficiency targets. Professional installation and comprehensive technical support throughout the project.",
    author: "Sarah Al-Mutairi",
    role: "Lead Architect",
    company: "Qiddiya Investment Company",
    rating: 5,
  },
  {
    id: 3,
    quote: "Outstanding quality and meticulous attention to detail. Their curtain wall systems transformed our building's aesthetic while maintaining structural integrity.",
    author: "Mohammed Al-Rashid",
    role: "Construction Manager",
    company: "Diriyah Gate Development Authority",
    rating: 5,
  },
  {
    id: 4,
    quote: "Fast turnaround without compromising quality. GLAZE//PRO's frameless partition systems are now our standard specification for all projects.",
    author: "Fatima Al-Ghamdi",
    role: "Senior Procurement Manager",
    company: "ROSHN Group",
    rating: 5,
  },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-400 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <GlassShimmer className="p-8 md:p-12">
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white font-medium text-center mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-accent text-sm font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </GlassShimmer>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeIndex ? 'bg-accent w-8' : 'bg-white/30 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
