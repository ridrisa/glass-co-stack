'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type FormData = {
  // Step 1: Scope
  scope: string
  projectType: string
  description: string

  // Step 2: Location & Timeline
  location: string
  timeline: string
  startDate: string

  // Step 3: Budget
  budgetRange: string
  fundingSource?: string

  // Step 4: Contact & Attachments
  name: string
  email: string
  phone: string
  company?: string
  role?: string
  attachments?: File[]
  additionalNotes?: string
}

type Props = {
  onSubmit?: (data: FormData) => Promise<void> | void
  apiEndpoint?: string
}

const SCOPE_OPTIONS = [
  'New Construction',
  'Renovation',
  'Infrastructure Project',
  'Industrial Facility',
  'Commercial Development',
  'Residential Complex',
  'Other',
]

const BUDGET_RANGES = [
  'Under $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M - $25M',
  '$25M - $50M',
  '$50M+',
]

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 3 months',
  '3-6 months',
  '6-12 months',
  '12+ months',
  'Planning phase',
]

export default function RFQWizard({ onSubmit, apiEndpoint }: Props) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    scope: '',
    projectType: '',
    description: '',
    location: '',
    timeline: '',
    startDate: '',
    budgetRange: '',
    fundingSource: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    attachments: [],
    additionalNotes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      updateField('attachments', Array.from(e.target.files))
    }
  }

  const validateStep = (stepNum: number): boolean => {
    switch (stepNum) {
      case 1:
        return !!(formData.scope && formData.projectType && formData.description)
      case 2:
        return !!(formData.location && formData.timeline)
      case 3:
        return !!formData.budgetRange
      case 4:
        return !!(formData.name && formData.email && formData.phone)
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      setErrorMessage('Please fill in all required fields')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else if (apiEndpoint) {
        const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8080'
        const response = await fetch(`${apiBase}${apiEndpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }
      }

      setStatus('success')
      setTimeout(() => {
        setStep(1)
        setFormData({
          scope: '',
          projectType: '',
          description: '',
          location: '',
          timeline: '',
          startDate: '',
          budgetRange: '',
          fundingSource: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          attachments: [],
          additionalNotes: '',
        })
        setStatus('idle')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to submit. Please try again.')
    }
  }

  return (
    <section id="rfq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request for Quote
          </h2>
          <p className="text-xl text-gray-300">
            Tell us about your project and we'll provide a detailed proposal
          </p>
        </motion.div>

        <div className="glass p-8 md:p-12 rounded-2xl">
          {/* Progress Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex-1 flex items-center">
                <div
                  className={`flex-1 h-1 mx-2 ${
                    s <= step ? 'bg-accent' : 'bg-white/20'
                  }`}
                />
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    s <= step
                      ? 'bg-accent text-white'
                      : 'bg-white/20 text-slate-400'
                  }`}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Scope */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Project Scope
                </h3>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Project Scope *
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => updateField('scope', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Select scope</option>
                    {SCOPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Project Type *
                  </label>
                  <input
                    type="text"
                    value={formData.projectType}
                    onChange={(e) => updateField('projectType', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., Office Building, Bridge, Warehouse"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Describe your project requirements, challenges, and goals..."
                    required
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Location & Timeline */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Location & Timeline
                </h3>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="City, State/Province, Country"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Timeline *
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateField('timeline', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Select timeline</option>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateField('startDate', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Budget Information
                </h3>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Budget Range *
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => updateField('budgetRange', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Select range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-ink">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Funding Source
                  </label>
                  <input
                    type="text"
                    value={formData.fundingSource}
                    onChange={(e) => updateField('fundingSource', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., Private, Government, Mixed"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact & Attachments */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Role</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => updateField('role', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="e.g., Project Manager, Developer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Attach Files (Optional)
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-accent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-slate-900"
                  />
                  <p className="text-slate-500 text-sm mt-1">
                    PDF, DOC, images (max 10MB per file)
                  </p>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => updateField('additionalNotes', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Any other information we should know?"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <div className="mt-6 bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
              {errorMessage}
            </div>
          )}

          {status === 'success' && (
            <div className="mt-6 bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
              Thank you! We'll review your RFQ and get back to you within 24-48 hours.
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg bg-slate-100 text-white hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              ← Previous
            </button>
            {step < 4 ? (
              <button
                onClick={nextStep}
                disabled={!validateStep(step)}
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={status === 'loading' || !validateStep(4)}
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit RFQ'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

