# Deployment Documentation

## Overview

This document provides deployment instructions for Contracting Co website, including environment setup, build process, and hosting options.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- Environment variables configured

## Environment Variables

### Required Variables

Create `.env.local` in the `apps/web` directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_API_BASE=https://api.your-domain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# SEO Verification (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### Build-Time Variables

For production builds, ensure:
- `NEXT_PUBLIC_SITE_URL` matches your production domain
- `NEXT_PUBLIC_API_BASE` points to production API

## Local Development

### Setup
```bash
cd apps/web
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run dev
```

### Development Server
- URL: `http://localhost:3000`
- Hot reload enabled
- TypeScript type checking

## Build Process

### Production Build
```bash
npm run build
```

This generates:
- Optimized production build in `.next` directory
- Static assets optimized
- TypeScript compiled
- Images optimized

### Preview Production Build
```bash
npm run preview
```

## Deployment Options

### Vercel (Recommended)

#### Setup
1. Push code to Git repository
2. Import project in Vercel
3. Configure environment variables
4. Deploy

#### Configuration
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x or higher

#### Environment Variables
Add in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_BASE`
- Any other public variables

#### Benefits
- Automatic deployments on Git push
- Edge functions support
- Global CDN
- Preview deployments for PRs

### Netlify

#### Setup
1. Connect Git repository
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Add environment variables
4. Deploy

### Docker Deployment

#### Dockerfile Example
```dockerfile
FROM node:18-alpine AS base

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# Production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build & Run
```bash
docker build -t contracting-web .
docker run -p 3000:3000 --env-file .env.local contracting-web
```

### Cloud Platforms

#### Google Cloud Run
1. Build Docker image
2. Push to Container Registry
3. Deploy to Cloud Run
4. Configure environment variables

#### AWS (Amplify/ECS)
1. Configure build settings
2. Set environment variables
3. Deploy via CI/CD or console

## Post-Deployment

### Verification Checklist
- ✅ Site loads correctly
- ✅ API endpoints working
- ✅ Images loading
- ✅ Forms submitting
- ✅ SEO metadata present
- ✅ Sitemap accessible
- ✅ Robots.txt configured

### Performance Testing
- Run Lighthouse audit
- Check Core Web Vitals
- Test on mobile devices
- Verify CDN delivery

### SEO Setup
1. Submit sitemap to Google Search Console
2. Verify domain ownership
3. Monitor search performance
4. Set up analytics tracking

## CI/CD Integration

### GitHub Actions Example
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      # Add deployment steps here
```

## Troubleshooting

### Build Errors
- Check Node.js version (18+)
- Verify all dependencies installed
- Check TypeScript errors: `npm run build`
- Review environment variables

### Runtime Errors
- Check browser console
- Verify API endpoints
- Review server logs
- Check environment variables in production

### Performance Issues
- Run Lighthouse audit
- Optimize images
- Review bundle size
- Check CDN configuration

## Maintenance

### Updates
- Keep dependencies updated
- Monitor security advisories
- Test after major updates
- Backup before deployments

### Monitoring
- Set up error tracking (Sentry, etc.)
- Monitor Core Web Vitals
- Track analytics
- Review logs regularly

## Support

For deployment issues:
1. Check build logs
2. Review environment variables
3. Verify platform-specific requirements
4. Consult Next.js deployment docs

