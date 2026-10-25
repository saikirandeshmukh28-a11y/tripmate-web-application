import { useState } from 'react'
import { Compass } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [currency, setCurrency] = useState('INR')
  const [language, setLanguage] = useState('en-US')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-white border-t border-neutral-200 mt-auto text-neutral-600">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand & Newsletter Section (Span 3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#DE3724] flex items-center justify-center text-white">
                <Compass className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-bold text-lg tracking-tight text-neutral-900">
                TripMate
              </span>
            </div>

            <p className="text-sm font-semibold text-neutral-900">
              Plan Smarter. Travel Better. Together.
            </p>

            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Collaborative AI itinerary engine and automated expense coordination built for modern group discovery.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold text-neutral-500 tracking-wider uppercase mb-2">
                STAY INSPIRED
              </span>
              {subscribed ? (
                <p className="text-xs font-medium text-emerald-600">
                  ✓ Thank you for subscribing to TripMate dispatch!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-3 py-2 text-xs bg-[#F4F4F6] border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Features Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              FEATURES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ai-builder" className="hover:text-neutral-900 transition-colors">
                  AI Trip Builder
                </a>
              </li>
              <li>
                <a href="#expense-ledger" className="hover:text-neutral-900 transition-colors">
                  Shared Expense Ledger
                </a>
              </li>
              <li>
                <a href="#group-polls" className="hover:text-neutral-900 transition-colors">
                  Live Group Polls
                </a>
              </li>
              <li>
                <a href="#interactive-pins" className="hover:text-neutral-900 transition-colors">
                  Interactive Map Pins
                </a>
              </li>
              <li>
                <a href="#offline-sync" className="hover:text-neutral-900 transition-colors">
                  Offline Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              COMMUNITY
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#travel-guides" className="hover:text-neutral-900 transition-colors">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#itinerary-showcase" className="hover:text-neutral-900 transition-colors">
                  Itinerary Showcase
                </a>
              </li>
              <li>
                <a href="#creator-program" className="hover:text-neutral-900 transition-colors">
                  Creator Program
                </a>
              </li>
              <li>
                <a href="#ambassador-hub" className="hover:text-neutral-900 transition-colors">
                  Ambassador Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Preferences Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              PREFERENCES
            </h4>
            
            <div className="space-y-1">
              <label className="block text-[11px] text-neutral-400">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full text-xs bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 text-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              >
                <option value="INR">INR (₹) Indian Rupee</option>
                <option value="USD">USD ($) US Dollar</option>
                <option value="EUR">EUR (€) Euro</option>
                <option value="GBP">GBP (£) British Pound</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] text-neutral-400">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full text-xs bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 text-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#DE3724]"
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="hi-IN">Hindi (हिंदी)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2025 TripMate Technologies Inc. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-neutral-800 transition-colors">
              Terms of Service
            </a>
            <a href="#safety" className="hover:text-neutral-800 transition-colors">
              Trust & Safety
            </a>
            <a href="#cookies" className="hover:text-neutral-800 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
