import { useOutletContext } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import QuickBuilder from './components/QuickBuilder'
import CurrentWorkspace from './components/CurrentWorkspace'
import TrendingGetaways from './components/TrendingGetaways'
import FeatureEngines from './components/FeatureEngines'

interface LayoutContext {
  openNewTrip: () => void
  openAiAssistant: () => void
}

export default function HomePage() {
  const context = useOutletContext<LayoutContext>()

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection onPlanTrip={context?.openNewTrip} />

      {/* 2. Quick AI Itinerary Builder */}
      <QuickBuilder />

      {/* 3. Your Current Workspace */}
      <CurrentWorkspace />

      {/* 4. Top Trending Getaways */}
      <TrendingGetaways />

      {/* 5. Coordination Engines */}
      <FeatureEngines />
    </div>
  )
}
