import { Receipt, Vote, CloudRain, ArrowRight, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FeatureEngines() {
  return (
    <section className="my-16">
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-wider uppercase text-[#DE3724] block mb-1">
          COORDINATION ENGINES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Built to take the friction out of group journeys
        </h2>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Instant Expense Splitting */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DE3724]">
              <Receipt className="w-5 h-5 stroke-[2.2]" />
            </div>
            
            <h3 className="text-lg font-bold text-neutral-900">
              Instant Expense Splitting
            </h3>
            
            <p className="text-xs text-neutral-600 leading-relaxed">
              Zero math stress. Upload bill photos, split unequal cab rides or café tabs, and let our auto-ledger calculate who owes whom via UPI in seconds.
            </p>
          </div>

          {/* Embedded Interactive Widget Preview */}
          <Link
            to="/expenses"
            className="block p-3.5 rounded-xl bg-[#F4F4F6] border border-neutral-200/70 hover:border-neutral-300 transition-colors text-left"
          >
            <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-2">
              <span>Candolim Seafood Dinner</span>
              <span>₹4,800</span>
            </div>

            {/* Split Progress Color Bar */}
            <div className="flex h-2 rounded-full overflow-hidden gap-1 mb-2">
              <div className="bg-[#DE3724] flex-1"></div>
              <div className="bg-amber-400 flex-1"></div>
              <div className="bg-emerald-500 flex-1"></div>
              <div className="bg-blue-500 flex-1"></div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
              <span>Split 4 ways</span>
              <span className="font-bold text-[#DE3724]">₹1,200 / person</span>
            </div>
          </Link>
        </div>

        {/* Card 2: Collaborative Group Polls */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DE3724]">
              <Vote className="w-5 h-5 stroke-[2.2]" />
            </div>

            <h3 className="text-lg font-bold text-neutral-900">
              Collaborative Group Polls
            </h3>

            <p className="text-xs text-neutral-600 leading-relaxed">
              End the endless WhatsApp debates. Vote on hotels, flight times, and activity tiers with real-time ranked consensus pills.
            </p>
          </div>

          {/* Embedded Interactive Widget Preview */}
          <Link
            to="/group-planning"
            className="block p-3.5 rounded-xl bg-[#F4F4F6] border border-neutral-200/70 hover:border-neutral-300 transition-colors text-left"
          >
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-neutral-800">Choose Day 3 Activity:</span>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Consensus reached
              </span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded-lg bg-white border border-neutral-200 flex items-center justify-between">
                <span className="font-medium text-neutral-800">Scuba at Grand Island</span>
                <span className="font-bold text-[#DE3724]">3 votes (75%)</span>
              </div>
              <div className="p-2 rounded-lg bg-white/60 border border-neutral-100 flex items-center justify-between text-neutral-500">
                <span>Spice Plantation Tour</span>
                <span>1 vote</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 3: Smart Weather Replanning */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DE3724]">
              <CloudRain className="w-5 h-5 stroke-[2.2]" />
            </div>

            <h3 className="text-lg font-bold text-neutral-900">
              Smart Weather Replanning
            </h3>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Monsoon shower coming in? TripMate detects unexpected rain or disruptions and automatically suggests verified indoor alternatives.
            </p>
          </div>

          {/* Embedded Interactive Widget Preview */}
          <div className="p-3.5 rounded-xl bg-[#F4F4F6] border border-neutral-200/70 text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <CloudRain className="w-4 h-4 text-amber-600" />
              <span>Rain forecasted: 3:00 PM</span>
            </div>

            <div className="p-2 rounded-lg bg-white border border-neutral-200 text-[11px] text-neutral-700 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-[#DE3724] shrink-0" />
              <div className="truncate">
                <span className="line-through text-neutral-400">Dudhsagar Trek</span>
                <span className="mx-1 text-neutral-400">→</span>
                <span className="font-semibold text-neutral-900">Artisan Museum & Tea</span>
              </div>
            </div>

            <Link
              to="/itinerary"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#DE3724] hover:text-[#C82F1E] pt-0.5"
            >
              <span>Apply itinerary update</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
