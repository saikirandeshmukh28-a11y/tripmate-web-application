import { useState } from 'react'
import { X, Sparkles, MapPin, Calendar, Users, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface NewTripModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewTripModal({ isOpen, onClose }: NewTripModalProps) {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('Goa, India')
  const [dates, setDates] = useState('Oct 24 – Oct 28, 2025')
  const [travelers, setTravelers] = useState('4 Travelers')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
    navigate('/itinerary')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DE3724]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Create New Trip Itinerary</h3>
              <p className="text-[11px] text-neutral-500">Instant AI generation with live cost calculation</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Where are you traveling to?
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Goa, India"
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Travel Dates
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Dates"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Travelers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="Count"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-100 text-xs text-neutral-700">
            <span className="font-semibold text-[#DE3724] block mb-0.5">Preset Active Blueprint:</span>
            Includes Goa Coastal Adventure with verified Fontainhas villa, Mandovi river cruise, and smart group expense tracking.
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>Build Trip Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
