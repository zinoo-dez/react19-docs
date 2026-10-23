import { useState } from 'react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
  LayersIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
} from '../components/Icons'

export function AboutPage() {
  const [activeStackTab, setActiveStackTab] = useState<'react' | 'tailwind' | 'router' | 'vite'>('react')
  const [showBenchmarkDisclosure, setShowBenchmarkDisclosure] = useState(false)
  const [showChecklistDisclosure, setShowChecklistDisclosure] = useState(false)

  const techDetails = {
    react: {
      title: 'React 19 Core',
      tagline: 'Modern Component Model with Built-in Actions & Transitions',
      features: [
        'useActionState() for handling pending states, errors, and form actions natively',
        'useOptimistic() hook for instant responsive user interfaces before network resolution',
        'Direct promise and context resolution with the new use() API',
        'Native document metadata (<title>, <meta>) rendered directly in component trees',
        'Simplified ref prop handling without requiring forwardRef wrappers',
      ],
      docUrl: 'https://react.dev/',
    },
    tailwind: {
      title: 'Tailwind CSS v4 (Oxide)',
      tagline: 'High Performance CSS-First Utility Engine',
      features: [
        '10x faster compilation powered by a unified Rust-based Oxide engine',
        'Pure CSS configuration: @import "tailwindcss" replaces legacy tailwind.config.js',
        'Native CSS nesting support and modern CSS color spaces (OKLCH, Display P3)',
        'Zero-configuration Vite integration with @tailwindcss/vite',
        'Built-in container queries, subgrid, and modern viewport sizing utilities',
      ],
      docUrl: 'https://tailwindcss.com/',
    },
    router: {
      title: 'React Router v7',
      tagline: 'Next-Generation Declarative Routing Framework',
      features: [
        'Unified architecture marrying client-side routing and fullstack capabilities',
        'Type-safe route matching with declarative nested layouts via <Outlet />',
        'URL state manipulation via useSearchParams() and location history tracking',
        'Dynamic segment extraction through typed useParams() hooks',
        'Seamless scroll restoration and navigational transitions',
      ],
      docUrl: 'https://reactrouter.com/',
    },
    vite: {
      title: 'Vite 8 & TypeScript',
      tagline: 'Instant Hot Module Replacement & Strict Type Safety',
      features: [
        'Near-zero second cold server startup powered by native ES modules',
        'Lightning fast HMR ensuring state preservation during live editing',
        'TypeScript 6 static analysis and strict type checking',
        'Built-in Oxlint integration for microsecond code quality checks',
        'Optimized Rollup production bundling with granular chunk splitting',
      ],
      docUrl: 'https://vite.dev/',
    },
  }

  const current = techDetails[activeStackTab]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 bg-white">
      {/* Page Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
          <InfoIcon size={14} />
          Architectural Blueprint
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Technology Stack
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Discover why React 19, Tailwind CSS v4, and React Router v7 create the premier web application stack.
        </p>
      </div>

      {/* Stack Navigator Tabs: Clean Wrapping Layout (Zero Scroll) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        {[
          { id: 'react', label: 'React 19', icon: SparklesIcon },
          { id: 'tailwind', label: 'Tailwind v4', icon: ZapIcon },
          { id: 'router', label: 'React Router v7', icon: LayersIcon },
          { id: 'vite', label: 'Vite & TS', icon: ShieldCheckIcon },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveStackTab(id as typeof activeStackTab)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeStackTab === id
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Selected Tech Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm relative overflow-hidden">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-blue-600 font-bold">
            Module Specification
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{current.title}</h2>
          <p className="text-slate-600 text-sm">{current.tagline}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Key Architectural Enhancements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
              >
                <div className="p-1 rounded-md bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                  <CheckIcon size={14} />
                </div>
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-600">Learn more in official documentation</span>
          <a
            href={current.docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Official Docs ↗
          </a>
        </div>
      </div>

      {/* Progressive Disclosure Section: Deep Technical Blueprint */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Progressive Technical Disclosures</h2>
            <p className="text-xs text-slate-500">Disclose in-depth benchmark comparisons and audit checklists on demand.</p>
          </div>
        </div>

        {/* Disclosure Accordion 1: Benchmarks */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setShowBenchmarkDisclosure(!showBenchmarkDisclosure)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                01
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Performance & Compilation Benchmarks</h3>
                <p className="text-xs text-slate-500">Cold server startup, HMR speed, and CSS build time metrics</p>
              </div>
            </div>
            <div className="text-slate-400">
              {showBenchmarkDisclosure ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
            </div>
          </button>

          {showBenchmarkDisclosure && (
            <div className="px-6 py-5 border-t border-slate-200 bg-slate-50/50 space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-slate-500 font-medium">Vite 8 Cold Start</div>
                  <div className="text-2xl font-black text-blue-600">240ms</div>
                  <div className="text-slate-500">Native ESM no-bundle architecture</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-slate-500 font-medium">Tailwind v4 Compile</div>
                  <div className="text-2xl font-black text-blue-600">10x Faster</div>
                  <div className="text-slate-500">Oxide Rust-powered utility engine</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-slate-500 font-medium">React 19 Action Delay</div>
                  <div className="text-2xl font-black text-blue-600">0ms Perceived</div>
                  <div className="text-slate-500">Instant useOptimistic state updates</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclosure Accordion 2: Production Readiness */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setShowChecklistDisclosure(!showChecklistDisclosure)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                02
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Production Readiness & Architecture Checklist</h3>
                <p className="text-xs text-slate-500">Step-by-step verification points for modern production frontend deployments</p>
              </div>
            </div>
            <div className="text-slate-400">
              {showChecklistDisclosure ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
            </div>
          </button>

          {showChecklistDisclosure && (
            <div className="px-6 py-5 border-t border-slate-200 bg-slate-50/50 space-y-3 animate-in fade-in duration-150">
              {[
                { title: 'Strict Type Soundness', detail: 'Zero `any` leaks; exhaustive discriminated unions on all router loader data.' },
                { title: 'Accessibility Compliance', detail: 'Semantic HTML5 structure, ARIA-expanded attributes on all disclosure triggers, and 4.5:1 minimum color contrast.' },
                { title: '2-Color Visual Restraint', detail: '80% pure white & light neutral canvas paired with 20% intentional high-contrast blue for focused cognitive flow.' },
                { title: 'Progressive Disclosure Principle', detail: 'High-level summaries first, granular operational details disclosed upon purposeful user intent.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl text-xs">
                  <div className="p-1 rounded-md bg-blue-100 text-blue-600 mt-0.5 shrink-0">
                    <CheckIcon size={13} />
                  </div>
                  <div>
                    <strong className="text-slate-900">{item.title}: </strong>
                    <span className="text-slate-600">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
