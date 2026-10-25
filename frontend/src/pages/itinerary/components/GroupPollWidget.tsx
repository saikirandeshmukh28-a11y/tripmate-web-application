import { useState } from 'react'
import { Vote, CheckCircle2, Circle } from 'lucide-react'

export default function GroupPollWidget() {
  const [selectedOption, setSelectedOption] = useState<'joseph' | 'down_the_road'>('joseph')

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-rose-50 text-[#DE3724] flex items-center justify-center">
            <Vote className="w-3.5 h-3.5 stroke-[2.2]" />
          </div>
          <h4 className="text-xs font-bold text-neutral-900">
            Group Poll in Progress
          </h4>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-100 text-neutral-700">
          Active
        </span>
      </div>

      {/* Question */}
      <p className="text-xs font-medium text-neutral-700 leading-snug">
        "Post-dinner drinks: Stay at Joseph Bar or stroll to Down The Road live pub?"
      </p>

      {/* Poll Options */}
      <div className="space-y-2 pt-1">
        
        {/* Option 1: Joseph Bar */}
        <button
          type="button"
          onClick={() => setSelectedOption('joseph')}
          className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left text-xs transition-all ${
            selectedOption === 'joseph'
              ? 'bg-[#FDECE9]/50 border-rose-200 shadow-xs'
              : 'bg-white border-neutral-200 hover:bg-neutral-50'
          }`}
        >
          <div className="flex items-center gap-2">
            {selectedOption === 'joseph' ? (
              <CheckCircle2 className="w-4 h-4 text-[#DE3724] shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-neutral-300 shrink-0" />
            )}
            <span className="font-semibold text-neutral-900">
              Joseph Bar (Heritage vibes)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 items-center">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-[9px] flex items-center justify-center border border-white">
                A
              </span>
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[9px] flex items-center justify-center border border-white">
                P
              </span>
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[9px] flex items-center justify-center border border-white">
                R
              </span>
            </div>
            <span className="text-[11px] font-bold text-neutral-600">3 votes</span>
          </div>
        </button>

        {/* Option 2: Down The Road */}
        <button
          type="button"
          onClick={() => setSelectedOption('down_the_road')}
          className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-left text-xs transition-all ${
            selectedOption === 'down_the_road'
              ? 'bg-[#FDECE9]/50 border-rose-200 shadow-xs'
              : 'bg-white border-neutral-200 hover:bg-neutral-50'
          }`}
        >
          <div className="flex items-center gap-2">
            {selectedOption === 'down_the_road' ? (
              <CheckCircle2 className="w-4 h-4 text-[#DE3724] shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-neutral-300 shrink-0" />
            )}
            <span className="text-neutral-700">
              Down The Road (Live band)
            </span>
          </div>

          <span className="text-[11px] text-neutral-400">
            1 vote (Me)
          </span>
        </button>

      </div>
    </div>
  )
}
