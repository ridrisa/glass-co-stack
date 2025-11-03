'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projectTypes = [
  'Residential Windows',
  'Commercial Storefront',
  'Shower Enclosure',
  'Glass Railing',
  'Custom Fabrication',
  'Other',
]

const glassTypes = [
  'Clear Glass',
  'Tempered Glass',
  'Laminated Glass',
  'Low-E Glass',
  'Frosted Glass',
  'Tinted Glass',
]

export default function RFQForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    dimensions: '',
    glass_type: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8080'
      const response = await fetch(`${apiBase}/api/rfq`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          project_type: '',
          dimensions: '',
          glass_type: '',
          message: '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to submit. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="rfq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request a Quote
          </h2>
          <p className="text-xl text-gray-300">
            Get a free estimate for your glass project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glass-accent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glass-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glass-accent"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label htmlFor="project_type" className="block text-white mb-2 font-medium">
                    Project Type *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    value={formData.project_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-glass-accent"
                  >
                    <option value="" className="bg-gray-800">Select a type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="dimensions" className="block text-white mb-2 font-medium">
                    Dimensions *
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    required
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glass-accent"
                    placeholder="e.g., 6ft x 4ft"
                  />
                </div>

                <div>
                  <label htmlFor="glass_type" className="block text-white mb-2 font-medium">
                    Glass Type *
                  </label>
                  <select
                    id="glass_type"
                    name="glass_type"
                    required
                    value={formData.glass_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-glass-accent"
                  >
                    <option value="" className="bg-gray-800">Select a type</option>
                    {glassTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glass-accent resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-glass-light hover:bg-glass-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
        </motion.div>
      </div>
    </section>
  )
}
