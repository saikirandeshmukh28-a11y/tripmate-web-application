import { useState } from 'react'
import { Bookmark, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TRENDING_GETAWAYS } from '../../../data/mockData'
import { formatINR } from '../../../utils/formatters'

export default function TrendingGetaways() {
  const [activeCategory, setActiveCategory] = useState('All Destinations')
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])

  const categories = [
    'All Destinations',
    'Weekend Getaways',
    'Beaches & Islands',
    'Misty Mountains',
    'Cultural & Heritage',
    'Budget Gems'
  ]

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filtered = activeCategory === 'All Destinations'
    ? TRENDING_GETAWAYS
    : TRENDING_GETAWAYS.filter((d) => d.category === activeCategory)

  return (
    <section id="trending" className="my-12">
      {/* Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-[#DE3724] block mb-1">
            CURATED FOR GROUP WANDERLUST
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Top Trending Getaways
          </h2>
        </div>

        <p className="text-xs text-neutral-500 max-w-md lg:text-right leading-relaxed">
          Pre-tested AI itineraries with live cost calculations and neighborhood guides tailored for Indian travel conditions.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
        {categories.map((cat) => {
          const isActive = cat === activeCategory
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#DE3724] text-white shadow-xs'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* 4 Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => {
          const isSaved = bookmarkedIds.includes(item.id)

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bookmark Button */}
                <button
                  type="button"
                  onClick={() => toggleBookmark(item.id)}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-neutral-700 hover:text-[#DE3724] shadow-xs transition-colors"
                  aria-label="Save getaway"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      isSaved ? 'fill-[#DE3724] text-[#DE3724]' : ''
                    }`}
                  />
                </button>

                {/* Bottom Rating Badge Over Image */}
                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                  <span className="text-neutral-300">({item.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  {/* State & Duration Row */}
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold text-[#DE3724] tracking-wider uppercase">
                      {item.state}
                    </span>
                    <span className="text-neutral-400 font-medium">
                      {item.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#DE3724] transition-colors">
                    {item.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-[11px] text-neutral-500 mt-1 leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Cost & Plans Row */}
                <div className="pt-2 border-t border-neutral-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block">Est. budget</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-sm text-neutral-900">
                        {formatINR(item.estBudget)}
                      </span>
                      <span className="text-[10px] text-neutral-500">/ person</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.aiPlansCount} AI Plans
                  </span>
                </div>

                {/* View Plan Button */}
                <Link
                  to="/itinerary"
                  className="w-full py-2 px-3 rounded-lg bg-[#F4F4F6] hover:bg-[#DE3724] text-neutral-700 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
