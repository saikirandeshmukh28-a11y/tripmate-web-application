import { useState } from 'react'
import { X, Plus, Sparkles, MapPin } from 'lucide-react'

interface ProposeIdeaModalProps {
  isOpen: boolean
  onClose: () => void
  onPropose: (item: any) => void
}

export default function ProposeIdeaModal({ isOpen, onClose, onPropose }: ProposeIdeaModalProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Dinner & Drinks')
  const [cost, setCost] = useState('1800')
  const [description, setDescription] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPropose({
      title,
      category,
      cost: parseFloat(cost) || 0,
      description
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#DE3724] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Propose New Place or Activity</h3>
              <p className="text-[11px] text-neutral-500">Put it up for instant group voting</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Title / Spot Name
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
              <input
                type="text"
                required
                placeholder="e.g. Curlies Shack Sunset Party"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-2.5 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              >
                <option>Dinner & Drinks</option>
                <option>Activity / Sports</option>
                <option>Stay / Villa</option>
                <option>Sightseeing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Est. Cost / Person (₹)
              </label>
              <input
                type="number"
                required
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Description & Highlights
            </label>
            <textarea
              rows={3}
              placeholder="Why should the group pick this?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Launch Group Vote</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
