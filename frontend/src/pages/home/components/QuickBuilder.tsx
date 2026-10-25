import { useState } from 'react'
import { Sparkles, MapPin, Plane, Calendar, Users, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function QuickBuilder() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('Jaipur, Rajasthan')
  const [departingFrom, setDepartingFrom] = useState('Mumbai (BOM)')
  const [dates, setDates] = useState('Oct 24 – Oct 29, 2025')
  const [groupType, setGroupType] = useState('4 Friends')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/itinerary')
  }

  const handleSelectSuggestion = (place: string) => {
    setDestination(place)
  }

  return (
    <div className="my-8">
      {/* Container Card */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-5 sm:p-6">
        
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-100 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-50 flex items-center justify-center text-[#DE3724]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-neutral-900">
              Quick AI Itinerary Builder
            </h2>
          </div>
          <span className="text-xs text-neutral-500">
            Instant logistics, shared cost split & map sync
          </span>
        </div>

        {/* 4 Form Inputs + Create Button */}
        <form onSubmit={handleSubmit} className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          
          {/* Destination */}
          <div className="lg:col-span-3 bg-[#F4F4F6] rounded-xl px-3.5 py-2.5 border border-transparent focus-within:border-[#DE3724] focus-within:bg-white transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#DE3724]" />
              <span>DESTINATION</span>
            </div>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
            />
          </div>

          {/* Departing From */}
          <div className="lg:col-span-3 bg-[#F4F4F6] rounded-xl px-3.5 py-2.5 border border-transparent focus-within:border-[#DE3724] focus-within:bg-white transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-neutral-500" />
              <span>DEPARTING FROM</span>
            </div>
            <input
              type="text"
              value={departingFrom}
              onChange={(e) => setDepartingFrom(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
            />
          </div>

          {/* Travel Dates */}
          <div className="lg:col-span-3 bg-[#F4F4F6] rounded-xl px-3.5 py-2.5 border border-transparent focus-within:border-[#DE3724] focus-within:bg-white transition-all relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>TRAVEL DATES</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-100 text-[#DE3724]">
                5 Days
              </span>
            </div>
            <input
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none mt-0.5"
            />
          </div>

          {/* Group Type */}
          <div className="lg:col-span-2 bg-[#F4F4F6] rounded-xl px-3.5 py-2.5 border border-transparent focus-within:border-[#DE3724] focus-within:bg-white transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-neutral-500" />
              <span>GROUP TYPE</span>
            </div>
            <select
              value={groupType}
              onChange={(e) => setGroupType(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer mt-0.5"
            >
              <option>4 Friends</option>
              <option>Couple</option>
              <option>Solo Trip</option>
              <option>Family (4-6)</option>
            </select>
          </div>

          {/* Submit Action */}
          <div className="lg:col-span-1">
            <button
              type="submit"
              className="w-full h-12 bg-[#DE3724] hover:bg-[#C82F1E] text-white rounded-xl flex items-center justify-center gap-1.5 font-bold text-xs sm:text-sm shadow-sm transition-all hover:shadow"
              title="Create My Trip"
            >
              <span className="lg:hidden">Create My Trip</span>
              <Zap className="w-4 h-4 fill-white shrink-0" />
            </button>
          </div>

        </form>

        {/* Popular Suggestions Row */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
          <span className="font-medium text-neutral-600">Popular suggestions:</span>
          {[
            'Hampi Heritage Trail',
            'Rishikesh River Retreat',
            'Ooty & Coonoor Hills',
            'Pondicherry French Quarter'
          ].map((item, i) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSelectSuggestion(item)}
              className="hover:text-[#DE3724] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{item}</span>
              {i < 3 && <span className="text-neutral-300">•</span>}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
