import { useState } from 'react'
import { Plus } from 'lucide-react'
import { MOCK_USERS } from '../../data/mockData'
import FinancialSummary from './components/FinancialSummary'
import CategorySpending from './components/CategorySpending'
import ExpenseLog from './components/ExpenseLog'
import SettlementMatrix from './components/SettlementMatrix'
import RecordSettlementCard from './components/RecordSettlementCard'
import AddExpenseModal from './components/AddExpenseModal'

export default function ExpensesPage() {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)

  return (
    <div className="w-full space-y-6">
      {/* 1. Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2 text-xs mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[#DE3724] border border-rose-200 font-bold">
              ● ACTIVE TRIP
            </span>
            <span className="text-neutral-500">
              • Oct 24 – Oct 27, 2025 • Goa, India
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Goa Coastal Adventure
          </h1>

          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
            Live expense ledger, smart split coordination, and simplified debt matrix.
          </p>
        </div>

        {/* Right: Travelers Stack & + Add Expense Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
              TRAVELERS (4):
            </span>
            <div className="flex -space-x-1.5 items-center">
              <img
                src={MOCK_USERS.rohan.avatar}
                alt="You"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
                title="Rohan (You)"
              />
              <img
                src={MOCK_USERS.arjun.avatar}
                alt="Arjun"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
                title="Arjun"
              />
              <img
                src={MOCK_USERS.priya.avatar}
                alt="Priya"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
                title="Priya"
              />
              <img
                src={MOCK_USERS.sneha.avatar}
                alt="Sneha"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
                title="Sneha"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsAddExpenseOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Add Expense</span>
          </button>
        </div>
      </div>

      {/* 2. Top Financial Summary 4 Cards */}
      <FinancialSummary />

      {/* 3. Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
        {/* Left Column (Span 7 cols): Category-wise Spending & Expense Log */}
        <div className="lg:col-span-7 space-y-6">
          <CategorySpending />
          <ExpenseLog />
        </div>

        {/* Right Column (Span 5 cols): Settlement Matrix & Record Settlement & Reports */}
        <div className="lg:col-span-5 space-y-6">
          <SettlementMatrix />
          <RecordSettlementCard />
        </div>
      </div>

      {/* Add Expense Modal */}
      <AddExpenseModal
        isOpen={isAddExpenseOpen}
        onClose={() => setIsAddExpenseOpen(false)}
        onAdd={(newExp) => {
          alert(`New expense added: ${newExp.title} (₹${newExp.amount})`)
        }}
      />
    </div>
  )
}
