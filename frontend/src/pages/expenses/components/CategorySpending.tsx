import { Building, Utensils, Car, Compass, ShoppingBag } from 'lucide-react'

export default function CategorySpending() {
  const categories = [
    {
      id: 'acc',
      label: 'Accommodation',
      sub: 'Candolim Villa',
      spent: 18000,
      cap: 22000,
      percentage: 81,
      barColor: 'bg-[#DE3724]',
      icon: Building,
      iconBg: 'bg-rose-50 text-[#DE3724]'
    },
    {
      id: 'food',
      label: 'Food & Dining',
      sub: 'Shacks & Dinners',
      spent: 14200,
      cap: 16000,
      percentage: 88,
      barColor: 'bg-orange-500',
      icon: Utensils,
      iconBg: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'trans',
      label: 'Transportation',
      sub: 'Scooters & Airport Taxi',
      spent: 6800,
      cap: 10000,
      percentage: 68,
      barColor: 'bg-blue-500',
      icon: Car,
      iconBg: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'act',
      label: 'Activities & Tickets',
      sub: 'Scuba & Sports',
      spent: 4350,
      cap: 8000,
      percentage: 54,
      barColor: 'bg-teal-500',
      icon: Compass,
      iconBg: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'misc',
      label: 'Miscellaneous & Shopping',
      sub: 'Souvenirs & Flea Market',
      spent: 1500,
      cap: 4000,
      percentage: 37,
      barColor: 'bg-purple-600',
      icon: ShoppingBag,
      iconBg: 'bg-purple-50 text-purple-600'
    }
  ]

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-neutral-900">
            Category-wise Spending
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Real-time expenditure vs category limits
          </p>
        </div>

        <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold">
          5 Categories Active
        </span>
      </div>

      {/* Progress Rows */}
      <div className="space-y-4">
        {categories.map((cat) => {
          const Icon = cat.icon

          return (
            <div key={cat.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                
                {/* Left: Icon, Name & Subtitle */}
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block leading-tight">
                      {cat.label}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {cat.sub}
                    </span>
                  </div>
                </div>

                {/* Right: Amounts & Percentage */}
                <div className="text-right">
                  <div className="font-extrabold text-neutral-900 text-xs sm:text-sm">
                    ₹{cat.spent.toLocaleString('en-IN')}{' '}
                    <span className="font-normal text-[11px] text-neutral-400">
                      / ₹{cat.cap.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-500">
                    {cat.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${cat.barColor}`}
                  style={{ width: `${cat.percentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
