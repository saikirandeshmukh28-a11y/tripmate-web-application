import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Sparkles,
  RefreshCw
} from 'lucide-react'
import { MOCK_USERS } from '../../../data/mockData'

interface TripHeaderProps {
  onAskAi?: () => void
  onReplan?: () => void
}

export default function TripHeader({ onAskAi, onReplan }: TripHeaderProps) {
  return (
    <div className="space-y-4 pb-4">
      {/* Top Meta Badges & Action Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Left Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 text-[#DE3724] border border-rose-200 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE3724]"></span>
            ACTIVE PLANNING
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            Oct 24 – 28, 2025
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            4 Days • 3 Nights
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#DE3724]" />
            North & Central Goa, India
          </span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => alert('Trip link copied to clipboard!')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold shadow-xs transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Trip</span>
          </button>

          <button
            type="button"
            onClick={onAskAi}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DE3724]" />
            <span>Ask AI Assistant</span>
          </button>

          <button
            type="button"
            onClick={onReplan}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Replan Day</span>
          </button>
        </div>

      </div>

      {/* Main Title & Budget Overview Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Goa Coastal Adventure & Sunsets
          </h1>
          
          {/* Travelers Stack */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-1.5 items-center">
              <img
                src={MOCK_USERS.rohan.avatar}
                alt="Me"
                className="w-6 h-6 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <img
                src={MOCK_USERS.priya.avatar}
                alt="Priya"
                className="w-6 h-6 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <img
                src={MOCK_USERS.arjun.avatar}
                alt="Arjun"
                className="w-6 h-6 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <img
                src={MOCK_USERS.sneha.avatar}
                alt="Sneha"
                className="w-6 h-6 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
            </div>
            <span className="text-xs font-semibold text-neutral-700">4 Travelers</span>
          </div>
        </div>

        {/* Budget Status Badge */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-xs">
          <div className="text-xs">
            <span className="text-neutral-400 font-medium">EST. TOTAL </span>
            <span className="font-extrabold text-neutral-900">₹48,200</span>
            <span className="text-neutral-500"> / budget ₹54,000</span>
          </div>

          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
            ₹5,800 under
          </span>
        </div>

      </div>
    </div>
  )
}
