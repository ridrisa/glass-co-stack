'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://image.pollinations.ai/prompt/spectacular%20modern%20glass%20architecture%20skyscraper%20building%20facade%20massive%20scale%20geometric%20patterns%20and%20reflective%20blue%20tinted%20glass%20panels%20covering%20entire%20exterior%20contemporary%20cutting%20edge%20design%20dramatic%20perspective%20looking%20upward%20crystal%20clear%20sky%20reflections%20sharp%20angular%20lines%20futuristic%20aesthetic%20professional%20architectural%20photography%20ultra%20wide%20angle%20lens%20golden%20hour%20lighting%20with%20sun%20glare%20on%20glass%20cinematic%20composition%208K%20ultra%20high%20definition%20resolution%20photorealistic%20details%20impressive%20corporate%20headquarters%20stunning%20visual%20impact%20award%20winning%20architecture?width=1920&height=1080&enhance=true"
          alt="Modern glass architecture background"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            GLAZE<span className="text-accent relative">
              //
              <span className="absolute inset-0 blur-sm opacity-50">//</span>
            </span>PRO
            <br />
            <span className="text-accent text-3xl md:text-4xl font-medium italic mt-4 block">
              Precision in Transparency
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Saudi Arabia's specialized architectural glazing systems company — transforming
            façades with precision-engineered glass solutions that combine beauty, safety, and sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Request Consultation
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Projects
            </button>
          </motion.div>

          {/* Vision 2030 Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-2 text-saudi-green"
          >
            <span className="text-2xl">//</span>
            <span className="text-sm font-medium">Supporting Vision 2030</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
