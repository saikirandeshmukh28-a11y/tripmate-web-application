import { MapPin } from 'lucide-react'

export default function VotingGeoSpread() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
          Voting Geo-Spread
        </h4>
        <span className="text-[11px] text-neutral-400">
          North Goa coastal stretch
        </span>
      </div>

      {/* Styled Map Preview Canvas */}
      <div className="relative h-36 rounded-xl overflow-hidden bg-[#DDF1EE] border border-neutral-200 select-none">
        <svg viewBox="0 0 320 140" className="w-full h-full object-cover">
          {/* Water base */}
          <rect width="320" height="140" fill="#E2F1F8" />
          
          {/* Land terrain */}
          <path
            d="M 60,0 L 320,0 L 320,140 L 40,140 Q 70,90 90,60 Q 50,30 60,0 Z"
            fill="#D4E6D2"
          />
          <path
            d="M 120,0 Q 150,40 180,60 Q 230,80 320,85 L 320,140 L 120,140 Z"
            fill="#C8DFC5"
            opacity="0.6"
          />

          {/* Road networks */}
          <path
            d="M 60,20 L 110,40 L 160,70 L 220,90 L 290,110"
            stroke="#FFFFFF"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 60,20 L 110,40 L 160,70 L 220,90 L 290,110"
            stroke="#FBBC04"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
          />

          {/* Location Dots & Labels */}
          <circle cx="85" cy="35" r="4" fill="#DE3724" />
          <text x="95" y="38" fontSize="8" fill="#374151" fontWeight="bold">Siolim (Thalassa)</text>

          <circle cx="130" cy="55" r="4" fill="#DE3724" />
          <text x="140" y="58" fontSize="8" fill="#374151">Chapora Cruise</text>

          <circle cx="170" cy="80" r="4" fill="#10B981" />
          <text x="180" y="83" fontSize="8" fill="#374151" fontWeight="bold">Candolim Villa</text>
        </svg>

        {/* Bottom Floating Pill */}
        <div className="absolute bottom-2 inset-x-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium py-1 px-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm">
          <MapPin className="w-3 h-3 text-[#DE3724]" />
          <span>Candolim • Chapora • Siolim</span>
        </div>
      </div>
    </div>
  )
}
