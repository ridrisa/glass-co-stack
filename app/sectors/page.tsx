import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sectors | Contracting Co - Real Estate, Infrastructure, Industrial & More',
  description: 'Our expertise spans multiple sectors including commercial real estate, infrastructure, industrial facilities, hospitality, and public sector projects.',
}

const sectors = [
  {
    title: 'Real Estate',
    description: 'Commercial office towers, residential complexes, mixed-use developments, and retail centers.',
    href: '/sectors/real-estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    title: 'Infrastructure',
    description: 'Highways, bridges, airports, rail systems, and municipal facilities.',
    href: '/sectors/infrastructure',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  },
  {
    title: 'Industrial',
    description: 'Manufacturing facilities, warehouses, distribution centers, and industrial parks.',
    href: '/sectors/industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
  },
  {
    title: 'Hospitality',
    description: 'Hotels, resorts, restaurants, entertainment venues, and recreational facilities.',
    href: '/sectors/hospitality',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
  },
  {
    title: 'Public Sector',
    description: 'Government buildings, schools, healthcare facilities, and civic infrastructure.',
    href: '/sectors/public',
    image: 'https://images.unsplash.com/photo-1515278879367-d89757c45e5f?w=800&h=600&fit=crop',
  },
]

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Sectors
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Delivering excellence across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <a
                key={sector.href}
                href={sector.href}
                className="block group"
              >
                <div className="glass rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                  <div className="relative h-64">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-semibold text-white mb-2">
                        {sector.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                    <span className="text-accent font-semibold group-hover:underline">
                      Explore Sector →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

