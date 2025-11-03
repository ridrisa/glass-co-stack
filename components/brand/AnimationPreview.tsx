'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * AnimationPreview Component
 *
 * Interactive showcase of brand animation system
 */
export default function AnimationPreview() {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null)

  const triggerAnimation = (name: string) => {
    setActiveAnimation(name)
    setTimeout(() => setActiveAnimation(null), 2000)
  }

  return (
    <div className="space-y-12">
      {/* Motion Presets */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Motion Presets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fade Up */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">fadeUp</h4>
            <p className="text-sm text-slate-400 mb-6">
              Entrance animation for page content
            </p>
            <button
              onClick={() => triggerAnimation('fadeUp')}
              className="btn-secondary text-sm mb-6"
            >
              Trigger Animation
            </button>
            {activeAnimation === 'fadeUp' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-light p-6 rounded-xl"
              >
                <p className="text-white">Content appears smoothly from below</p>
              </motion.div>
            )}
            <pre className="text-xs text-slate-400 font-mono mt-4 p-4 bg-ink/50 rounded overflow-x-auto">
{`initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
}`}
            </pre>
          </div>

          {/* Glass Float */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">glassFloat</h4>
            <p className="text-sm text-slate-400 mb-6">
              Card entrance with scale and fade
            </p>
            <button
              onClick={() => triggerAnimation('glassFloat')}
              className="btn-secondary text-sm mb-6"
            >
              Trigger Animation
            </button>
            {activeAnimation === 'glassFloat' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="glass-light p-6 rounded-xl"
              >
                <p className="text-white">Glass cards float into view</p>
              </motion.div>
            )}
            <pre className="text-xs text-slate-400 font-mono mt-4 p-4 bg-ink/50 rounded overflow-x-auto">
{`initial: { opacity: 0, scale: 0.95, y: 20 }
animate: { opacity: 1, scale: 1, y: 0 }
transition: {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
}`}
            </pre>
          </div>

          {/* Hover Lift */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">hoverLift</h4>
            <p className="text-sm text-slate-400 mb-6">
              Interactive hover state
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-light p-6 rounded-xl cursor-pointer"
            >
              <p className="text-white text-center">Hover over me</p>
            </motion.div>
            <pre className="text-xs text-slate-400 font-mono mt-4 p-4 bg-ink/50 rounded overflow-x-auto">
{`whileHover={{
  scale: 1.02,
  y: -4
}}
transition={{
  duration: 0.3,
  ease: 'easeOut'
}`}
            </pre>
          </div>

          {/* Stagger Children */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">staggerChildren</h4>
            <p className="text-sm text-slate-400 mb-6">
              Sequential list animations
            </p>
            <button
              onClick={() => triggerAnimation('stagger')}
              className="btn-secondary text-sm mb-6"
            >
              Trigger Animation
            </button>
            {activeAnimation === 'stagger' && (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  animate: { transition: { staggerChildren: 0.1 } }
                }}
                className="space-y-3"
              >
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    className="glass-light p-4 rounded-lg"
                  >
                    <p className="text-white">Item {item}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            <pre className="text-xs text-slate-400 font-mono mt-4 p-4 bg-ink/50 rounded overflow-x-auto">
{`variants={{
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}}`}
            </pre>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          CSS Keyframe Animations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Float */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">animate-float</h4>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center animate-float">
                <span className="text-3xl">🪟</span>
              </div>
            </div>
            <pre className="text-xs text-slate-400 font-mono p-4 bg-ink/50 rounded overflow-x-auto">
{`@keyframes float {
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-20px)
  }
}
/* 6s ease-in-out infinite */`}
            </pre>
          </div>

          {/* Glow */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">animate-glow</h4>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center animate-glow">
                <span className="text-accent text-2xl font-bold">//</span>
              </div>
            </div>
            <pre className="text-xs text-slate-400 font-mono p-4 bg-ink/50 rounded overflow-x-auto">
{`@keyframes glow {
  0% {
    box-shadow: 0 0 5px accent
  }
  100% {
    box-shadow: 0 0 20px accent
  }
}
/* 2s ease-in-out infinite */`}
            </pre>
          </div>

          {/* Glass Shine */}
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4">glass-shimmer</h4>
            <div className="flex justify-center mb-6">
              <div className="glass-shimmer w-full h-24 bg-slate-50 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">Shimmer Effect</span>
              </div>
            </div>
            <pre className="text-xs text-slate-400 font-mono p-4 bg-ink/50 rounded overflow-x-auto">
{`@keyframes glass-shine {
  0% {
    transform: translateX(-100%)
      skewX(-15deg)
  }
  100% {
    transform: translateX(200%)
      skewX(-15deg)
  }
}
/* 5.5s infinite linear */`}
            </pre>
          </div>
        </div>
      </section>

      {/* Easing Curves */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Easing Curves
        </h3>
        <div className="glass p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Brand Easing</h4>
              <p className="text-spec mb-4">[0.22, 1, 0.36, 1]</p>
              <p className="text-sm text-slate-400 mb-4">
                Smooth, spring-like motion for all entrance animations
              </p>
              <motion.div
                key={activeAnimation === 'ease1' ? 'active' : 'inactive'}
                initial={{ x: 0 }}
                animate={{ x: activeAnimation === 'ease1' ? 200 : 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-12 h-12 bg-accent rounded-lg mb-4"
              />
              <button
                onClick={() => triggerAnimation('ease1')}
                className="btn-secondary text-sm"
              >
                Demo Easing
              </button>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-3">Hover Easing</h4>
              <p className="text-spec mb-4">ease-out</p>
              <p className="text-sm text-slate-400 mb-4">
                Quick, responsive for interactive states
              </p>
              <motion.div
                key={activeAnimation === 'ease2' ? 'active' : 'inactive'}
                initial={{ x: 0 }}
                animate={{ x: activeAnimation === 'ease2' ? 200 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-12 h-12 bg-saudi-green rounded-lg mb-4"
              />
              <button
                onClick={() => triggerAnimation('ease2')}
                className="btn-secondary text-sm"
              >
                Demo Easing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Accessibility: Reduced Motion
        </h3>
        <div className="glass p-8 rounded-2xl">
          <p className="text-slate-400 mb-6">
            All animations respect the user's <code className="text-spec">prefers-reduced-motion</code> setting:
          </p>
          <pre className="text-sm text-slate-400 font-mono p-6 bg-ink/50 rounded-xl overflow-x-auto">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </pre>
          <div className="mt-6 glass-light p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-2">Best Practices</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>✓ Essential motion only (no decorative animations)</li>
              <li>✓ Subtle over dramatic</li>
              <li>✓ Purposeful, not distracting</li>
              <li>✓ GPU-accelerated properties only (transform, opacity)</li>
              <li>✓ Short durations (0.3-0.8s)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Duration Guidelines */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Duration Guidelines
        </h3>
        <div className="glass p-8 rounded-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-ink/30 rounded-lg">
              <div className="text-2xl font-bold text-accent font-mono w-24">0.3s</div>
              <div className="flex-1">
                <p className="text-white font-semibold">Micro-interactions</p>
                <p className="text-sm text-slate-500">Hover states, button presses</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-ink/30 rounded-lg">
              <div className="text-2xl font-bold text-accent font-mono w-24">0.6s</div>
              <div className="flex-1">
                <p className="text-white font-semibold">Content Entrance</p>
                <p className="text-sm text-slate-500">Page loads, section reveals</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-ink/30 rounded-lg">
              <div className="text-2xl font-bold text-accent font-mono w-24">0.8s</div>
              <div className="flex-1">
                <p className="text-white font-semibold">Complex Animations</p>
                <p className="text-sm text-slate-500">Multi-property transitions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-ink/30 rounded-lg">
              <div className="text-2xl font-bold text-accent font-mono w-24">5.5s+</div>
              <div className="flex-1">
                <p className="text-white font-semibold">Ambient Effects</p>
                <p className="text-sm text-slate-500">Glass shimmer, floating elements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
