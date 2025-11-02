# Glass Co - Web Frontend

A premium glass company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX**: Beautiful glassmorphism design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **3D Effects**: Interactive tilt effects on service cards
- **Framer Motion**: Smooth scroll animations and transitions
- **RFQ Form**: Request for Quote form integrated with Flask API
- **Accessible**: Reduced motion support for accessibility
- **Performance**: Optimized for speed and SEO

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_BASE=http://127.0.0.1:8080
```

For production, set this to your API URL.

## Project Structure

```
apps/web/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services grid
│   ├── Portfolio.tsx    # Portfolio showcase
│   ├── Stats.tsx        # Statistics counter
│   ├── RFQForm.tsx      # Request quote form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Set environment variable: `NEXT_PUBLIC_API_BASE`
4. Deploy

### Other Platforms

Build the production bundle and deploy the `.next` folder.

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Tilt
- Recharts

## License

MIT
