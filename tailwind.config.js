/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GLAZE//PRO Brand Architecture - Enhanced System
        // Core Identity
        ink: '#0A0F1A', // Deep space (primary backgrounds)
        paper: '#0B1324', // Night sky (cards, secondary backgrounds)
        accent: '#3B82F6', // Saudi blue (CTAs, links, primary actions)

        // Glass Signature Colors
        glass: {
          DEFAULT: 'rgba(255,255,255,0.06)', // Base glassmorphism
          border: 'rgba(255,255,255,0.1)', // Subtle borders
          shimmer: 'rgba(255,255,255,0.15)', // Hover states
          clear: 'rgba(255,255,255,0.02)', // Ultra-light
          blue: 'rgba(59,130,246,0.08)', // Low-E tint
          green: 'rgba(16,185,129,0.08)', // Smart glass tint
          bronze: 'rgba(245,158,11,0.08)', // Solar control tint
        },

        // Border System
        border: {
          DEFAULT: '#1F2A44', // Standard borders
          subtle: 'rgba(255,255,255,0.05)', // Ultra-subtle
          medium: 'rgba(255,255,255,0.1)', // Standard glass
          strong: 'rgba(255,255,255,0.2)', // Emphasized
        },

        // Saudi-Optimized Palette (Vision 2030 Colors)
        'saudi-green': '#10B981', // Palm oasis, sustainability
        'desert-gold': '#F59E0B', // Traditional gold, luxury
        'riyadh-blue': '#3B82F6', // Desert sky, innovation

        // Contextual Colors
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',

        // Text Colors
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255,255,255,0.7)',
          tertiary: 'rgba(255,255,255,0.5)',
        },

        // Legacy compatibility
        primary: '#0B1324',
        amber: '#F59E0B',
        lime: '#10B981',
        gold: '#F59E0B',
        'glass-blue': '#1e3a8a',
        'glass-light': '#3b82f6',
        'glass-accent': '#3b82f6',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.25)',
        nav: '0 6px 24px rgba(0,0,0,.22)',
      },
      borderRadius: {
        xl: '1.25rem',
        lg: '0.75rem',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      fontFamily: {
        display: ['Inter', 'Tajawal', 'ui-sans-serif', 'system-ui'],
        reading: ['Inter', 'Tajawal', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glass-shine': 'glass-shine 5.5s infinite linear',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        'glass-shine': {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}
