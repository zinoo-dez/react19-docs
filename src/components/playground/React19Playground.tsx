import { useState, useRef } from 'react'
import type { Lesson } from '../../data/coursesData'
import { SparklesIcon, CheckIcon, LayersIcon, ZapIcon, InfoIcon } from '../Icons'

interface React19PlaygroundProps {
  lesson: Lesson
}

export function React19Playground({ lesson }: React19PlaygroundProps) {
  // Direct Ref state (Lesson 1)
  const directInputRef = useRef<HTMLInputElement>(null)
  const [refActionLog, setRefActionLog] = useState<string>('Ref initialized pointing to HTMLInputElement')

  // useActionState state (Lesson 2)
  const [actionName, setActionName] = useState<string>('Sarah Connor')
  const [actionPending, setActionPending] = useState<boolean>(false)
  const [actionResult, setActionResult] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({
    status: 'idle',
    message: 'Action state ready. Click "Execute Action" to dispatch.',
  })
  const [simulateActionError, setSimulateActionError] = useState<boolean>(false)

  // useFormStatus state (Lesson 3)
  const [formStatusPending, setFormStatusPending] = useState<boolean>(false)

  // useOptimistic state (Lesson 4)
  const [actualLikes, setActualLikes] = useState<number>(42)
  const [optimisticLikes, setOptimisticLikes] = useState<number>(42)
  const [isOptimisticActive, setIsOptimisticActive] = useState<boolean>(false)
  const [simulateOptimisticFail, setSimulateOptimisticFail] = useState<boolean>(false)

  // use(Promise) state (Lesson 5)
  const [promiseStatus, setPromiseStatus] = useState<'idle' | 'pending' | 'resolved'>('idle')
  const [promiseData, setPromiseData] = useState<{ id: string; role: string; quota: string } | null>(null)

  // useTransition state (Lesson 6)
  const [isPendingTransition, setIsPendingTransition] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'security'>('overview')

  // Document Metadata state (Lesson 7)
  const [docTitle, setDocTitle] = useState<string>('NovaSphere Dashboard — React 19')
  const [docDescription, setDocDescription] = useState<string>('Next-gen cloud telemetry and state orchestration.')

  // Handlers
  const handleFocusRef = () => {
    directInputRef.current?.focus()
    setRefActionLog('directInputRef.current.focus() executed! (No forwardRef wrapper needed)')
  }
  const handleSelectRef = () => {
    directInputRef.current?.select()
    setRefActionLog('directInputRef.current.select() executed! Native DOM node accessed directly.')
  }

  const handleRunActionState = () => {
    setActionPending(true)
    setActionResult({ status: 'idle', message: 'Action in-flight: pending server response...' })

    setTimeout(() => {
      setActionPending(false)
      if (simulateActionError) {
        setActionResult({
          status: 'error',
          message: 'Action Error: [409 Conflict] Name already reserved by administrator.',
        })
      } else {
        setActionResult({
          status: 'success',
          message: `Updated profile to "${actionName}" at ${new Date().toLocaleTimeString()} [HTTP 200]`,
        })
      }
    }, 900)
  }

  const handleFormStatusSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatusPending(true)
    setTimeout(() => {
      setFormStatusPending(false)
    }, 1200)
  }

  const handleOptimisticTrigger = () => {
    const nextVal = optimisticLikes + 1
    setOptimisticLikes(nextVal)
    setIsOptimisticActive(true)

    setTimeout(() => {
      setIsOptimisticActive(false)
      if (simulateOptimisticFail) {
        setOptimisticLikes(actualLikes)
      } else {
        setActualLikes(nextVal)
      }
    }, 1100)
  }

  const handleLoadPromiseResource = () => {
    setPromiseStatus('pending')
    setPromiseData(null)
    setTimeout(() => {
      setPromiseData({ id: 'USR-9021', role: 'Staff Frontend Architect', quota: '99.98% SLA' })
      setPromiseStatus('resolved')
    }, 1000)
  }

  const handleSwitchTabWithTransition = (tab: 'overview' | 'telemetry' | 'security') => {
    setIsPendingTransition(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsPendingTransition(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      {/* Sub-header */}
      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SparklesIcon size={16} className="text-blue-600" />
          <span className="text-xs font-semibold text-blue-900">
            React 19 Native Feature Lab:
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-blue-700 border border-blue-200 font-semibold shadow-xs">
          {lesson.badgeText}
        </span>
      </div>

      {/* LESSON 1: Direct Ref as Prop */}
      {lesson.id === 'direct-ref-props' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ZapIcon size={14} className="text-blue-600" /> Direct `ref` Prop Pass-Through
            </h4>
            <p className="text-xs text-slate-600">
              In React 19, function components accept <code className="text-blue-600 font-semibold">ref</code> as a standard prop.
              No higher-order <code className="text-slate-500 font-mono">forwardRef()</code> wrapping is required.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <label htmlFor="ref-demo-input" className="text-xs font-mono text-slate-600 block">
              CustomInput({'{ ref, placeholder }'}):
            </label>
            <div className="flex gap-2">
              <input
                id="ref-demo-input"
                ref={directInputRef}
                type="text"
                defaultValue="Inspect native DOM node"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
              <button
                type="button"
                onClick={handleFocusRef}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer shadow-xs"
              >
                .focus()
              </button>
              <button
                type="button"
                onClick={handleSelectRef}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shrink-0 border border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                .select()
              </button>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 flex items-center gap-2">
              <CheckIcon size={13} className="shrink-0 text-blue-600" />
              <span className="truncate">{refActionLog}</span>
            </div>
          </div>
        </div>
      )}

      {/* LESSON 2: useActionState */}
      {lesson.id === 'actions-use-action-state' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">useActionState() Server Action Form</h4>
              <p className="text-xs text-slate-600">
                Manages async action execution, automatic pending state, and state response.
              </p>
            </div>
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${
                actionPending
                  ? 'bg-blue-100 text-blue-800 border border-blue-200 animate-pulse'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
            >
              {actionPending ? '⏳ isPending: true' : '✓ isPending: false'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={actionName}
                onChange={(e) => setActionName(e.target.value)}
                placeholder="User display name..."
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-mono focus:outline-none focus:border-blue-600 focus:bg-white"
              />
              <button
                type="button"
                disabled={actionPending}
                onClick={handleRunActionState}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer shadow-xs"
              >
                {actionPending ? 'Executing Action...' : 'Execute Action'}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simulateActionError}
                  onChange={(e) => setSimulateActionError(e.target.checked)}
                  className="rounded accent-blue-600"
                />
                <span>Simulate Server Conflict Error (409)</span>
              </label>
            </div>

            <div
              className={`p-3 rounded-xl border text-xs font-mono ${
                actionResult.status === 'error'
                  ? 'bg-red-50 border-red-200 text-red-700'
                  : actionResult.status === 'success'
                  ? 'bg-blue-50 border-blue-200 text-blue-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              {actionResult.message}
            </div>
          </div>
        </div>
      )}

      {/* LESSON 3: useFormStatus */}
      {lesson.id === 'use-form-status-hook' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">useFormStatus() Context Boundary</h4>
            <p className="text-xs text-slate-600">
              Child components read parent <code className="text-blue-600 font-semibold">&lt;form&gt;</code> submission status without props drilling.
            </p>
          </div>

          <form onSubmit={handleFormStatusSubmit} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-mono text-slate-600 flex items-center justify-between">
              <span>Parent &lt;form action=&quot;...&quot;&gt;:</span>
              <span className="text-blue-700 font-semibold text-[11px]">Parent Boundary</span>
            </div>

            <input
              type="email"
              required
              defaultValue="architect@enterprise.io"
              className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 font-mono focus:border-blue-600 focus:outline-none"
            />

            {/* Child component rendering useFormStatus */}
            <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-xs">
              <div className="space-y-0.5 text-xs font-mono">
                <div className="text-slate-500">Child &lt;SubmitButton /&gt; status:</div>
                <div className={formStatusPending ? 'text-blue-700 font-bold' : 'text-slate-700'}>
                  {formStatusPending ? 'useFormStatus().pending === true' : 'useFormStatus().pending === false'}
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatusPending}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                {formStatusPending ? 'Saving Form...' : 'Submit Form'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LESSON 4: useOptimistic */}
      {lesson.id === 'optimistic-ui-updates' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">useOptimistic() Instant Sync</h4>
              <p className="text-xs text-slate-600">
                Immediately updates UI before server confirmation, with automatic error rollback.
              </p>
            </div>
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded font-medium ${
                isOptimisticActive ? 'bg-blue-100 text-blue-800 border border-blue-200 font-bold' : 'text-slate-500 bg-slate-100'
              }`}
            >
              {isOptimisticActive ? '⚡ Client Ahead of Server' : '✓ Synced with Server'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Server Committed State:</div>
                <div className="text-base font-mono font-bold text-slate-900">{actualLikes} Likes</div>
              </div>

              <button
                type="button"
                onClick={handleOptimisticTrigger}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all active:scale-95 ${
                  isOptimisticActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-102'
                    : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-xs'
                }`}
              >
                <span>👍</span>
                <span>{optimisticLikes} Likes (Click Me)</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  checked={simulateOptimisticFail}
                  onChange={(e) => setSimulateOptimisticFail(e.target.checked)}
                  className="rounded accent-blue-600"
                />
                <span>Simulate Server Failure (Rollback)</span>
              </label>
              {isOptimisticActive && (
                <span className="text-[11px] font-mono text-blue-700 animate-pulse">
                  Simulating 1.1s network latency...
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LESSON 5: use(Promise) & Suspense */}
      {lesson.id === 'use-hook-promises-context' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">use(Promise) Resource Reader</h4>
            <p className="text-xs text-slate-600">
              Unwraps Promises directly inside render without useEffect or external state libraries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-600">Promise State:</span>
              <button
                type="button"
                disabled={promiseStatus === 'pending'}
                onClick={handleLoadPromiseResource}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer disabled:opacity-50 shadow-xs"
              >
                {promiseStatus === 'pending' ? 'Unwrapping Promise...' : 'Fetch User with use(Promise)'}
              </button>
            </div>

            {promiseStatus === 'pending' && (
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-800 flex items-center gap-2 animate-pulse font-mono">
                <span>🌀 &lt;Suspense fallback=...&gt; actively rendering...</span>
              </div>
            )}

            {promiseData && (
              <pre className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 shadow-xs">
                {JSON.stringify(promiseData, null, 2)}
              </pre>
            )}

            {promiseStatus === 'idle' && (
              <div className="text-xs text-slate-400 font-mono text-center py-2">
                Click button to dispatch promise resolution
              </div>
            )}
          </div>
        </div>
      )}

      {/* LESSON 6: useTransition */}
      {lesson.id === 'async-transitions-usetransition' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900">useTransition() Non-Blocking UI</h4>
              <p className="text-xs text-slate-600">
                Keeps high-priority user input responsive while rendering low-priority transitions.
              </p>
            </div>
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${
                isPendingTransition
                  ? 'bg-blue-100 text-blue-800 border border-blue-200 animate-pulse'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isPendingTransition ? '⏳ isPending: true' : '✓ isPending: false'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['overview', 'telemetry', 'security'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleSwitchTabWithTransition(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-mono text-blue-700 uppercase text-[10px] font-bold">Active View: {activeTab}</div>
            <p className="leading-relaxed">
              startTransition(() =&gt; setTab(&quot;{activeTab}&quot;)) allows the browser to respond to clicks and keystrokes without UI stutter.
            </p>
          </div>
        </div>
      )}

      {/* LESSON 7: Native Document Metadata */}
      {lesson.id === 'native-document-metadata' && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Native Document Metadata Hoisting</h4>
            <p className="text-xs text-slate-600">
              React 19 hoists <code className="text-blue-600 font-semibold">&lt;title&gt;</code> and <code className="text-blue-600 font-semibold">&lt;meta&gt;</code> tags directly into <code className="text-slate-800 font-semibold">&lt;head&gt;</code> without third-party packages.
            </p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="doc-title-input" className="text-xs font-mono text-slate-600 block">
                &lt;title&gt;:
              </label>
              <input
                id="doc-title-input"
                type="text"
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-mono focus:border-blue-600 focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="doc-desc-input" className="text-xs font-mono text-slate-600 block">
                &lt;meta name=&quot;description&quot; content=&quot;...&quot; /&gt;:
              </label>
              <input
                id="doc-desc-input"
                type="text"
                value={docDescription}
                onChange={(e) => setDocDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-mono focus:border-blue-600 focus:bg-white"
              />
            </div>

            {/* Hoisted Head Tag Inspector */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 font-mono text-xs">
              <div className="text-[11px] text-blue-700 font-semibold flex items-center gap-1.5">
                <LayersIcon size={12} /> Document &lt;head&gt; Output:
              </div>
              <div className="text-blue-700 text-[11px] truncate font-semibold">&lt;title&gt;{docTitle}&lt;/title&gt;</div>
              <div className="text-slate-600 text-[11px] truncate">&lt;meta name=&quot;description&quot; content=&quot;{docDescription}&quot; /&gt;</div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Info Banner */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
        <InfoIcon size={14} className="text-blue-600 shrink-0" />
        <span>React 19 native primitives operate with direct compile-time optimization.</span>
      </div>
    </div>
  )
}
