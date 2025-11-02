import type { Metadata } from 'next'
import { Inter, Tajawal } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/lib/language'

const inter = Inter({ subsets: ['latin'] })
const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'GLAZE//PRO — Engineering Light. Designing Vision.',
    template: '%s | GLAZE//PRO',
  },
  description: 'Saudi Architectural Glass Systems — Precision, Clarity, Performance. Curtain walls, frameless systems, skylights, balustrades, and smart glass engineered for elegance and efficiency.',
  keywords: [
    'glazing systems Saudi Arabia',
    'façade glass Riyadh',
    'curtain wall Jeddah',
    'frameless doors Dammam',
    'smart glass NEOM',
    'Riyadh façade contractor',
    'SBC compliant glazing',
    'architectural glass Vision 2030',
    'skylights Saudi Arabia',
    'balustrades KSA',
    'Low-E glass Riyadh',
    'IGU Saudi standards',
    'tempered glass SBC',
    'Qiddiya glazing',
    'The Line NEOM façade',
    'Diriyah Gate glass systems',
  ],
  authors: [{ name: 'GLAZE//PRO' }],
  creator: 'GLAZE//PRO',
  publisher: 'GLAZE//PRO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': `${baseUrl}?lang=en`,
      'ar': `${baseUrl}?lang=ar`,
      'x-default': baseUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: baseUrl,
    siteName: 'GLAZE//PRO',
    title: 'GLAZE//PRO — Engineering Light. Designing Vision.',
    description: 'Saudi Architectural Glass Systems — Precision, Clarity, Performance.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GLAZE//PRO - Premium Glazing Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLAZE//PRO — Engineering Light. Designing Vision.',
    description: 'Saudi Architectural Glass Systems — Precision, Clarity, Performance.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GLAZE//PRO',
  alternateName: 'Glaze Pro',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description: 'Saudi Architectural Glass Systems — Precision, Clarity, Performance. Supporting Vision 2030 with premium glazing solutions for NEOM, Qiddiya, Diriyah Gate, and leading megaprojects.',
  slogan: 'Engineering Light. Designing Vision.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'King Fahd Road, Al Olaya',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    postalCode: '12211',
    addressCountry: 'SA',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Riyadh',
    },
    {
      '@type': 'City',
      name: 'Jeddah',
    },
    {
      '@type': 'City',
      name: 'Dammam',
    },
    {
      '@type': 'City',
      name: 'NEOM',
    },
    {
      '@type': 'City',
      name: 'Qiddiya',
    },
    {
      '@type': 'City',
      name: 'AlUla',
    },
  ],
  sameAs: [
    // Add social media links when available
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#organization`,
  name: 'GLAZE//PRO',
  image: `${baseUrl}/images/logo.png`,
  description: 'Saudi Architectural Glass Systems — Precision, Clarity, Performance.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressLocality: 'Riyadh',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} ${tajawal.variable}`}>
        <LanguageProvider>
          {children}
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          <Script
            id="localbusiness-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  )
}
