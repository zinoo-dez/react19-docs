import { Link } from 'react-router-dom'
import { SparklesIcon } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <SparklesIcon size={16} />
              </div>
              NovaSphere
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Clean enterprise application demonstrating the union of React 19, Tailwind CSS v4, and React Router v7.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] bg-blue-50 border border-blue-200 text-blue-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              All Systems Operational
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Interactive Lab
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Architecture & Tech Stack
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack Spec */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between">
                <span>React</span>
                <span className="font-mono text-blue-600 font-semibold">v19.3</span>
              </li>
              <li className="flex items-center justify-between">
                <span>React Router</span>
                <span className="font-mono text-blue-600 font-semibold">v7.18</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tailwind CSS</span>
                <span className="font-mono text-blue-600 font-semibold">v4.3</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Vite Engine</span>
                <span className="font-mono text-blue-600 font-semibold">v8.3</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-500">
              Get notified when new React 19 and Tailwind CSS v4 patterns are published.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="developer@domain.com"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium shadow-xs transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NovaSphere Studio. Built with React Router v7 & Tailwind CSS v4.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-blue-600 transition-colors">Documentation</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Support</Link>
            <Link to="/playground" className="hover:text-blue-600 transition-colors">Playground</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
