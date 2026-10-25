import { Link } from 'react-router-dom'
import {
  Clock,
  CheckCircle2,
  Wallet,
  Building,
  Calendar,
  Share2,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { CURRENT_WORKSPACE } from '../../../data/mockData'

export default function CurrentWorkspace() {
  const ws = CURRENT_WORKSPACE

  return (
    <section className="my-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
            Your Current Workspace
          </h2>
        </div>
        <Link
          to="/itinerary"
          className="text-xs font-semibold text-[#DE3724] hover:text-[#C82F1E] flex items-center gap-0.5 transition-colors"
        >
          <span>View all 3 saved itineraries</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main Workspace Card */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Image Section */}
          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[280px]">
            <img
              src={ws.imageUrl}
              alt={ws.title}
              className="w-full h-full object-cover"
            />
            
            {/* Top Badge: Upcoming in 8 days */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DE3724] text-white text-[11px] font-bold shadow-md">
              <Clock className="w-3.5 h-3.5" />
              <span>Upcoming in 8 days</span>
            </div>

            {/* Bottom Overlay: Taj Falaknuma */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end justify-between text-white text-xs">
              <div className="flex items-center gap-2 font-medium">
                <Building className="w-3.5 h-3.5 opacity-80" />
                <span>{ws.stayNote}</span>
              </div>
              <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold">
                {ws.staySub}
              </span>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Category Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                  {ws.categoryTag}
                </span>
                
                {/* Trip Health Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{ws.statusText}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight mt-1.5">
                {ws.title}
              </h3>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Budget Fit */}
              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/80">
                <div className="flex items-center gap-1.5 text-emerald-700 text-[11px] font-semibold mb-1">
                  <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Budget Fit</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">
                  {ws.budgetFit.status}
                </div>
                <div className="text-[11px] text-emerald-700 font-medium">
                  {ws.budgetFit.detail}
                </div>
              </div>

              {/* Accommodations */}
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100/80">
                <div className="flex items-center gap-1.5 text-amber-700 text-[11px] font-semibold mb-1">
                  <Building className="w-3.5 h-3.5 text-amber-600" />
                  <span>Accommodations</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">
                  {ws.accommodations.status}
                </div>
                <div className="text-[11px] text-amber-800 font-medium">
                  {ws.accommodations.detail}
                </div>
              </div>

              {/* Activities */}
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100/80">
                <div className="flex items-center gap-1.5 text-[#DE3724] text-[11px] font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#DE3724]" />
                  <span>Activities</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">
                  {ws.activities.status}
                </div>
                <div className="text-[11px] text-rose-700 font-medium">
                  {ws.activities.detail}
                </div>
              </div>
            </div>

            {/* Travelers & Actions Bottom Row */}
            <div className="pt-2 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Travelers */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {ws.travelers.map((u) => (
                    <img
                      key={u.id}
                      src={u.avatar}
                      alt={u.name}
                      className="w-6 h-6 rounded-full object-cover border-2 border-white"
                      title={u.name}
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-600">
                  <span className="font-bold text-neutral-800">4 Travelers</span>
                  <span className="hidden sm:inline text-neutral-500 ml-1">
                    (Rohan, Priya, Arjun, Sneha)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => alert('Invite link copied: tripmate.app/join/hyd-2025')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-semibold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Invite</span>
                </button>

                <Link
                  to="/itinerary"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Open Trip Workspace</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
