import { useState } from 'react'
import {
  ArrowLeftRight,
  Smartphone,
  Banknote,
  Building,
  CreditCard,
  FileText,
  FileSpreadsheet,
  Download
} from 'lucide-react'

export default function RecordSettlementCard() {
  const [payer, setPayer] = useState('Arjun')
  const [recipient, setRecipient] = useState('Rohan (You)')
  const [amount, setAmount] = useState('2350')
  const [method, setMethod] = useState<'upi' | 'cash' | 'netbank' | 'card'>('upi')
  const [note, setNote] = useState('Cleared via Google Pay txn #8849')
  const [recorded, setRecorded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRecorded(true)
    alert(`Settlement of ₹${amount} from ${payer} to ${recipient} via ${method.toUpperCase()} recorded!`)
  }

  const handleDownload = (type: string) => {
    alert(`Generating ${type} export for Goa Coastal Adventure ledger...`)
  }

  return (
    <div className="space-y-5">
      {/* 1. Record Manual Settlement Card */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-rose-50 text-[#DE3724] flex items-center justify-center">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
              Record Manual Settlement
            </h4>
          </div>

          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wide">
            INSTANT SYNC
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Payer and Recipient Dropdowns */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                PAYER
              </label>
              <select
                value={payer}
                onChange={(e) => setPayer(e.target.value)}
                className="w-full text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg px-2.5 py-1.5 font-medium text-neutral-800 focus:outline-none"
              >
                <option value="Arjun">Arjun</option>
                <option value="Sneha">Sneha</option>
                <option value="Priya">Priya</option>
                <option value="Rohan (You)">Rohan (You)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                RECIPIENT
              </label>
              <select
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg px-2.5 py-1.5 font-medium text-neutral-800 focus:outline-none"
              >
                <option value="Rohan (You)">Rohan (You)</option>
                <option value="Priya">Priya</option>
                <option value="Arjun">Arjun</option>
                <option value="Sneha">Sneha</option>
              </select>
            </div>
          </div>

          {/* Settlement Amount */}
          <div>
            <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
              SETTLEMENT AMOUNT (₹)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-xs font-bold text-neutral-500">₹</span>
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-7 pr-3 py-1.5 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg font-bold text-neutral-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
              PAYMENT METHOD
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'upi', label: 'UPI / GPay', icon: Smartphone },
                { id: 'cash', label: 'Cash', icon: Banknote },
                { id: 'netbank', label: 'NetBank', icon: Building },
                { id: 'card', label: 'Card', icon: CreditCard },
              ].map((m) => {
                const Icon = m.icon
                const isSelected = method === m.id

                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethod(m.id as any)}
                    className={`py-2 px-1 rounded-xl text-center flex flex-col items-center justify-center gap-1 border transition-all ${
                      isSelected
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                        : 'bg-[#F4F4F6] border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold">{m.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Note Input */}
          <div>
            <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
              NOTE (OPTIONAL)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Cleared via Google Pay txn #8849"
              className="w-full px-3 py-1.5 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#0F766E] hover:bg-[#0D6251] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>{recorded ? '✓ Settlement Recorded' : 'Record Settlement'}</span>
          </button>
        </form>
      </div>

      {/* 2. Reports & Export Card */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-3">
        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
          Reports & Export
        </h4>
        <p className="text-[11px] text-neutral-400 -mt-1">
          Export official expense sheets for filing or group archive
        </p>

        <div className="space-y-2 pt-1">
          {/* PDF Export */}
          <button
            type="button"
            onClick={() => handleDownload('PDF')}
            className="w-full p-3 rounded-xl bg-[#F4F4F6] hover:bg-neutral-100 border border-neutral-200/70 flex items-center justify-between text-left transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#DE3724] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-800 block group-hover:text-[#DE3724] transition-colors">
                  Download PDF Expense Report
                </span>
                <span className="text-[10px] text-neutral-400">
                  Includes itemized receipts & visual charts
                </span>
              </div>
            </div>
            <Download className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
          </button>

          {/* CSV Export */}
          <button
            type="button"
            onClick={() => handleDownload('CSV')}
            className="w-full p-3 rounded-xl bg-[#F4F4F6] hover:bg-neutral-100 border border-neutral-200/70 flex items-center justify-between text-left transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-800 block group-hover:text-emerald-700 transition-colors">
                  Export to CSV / Google Sheets
                </span>
                <span className="text-[10px] text-neutral-400">
                  Raw tabular columns ready for accounting
                </span>
              </div>
            </div>
            <Download className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}
