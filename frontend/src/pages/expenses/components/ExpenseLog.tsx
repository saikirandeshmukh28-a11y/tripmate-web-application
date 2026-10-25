import { useState } from 'react'
import {
  Users,
  Layers,
  Building,
  Utensils,
  Compass,
  Car,
  Bike,
  Receipt
} from 'lucide-react'
import { EXPENSES_DATA } from '../../../data/mockData'
import { formatINR } from '../../../utils/formatters'

export default function ExpenseLog() {
  const [payerFilter, setPayerFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'accommodation':
        return { icon: Building, bg: 'bg-rose-50 text-[#DE3724]' }
      case 'food':
        return { icon: Utensils, bg: 'bg-orange-50 text-orange-600' }
      case 'activities':
        return { icon: Compass, bg: 'bg-teal-50 text-teal-600' }
      case 'transport':
        return { icon: Car, bg: 'bg-blue-50 text-blue-600' }
      default:
        return { icon: Bike, bg: 'bg-purple-50 text-purple-600' }
    }
  }

  const filteredExpenses = EXPENSES_DATA.filter((exp) => {
    if (payerFilter !== 'all' && exp.payer.name !== payerFilter) return false
    if (categoryFilter !== 'all' && exp.category !== categoryFilter) return false
    return true
  })

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
      {/* Header & Filter Bars */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-neutral-900">
            Expense Log
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            {filteredExpenses.length} recorded items across group members
          </p>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2">
          {/* Payer Filter */}
          <div className="relative">
            <select
              value={payerFilter}
              onChange={(e) => setPayerFilter(e.target.value)}
              className="pl-7 pr-3 py-1.5 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg text-neutral-700 focus:outline-none cursor-pointer"
            >
              <option value="all">All Payers</option>
              <option value="Rohan (You)">Rohan (You)</option>
              <option value="Arjun">Arjun</option>
              <option value="Priya">Priya</option>
              <option value="Sneha">Sneha</option>
            </select>
            <Users className="w-3.5 h-3.5 text-neutral-400 absolute left-2 top-2 pointer-events-none" />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-7 pr-3 py-1.5 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg text-neutral-700 focus:outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="accommodation">Accommodation</option>
              <option value="food">Food & Dining</option>
              <option value="transport">Transportation</option>
              <option value="activities">Activities</option>
            </select>
            <Layers className="w-3.5 h-3.5 text-neutral-400 absolute left-2 top-2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="divide-y divide-neutral-100">
        {filteredExpenses.map((exp) => {
          const { icon: Icon, bg } = getCategoryIcon(exp.category)
          const isLent = exp.userImpact.type === 'lent'

          return (
            <div
              key={exp.id}
              className="py-3.5 flex items-center justify-between gap-4 hover:bg-neutral-50/50 -mx-2 px-2 rounded-xl transition-colors"
            >
              {/* Left Side: Category Icon + Title + Split Details */}
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${bg}`}>
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      {exp.title}
                    </h4>

                    {exp.hasReceipt && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-rose-50 text-[#DE3724] border border-rose-200">
                        <Receipt className="w-2.5 h-2.5" />
                        <span>Receipt</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-neutral-500 leading-tight">
                    Paid by <strong className="text-neutral-700">{exp.payer.name}</strong> •{' '}
                    {exp.splitType} ({exp.splitDetail}) • {exp.date}
                  </p>
                </div>
              </div>

              {/* Right Side: Amount + Net Lent/Owe */}
              <div className="text-right shrink-0">
                <div className="text-xs sm:text-sm font-extrabold text-neutral-900">
                  {formatINR(exp.amount)}
                </div>

                <div
                  className={`text-[11px] font-bold ${
                    isLent ? 'text-emerald-600' : 'text-[#DE3724]'
                  }`}
                >
                  {isLent ? 'You lent ' : 'You owe '}
                  {formatINR(exp.userImpact.amount)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
