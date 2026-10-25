import { CheckCircle2 } from 'lucide-react'
import { ITINERARY_DAYS } from '../../../data/mockData'
import { formatINR } from '../../../utils/formatters'

interface DaySelectorProps {
  selectedDay: number
  onSelectDay: (day: number) => void
}

export default function DaySelector({ selectedDay, onSelectDay }: DaySelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
      {ITINERARY_DAYS.map((d) => {
        const isSelected = d.dayNumber === selectedDay

        return (
          <button
            key={d.dayNumber}
            type="button"
            onClick={() => onSelectDay(d.dayNumber)}
            className={`p-3.5 rounded-xl text-left transition-all ${
              isSelected
                ? 'bg-white border-2 border-[#DE3724] shadow-sm'
                : 'bg-white border border-neutral-200/90 hover:border-neutral-300 shadow-xs'
            }`}
          >
            {/* Top Row: Day Number, Date, Stops */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-neutral-900">
                  Day {d.dayNumber}
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  {d.dateString}
                </span>
              </div>

              {d.isCompleted ? (
                <CheckCircle2 className="w-4 h-4 text-[#DE3724]" />
              ) : (
                <span className="text-[11px] text-neutral-400">
                  {d.stopsCount} stops
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="text-xs font-semibold text-neutral-800 truncate mb-2">
              {d.title}
            </h4>

            {/* Bottom Meta */}
            <div className="text-[11px] text-neutral-500 flex items-center justify-between">
              <span>{d.stopsCount} Stops • {formatINR(d.estCost)} est.</span>
              {d.distanceKm && !d.isCompleted && (
                <span>{d.distanceKm} km</span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
