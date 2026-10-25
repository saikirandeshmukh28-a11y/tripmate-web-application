import { useState } from 'react'
import { Plus } from 'lucide-react'
import GroupHeader from './components/GroupHeader'
import ActiveDecisions from './components/ActiveDecisions'
import GroupDNAMatrix from './components/GroupDNAMatrix'
import LiveTripFeed from './components/LiveTripFeed'
import VotingGeoSpread from './components/VotingGeoSpread'
import ProposeIdeaModal from './components/ProposeIdeaModal'

export default function GroupPlanningPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'needs_vote' | 'resolved'>('all')
  const [isProposeOpen, setIsProposeOpen] = useState(false)

  return (
    <div className="w-full space-y-6">
      {/* 1. Group Header & Status */}
      <GroupHeader />

      {/* 2. Decision Filter Tabs & Propose Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        {/* Left Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            All Decisions (3)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('needs_vote')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'needs_vote'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            Needs Your Vote (1)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('resolved')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'resolved'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            Resolved (7)
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsProposeOpen(true)}
            className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 px-2 py-1.5 transition-colors flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Propose Idea</span>
          </button>

          <button
            type="button"
            onClick={() => setIsProposeOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Propose New Place or Activity</span>
          </button>
        </div>
      </div>

      {/* 3. Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-1">
        {/* Left Column (Span 7 cols): Decisions Cards */}
        <div className="lg:col-span-7">
          <ActiveDecisions />
        </div>

        {/* Right Column (Span 5 cols): DNA Matrix, Live Feed, Geo-Spread */}
        <div className="lg:col-span-5 space-y-6">
          <GroupDNAMatrix />
          <LiveTripFeed />
          <VotingGeoSpread />
        </div>
      </div>

      {/* Propose Idea Modal */}
      <ProposeIdeaModal
        isOpen={isProposeOpen}
        onClose={() => setIsProposeOpen(false)}
        onPropose={(item) => {
          alert(`Proposed idea: "${item.title}" for ${item.category} has been added to group voting!`)
        }}
      />
    </div>
  )
}
