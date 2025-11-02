# Brand Design System - GLAZE//PRO

## Overview

This document outlines the design system for GLAZE//PRO, a premium Saudi glazing company specializing in architectural glass systems.

## Brand Identity

- **Company Name**: GLAZE//PRO
- **Slogan**: "Engineering Light. Designing Vision."
- **Tagline**: "Saudi Architectural Glass Systems — Precision, Clarity, Performance."
- **Tone**: Technical elegance + architectural artistry
- **Bilingual**: Arabic ↔ English (RTL + LTR switch)
- **Target Market**: Saudi Arabia (Riyadh, Jeddah, Dammam, NEOM)

## Color Palette

### Primary Colors
- **Ink**: `#0A0F1A` - Deep background, primary text area
- **Paper**: `#0B1324` - Secondary background
- **Glass**: `rgba(255,255,255,0.06)` - Glassmorphism base
- **Border**: `#1F2A44` - Subtle borders

### Accent Colors
- **Accent (Sky Blue)**: `#60A5FA` - Primary CTA, highlights, links, metrics
- **Amber**: `#F59E0B` - Warm highlights, special emphasis
- **Lime**: `#22C55E` - Success states, positive indicators

### Usage Guidelines
- Use accent color (#60A5FA) for primary CTAs, links, and important metrics
- Amber for awards, certifications, and premium content highlights
- Glass effects for cards and overlays with backdrop blur
- Maintain sufficient contrast (WCAG AA minimum 4.5:1)
- Lighting cues inspired by Riyadh daylight: soft blues + warm ambers

## Typography

### Font Family
- **Display & Body**: Inter (Latin), Tajawal (Arabic)
- Fallback: `ui-sans-serif, system-ui`
- Font variable: `--font-tajawal` for Arabic support

### Type Scale
- **Display**: `text-6xl` (3.75rem / 60px) - Hero headings
- **H1**: `text-4xl` to `text-5xl` (2.25rem - 3rem) - Page titles
- **H2**: `text-3xl` (1.875rem) - Section headings
- **H3**: `text-2xl` (1.5rem) - Subsection headings
- **Body**: `text-base` (1rem) - Body text
- **Small**: `text-sm` (0.875rem) - Supporting text

### RTL Support
- Arabic text automatically uses Tajawal font
- RTL layout switches via `dir="rtl"` on HTML element
- Flexbox and grid layouts respect RTL direction

## Spacing Scale

Consistent 8px base unit system:
- `4px` - Tight spacing
- `8px` - Small gaps
- `12px` - Default gaps
- `16px` - Comfortable spacing
- `24px` - Section spacing
- `32px` - Large gaps
- `48px` - Major sections
- `64px` - Hero spacing

## Elevation & Shadows

### Shadows
- **Card**: `0 10px 30px rgba(0,0,0,.25)` - Standard card elevation
- **Nav**: `0 6px 24px rgba(0,0,0,.22)` - Navigation bar shadow

### Border Radius
- **XL**: `1.25rem` (20px) - Large cards, modals
- **LG**: `0.75rem` (12px) - Standard cards, buttons

## Glass Effects

### Components
- **GlassShimmer**: Moving specular streak effect with adjustable intensity
- **RefractionCard**: SVG `feDisplacementMap` refraction simulation
- **CausticsBackground**: Canvas-based animated caustics overlay
- **ParallaxGlass**: Parallax depth effect for images

### Implementation
- Backdrop blur: `backdrop-blur-md` (12px)
- Glass base: `rgba(255,255,255,0.06)`
- Border: `rgba(255,255,255,0.1)` to `rgba(255,255,255,0.12)`
- Respects `prefers-reduced-motion`

## Components

### Buttons
- **Primary**: Accent background (#60A5FA), ink text, rounded-xl
- **Secondary**: Glass effect, white text, hover:bg-white/10
- **Focus**: 2px accent ring with offset

### Cards
- Glass background with backdrop blur
- Rounded-xl corners (20px)
- Card shadow for depth
- Hover: scale-[1.02] with smooth transition
- GlassShimmer for premium cards

### Forms
- Glass input backgrounds
- Border: border-white/20
- Focus: 2px accent ring
- Error states: red-500/20 background, red-500 border
- Bilingual labels and placeholders

### Navigation
- Fixed top navigation with glass-dark on scroll
- Language toggle (EN/AR)
- RTL-aware layout
- Mobile-responsive hamburger menu

## Animations

### Principles
- Respect `prefers-reduced-motion`
- Use Framer Motion for page transitions
- Micro-interactions on hover (scale, color)
- Smooth duration: 300-500ms for interactions

### Motion Presets
- **fadeUp**: `{ opacity: 0, y: 14 }` → `{ opacity: 1, y: 0 }`
- **glassFloat**: `{ opacity: 0, scale: 0.985 }` → `{ opacity: 1, scale: 1 }`
- **hoverLift**: `{ y: -4 }` on hover with shadow enhancement
- **staggerChildren**: Sequential reveal for lists/grids

### Glass-Specific Effects
- Refraction shimmer on cards
- Caustics background animation
- Parallax depth for hero images
- Light refraction on glass surfaces

## Accessibility

### Color Contrast
- Text on background: minimum 4.5:1
- Large text (18px+): minimum 3:1
- Interactive elements: 4.5:1 minimum
- All colors tested against WCAG 2.2 AA

### Focus States
- All interactive elements have visible focus rings
- Focus ring: 2px accent color (#60A5FA) with offset
- Keyboard navigation support for all components
- Skip links for main content

### Screen Readers
- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Alt text for all images
- Proper heading hierarchy (h1 → h6)

## Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px (md:)
- **Desktop**: > 1024px (lg:)
- **Wide**: > 1280px (xl:)

## Bilingual Implementation

### Language Context
- Centralized language management via `LanguageProvider`
- Translations in `lib/language.tsx`
- Language persistence in localStorage
- Automatic RTL/LTR switching

### RTL Considerations
- Flex direction reverses automatically
- Text alignment adjusts
- Navigation order flips
- Margins/padding respect RTL
- All animations work in both directions

## SEO Keywords

Primary:
- glazing systems
- façade glass
- curtain wall
- frameless doors
- smart glass Saudi Arabia
- Riyadh façade contractor

Secondary:
- architectural glass
- skylights
- balustrades
- Low-E glass
- IGU
- tempered glass
- Saudi Arabia glazing

## Implementation

All design tokens are configured in `tailwind.config.js` and can be accessed via Tailwind utility classes:

```js
colors: {
  accent: '#60A5FA',
  amber: '#F59E0B',
  lime: '#22C55E',
  ink: '#0A0F1A',
  paper: '#0B1324',
  glass: 'rgba(255,255,255,0.06)',
  border: '#1F2A44',
}
```

## Performance Targets

- Lighthouse Score: > 95
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms
- FCP (First Contentful Paint): < 1.8s

## Deployment

- Platform: Vercel (SSR-friendly)
- Build: `npm run build`
- Environment: Production-ready with full TypeScript types
- All pages compiled and accessible
- Forms validated and responsive
- WCAG 2.2 AA compliance verified
