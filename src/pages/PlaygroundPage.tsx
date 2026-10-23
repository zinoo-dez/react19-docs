import { useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  PlayIcon,
  TerminalIcon,
  ZapIcon,
} from '../components/Icons'

export function PlaygroundPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [count, setCount] = useState<number>(0)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  // URL search params state
  const activeTab = searchParams.get('tab') || 'state'
  const filterParam = searchParams.get('filter') || 'all'

  const setTab = (tab: string) => {
    const next = new URLSearchParams(searchParams)
    next.set('tab', tab)
    setSearchParams(next)
  }

  const setFilter = (filter: string) => {
    const next = new URLSearchParams(searchParams)
    next.set('filter', filter)
    setSearchParams(next)
  }

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Course Lesson Playground Quick Launch Banner */}
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-blue-700 border border-blue-200 shadow-xs">
              <ZapIcon size={12} /> Course Exercises
            </div>
            <h2 className="text-base font-bold text-slate-900">Looking for In-Depth Lesson Labs?</h2>
            <p className="text-xs text-slate-600">
              Practice each lesson with dedicated interactive widgets and progressive disclosure syntax views.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/courses/fullstack-modern-frontend/playground"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
            >
              Fullstack Lab →
            </Link>
            <Link
              to="/courses/tailwind-v4-mastery/playground"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer border border-slate-300 shadow-xs"
            >
              Tailwind v4 Lab →
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
            <PlayIcon size={14} />
            <span>React Router v7 State Laboratory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Interactive Routing Playground
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Test real-time client-side routing hooks including <code className="text-blue-600 font-semibold">useLocation()</code>,{' '}
            <code className="text-blue-600 font-semibold">useSearchParams()</code>, and programmatic <code className="text-blue-600 font-semibold">useNavigate()</code>.
          </p>
        </div>

        {/* Laboratory Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Router Controller */}
          <div className="lg:col-span-6 space-y-6">
            {/* URL Search Params Controller */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">URL Query Parameter Tester</h3>
                  <p className="text-xs text-slate-500">Update the browser URL query string without reloading</p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  useSearchParams()
                </span>
              </div>

              {/* Tab parameter selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700 block">Parameter: ?tab=...</span>
                <div className="flex flex-wrap gap-2">
                  {['state', 'routing', 'styling', 'metrics'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTab(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        activeTab === t
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      tab={t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter parameter selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700 block">Parameter: ?filter=...</span>
                <div className="flex flex-wrap gap-2">
                  {['all', 'v19-core', 'tailwind-v4', 'vite-bundler'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        filterParam === f
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      filter={f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Programmatic Navigation Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs font-semibold text-slate-700">Programmatic Navigation:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => navigate('/courses')}
                    className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    navigate(&apos;/courses&apos;)
                    <ArrowRightIcon size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/about')}
                    className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    navigate(&apos;/about&apos;)
                    <ArrowRightIcon size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    navigate(-1) [Back]
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive State Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-base">React State Counter</h3>
                <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  useState()
                </span>
              </div>

              <div className="py-4 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => setCount((c) => c - 1)}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-lg flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                >
                  -
                </button>
                <div className="text-4xl font-mono font-black text-slate-900">{count}</div>
                <button
                  type="button"
                  onClick={() => setCount((c) => c + 1)}
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg flex items-center justify-center cursor-pointer active:scale-95 transition-transform shadow-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right: Real-time Route Inspector Output */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={16} className="text-blue-600" />
                  <span className="text-xs font-bold text-slate-900 font-mono">React Router v7 Live Telemetry</span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  Active Signal
                </span>
              </div>

              <div className="p-6 space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-slate-500 font-medium">location.pathname:</div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-blue-700 font-bold flex items-center justify-between">
                    <span>&quot;{location.pathname}&quot;</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(location.pathname, 'pathname')}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    >
                      {copiedKey === 'pathname' ? <CheckIcon size={14} className="text-blue-600" /> : <CopyIcon size={14} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500 font-medium">location.search:</div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-blue-700 font-bold flex items-center justify-between">
                    <span>&quot;{location.search || '(none)'}&quot;</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(location.search, 'search')}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    >
                      {copiedKey === 'search' ? <CheckIcon size={14} className="text-blue-600" /> : <CopyIcon size={14} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500 font-medium">Parsed Query Parameters:</div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 space-y-1">
                    <div>
                      tab: <span className="text-blue-700 font-bold">&quot;{activeTab}&quot;</span>
                    </div>
                    <div>
                      filter: <span className="text-blue-700 font-bold">&quot;{filterParam}&quot;</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500 font-medium">Full Location Object (JSON):</div>
                  <pre className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 overflow-x-auto overflow-y-hidden text-[11px] leading-relaxed">
{JSON.stringify(
  {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    key: location.key,
  },
  null,
  2
)}
                  </pre>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3 text-xs text-blue-900">
              <ZapIcon size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <p>
                Notice that changes to parameters like <code className="bg-white px-1.5 py-0.5 rounded font-mono border border-blue-200 text-blue-700">?tab=...</code> update the browser URL bar instantly through React Router v7 history APIs without any page refresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
