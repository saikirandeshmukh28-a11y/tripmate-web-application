import { Footprints, Car, Sun } from 'lucide-react'

export default function DayMetrics() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
        <h4 className="text-xs font-bold text-neutral-900">
          Day 1 Summary & Metrics
        </h4>
        <span className="text-[11px] text-neutral-400 font-medium">
          Oct 24, Friday
        </span>
      </div>

      {/* 4 Metric Tiles Grid */}
      <div className="grid grid-cols-2 gap-3">
        
        {/* Tile 1: Day 1 Total */}
        <div className="p-3 rounded-xl bg-[#F4F4F6] border border-neutral-200/60">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
            DAY 1 TOTAL
          </span>
          <div className="text-base font-extrabold text-neutral-900 mt-0.5">
            ₹8,800
          </div>
          <span className="text-[10px] text-neutral-500">
            ₹2,200 per traveler
          </span>
        </div>

        {/* Tile 2: Pace Score */}
        <div className="p-3 rounded-xl bg-[#F4F4F6] border border-neutral-200/60">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
            PACE SCORE
          </span>
          <div className="text-base font-extrabold text-neutral-900 mt-0.5">
            Balanced
          </div>
          <span className="text-[10px] text-neutral-500">
            Comfortable cadence
          </span>
        </div>

        {/* Tile 3: Mobility */}
        <div className="p-3 rounded-xl bg-[#F4F4F6] border border-neutral-200/60">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
            MOBILITY BREAKDOWN
          </span>
          <div className="text-xs font-bold text-neutral-900 mt-1 flex items-center gap-1.5">
            <Footprints className="w-3.5 h-3.5 text-neutral-600" />
            <span>3.4 km</span>
            <span className="text-neutral-300">•</span>
            <Car className="w-3.5 h-3.5 text-neutral-600" />
            <span>42 km</span>
          </div>
          <span className="text-[10px] text-neutral-500 block mt-0.5">
            Urban & transfer travel
          </span>
        </div>

        {/* Tile 4: Weather */}
        <div className="p-3 rounded-xl bg-[#F4F4F6] border border-neutral-200/60">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
            WEATHER FORECAST
          </span>
          <div className="text-xs font-bold text-neutral-900 mt-1 flex items-center gap-1">
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>31°C</span>
          </div>
          <span className="text-[10px] text-neutral-500 block mt-0.5">
            10% Rain • Clear sunset
          </span>
        </div>

      </div>

      {/* Progress Bar: Budget Consumption */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-neutral-500">Day 1 Budget Consumption</span>
          <span className="font-bold text-neutral-800">16.3% of total trip</span>
        </div>
        <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#DE3724] h-2 rounded-full transition-all duration-500"
            style={{ width: '16.3%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
