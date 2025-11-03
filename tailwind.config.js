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
        // GLAZE//PRO Brand Architecture - Light Day Theme
        // Core Identity
        ink: '#f8fafc', // Very light blue-gray (primary backgrounds)
        paper: '#ffffff', // Pure white (cards, secondary backgrounds)
        accent: '#2563eb', // Vibrant blue (CTAs, links, primary actions)

        // Glass Signature Colors - Light Theme
        glass: {
          DEFAULT: 'rgba(255,255,255,0.8)', // Base glassmorphism
          border: 'rgba(0,0,0,0.08)', // Subtle borders
          shimmer: 'rgba(255,255,255,0.95)', // Hover states
          clear: 'rgba(255,255,255,0.6)', // Ultra-light
          blue: 'rgba(37,99,235,0.05)', // Low-E tint
          green: 'rgba(16,185,129,0.05)', // Smart glass tint
          bronze: 'rgba(245,158,11,0.05)', // Solar control tint
        },

        // Border System - Light Theme
        border: {
          DEFAULT: '#e2e8f0', // Standard borders
          subtle: 'rgba(0,0,0,0.05)', // Ultra-subtle
          medium: 'rgba(0,0,0,0.1)', // Standard glass
          strong: 'rgba(0,0,0,0.15)', // Emphasized
        },

        // Saudi-Optimized Palette (Vision 2030 Colors) - Light Theme
        'saudi-green': '#059669', // Palm oasis, sustainability (darker for visibility)
        'desert-gold': '#d97706', // Traditional gold, luxury (darker)
        'riyadh-blue': '#2563eb', // Desert sky, innovation

        // Contextual Colors - Light Theme
        success: '#059669',
        warning: '#d97706',
        danger: '#dc2626',
        info: '#2563eb',

        // Text Colors - Light Theme
        text: {
          primary: '#0f172a', // Very dark slate
          secondary: '#475569', // Medium slate
          tertiary: '#94a3b8', // Light slate
        },

        // Legacy compatibility - Light Theme
        primary: '#ffffff',
        amber: '#d97706',
        lime: '#059669',
        gold: '#d97706',
        'glass-blue': '#dbeafe',
        'glass-light': '#eff6ff',
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
