import { useState } from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

interface TrafficInsightProps {
  onAskAi?: () => void
}

export default function TrafficInsight({ onAskAi }: TrafficInsightProps) {
  const [adjusted, setAdjusted] = useState(false)

  const handleAdjust = () => {
    setAdjusted(true)
    alert('Itinerary updated: Walking Tour wraps up at 5:00 PM; departure to jetty shifted +15m earlier.')
  }

  return (
    <div className="bg-[#FDEEEB] rounded-2xl border border-rose-200/80 p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-white text-[#DE3724] flex items-center justify-center shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-xs font-bold text-neutral-900">
            TripMate AI Traffic Insight
          </h4>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DE3724] text-white tracking-wide">
          LIVE ALERT
        </span>
      </div>

      {/* Insight Text */}
      <p className="text-xs text-neutral-700 leading-relaxed">
        Traffic on the Mandovi Bridge corridor spikes heavily around 5:15 PM on Fridays. We recommend departing Fontainhas 15 minutes earlier to reach Santa Monica Jetty smoothly for your 6:00 PM sunset boarding.
      </p>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          type="button"
          onClick={onAskAi}
          className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-neutral-700 hover:bg-neutral-50 text-xs font-semibold transition-colors"
        >
          Ask AI Details
        </button>

        <button
          type="button"
          onClick={handleAdjust}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors ${
            adjusted
              ? 'bg-emerald-600 text-white'
              : 'bg-[#DE3724] hover:bg-[#C82F1E] text-white'
          }`}
        >
          {adjusted && <CheckCircle2 className="w-3.5 h-3.5" />}
          <span>{adjusted ? 'Adjusted (+15m)' : 'Adjust Schedule (+15m)'}</span>
        </button>
      </div>
    </div>
  )
}
