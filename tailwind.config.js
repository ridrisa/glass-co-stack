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
        // GLAZE//PRO Brand Architecture - Dark Theme
        // Core Identity
        ink: '#1a1f2e', // Deep dark blue-gray (primary backgrounds)
        paper: '#232938', // Slightly lighter dark (cards, secondary backgrounds)
        accent: '#2563eb', // Vibrant blue (CTAs, links, primary actions)

        // Glass Signature Colors - Dark Theme
        glass: {
          DEFAULT: 'rgba(35,41,56,0.8)', // Base glassmorphism
          border: 'rgba(255,255,255,0.08)', // Subtle borders
          shimmer: 'rgba(35,41,56,0.95)', // Hover states
          clear: 'rgba(35,41,56,0.6)', // Ultra-light
          blue: 'rgba(37,99,235,0.15)', // Low-E tint
          green: 'rgba(16,185,129,0.15)', // Smart glass tint
          bronze: 'rgba(245,158,11,0.15)', // Solar control tint
        },

        // Border System - Dark Theme
        border: {
          DEFAULT: 'rgba(255,255,255,0.1)', // Standard borders
          subtle: 'rgba(255,255,255,0.05)', // Ultra-subtle
          medium: 'rgba(255,255,255,0.1)', // Standard glass
          strong: 'rgba(255,255,255,0.15)', // Emphasized
        },

        // Saudi-Optimized Palette (Vision 2030 Colors) - Dark Theme
        'saudi-green': '#10b981', // Palm oasis, sustainability
        'desert-gold': '#f59e0b', // Traditional gold, luxury
        'riyadh-blue': '#3b82f6', // Desert sky, innovation

        // Contextual Colors - Dark Theme
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',

        // Text Colors - Dark Theme
        text: {
          primary: '#ffffff', // White
          secondary: '#e2e8f0', // Light gray
          tertiary: '#cbd5e1', // Medium gray
        },

        // Legacy compatibility - Dark Theme
        primary: '#1a1f2e',
        amber: '#f59e0b',
        lime: '#10b981',
        gold: '#f59e0b',
        'glass-blue': '#1e293b',
        'glass-light': '#334155',
        'glass-accent': '#2563eb',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)',
        nav: '0 4px 20px rgba(0,0,0,0.06)',
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
