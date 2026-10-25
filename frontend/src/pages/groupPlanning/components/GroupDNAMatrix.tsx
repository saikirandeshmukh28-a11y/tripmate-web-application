import { Target, ShieldCheck } from 'lucide-react'

export default function GroupDNAMatrix() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-rose-50 text-[#DE3724] flex items-center justify-center">
            <Target className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
            Group DNA Matrix
          </h4>
        </div>
        <span className="text-[11px] font-medium text-neutral-400">
          4 Profiles
        </span>
      </div>

      {/* Trait 1: Dietary Harmony */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-neutral-800">Dietary Harmony</span>
          <span className="text-emerald-700 font-bold">3 Seafood • 1 Veg</span>
        </div>

        {/* Bar */}
        <div className="flex h-2 rounded-full overflow-hidden gap-1 bg-neutral-100">
          <div className="bg-emerald-500 w-[75%] rounded-l-full"></div>
          <div className="bg-emerald-300 w-[25%] rounded-r-full"></div>
        </div>

        {/* AI Safeguard Note */}
        <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-[11px] text-emerald-800 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong className="font-bold">AI Safeguard:</strong> All chosen dinner spots include dedicated vegan/veg menus.
          </span>
        </div>
      </div>

      {/* Trait 2: Travel Pace */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-neutral-800">Travel Pace</span>
          <span className="text-orange-600 font-bold">50% Chill • 50% Active</span>
        </div>

        {/* Bar */}
        <div className="flex h-2 rounded-full overflow-hidden gap-1 bg-neutral-100">
          <div className="bg-orange-500 w-[50%] rounded-l-full"></div>
          <div className="bg-[#DE3724] w-[50%] rounded-r-full"></div>
        </div>

        <p className="text-[11px] text-neutral-500 leading-snug">
          Max 2 anchor activities scheduled per day to maintain relaxed beach rhythm.
        </p>
      </div>

      {/* Trait 3: Shared Budget Target */}
      <div className="space-y-2 pt-2 border-t border-neutral-100">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-800">Shared Budget Target</span>
          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-rose-50 text-[#DE3724] border border-rose-200">
            ALIGNED
          </span>
        </div>

        <div className="bg-[#F4F4F6] p-3 rounded-xl border border-neutral-200/70">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-extrabold text-neutral-900">₹15,000</span>
            <span className="text-[10px] text-neutral-500">per member (excl. flights)</span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">
            Current planned commitments: <strong className="text-neutral-700">₹9,700/person</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
