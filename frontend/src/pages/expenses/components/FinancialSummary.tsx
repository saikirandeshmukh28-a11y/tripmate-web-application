import { Wallet, Receipt, TrendingUp } from 'lucide-react'

export default function FinancialSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Card 1: Total Trip Budget */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
            TOTAL TRIP BUDGET
          </span>
          <div className="w-5 h-5 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-500">
            <Wallet className="w-3.5 h-3.5" />
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            ₹60,000
          </div>
          <span className="text-[11px] text-neutral-500">
            ₹15,000 / traveler cap
          </span>
        </div>

        <div className="w-full bg-neutral-100 rounded-full h-1 overflow-hidden">
          <div className="bg-neutral-400 h-1 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Card 2: Total Expenses Incurred */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
            TOTAL EXPENSES INCURRED
          </span>
          <div className="w-5 h-5 rounded-md bg-rose-50 flex items-center justify-center text-[#DE3724]">
            <Receipt className="w-3.5 h-3.5" />
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#DE3724] tracking-tight">
            ₹44,850
          </div>
          <span className="text-[11px] text-neutral-500 font-medium">
            <span className="text-[#DE3724] font-bold">74.7%</span> of budget spent
          </span>
        </div>

        <div className="w-full bg-neutral-100 rounded-full h-1 overflow-hidden">
          <div className="bg-[#DE3724] h-1 rounded-full" style={{ width: '74.7%' }}></div>
        </div>
      </div>

      {/* Card 3: Remaining Budget */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
            REMAINING BUDGET
          </span>
          <div className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
            ₹15,150
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <span>✓ Under budget by ₹3,150</span>
          </span>
        </div>

        <div className="w-full bg-neutral-100 rounded-full h-1 overflow-hidden">
          <div className="bg-emerald-500 h-1 rounded-full" style={{ width: '25.3%' }}></div>
        </div>
      </div>

      {/* Card 4: Personal Balance */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
            YOUR PERSONAL BALANCE
          </span>
          <span className="px-2 py-0.2 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            RECEIVABLE
          </span>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#DE3724] tracking-tight">
            +₹1,850
          </div>
          <span className="text-[11px] text-neutral-500">
            You are owed net from group
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-100 pt-2">
          <span>Paid: <strong className="text-neutral-700">₹21,600</strong></span>
          <span>Share: <strong className="text-neutral-700">₹19,750</strong></span>
        </div>
      </div>

    </div>
  )
}
