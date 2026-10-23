import { useState, useRef } from 'react'
import type { Lesson } from '../../data/coursesData'
import { CheckIcon, ZapIcon, InfoIcon, ShieldCheckIcon } from '../Icons'
import { CustomSelect } from '../CustomSelect'

interface FullstackPlaygroundProps {
  lesson: Lesson
}

export function FullstackPlayground({ lesson }: FullstackPlaygroundProps) {
  // Lesson 1: Vite Architecture
  const [bundlerMode, setBundlerMode] = useState<'vite' | 'legacy'>('vite')

  // Lesson 2: TypeScript Strict Mode
  const [userEmail, setUserEmail] = useState<string>('alex@enterprise.dev')
  const [userRole, setUserRole] = useState<'admin' | 'engineer' | 'viewer'>('engineer')
  const [tsValidationStatus, setTsValidationStatus] = useState<string>('Type check passed: UserProfile is strictly valid.')

  // Lesson 3: Environment Variables Security
  const [envScannerInput, setEnvScannerInput] = useState<string>('VITE_APP_ENV=production\nDATABASE_URL=postgres://...\nSTRIPE_SECRET=sk_live_...\nVITE_PUBLIC_KEY=pk_test_...')
  const [scannedEnvs, setScannedEnvs] = useState<Array<{ key: string; isClientSafe: boolean }>>([
    { key: 'VITE_APP_ENV', isClientSafe: true },
    { key: 'VITE_PUBLIC_KEY', isClientSafe: true },
    { key: 'DATABASE_URL', isClientSafe: false },
    { key: 'STRIPE_SECRET', isClientSafe: false },
  ])

  // Lesson 4: Resilient API Fetching with AbortController
  const [fetchStatus, setFetchStatus] = useState<'idle' | 'loading' | 'aborted' | 'success'>('idle')
  const [apiLog, setApiLog] = useState<string | null>(null)
  const abortCtrlRef = useRef<AbortController | null>(null)

  // Lesson 5: Oxlint Code Hygiene
  const [codeWithIssues, setCodeWithIssues] = useState<string>(
    'const unusedVar = 100;\nfunction check(x) {\n  debugger;\n  return x == "10";\n}'
  )
  const [oxlintStatus, setOxlintStatus] = useState<{ issuesCount: number; speedMs: string }>({
    issuesCount: 3,
    speedMs: '1.2ms',
  })

  // Lesson 6: Production Chunk Splitting
  const [enableChunkSplitting, setEnableChunkSplitting] = useState<boolean>(true)

  // Lesson 7: SPA Edge Deployment
  const [testedUrl, setTestedUrl] = useState<string>('/courses/fullstack-modern-frontend/lessons/3')
  const [enableRewriteRule, setEnableRewriteRule] = useState<boolean>(true)

  // Handlers
  const handleSimulateFetch = () => {
    const ctrl = new AbortController()
    abortCtrlRef.current = ctrl
    setFetchStatus('loading')
    setApiLog('GET /api/v1/metrics [In Flight, signal attached]...')

    const timer = setTimeout(() => {
      setFetchStatus('success')
      setApiLog('HTTP 200 OK: { region: "edge-us-east", latency: "42ms", gzipSize: "14.2 kB" }')
    }, 1500)

    ctrl.signal.addEventListener('abort', () => {
      clearTimeout(timer)
      setFetchStatus('aborted')
      setApiLog('AbortError: Request cancelled by client! (0 pending promises, 0 memory leaked)')
    })
  }

  const handleCancelFetch = () => {
    abortCtrlRef.current?.abort()
  }

  const handleScanEnvs = () => {
    const lines = envScannerInput.split('\n').filter((l) => l.includes('='))
    const scanned = lines.map((line) => {
      const key = line.split('=')[0].trim()
      return {
        key,
        isClientSafe: key.startsWith('VITE_'),
      }
    })
    setScannedEnvs(scanned)
  }

  const handleFixOxlint = () => {
    setCodeWithIssues('function check(x: string | number) {\n  return x === "10";\n}')
    setOxlintStatus({ issuesCount: 0, speedMs: '0.8ms' })
  }

  return (
    <div className="space-y-6">
      {/* Sub-header */}
      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon size={16} className="text-blue-600" />
          <span className="text-xs font-semibold text-blue-900">
            Fullstack Frontend Engineering Lab:
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-blue-700 border border-blue-200 font-semibold shadow-xs">
          {lesson.badgeText}
        </span>
      </div>

      {/* LESSON 1: Vite Project Architecture */}
      {lesson.id === 'vite-project-architecture' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ZapIcon size={14} className="text-blue-600" /> Native ESM vs Classic Bundler Architecture
            </h4>
            <p className="text-xs text-slate-600">
              Vite transforms source code on-demand via browser native ESM, while legacy bundlers crawl and bundle every single file before serving.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setBundlerMode('vite')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                bundlerMode === 'vite'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Vite 8 Native ESM (Cold Start: 12ms)
            </button>
            <button
              type="button"
              onClick={() => setBundlerMode('legacy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                bundlerMode === 'legacy'
                  ? 'bg-slate-700 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Legacy Bundler (Cold Start: 2,400ms)
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2">
            {bundlerMode === 'vite' ? (
              <div className="space-y-1 text-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-blue-700">
                  <CheckIcon size={13} className="text-blue-600" /> Vite Dev Server: Active in 12ms
                </div>
                <div className="text-slate-600 text-[11px]">
                  Browser requests only the active route module on demand. Source files are served as HTTP 304 0ms cached ES Modules.
                </div>
              </div>
            ) : (
              <div className="space-y-1 text-amber-800">
                <div className="font-bold">⚠️ Monolithic Bundle Pipeline: 2,400ms Build Time</div>
                <div className="text-slate-600 text-[11px]">
                  Requires bundling all 1,420 source files and dependencies into bundle.js before the local dev server can serve page 1.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LESSON 2: TypeScript Strict Mode & Web Event Typing */}
      {lesson.id === 'typescript-strict-web' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Strict Web Event Typing & Generic Contracts</h4>
            <p className="text-xs text-slate-600">
              Eliminate runtime errors with typed SyntheticEvents (<code className="text-blue-600 font-semibold">React.FormEvent&lt;HTMLFormElement&gt;</code>) and discriminated union models.
            </p>
          </div>

          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              if (!userEmail.includes('@')) {
                setTsValidationStatus('TypeError: Invalid email format. String does not satisfy UserEmail contract.')
              } else {
                setTsValidationStatus(`✓ Validated UserPayload<"${userRole}">: { email: "${userEmail}", role: "${userRole}" }`)
              }
            }}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="user-email-input" className="text-xs font-mono text-slate-600 block">
                  email: React.ChangeEvent&lt;HTMLInputElement&gt;
                </label>
                <input
                  id="user-email-input"
                  type="text"
                  value={userEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 font-mono focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-600 block">role: UserRole Union</label>
                <CustomSelect
                  value={userRole}
                  onChange={(val) => setUserRole(val as 'admin' | 'engineer' | 'viewer')}
                  options={[
                    { value: 'engineer', label: 'engineer', description: 'read/write access' },
                    { value: 'admin', label: 'admin', description: 'full cluster control' },
                    { value: 'viewer', label: 'viewer', description: 'read-only audit access' },
                  ]}
                  className="w-full"
                  menuWidthClass="w-64"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer transition-colors shadow-xs"
              >
                Validate Strict Event & Types
              </button>
              <span className="text-[11px] font-mono text-slate-500">noImplicitAny: true</span>
            </div>

            <div
              className={`p-3 rounded-lg text-xs font-mono ${
                tsValidationStatus.startsWith('Type')
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200 font-semibold'
              }`}
            >
              {tsValidationStatus}
            </div>
          </form>
        </div>
      )}

      {/* LESSON 3: Environment Variables & Security Boundaries */}
      {lesson.id === 'secure-env-variables' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Client-vs-Server Secret Boundary Scanner</h4>
            <p className="text-xs text-slate-600">
              Only variables prefixed with <code className="text-blue-600 font-semibold">VITE_</code> are embedded into the client bundle. Private secrets must NEVER leak to the browser.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="env-scanner-input" className="font-mono text-slate-600">Simulated .env Configuration:</label>
              <button
                type="button"
                onClick={handleScanEnvs}
                className="text-blue-600 hover:text-blue-700 text-[11px] font-semibold cursor-pointer"
              >
                Re-Scan Variables
              </button>
            </div>
            <textarea
              id="env-scanner-input"
              rows={4}
              value={envScannerInput}
              onChange={(e) => setEnvScannerInput(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs font-mono text-slate-900 resize-none focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-500 font-semibold">Client Bundle Security Audit:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {scannedEnvs.map((env, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border flex items-center justify-between ${
                    env.isClientSafe
                      ? 'bg-blue-50 border-blue-200 text-blue-800 font-semibold'
                      : 'bg-slate-100 border-slate-300 text-slate-600'
                  }`}
                >
                  <span className="truncate">{env.key}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 bg-white shadow-xs">
                    {env.isClientSafe ? '✓ Client Safe' : '🔒 Server Protected'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LESSON 4: Resilient API Client with AbortController */}
      {lesson.id === 'resilient-api-fetching' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">AbortController In-Flight Cancellation</h4>
              <p className="text-xs text-slate-600">
                Cancel stale HTTP requests during unmounts or rapid search inputs without memory leaks.
              </p>
            </div>
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${
                fetchStatus === 'loading'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200 animate-pulse'
                  : fetchStatus === 'aborted'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : fetchStatus === 'success'
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {fetchStatus === 'loading'
                ? '⏳ In-Flight (1.5s)...'
                : fetchStatus === 'aborted'
                ? '❌ Cancelled by AbortController'
                : fetchStatus === 'success'
                ? '✓ HTTP 200 Settled'
                : 'Idle'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={fetchStatus === 'loading'}
              onClick={handleSimulateFetch}
              className="w-full px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              Dispatch GET /api/v1/metrics (1.5s delay)
            </button>
            {fetchStatus === 'loading' && (
              <button
                type="button"
                onClick={handleCancelFetch}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-red-600 text-xs font-bold shrink-0 border border-red-200 transition-colors cursor-pointer shadow-xs"
              >
                Abort In-Flight Request
              </button>
            )}
          </div>

          {apiLog && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
              <span className="text-slate-500">Request Telemetry: </span>
              <span className={fetchStatus === 'aborted' ? 'text-amber-800 font-semibold' : 'text-blue-700 font-bold'}>
                {apiLog}
              </span>
            </div>
          )}
        </div>
      )}

      {/* LESSON 5: Oxlint Code Hygiene */}
      {lesson.id === 'oxlint-code-hygiene' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Oxlint Rust Static Code Analyzer</h4>
              <p className="text-xs text-slate-600">
                50x-100x faster than legacy linters. Checks 116 rules in &lt;15ms.
              </p>
            </div>
            <span className="text-xs font-mono text-blue-700 font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
              Speed: {oxlintStatus.speedMs}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-slate-600">Code Under Inspection:</span>
              <button
                type="button"
                onClick={handleFixOxlint}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-xs"
              >
                Fix with Oxlint (1-Click)
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 shadow-inner">
              {codeWithIssues}
            </pre>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono flex items-center justify-between">
            <span className="text-slate-500">Issues Flagged:</span>
            <span className={oxlintStatus.issuesCount > 0 ? 'text-red-700 font-bold' : 'text-blue-700 font-bold'}>
              {oxlintStatus.issuesCount > 0
                ? `${oxlintStatus.issuesCount} Issues (no-debugger, no-unused-vars, eqeqeq)`
                : '✓ 0 warnings and 0 errors found in 0.8ms'}
            </span>
          </div>
        </div>
      )}

      {/* LESSON 6: Production Chunk Splitting */}
      {lesson.id === 'production-code-splitting' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Rollup / Vite Manual Chunk Splitting</h4>
              <p className="text-xs text-slate-600">
                Separate stable vendor packages from frequently changing application code for optimal CDN caching.
              </p>
            </div>
            <label className="flex items-center gap-2 text-xs font-mono text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={enableChunkSplitting}
                onChange={(e) => setEnableChunkSplitting(e.target.checked)}
                className="accent-blue-600 rounded"
              />
              <span>manualChunks: Enabled</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-500 font-semibold">Production Bundle Distribution:</div>
            {enableChunkSplitting ? (
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-blue-700 font-semibold">vendor-react.js (react + react-dom)</span>
                  <span className="text-slate-500">142 kB (Cached 1 year)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-blue-700 font-semibold">vendor-router.js (react-router)</span>
                  <span className="text-slate-500">54 kB (Cached 1 year)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                  <span className="text-slate-900 font-bold">index.js (App Code)</span>
                  <span className="text-slate-500">32 kB (Invalidated on release)</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 space-y-1">
                <div className="font-bold">⚠️ Monolithic index.js (382 kB total)</div>
                <div className="text-slate-600 text-[11px]">
                  Any 1-line CSS or code change forces all users to re-download the entire 382 kB vendor runtime.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LESSON 7: SPA Edge Deployment & Rewrite Rules */}
      {lesson.id === 'edge-spa-deployment' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Edge CDN & Nginx Rewrite Rule Tester</h4>
            <p className="text-xs text-slate-600">
              Direct deep link access without server rewrite causes HTTP 404 errors on static hosts.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="tested-url-input" className="text-xs font-mono text-slate-600 block">Target Deep Link URL:</label>
            <input
              id="tested-url-input"
              type="text"
              value={testedUrl}
              onChange={(e) => setTestedUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-mono focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={enableRewriteRule}
                onChange={(e) => setEnableRewriteRule(e.target.checked)}
                className="accent-blue-600 rounded"
              />
              <span>Enable try_files $uri /index.html rewrite rule</span>
            </label>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-500">Server Response:</span>
              <span className={enableRewriteRule ? 'text-blue-700 font-bold' : 'text-red-700 font-bold'}>
                {enableRewriteRule ? 'HTTP 200 OK (Served index.html -> Client Router Takes Over)' : 'HTTP 404 Not Found (File does not exist on disk)'}
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              {enableRewriteRule
                ? 'Configuration: try_files $uri $uri/ /index.html [PASSED]'
                : 'Warning: Direct reload on this route will show blank 404 page!'}
            </div>
          </div>
        </div>
      )}

      {/* Summary Footer */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
        <InfoIcon size={14} className="text-blue-600 shrink-0" />
        <span>Enterprise frontend architecture connects client contracts to robust build & deploy pipelines.</span>
      </div>
    </div>
  )
}
