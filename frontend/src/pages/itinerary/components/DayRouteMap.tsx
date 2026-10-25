import { useState } from 'react'
import { Navigation, Plus, Minus, Maximize2 } from 'lucide-react'

export default function DayRouteMap() {
  const [zoom, setZoom] = useState(12)

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-rose-50 text-[#DE3724] flex items-center justify-center">
            <Navigation className="w-3 h-3 stroke-[2.2]" />
          </div>
          <h4 className="text-xs font-bold text-neutral-900">Day 1 Route Map</h4>
        </div>
        <span className="text-[11px] font-medium text-neutral-400">
          Panjim & Mandovi (Zoom {zoom}x)
        </span>
      </div>

      {/* Styled Map Preview Canvas */}
      <div className="relative h-64 bg-[#E5F3F7] overflow-hidden select-none">
        {/* River & Land SVG visualization */}
        <svg
          viewBox="0 0 400 240"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          {/* Water background */}
          <rect width="400" height="240" fill="#E8F4F8" />
          
          {/* Land masses */}
          <path
            d="M 0,0 L 400,0 L 400,110 Q 320,100 260,115 Q 180,135 120,110 Q 60,90 0,110 Z"
            fill="#D5E8D4"
            opacity="0.8"
          />
          <path
            d="M 0,140 Q 80,120 160,145 Q 240,165 310,140 Q 360,130 400,145 L 400,240 L 0,240 Z"
            fill="#E3EED8"
            opacity="0.8"
          />

          {/* Road networks */}
          <path
            d="M 50,60 L 140,100 L 220,125 L 290,140 L 360,200"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M 50,60 L 140,100 L 220,125 L 290,140 L 360,200"
            stroke="#F4B400"
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
          />

          {/* Bridge across Mandovi */}
          <line x1="210" y1="110" x2="225" y2="145" stroke="#9E9E9E" strokeWidth="4" />

          {/* City label texts */}
          <text x="140" y="85" fontSize="9" fill="#5F6368" fontWeight="bold">Baga Beach</text>
          <text x="70" y="115" fontSize="8" fill="#5F6368">Calangute</text>
          <text x="180" y="105" fontSize="8" fill="#5F6368">Saligao</text>
          <text x="235" y="110" fontSize="9" fill="#1A73E8" fontWeight="bold">Mall de Goa</text>
          <text x="215" y="160" fontSize="10" fill="#202124" fontWeight="bold">Panaji</text>
          <text x="270" y="165" fontSize="9" fill="#34A853" fontWeight="bold">Fontainhas</text>
          <text x="330" y="215" fontSize="9" fill="#D93025" fontWeight="bold">Dabolim (GOI)</text>
        </svg>

        {/* Pin Markers */}
        <div className="absolute top-[80px] left-[130px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#DE3724] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            1
          </div>
        </div>
        <div className="absolute top-[125px] left-[210px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#DE3724] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            2
          </div>
        </div>
        <div className="absolute top-[150px] left-[265px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#DE3724] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            3
          </div>
        </div>
        <div className="absolute top-[185px] left-[320px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#DE3724] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            4
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-3 right-3 flex flex-col bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden text-neutral-700">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(z + 1, 18))}
            className="p-1.5 hover:bg-neutral-50 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(z - 1, 8))}
            className="p-1.5 border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => alert('Opening full screen interactive map with live GPS tracking')}
            className="p-1.5 border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Floating Stats */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-neutral-800 shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE3724]"></span>
            6 Key Waypoints
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-neutral-800 shadow-sm">
            Total Route: 45.4 km
          </span>
        </div>
      </div>

      {/* Sequence Strip */}
      <div className="p-3 bg-white border-t border-neutral-100 text-[11px] font-medium text-neutral-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
        <span className="hover:text-neutral-900 cursor-pointer">1. Airport</span>
        <span className="text-neutral-300">→</span>
        <span className="hover:text-neutral-900 cursor-pointer">2. Hotel Villa</span>
        <span className="text-neutral-300">→</span>
        <span className="hover:text-neutral-900 cursor-pointer">3. Viva Panjim</span>
        <span className="text-neutral-300">→</span>
        <span className="hover:text-neutral-900 cursor-pointer">4. Walking Tour</span>
        <span className="text-neutral-300">→</span>
      </div>
    </div>
  )
}
