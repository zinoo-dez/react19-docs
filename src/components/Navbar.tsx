import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  BookOpenIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  MessageSquareIcon,
  PlayIcon,
  SparklesIcon,
  XIcon,
} from './Icons'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home', icon: HomeIcon },
    { to: '/courses', label: 'Courses', icon: BookOpenIcon },
    { to: '/playground', label: 'Playground', icon: PlayIcon },
    { to: '/about', label: 'About Stack', icon: InfoIcon },
    { to: '/contact', label: 'Contact', icon: MessageSquareIcon },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-600 p-0.5 shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors flex items-center justify-center text-white">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
                NovaSphere
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  v7
                </span>
              </span>
              <span className="text-[11px] text-slate-500 -mt-0.5 font-medium">
                React 19 • Tailwind v4
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`
                }
              >
                <Icon size={16} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs & Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/playground"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <PlayIcon size={14} />
              Launch Lab
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-lg"
        >
          <div className="text-[11px] font-mono text-slate-400 px-3 pb-1">
            CURRENT ROUTE: {location.pathname}
          </div>
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/playground"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
            >
              <PlayIcon size={16} />
              Try Interactive Lab
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
