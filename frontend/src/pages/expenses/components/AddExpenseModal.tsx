import { useState } from 'react'
import { X, Receipt, Plus } from 'lucide-react'
import { MOCK_USERS } from '../../../data/mockData'

interface AddExpenseModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (expense: any) => void
}

export default function AddExpenseModal({ isOpen, onClose, onAdd }: AddExpenseModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('food')
  const [payer, setPayer] = useState(MOCK_USERS.rohan.id)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({
      id: `exp_${Date.now()}`,
      title,
      amount: parseFloat(amount) || 0,
      category,
      payer: Object.values(MOCK_USERS).find((u) => u.id === payer) || MOCK_USERS.rohan,
      splitType: 'Split 4 ways',
      splitDetail: `₹${Math.round((parseFloat(amount) || 0) / 4).toLocaleString('en-IN')} each`,
      date: 'Oct 26',
      userImpact: {
        type: payer === MOCK_USERS.rohan.id ? 'lent' : 'owe',
        amount: Math.round(((parseFloat(amount) || 0) * 3) / 4)
      }
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#DE3724] flex items-center justify-center">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Add New Group Expense</h3>
              <p className="text-[11px] text-neutral-500">Auto-balanced across 4 travelers</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Expense Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Miramar Beach Shacks Lunch"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Total Amount (₹)
              </label>
              <input
                type="number"
                required
                placeholder="2400"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-2.5 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              >
                <option value="food">Food & Dining</option>
                <option value="transport">Transportation</option>
                <option value="accommodation">Accommodation</option>
                <option value="activities">Activities & Tickets</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Paid By
            </label>
            <select
              value={payer}
              onChange={(e) => setPayer(e.target.value)}
              className="w-full px-2.5 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
            >
              {Object.values(MOCK_USERS).map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Record Expense</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
