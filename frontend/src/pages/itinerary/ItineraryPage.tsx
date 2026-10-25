import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  Calendar,
  Map,
  Building,
  Utensils,
  Wallet,
  Vote,
  Compass
} from 'lucide-react'

import TripHeader from './components/TripHeader'
import DaySelector from './components/DaySelector'
import TimelineSchedule from './components/TimelineSchedule'
import DayRouteMap from './components/DayRouteMap'
import TrafficInsight from './components/TrafficInsight'
import DayMetrics from './components/DayMetrics'
import GroupPollWidget from './components/GroupPollWidget'

interface LayoutContext {
  openNewTrip: () => void
  openAiAssistant: () => void
}

export default function ItineraryPage() {
  const context = useOutletContext<LayoutContext>()
  const [selectedDay, setSelectedDay] = useState(1)
  const [activeTab, setActiveTab] = useState<'itinerary' | 'overview' | 'map' | 'stays' | 'activities'>('itinerary')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'map', label: 'Interactive Map', icon: Map },
    { id: 'stays', label: 'Stays', icon: Building },
    { id: 'activities', label: 'Activities & Food', icon: Utensils },
  ]

  return (
    <div className="w-full space-y-6">
      {/* 1. Trip Header Summary */}
      <TripHeader
        onAskAi={context?.openAiAssistant}
        onReplan={() => alert('AI Replan: Evaluated weather conditions and adjusted afternoon transfers.')}
      />

      {/* 2. Sub-Navigation Tabs Bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 overflow-x-auto scrollbar-none gap-4">
        <div className="flex items-center gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isCurrent = activeTab === tab.id

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
                  isCurrent
                    ? 'border-[#DE3724] text-[#DE3724] bg-rose-50/50'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Linked Cross-Page Navigation Tabs */}
        <div className="flex items-center gap-2 pb-1">
          <Link
            to="/expenses"
            className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors whitespace-nowrap"
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>Budget & Expenses</span>
          </Link>

          <Link
            to="/group-planning"
            className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors whitespace-nowrap relative"
          >
            <Vote className="w-3.5 h-3.5" />
            <span>Group Voting</span>
            <span className="w-2 h-2 rounded-full bg-[#DE3724]"></span>
          </Link>
        </div>
      </div>

      {/* 3. Horizontal Day Cards Selector */}
      <DaySelector
        selectedDay={selectedDay}
        onSelectDay={(day) => setSelectedDay(day)}
      />

      {/* 4. Two-Column Layout: Left Timeline, Right Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Timeline Schedule (Span 7 cols) */}
        <div className="lg:col-span-7">
          <TimelineSchedule selectedDay={selectedDay} />
        </div>

        {/* Right Column: Route Map, AI Traffic Insight, Metrics, Poll (Span 5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Day 1 Route Map */}
          <DayRouteMap />

          {/* AI Traffic Insight */}
          <TrafficInsight onAskAi={context?.openAiAssistant} />

          {/* Day 1 Summary & Metrics */}
          <DayMetrics />

          {/* Group Poll Widget */}
          <GroupPollWidget />
        </div>

      </div>
    </div>
  )
}
