import { useState } from 'react'
import type { Lesson } from '../../data/coursesData'
import { LayersIcon, ZapIcon, InfoIcon } from '../Icons'
import { CustomSelect } from '../CustomSelect'

interface RouterPlaygroundProps {
  lesson: Lesson
}

export function RouterPlayground({ lesson }: RouterPlaygroundProps) {
  // Lesson 1: Browser Router & Route Tree
  const [selectedRoute, setSelectedRoute] = useState<string>('/courses/fullstack-modern-frontend')

  // Lesson 2: Nested Layouts & Outlet
  const [activeOutletView, setActiveOutletView] = useState<'home' | 'courses' | 'contact'>('courses')

  // Lesson 3: Dynamic Segments (useParams)
  const [dynamicCourseParam, setDynamicCourseParam] = useState<string>('fullstack-modern-frontend')
  const [dynamicLessonParam, setDynamicLessonParam] = useState<string>('3')

  // Lesson 4: Search Params (useSearchParams)
  const [searchFilter, setSearchFilter] = useState<string>('react-19')
  const [searchSort, setSearchSort] = useState<'asc' | 'desc'>('desc')
  const [searchPage, setSearchPage] = useState<number>(1)

  // Lesson 5: Programmatic Navigation (useNavigate)
  const [historyStack, setHistoryStack] = useState<string[]>(['/home', '/courses', '/courses/react-router-v7-routing'])
  const [lastNavAction, setLastNavAction] = useState<string>('navigate("/courses/react-router-v7-routing")')

  // Lesson 6: View Transitions
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [activeTransitionCard, setActiveTransitionCard] = useState<'card-a' | 'card-b'>('card-a')

  const triggerViewTransition = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTransitionCard((prev) => (prev === 'card-a' ? 'card-b' : 'card-a'))
      setIsTransitioning(false)
    }, 450)
  }

  const handlePushRoute = (path: string) => {
    setHistoryStack((prev) => [...prev, path])
    setLastNavAction(`navigate("${path}")`)
  }

  const handleReplaceRoute = (path: string) => {
    setHistoryStack((prev) => [...prev.slice(0, -1), path])
    setLastNavAction(`navigate("${path}", { replace: true })`)
  }

  const handleGoBack = () => {
    if (historyStack.length > 1) {
      setHistoryStack((prev) => prev.slice(0, -1))
      setLastNavAction('navigate(-1) [History Pop]')
    }
  }

  return (
    <div className="space-y-6">
      {/* Sub-header */}
      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon size={16} className="text-blue-600" />
          <span className="text-xs font-semibold text-blue-900">
            React Router v7 Live Route Engine:
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-blue-700 border border-blue-200 font-semibold shadow-xs">
          {lesson.badgeText}
        </span>
      </div>

      {/* LESSON 1: Route Declarations & Matcher */}
      {lesson.id === 'browser-router-fundamentals' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ZapIcon size={14} className="text-blue-600" /> Route Matching Algorithm
            </h4>
            <p className="text-xs text-slate-600">
              React Router v7 ranks route definitions by specificity, eliminating ordering bugs.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-500">Test Candidate URL:</div>
            <div className="flex flex-wrap gap-2">
              {[
                '/',
                '/courses',
                '/courses/fullstack-modern-frontend',
                '/courses/fullstack-modern-frontend/playground',
                '/unknown/non-existent-url',
              ].map((url) => (
                <button
                  key={url}
                  type="button"
                  onClick={() => setSelectedRoute(url)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    selectedRoute === url
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {url}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Matched Route:</span>
                <span className="text-blue-700 font-bold">
                  {selectedRoute === '/'
                    ? '<Route index element={<HomePage />} />'
                    : selectedRoute === '/courses'
                    ? '<Route path="courses" element={<CoursesPage />} />'
                    : selectedRoute.includes('/playground')
                    ? '<Route path="courses/:id/playground" element={<PlaygroundPage />} />'
                    : selectedRoute.startsWith('/courses/')
                    ? '<Route path="courses/:id" element={<CourseDetailPage />} />'
                    : '<Route path="*" element={<NotFoundPage />} /> (Splat)'}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200">
                <span>Status Code:</span>
                <span className={selectedRoute.startsWith('/unknown') ? 'text-rose-600 font-bold' : 'text-blue-700 font-bold'}>
                  {selectedRoute.startsWith('/unknown') ? '404 Not Found' : '200 OK'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LESSON 2: Nested Layouts & Outlet */}
      {lesson.id === 'nested-layouts-outlet' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Hierarchical Routing & &lt;Outlet /&gt;</h4>
            <p className="text-xs text-slate-600">
              The root layout preserves navigation and footer states while the nested Outlet swaps view components.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 flex items-center justify-between shadow-xs">
              <span className="font-semibold text-blue-700">&lt;RootLayout&gt; (Persistent Shell)</span>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                {(['home', 'courses', 'contact'] as const).map((view) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setActiveOutletView(view)}
                    className={`px-2.5 py-0.5 rounded capitalize transition-colors cursor-pointer ${
                      activeOutletView === view
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Outlet Slot */}
            <div className="p-5 rounded-lg bg-white border-2 border-dashed border-blue-300 space-y-1 text-center">
              <div className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">
                &lt;Outlet /&gt; Active Slot
              </div>
              <div className="text-sm font-bold text-slate-900 capitalize">
                {activeOutletView === 'home' && 'HomePage Component'}
                {activeOutletView === 'courses' && 'CourseCatalogPage Component'}
                {activeOutletView === 'contact' && 'ContactPage Component'}
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Navbar & Footer stay mounted without re-rendering or losing scroll position.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LESSON 3: Dynamic Segments (useParams) */}
      {lesson.id === 'use-params-dynamic-segments' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Dynamic Route Segments & useParams()</h4>
            <p className="text-xs text-slate-600">
              Extract typed parameters from URI patterns like <code className="text-blue-600 font-semibold">/courses/:courseId/lessons/:lessonIndex</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="course-id-input" className="text-xs font-mono text-slate-600 block">:courseId param</label>
              <input
                id="course-id-input"
                type="text"
                value={dynamicCourseParam}
                onChange={(e) => setDynamicCourseParam(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-blue-700 font-mono focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lesson-idx-input" className="text-xs font-mono text-slate-600 block">:lessonIndex param</label>
              <input
                id="lesson-idx-input"
                type="text"
                value={dynamicLessonParam}
                onChange={(e) => setDynamicLessonParam(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-blue-700 font-mono focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Result JSON */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-mono">
            <div className="text-slate-500 text-[11px] font-semibold">useParams&lt;CourseRouteParams&gt;() Returns:</div>
            <pre className="text-blue-700 text-xs font-semibold">
              {JSON.stringify(
                {
                  courseId: dynamicCourseParam,
                  lessonIndex: dynamicLessonParam,
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
      )}

      {/* LESSON 4: Query Parameters (useSearchParams) */}
      {lesson.id === 'use-search-params-hook' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">useSearchParams() URL Query Manager</h4>
            <p className="text-xs text-slate-600">
              Synchronize filter, sort, and pagination state directly with the browser URL query string.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-[11px] font-mono text-slate-500 block mb-1">Filter:</span>
              <CustomSelect
                value={searchFilter}
                onChange={setSearchFilter}
                options={[
                  { value: 'react-19', label: 'react-19' },
                  { value: 'tailwind-v4', label: 'tailwind-v4' },
                  { value: 'router-v7', label: 'router-v7' },
                ]}
                className="w-full"
                menuWidthClass="w-36"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500 block mb-1">Sort:</span>
              <button
                type="button"
                onClick={() => setSearchSort((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                className="w-full px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-blue-700 font-mono text-center cursor-pointer hover:bg-slate-100 font-semibold"
              >
                {searchSort.toUpperCase()} ⮀
              </button>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500 block mb-1">Page:</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  disabled={searchPage <= 1}
                  onClick={() => setSearchPage((p) => p - 1)}
                  className="px-2 py-1 rounded bg-slate-100 text-xs text-slate-700 disabled:opacity-40 cursor-pointer border border-slate-200"
                >
                  -
                </button>
                <span className="px-2 py-1 text-xs font-mono text-slate-900 font-bold">{searchPage}</span>
                <button
                  type="button"
                  onClick={() => setSearchPage((p) => p + 1)}
                  className="px-2 py-1 rounded bg-slate-100 text-xs text-slate-700 cursor-pointer border border-slate-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="text-slate-500">Live URL: </span>
            <span className="text-blue-700 font-bold">
              /courses?filter={searchFilter}&sort={searchSort}&page={searchPage}
            </span>
          </div>
        </div>
      )}

      {/* LESSON 5: Programmatic Navigation (useNavigate) */}
      {lesson.id === 'programmatic-navigation' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">useNavigate() Imperative Dispatcher</h4>
              <p className="text-xs text-slate-600">
                Trigger transitions, replace history entries, or navigate with state payloads.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handlePushRoute('/dashboard')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-xs"
            >
              Push /dashboard
            </button>
            <button
              type="button"
              onClick={() => handleReplaceRoute('/login')}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 cursor-pointer shadow-xs"
            >
              Replace with /login
            </button>
            <button
              type="button"
              disabled={historyStack.length <= 1}
              onClick={handleGoBack}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 disabled:opacity-40 text-slate-700 text-xs font-semibold border border-slate-300 cursor-pointer shadow-xs"
            >
              ← Back navigate(-1)
            </button>
          </div>

          {/* History Stack View */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
            <div className="text-blue-700 text-[11px] font-bold">History Stack ({historyStack.length} entries):</div>
            <div className="space-y-1 text-slate-600">
              {historyStack.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-slate-400">[{idx}]</span>
                  <span className={idx === historyStack.length - 1 ? 'text-blue-700 font-bold' : 'text-slate-600'}>
                    {item} {idx === historyStack.length - 1 && '◀ Current Top'}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-[11px] text-blue-700 font-semibold pt-1 border-t border-slate-200">
              Last Action: {lastNavAction}
            </div>
          </div>
        </div>
      )}

      {/* LESSON 6: View Transitions API */}
      {lesson.id === 'view-transitions-data-v7' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">document.startViewTransition() Integration</h4>
              <p className="text-xs text-slate-600">
                Smooth CSS morph transitions during client-side route changes.
              </p>
            </div>
            <button
              type="button"
              onClick={triggerViewTransition}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 cursor-pointer active:scale-95"
            >
              Trigger View Transition
            </button>
          </div>

          {/* Transition Visualizer Card */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between bg-blue-50/50 border-blue-200 text-slate-900 ${
              isTransitioning ? 'opacity-30 scale-98 blur-xs' : 'opacity-100 scale-100'
            }`}
          >
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
                Active View State: {activeTransitionCard === 'card-a' ? 'State A' : 'State B'}
              </div>
              <h5 className="text-base font-bold text-slate-900">
                {activeTransitionCard === 'card-a' ? 'Course Catalog Grid' : 'Playground Code Canvas'}
              </h5>
              <p className="text-xs text-slate-600">
                The DOM morphs seamlessly without browser scroll jumps or jarring flashes.
              </p>
            </div>
            <div className="text-2xl text-blue-600">⚡</div>
          </div>
        </div>
      )}

      {/* Summary Footer */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
        <InfoIcon size={14} className="text-blue-600 shrink-0" />
        <span>React Router v7 combines declarative routing with data flow and view transitions.</span>
      </div>
    </div>
  )
}
