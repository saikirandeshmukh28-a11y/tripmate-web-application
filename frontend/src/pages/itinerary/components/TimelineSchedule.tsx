import { useState } from 'react'
import {
  Zap,
  Plus,
  ArrowUpDown,
  MoreVertical,
  GripVertical,
  Star,
  Sparkles,
  Pencil,
  Trash2,
  Car,
  Footprints,
  CheckCircle2,
  RefreshCw
} from 'lucide-react'
import { ITINERARY_DAYS } from '../../../data/mockData'

interface TimelineScheduleProps {
  selectedDay: number
}

export default function TimelineSchedule({ selectedDay }: TimelineScheduleProps) {
  const currentDay = ITINERARY_DAYS.find((d) => d.dayNumber === selectedDay) || ITINERARY_DAYS[0]
  const [stops, setStops] = useState(currentDay.stops)
  const [optimized, setOptimized] = useState(false)

  const handleOptimize = () => {
    setOptimized(true)
    alert('AI Route Optimizer: Reordered stops to avoid Mandovi Bridge peak traffic, saving 35 minutes!')
  }

  const handleAddStop = () => {
    const newStopTitle = prompt('Enter stop name (e.g. Miramar Beach sunset):')
    if (newStopTitle) {
      setStops((prev) => [
        ...prev,
        {
          id: `stop_${Date.now()}`,
          time: '10:00 PM',
          category: 'activity',
          categoryLabel: 'Custom Activity',
          title: newStopTitle,
          description: 'Added by group planner.',
          metaInfo: { costText: 'Self-budget' }
        }
      ])
    }
  }

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-neutral-900">
            Timeline Schedule
          </h3>
          <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold">
            {stops.length} Events
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOptimize}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-xs transition-colors ${
              optimized
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-700'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${optimized ? 'fill-emerald-600 text-emerald-600' : 'text-neutral-500'}`} />
            <span>{optimized ? 'Route Optimized (-35m)' : 'Optimize Route (Saves 35m)'}</span>
          </button>

          <button
            type="button"
            onClick={handleAddStop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Add Stop</span>
          </button>
        </div>
      </div>

      {/* Vertical Timeline List */}
      <div className="relative pl-6 space-y-4">
        {/* Continuous vertical connector line */}
        <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-neutral-200"></div>

        {stops.map((stop, index) => {
          const number = index + 1

          return (
            <div key={stop.id} className="relative group">
              {/* Timeline Number Circle Badge */}
              <div className="absolute -left-6 top-3 w-6 h-6 rounded-full bg-[#FDECE9] text-[#DE3724] font-extrabold text-xs flex items-center justify-center ring-4 ring-[#FAF9F6] shadow-xs">
                {number}
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)] p-4 sm:p-5 hover:border-neutral-300 transition-all space-y-3">
                
                {/* Top Meta Line: Time, Category Pill, Action Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">
                      {stop.time}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4F4F6] text-neutral-700">
                      {stop.categoryLabel}
                    </span>

                    {stop.badgeText && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-50 text-[#DE3724] border border-rose-200">
                        <Sparkles className="w-3 h-3 text-[#DE3724]" />
                        <span>{stop.badgeText}</span>
                      </span>
                    )}
                  </div>

                  {/* Actions (Arrows, Pencil, Gripper, More) */}
                  <div className="flex items-center gap-1 text-neutral-400">
                    {number === 1 && (
                      <ArrowUpDown className="w-3.5 h-3.5 hover:text-neutral-700 cursor-pointer" />
                    )}
                    {number === 3 && (
                      <>
                        <Pencil className="w-3.5 h-3.5 hover:text-neutral-700 cursor-pointer" />
                        <Trash2 className="w-3.5 h-3.5 hover:text-rose-600 cursor-pointer ml-1" />
                      </>
                    )}
                    <GripVertical className="w-3.5 h-3.5 hover:text-neutral-700 cursor-grab" />
                    <MoreVertical className="w-3.5 h-3.5 hover:text-neutral-700 cursor-pointer" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                  {stop.title}
                </h4>

                {/* Thumbnail if present (e.g. Villa) */}
                {stop.imageUrl && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <img
                      src={stop.imageUrl}
                      alt={stop.title}
                      className="w-full sm:w-36 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1 space-y-2">
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {stop.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-xs pt-1">
                        {stop.rating && (
                          <div className="flex items-center gap-1 font-bold text-neutral-800">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{stop.rating}</span>
                            <span className="text-neutral-400 font-normal">({stop.reviewsCount} reviews)</span>
                          </div>
                        )}
                        {stop.bookingId && (
                          <span className="text-neutral-500 font-mono text-[11px]">
                            Booking ID: <span className="font-semibold text-neutral-800">{stop.bookingId}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Description when no image */}
                {!stop.imageUrl && (
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {stop.description}
                  </p>
                )}

                {/* Bottom Meta Row */}
                <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
                  <div className="flex flex-wrap items-center gap-3">
                    {stop.metaInfo.durationOrDistance && (
                      <span className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-neutral-400" />
                        {stop.metaInfo.durationOrDistance}
                      </span>
                    )}

                    {stop.metaInfo.costText && (
                      <span className="font-semibold text-neutral-800">
                        {stop.metaInfo.costText}
                      </span>
                    )}

                    {stop.metaInfo.walkNote && (
                      <span className="flex items-center gap-1 text-neutral-500">
                        <Footprints className="w-3.5 h-3.5 text-neutral-400" />
                        {stop.metaInfo.walkNote}
                      </span>
                    )}
                  </div>

                  {/* Right Tags / Links */}
                  <div>
                    {stop.metaInfo.splitNote && (
                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] font-semibold">
                        {stop.metaInfo.splitNote}
                      </span>
                    )}

                    {stop.aiNote && (
                      <button
                        type="button"
                        onClick={() => alert('AI Suggestion: Replaced with Mum’s Kitchen for Goan Saraswat curries.')}
                        className="text-[11px] font-semibold text-[#DE3724] hover:underline flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>{stop.aiNote}</span>
                      </button>
                    )}

                    {stop.verifiedBadge && (
                      <span className="inline-flex items-center gap-1 text-emerald-700 text-[11px] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{stop.verifiedBadge}</span>
                      </span>
                    )}

                    {stop.interestNote && (
                      <span className="inline-flex items-center gap-1.5 text-amber-700 text-[11px] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>{stop.interestNote}</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
