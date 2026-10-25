import { useState } from 'react'
import { X, Sparkles, Send, Bot, CheckCircle2 } from 'lucide-react'

interface AiAssistantModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AiAssistantModal({ isOpen, onClose }: AiAssistantModalProps) {
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello Rohan! I am your TripMate AI Assistant. I have analyzed your Goa Coastal Adventure itinerary. How can I help optimize your schedule, budget, or group consensus today?'
    }
  ])

  if (!isOpen) return null

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const userText = query
    setMessages((prev) => [...prev, { sender: 'user', text: userText }])
    setQuery('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Got it! For "${userText}", I suggest scheduling departure from Fontainhas around 5:00 PM to avoid the Mandovi Bridge evening rush, saving approximately 35 minutes.`
        }
      ])
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col h-[520px]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#DE3724] flex items-center justify-center text-white shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-neutral-900">TripMate AI Assistant</h3>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  LIVE CONTEXT
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">Synced with Goa Coastal Adventure & Budget</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF9F6]/50 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-rose-100 text-[#DE3724] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#DE3724] text-white shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-800 shadow-xs'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>AI Tie-Breaker active for Day 3 Sunset: Thalassa table reservation window closes in 2 hours.</span>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 border-t border-neutral-100 bg-white flex items-center gap-2 overflow-x-auto text-[11px]">
          <button
            type="button"
            onClick={() => setQuery('Check traffic around Mandovi River Jetty')}
            className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 whitespace-nowrap"
          >
            Check traffic around Mandovi
          </button>
          <button
            type="button"
            onClick={() => setQuery('Suggest veg alternatives for lunch')}
            className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 whitespace-nowrap"
          >
            Veg alternatives
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 border-t border-neutral-100 bg-white flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask AI about routes, meals, budget..."
            className="flex-1 px-3 py-2 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
          />
          <button
            type="submit"
            className="p-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white rounded-lg transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
