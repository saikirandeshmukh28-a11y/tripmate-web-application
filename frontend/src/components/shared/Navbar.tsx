import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Bell, ChevronDown, Compass, Menu, X, Plus } from 'lucide-react'
import { MOCK_USERS } from '../../data/mockData'

interface NavbarProps {
  onOpenNewTrip?: () => void
  onOpenAiAssistant?: () => void
}

export default function Navbar({ onOpenNewTrip, onOpenAiAssistant }: NavbarProps) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  interface NavItem {
    label: string
    path?: string
    isAction?: boolean
    onClick?: () => void
    badge?: string
  }

  const navItems: NavItem[] = [
    { label: 'Explore', path: '/' },
    { label: 'My Trips', path: '/itinerary' },
    {
      label: 'AI Assistant',
      isAction: true,
      onClick: onOpenAiAssistant,
      badge: 'AI'
    },
    { label: 'Group Planning', path: '/group-planning' },
    { label: 'Community / Guides', path: '/#community' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#DE3724] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-neutral-900">
                TripMate
              </span>
            </Link>
            
            <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-rose-50 text-[#DE3724] border border-rose-200/80">
              AI TRAVEL
            </span>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const active = item.path ? isActive(item.path) : false

              if (item.isAction) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.onClick}
                    className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#DE3724] text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                )
              }

              if (!item.path) return null

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                    active
                      ? 'bg-[#FCECE9] text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Area: Search, Notifications, Primary Action, Profile */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden md:block w-48 xl:w-60">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search places, cities, stays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#DE3724] focus:border-[#DE3724] transition-all"
              />
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg relative transition-colors"
                aria-label="View notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#DE3724] ring-2 ring-white"></span>
              </button>

              {/* Notifications Popup */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-neutral-200 py-3 z-50 text-left">
                  <div className="px-4 pb-2 border-b border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-900">Notifications</span>
                    <span className="text-[11px] text-[#DE3724] font-medium cursor-pointer">Mark all read</span>
                  </div>
                  <div className="divide-y divide-neutral-100 max-h-64 overflow-y-auto">
                    <div className="p-3 text-xs hover:bg-neutral-50 transition-colors">
                      <p className="font-medium text-neutral-800">Arjun initiated poll: Day 3 Sunset Experience</p>
                      <span className="text-[10px] text-neutral-400 mt-1 block">1 hour ago</span>
                    </div>
                    <div className="p-3 text-xs hover:bg-neutral-50 transition-colors">
                      <p className="font-medium text-neutral-800">Priya uploaded receipt for Fisherman's Wharf</p>
                      <span className="text-[10px] text-neutral-400 mt-1 block">3 hours ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* New Trip Action Button */}
            <button
              type="button"
              onClick={onOpenNewTrip}
              className="inline-flex items-center gap-1.5 bg-[#DE3724] hover:bg-[#C82F1E] text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>New Trip</span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-1.5 p-1 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <img
                  src={MOCK_USERS.rohan.avatar}
                  alt={MOCK_USERS.rohan.name}
                  className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                />
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-1.5 z-50 text-left">
                  <div className="px-4 py-2 border-b border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">{MOCK_USERS.rohan.name}</p>
                    <p className="text-[11px] text-neutral-500">rohan@tripmate.app</p>
                  </div>
                  <Link
                    to="/itinerary"
                    onClick={() => setShowUserDropdown(false)}
                    className="block px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50"
                  >
                    Goa Coastal Adventure
                  </Link>
                  <Link
                    to="/expenses"
                    onClick={() => setShowUserDropdown(false)}
                    className="block px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50"
                  >
                    Trip Expenses
                  </Link>
                  <Link
                    to="/group-planning"
                    onClick={() => setShowUserDropdown(false)}
                    className="block px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50"
                  >
                    Group Decisions
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-3 space-y-1">
            {navItems.map((item) => (
              item.isAction ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.onClick?.()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#DE3724] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ) : item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    isActive(item.path)
                      ? 'bg-[#FCECE9] text-neutral-900 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100 font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              ) : null
            ))}
            
            <div className="pt-2 px-3">
              <input
                type="text"
                placeholder="Search places, cities, stays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
