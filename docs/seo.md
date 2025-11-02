# SEO Documentation

## Overview

This document outlines the SEO implementation for Contracting Co website, ensuring optimal search engine visibility and performance.

## Metadata Structure

### Page Metadata
All pages use Next.js 14 `Metadata` API for:
- Title tags (with template for consistent branding)
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- Keywords (where relevant)

### Schema.org Structured Data

#### Organization Schema
- Type: `Organization`
- Includes: name, URL, logo, description, address, social profiles

#### LocalBusiness Schema
- Type: `LocalBusiness`
- Includes: aggregate ratings, business information
- Extends Organization schema

#### Project Schema (for case studies)
- Type: `Project`
- Includes: name, description, location, completion date, value

## Sitemap

- **Location**: `/sitemap.xml` (auto-generated via `app/sitemap.ts`)
- **Update Frequency**: Configured per page type
  - Home: weekly
  - Projects: weekly
  - Services/Sectors: monthly
  - Static pages: monthly

## Robots.txt

- **Location**: `/public/robots.txt`
- **Configuration**: Allows all user agents
- **Sitemap Reference**: Included for search engine discovery

## URL Structure

Clean, semantic URLs:
- `/services` - Service offerings
- `/sectors/real-estate` - Sector-specific pages
- `/projects/[slug]` - Individual project case studies
- `/contact` - RFQ/Contact page

## Content Optimization

### Headings Hierarchy
- H1: One per page (main title)
- H2: Section headings
- H3: Subsection headings
- Proper semantic structure

### Image Optimization
- Next.js Image component with:
  - Automatic WebP/AVIF conversion
  - Responsive sizes
  - Lazy loading
  - Alt text for all images

### Internal Linking
- Consistent navigation structure
- Related content links
- Breadcrumb navigation (where applicable)

## Performance

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **INP (Interaction to Next Paint)**: < 200ms

### Optimization Strategies
- Code splitting
- Image optimization
- Font optimization (Next.js font system)
- Lazy loading for below-fold content

## Local SEO

### Business Information
- Company name, address, phone
- Service areas
- Business hours (if applicable)

### Citations
- Consistent NAP (Name, Address, Phone) across platforms
- Local directory listings

## Analytics & Tracking

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools

### Privacy Compliance
- Cookie consent banner (implement as needed)
- GDPR/CCPA compliance considerations
- Minimal data collection

## Best Practices

1. **Content Quality**: Unique, valuable content per page
2. **Mobile-First**: Responsive design with mobile optimization
3. **Page Speed**: Optimize images, code, and third-party scripts
4. **Secure**: HTTPS enabled
5. **Accessible**: WCAG 2.2 AA compliance

## Implementation Checklist

- ✅ Metadata API configured
- ✅ Schema.org JSON-LD
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Image alt text
- ✅ Open Graph tags
- ✅ Twitter Cards
- ⚠️ Analytics integration (add as needed)
- ⚠️ Search Console verification (configure in production)

## Maintenance

- Review Search Console monthly
- Update sitemap when adding new pages
- Monitor Core Web Vitals
- Keep content fresh and relevant
- Update structured data as business evolves

