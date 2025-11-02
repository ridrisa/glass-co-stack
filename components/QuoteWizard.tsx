'use client'

import { useState } from 'react'
import RFQWizard from './RFQWizard'
import GlassShimmer from './GlassShimmer'

type FormData = {
  scope: string
  projectType: string
  description: string
  location: string
  timeline: string
  startDate: string
  budgetRange: string
  fundingSource?: string
  name: string
  email: string
  phone: string
  company?: string
  role?: string
  attachments?: File[]
  additionalNotes?: string
}

export default function QuoteWizard() {
  const [exportData, setExportData] = useState<string | null>(null)

  const handleSubmit = async (data: FormData) => {
    // Convert files to metadata for JSON export
    const attachmentsData = (data.attachments || []).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }))

    const exportJson = {
      ...data,
      attachments: attachmentsData,
      submittedAt: new Date().toISOString(),
    }

    const jsonString = JSON.stringify(exportJson, null, 2)
    setExportData(jsonString)

    // Auto-download JSON file
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rfq-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <GlassShimmer className="p-8">
        <RFQWizard onSubmit={handleSubmit} />
      </GlassShimmer>
      {exportData && (
        <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/70 mb-2">✓ RFQ data exported as JSON</p>
        </div>
      )}
    </div>
  )
}
