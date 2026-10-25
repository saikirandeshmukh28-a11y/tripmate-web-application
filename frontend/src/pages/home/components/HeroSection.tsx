import { ArrowRight, Compass, Star, CheckCircle, Utensils, ChevronLeft } from 'lucide-react'
import { MOCK_USERS } from '../../../data/mockData'

interface HeroSectionProps {
  onPlanTrip?: () => void
}

export default function HeroSection({ onPlanTrip }: HeroSectionProps) {
  return (
    <section className="pt-2 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (Content & CTA) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/70 text-[#DE3724] text-xs font-semibold tracking-wide">
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>YOUR NEXT ADVENTURE STARTS HERE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 tracking-tight leading-[1.12]">
            Every great trip starts with a{' '}
            <span className="text-[#DE3724]">smarter plan.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
            TripMate brings AI itineraries, live budget splitting, curated stays, and effortless group decisions into one seamless, tactile workspace.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onPlanTrip}
              className="inline-flex items-center gap-2 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-[#DE3724]/20 transition-all hover:translate-y-[-1px]"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#trending"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg border border-neutral-200 shadow-xs transition-colors"
            >
              <Compass className="w-4 h-4 text-neutral-500" />
              <span>Explore Destinations</span>
            </a>
          </div>

          {/* Social Proof Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-600">
            {/* Avatar Stack */}
            <div className="flex -space-x-2 items-center">
              <img
                src={MOCK_USERS.rohan.avatar}
                alt="User"
                className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <img
                src={MOCK_USERS.priya.avatar}
                alt="User"
                className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <img
                src={MOCK_USERS.arjun.avatar}
                alt="User"
                className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-neutral-200"
              />
              <div className="w-7 h-7 rounded-full bg-neutral-900 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                +140k
              </div>
            </div>

            {/* Stars & Text */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-bold text-neutral-900">4.9/5</span>
              <span className="text-neutral-500">
                Trusted by 140,000+ active group explorers
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200/90 aspect-[4/3] bg-neutral-100 group">
            {/* Background Photography (Goa sunset with palms) */}
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
              alt="Goa Coastal Escapade"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            
            {/* Top-Left Live Sync Pill */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/20 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Goa Coastal Escapade • Live Sync</span>
            </div>

            {/* Top-Right Floating Pill: AI Itinerary */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-white/50 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#DE3724] tracking-wide uppercase">
                      AI ITINERARY
                    </span>
                    <span className="text-[10px] text-neutral-400">• Now</span>
                  </div>
                  <p className="text-xs font-bold text-neutral-900">
                    Day 2: Sunset Cruise Booked
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-Left Floating Card: Group Kitty */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50 max-w-[210px] text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                  GROUP KITTY
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  On Track
                </span>
              </div>
              
              <div className="flex items-baseline gap-1 my-0.5">
                <span className="text-base font-extrabold text-neutral-900">₹42,500</span>
                <span className="text-[10px] text-neutral-500">/ ₹50,000 cap</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden my-2">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                <div className="flex -space-x-1.5">
                  <img src={MOCK_USERS.rohan.avatar} alt="" className="w-4 h-4 rounded-full border border-white" />
                  <img src={MOCK_USERS.priya.avatar} alt="" className="w-4 h-4 rounded-full border border-white" />
                </div>
                <span>4 splits auto-settled</span>
              </div>
            </div>

            {/* Bottom-Right Floating Card: Hidden Gem */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-white/50 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center text-[#DE3724]">
                  <Utensils className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#DE3724] tracking-wide uppercase">
                    94% MATCH
                  </span>
                  <p className="text-xs font-bold text-neutral-900">
                    Hidden Gem: Cafe Bodega
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Floating Tag Over Coast */}
            <div className="absolute bottom-16 right-4 sm:right-6">
              <span className="px-2.5 py-1 rounded bg-[#DE3724] text-white text-[11px] font-bold shadow-md">
                5 Days Active
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
