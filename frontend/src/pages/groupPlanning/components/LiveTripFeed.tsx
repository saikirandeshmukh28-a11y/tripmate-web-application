import { Activity, ArrowRight } from 'lucide-react'
import { LIVE_TRIP_FEED } from '../../../data/mockData'

export default function LiveTripFeed() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-rose-50 text-[#DE3724] flex items-center justify-center">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
            Live Trip Feed
          </h4>
        </div>

        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </div>

      {/* Feed List */}
      <div className="space-y-3.5">
        {LIVE_TRIP_FEED.map((item) => (
          <div key={item.id} className="flex items-start gap-3 text-xs">
            <img
              src={item.user.avatar}
              alt={item.user.name}
              className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 border border-neutral-200"
            />
            
            <div className="flex-1 space-y-0.5">
              <p className="text-neutral-700 leading-snug">
                <strong className="text-neutral-900 font-semibold">{item.user.name.split(' ')[0]}</strong>{' '}
                {item.action}{' '}
                {item.highlight && (
                  <strong className="text-neutral-900 font-semibold">{item.highlight}</strong>
                )}{' '}
                {item.suffix}
              </p>
              <span className="text-[10px] text-neutral-400 block">
                {item.timeAgo}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link */}
      <div className="pt-2 border-t border-neutral-100 text-center">
        <button
          type="button"
          onClick={() => alert('Opening full 24-event trip audit log')}
          className="text-xs font-semibold text-neutral-700 hover:text-[#DE3724] inline-flex items-center gap-1 transition-colors"
        >
          <span>View all 24 trip updates</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
