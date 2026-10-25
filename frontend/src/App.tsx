import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/shared/AppLayout'
import HomePage from './pages/home/HomePage'
import ItineraryPage from './pages/itinerary/ItineraryPage'
import ExpensesPage from './pages/expenses/ExpensesPage'
import GroupPlanningPage from './pages/groupPlanning/GroupPlanningPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="itinerary" element={<ItineraryPage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="group-planning" element={<GroupPlanningPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
