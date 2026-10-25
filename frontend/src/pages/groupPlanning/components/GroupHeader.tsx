import { Share2, Zap } from 'lucide-react'
import { MOCK_USERS } from '../../../data/mockData'

export default function GroupHeader() {
  const users = [
    MOCK_USERS.rohan,
    MOCK_USERS.arjun,
    MOCK_USERS.priya,
    MOCK_USERS.sneha,
  ]

  return (
    <div className="space-y-4 pb-2">
      {/* Top Row: Meta Tags & Title & Consensus Circular Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <div>
          <div className="flex items-center gap-2 text-xs mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[#DE3724] border border-rose-200 font-bold">
              ● GOA COASTAL ADVENTURE
            </span>
            <span className="text-neutral-500">• 4 Travelers</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Group Planning & Decisions Hub
          </h1>

          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 max-w-2xl">
            Democratize your trip. Propose stays, vote on dinners, and reach consensus without endless WhatsApp group chats.
          </p>
        </div>

        {/* Right: Circular Consensus Gauge & Invite Link Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Consensus Gauge */}
          <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-2xl border border-neutral-200/90 shadow-xs">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-neutral-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#DE3724]"
                  strokeDasharray="78, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute font-black text-[11px] text-neutral-900">
                7/9
              </span>
            </div>

            <div className="text-left">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block leading-tight">
                CONSENSUS
              </span>
              <span className="text-xs font-extrabold text-neutral-900">
                7 of 9 resolved
              </span>
            </div>
          </div>

          {/* Invite Link Button */}
          <button
            type="button"
            onClick={() => alert('Invite link copied: tripmate.app/goa-2025')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold shadow-xs transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-neutral-500" />
            <span>Invite Link <strong className="text-neutral-900">goa-2025</strong></span>
          </button>
        </div>

      </div>

      {/* Active Cohort Members Row */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-neutral-200/80">
        
        {/* User Status Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
            ACTIVE COHORT:
          </span>

          {users.map((u) => (
            <div
              key={u.id}
              className="inline-flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border border-neutral-200/80 shadow-2xs"
            >
              <img
                src={u.avatar}
                alt={u.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-neutral-800">
                {u.name.split(' ')[0]}
              </span>
              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${u.statusColor}`}>
                {u.status}
              </span>
            </div>
          ))}
        </div>

        {/* Live sync indicator */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
          <Zap className="w-3.5 h-3.5 text-[#DE3724]" />
          <span>Auto-sync enabled for all members</span>
        </div>

      </div>
    </div>
  )
}
