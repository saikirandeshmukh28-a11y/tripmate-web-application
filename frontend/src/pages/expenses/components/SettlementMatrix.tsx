import { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SETTLEMENT_DEBTS, MOCK_USERS } from '../../../data/mockData'
import { formatINR } from '../../../utils/formatters'

export default function SettlementMatrix() {
  const [debts, setDebts] = useState(SETTLEMENT_DEBTS)

  const handleMarkSettled = (debtId: string) => {
    setDebts((prev) =>
      prev.map((d) => (d.id === debtId ? { ...d, status: 'settled' } : d))
    )
  }

  const handleRemind = (userName: string, amount: number) => {
    alert(`Payment reminder notification sent to ${userName} for ${formatINR(amount)} via WhatsApp & Push!`)
  }

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <h3 className="text-sm sm:text-base font-bold text-neutral-900">
            Settlement Matrix
          </h3>
          <Sparkles className="w-3.5 h-3.5 text-[#DE3724]" />
        </div>

        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-[#DE3724] border border-rose-200 tracking-wide uppercase">
          OPTIMIZED
        </span>
      </div>

      <p className="text-xs text-neutral-400 -mt-2">
        Zero-Confusion debt minimization
      </p>

      {/* Simplified Debts Banner */}
      <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200/70 text-xs text-neutral-700 leading-snug flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#DE3724] shrink-0" />
        <span>
          <strong className="text-neutral-900">Simplified Debts:</strong> Settle in <strong>2 direct payments</strong> instead of 6 convoluted peer transfers.
        </span>
      </div>

      {/* Debt Transfers List */}
      <div className="space-y-3">
        {debts.map((debt) => {
          const isSettled = debt.status === 'settled'

          return (
            <div
              key={debt.id}
              className={`p-3.5 rounded-xl border transition-all ${
                isSettled
                  ? 'bg-neutral-50 border-neutral-200 opacity-60'
                  : 'bg-white border-neutral-200/90 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                {/* Payer -> Recipient Avatars */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src={debt.fromUser.avatar}
                      alt={debt.fromUser.name}
                      className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="text-[9px] font-bold text-neutral-600 block text-center mt-0.5">
                      {debt.fromUser.name.split(' ')[0]}
                    </span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-neutral-400" />

                  <div className="relative">
                    <img
                      src={debt.toUser.avatar}
                      alt={debt.toUser.name}
                      className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="text-[9px] font-bold text-neutral-600 block text-center mt-0.5">
                      {debt.toUser.id === MOCK_USERS.rohan.id ? 'YOU' : debt.toUser.name.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Amount & Status */}
                <div className="text-right">
                  <div className="text-sm sm:text-base font-extrabold text-neutral-900">
                    {formatINR(debt.amount)}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium">
                    {debt.description}
                  </span>
                </div>
              </div>

              {/* Action Buttons / Note */}
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                {debt.settleMethod ? (
                  <span className="text-[11px] text-neutral-500">
                    {debt.settleMethod}
                  </span>
                ) : (
                  <div></div>
                )}

                {isSettled ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Settled</span>
                  </span>
                ) : debt.isUserInvolved ? (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleRemind(debt.fromUser.name, debt.amount)}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                    >
                      Remind {debt.fromUser.name.split(' ')[0]}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMarkSettled(debt.id)}
                      className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-[#DE3724] hover:bg-[#C82F1E] text-white shadow-xs transition-colors"
                    >
                      Mark Settled
                    </button>
                  </div>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Pending
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
