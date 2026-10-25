import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import NewTripModal from './NewTripModal'
import AiAssistantModal from './AiAssistantModal'

export default function AppLayout() {
  const [isNewTripOpen, setIsNewTripOpen] = useState(false)
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-800 font-sans selection:bg-[#FCECE9] selection:text-[#DE3724]">
      {/* Shared Navbar */}
      <Navbar
        onOpenNewTrip={() => setIsNewTripOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Outlet context={{ openNewTrip: () => setIsNewTripOpen(true), openAiAssistant: () => setIsAiAssistantOpen(true) }} />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Modals */}
      <NewTripModal
        isOpen={isNewTripOpen}
        onClose={() => setIsNewTripOpen(false)}
      />
      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />
    </div>
  )
}
