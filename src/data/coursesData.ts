export interface LessonDetail {
  id: string
  title: string
  duration: string
  concept: string
  task: string
  codeSnippet: string
  initialClasses: string
  badgeText: string
  previewTitle: string
  previewDescription: string
  keyTakeaways?: string[]
  exerciseHint?: string
}

export type Lesson = LessonDetail


export interface Course {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Intermediate'
  duration: string
  tag: 'React 19' | 'Tailwind CSS' | 'React Router' | 'Fullstack'
  lessonsCount: number
  color: string
  syllabus: LessonDetail[]
  overview: string
}


export const COURSES: Course[] = [
  {
    id: 'tailwind-v4-mastery',
    title: 'Tailwind CSS v4 Zero-Config Engine',
    description: 'Discover the Oxide engine, CSS-first design systems, dynamic gradients, and modern utility workflows.',
    level: 'Beginner',
    duration: '3.5 hrs',
    tag: 'Tailwind CSS',
    lessonsCount: 5,
    color: 'from-teal-400 to-emerald-600',
    overview: 'Tailwind CSS v4 is a groundbreaking release rewritten from the ground up in Rust. It does away with cumbersome JavaScript config files in favor of pure CSS imports and unprecedented compile speeds.',
    syllabus: [
      {
        id: 'oxide-engine-intro',
        title: 'Introduction to Tailwind CSS v4 & Oxide Engine',
        duration: '25 min',
        concept: 'Tailwind CSS v4 features a brand new Rust-powered Oxide engine that compiles styles up to 10x faster. It automatically discovers your template files without needing content path configurations.',
        task: 'Experiment with utility classes to style the preview card below. Try changing borders, gradient backgrounds, and typography.',
        codeSnippet: `@import "tailwindcss";

/* Zero configuration required:
   The Oxide compiler automatically scans .tsx and .html files */`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-2xl text-teal-300 hover:border-teal-400 transition-all',
        badgeText: 'Oxide Engine v4',
        previewTitle: 'Zero-Config Compilation',
        previewDescription: 'Styling compiled directly via Vite without legacy tailwind.config.js',
      },
      {
        id: 'vite-plugin-workflow',
        title: 'Configuring @tailwindcss/vite without config files',
        duration: '20 min',
        concept: 'With @tailwindcss/vite, your vite.config.ts only needs tailwindcss() in its plugins array. All theme customizations now live directly in CSS using standard CSS variables and @theme rules.',
        task: 'Apply modern linear gradients using the new bg-linear-to-* syntax and glowing box shadows.',
        codeSnippet: `// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
})`,
        initialClasses: 'p-8 rounded-3xl bg-linear-to-br from-teal-950 via-slate-900 to-slate-950 border border-teal-500/30 shadow-xl shadow-teal-950/50',
        badgeText: '@tailwindcss/vite',
        previewTitle: 'First-Class Vite Integration',
        previewDescription: 'Lightning fast HMR updates as soon as you type or change classes.',
      },
      {
        id: 'theme-tokens-css',
        title: 'Modern CSS custom variables and theme tokens',
        duration: '30 min',
        concept: 'Tailwind v4 exposes all design tokens as native CSS variables in the :root layer. You can override colors, fonts, and breakpoints directly using standard CSS syntax.',
        task: 'Test high-contrast typography, accented borders, and badge styling using tailored utility color tokens.',
        codeSnippet: `@import "tailwindcss";

@theme {
  --color-brand: #14b8a6;
  --font-display: "Plus Jakarta Sans", sans-serif;
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-950 border border-cyan-500/50 shadow-2xl text-cyan-200',
        badgeText: 'Design Tokens',
        previewTitle: 'Native CSS Tokens',
        previewDescription: 'Custom CSS properties automatically mapped to Tailwind utility values.',
      },
      {
        id: 'glassmorphism-dark-mode',
        title: 'Building glassmorphism and animated dark mode UIs',
        duration: '40 min',
        concept: 'Glassmorphism creates depth using backdrop blur, translucent backgrounds, and border highlights. In Tailwind v4, backdrop-blur-xl and bg-white/5 or bg-slate-900/40 create stunning frosted-glass cards.',
        task: 'Combine backdrop blur, transparent dark backgrounds, and subtle ring highlights to produce a frosted glass look.',
        codeSnippet: `<div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 shadow-2xl">
  Frosted Glass Card
</div>`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl hover:border-cyan-400/40 transition-all duration-500',
        badgeText: 'Glassmorphism',
        previewTitle: 'Frosted Glass Surface',
        previewDescription: 'Ultra-modern translucent UI with hardware-accelerated backdrop blur.',
      },
      {
        id: 'container-queries-motion',
        title: 'Advanced container queries and micro-animations',
        duration: '35 min',
        concept: 'Container queries allow components to adapt according to their own container width instead of the whole viewport. Combined with subtle hover transforms (hover:-translate-y-1), your UI feels fluid and tactile.',
        task: 'Add interactive hover scale effects and active state button micro-animations.',
        codeSnippet: `@container (min-width: 400px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}`,
        initialClasses: 'p-8 rounded-3xl bg-linear-to-tr from-emerald-500/10 via-slate-900 to-teal-500/10 border border-emerald-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer',
        badgeText: 'Micro-Interactions',
        previewTitle: 'Responsive Motion',
        previewDescription: 'Dynamic hover elevation, smooth transitions, and tactile feedback.',
      },
    ],
  },
  {
    id: 'react-19-fundamentals',
    title: 'React 19 Deep Dive & Modern Architecture',
    description: 'Master Actions, useActionState, useOptimistic, useFormStatus, and the use() API from beginner fundamentals to mid-level production patterns.',
    level: 'Beginner to Intermediate',
    duration: '5.5 hrs',
    tag: 'React 19',
    lessonsCount: 7,
    color: 'from-cyan-500 to-blue-600',
    overview: 'React 19 revolutionizes modern frontend development by treating asynchronous data operations, form handling, and document metadata as native primitives. Learn how actions replace complex useEffect chains, and master instant feedback with optimistic updates.',
    syllabus: [
      {
        id: 'direct-ref-props',
        title: 'Direct "ref" Props & Simplified Component Composition',
        duration: '25 min',
        concept: 'In React 19, ref is simply a standard prop on function components! You no longer need to wrap your components with React.forwardRef((props, ref) => ...). This removes complex TypeScript forwardRef generics, simplifies higher-order components, and streamlines reusable design system components.',
        task: 'Study the difference between legacy forwardRef wrappers and React 19 native ref passing. Test styling a customizable button with direct ref accessibility.',
        codeSnippet: `// In React 19: ref is just a regular prop!
interface ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function CustomButton({ ref, children, variant = 'primary' }: ButtonProps) {
  return (
    <button ref={ref} className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold">
      {children}
    </button>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-xl',
        badgeText: 'Direct ref Props',
        previewTitle: 'Clean Component Composition',
        previewDescription: 'Native ref support without React.forwardRef boilerplate or wrapper functions.',
        keyTakeaways: [
          'ref can now be passed directly as a standard component prop',
          'Eliminates React.forwardRef wrapper boilerplate across design systems',
          'TypeScript types are drastically simplified for custom input and button components',
        ],
        exerciseHint: 'You can access ref.current directly in parent components via useRef() without any special wrapping.',
      },
      {
        id: 'actions-use-action-state',
        title: 'Async Actions & Form State with useActionState()',
        duration: '35 min',
        concept: 'Forms and mutations in React previously required managing isSubmitting, error, and data with multiple useState hooks and manual try/catch/finally blocks. React 19 introduces Actions: functions that handle async transitions. The useActionState(actionFn, initialState) hook provides [state, formAction, isPending], handling pending states, errors, and resets automatically.',
        task: 'Observe how useActionState automatically coordinates pending flags and updates state when an action promise completes.',
        codeSnippet: `import { useActionState } from 'react'

async function updateProfile(previousState: any, formData: FormData) {
  const username = formData.get('username')
  await new Promise((res) => setTimeout(res, 800)) // simulate API
  return { success: true, username }
}

export function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, { success: false, username: '' })

  return (
    <form action={formAction} className="space-y-4">
      <input name="username" placeholder="Username" className="p-2 rounded bg-slate-950" />
      <button type="submit" disabled={isPending} className="px-4 py-2 bg-blue-600 rounded">
        {isPending ? 'Updating...' : 'Save Profile'}
      </button>
      {state.success && <p>Updated: {state.username}</p>}
    </form>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-blue-500/40 text-blue-300 shadow-xl',
        badgeText: 'useActionState()',
        previewTitle: 'Automated Async Form Lifecycle',
        previewDescription: 'Built-in pending flags, error handling, and state integration for modern forms.',
        keyTakeaways: [
          'useActionState manages isPending automatically during async operations',
          'Integrates natively with HTML <form action={formAction}> without manual onSubmit preventDefault',
          'Cleanly separates data submission logic from component presentation state',
        ],
        exerciseHint: 'The action function receives the previous state as its first argument and submitted form payload as the second.',
      },
      {
        id: 'use-form-status-hook',
        title: 'Child Form Status Inspection with useFormStatus()',
        duration: '30 min',
        concept: 'In reusable component libraries, submit buttons or loading indicators are often nested deep inside forms. In previous React versions, passing the submitting/pending state required prop drilling or Context wrappers. In React 19, useFormStatus() lets any child component read the status of its parent <form> ({ pending, data, method, action }) automatically.',
        task: 'Build a reusable SubmitButton that automatically detects its parent form pending status and disables itself.',
        codeSnippet: `import { useFormStatus } from 'react-dom'

// Reusable submit button that knows its parent form state!
export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold disabled:opacity-50"
    >
      {pending ? 'Transmitting Data...' : 'Submit Request'}
    </button>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 text-teal-300 shadow-xl',
        badgeText: 'useFormStatus()',
        previewTitle: 'Zero-Prop Form State Inspection',
        previewDescription: 'Nested child components read parent form pending and data states automatically.',
        keyTakeaways: [
          'useFormStatus must be called from a component rendered inside a <form>',
          'Returns { pending, data, method, action } for the closest parent form',
          'Eliminates passing isSubmitting props down through nested form control hierarchies',
        ],
        exerciseHint: 'Keep the submit button in a separate child component so useFormStatus can hook into the parent form tree.',
      },
      {
        id: 'optimistic-ui-updates',
        title: 'Optimistic UI Updates with useOptimistic()',
        duration: '35 min',
        concept: 'Modern web applications must feel instantaneous. Waiting 1-2 seconds for a server response when toggling a like, bookmarking a post, or sending a chat message feels sluggish. useOptimistic lets you render the expected outcome immediately. React displays the optimistic state while the async action executes, and automatically rolls back if an error occurs.',
        task: 'Simulate an optimistic like toggle with instant visual feedback and simulated server confirmation.',
        codeSnippet: `import { useOptimistic } from 'react'

export function LikeButton({ currentLikes, onLike }: { currentLikes: number; onLike: () => Promise<void> }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    currentLikes,
    (state, update: number) => state + update
  )

  const handleLike = async () => {
    // 1. Immediately display updated value to the user!
    setOptimisticLikes(1)
    // 2. Perform background async mutation
    await onLike()
  }

  return (
    <button onClick={handleLike} className="px-4 py-2 bg-pink-600 rounded-xl">
      ❤️ {optimisticLikes} Likes
    </button>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-pink-500/40 text-pink-300 shadow-xl',
        badgeText: 'useOptimistic()',
        previewTitle: 'Zero-Latency Optimistic State',
        previewDescription: 'Immediate visual response for user interactions with automatic error rollback.',
        keyTakeaways: [
          'Optimistic state updates instantly before server requests complete',
          'React automatically reconciles and rolls back to actual state if the action errors',
          'Crucial for high-traffic social, chat, and shopping cart interactions',
        ],
        exerciseHint: 'The reducer function in useOptimistic accepts (currentValue, optimisticUpdate) and returns the temporary state.',
      },
      {
        id: 'use-hook-promises-context',
        title: 'Direct Promise & Context Reading via the use() API',
        duration: '35 min',
        concept: 'The use() function is a revolutionary addition to React. Unlike hooks (which cannot be called inside if conditions or loops), use() can be invoked conditionally! When passed a Promise, use() integrates with <Suspense>, suspending the component until the promise resolves. When passed a Context, it reads the current context value cleanly.',
        task: 'Learn to read asynchronous promises and themes conditionally without useEffect data fetching chains.',
        codeSnippet: `import { use, Suspense } from 'react'

function UserProfile({ userPromise }: { userPromise: Promise<{ name: string; role: string }> }) {
  // Directly read the promise inside render!
  const user = use(userPromise)

  return (
    <div className="p-4 bg-slate-900 rounded-xl">
      <h2 className="font-bold text-white">{user.name}</h2>
      <p className="text-slate-400">{user.role}</p>
    </div>
  )
}

export function App() {
  return (
    <Suspense fallback={<p>Loading user profile...</p>}>
      <UserProfile userPromise={fetchUserData()} />
    </Suspense>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-purple-500/40 text-purple-300 shadow-xl',
        badgeText: 'use() API',
        previewTitle: 'Conditional Promise & Context Reading',
        previewDescription: 'Unlocks reading promises and context inside conditional branches and loops with Suspense.',
        keyTakeaways: [
          'use() can be called inside conditionals and loops, unlike traditional React hooks',
          'Integrates natively with <Suspense> boundaries when reading promises',
          'Eliminates boilerplates of useEffect + useState for read-only data dependencies',
        ],
        exerciseHint: 'Ensure promises passed to use() are created outside render or cached to avoid infinite fetch loops.',
      },
      {
        id: 'async-transitions-usetransition',
        title: 'Smooth Responsive UIs with Async useTransition()',
        duration: '30 min',
        concept: 'In React 19, startTransition natively supports async functions (startTransition(async () => { ... })). When users type in an input or click tabs while heavy background filtering or network fetching is occurring, wrapping the update in a transition keeps the main thread responsive at 60 FPS, providing an isPending indicator.',
        task: 'Wrap simulated heavy queries in an async transition to ensure responsive typing and smooth user interactions.',
        codeSnippet: `import { useState, useTransition } from 'react'

export function SearchFilter() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val) // High priority: update input instantly!

    // Low priority: defer heavy async search update
    startTransition(async () => {
      const data = await queryDatabase(val)
      setResults(data)
    })
  }

  return (
    <div>
      <input value={query} onChange={handleSearch} placeholder="Search records..." />
      {isPending && <span className="animate-spin">⏳</span>}
    </div>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 text-indigo-300 shadow-xl',
        badgeText: 'Async useTransition()',
        previewTitle: 'Concurrent Non-Blocking UI',
        previewDescription: 'Keep user inputs buttery smooth at 60 FPS while async updates compute in the background.',
        keyTakeaways: [
          'startTransition accepts async functions in React 19',
          'High-priority updates (typing, clicks) interrupt transition updates to keep the UI fluid',
          'isPending lets you show non-intrusive background spinner indicators',
        ],
        exerciseHint: 'Always keep the controlled input value update outside startTransition so typing never feels delayed.',
      },
      {
        id: 'native-document-metadata',
        title: 'Native Head Hoisting & Resource Preloading APIs',
        duration: '25 min',
        concept: 'React 19 replaces third-party libraries like react-helmet with native document metadata hoisting. You can render <title>, <meta>, and <link> anywhere in your component tree, and React automatically moves them to the HTML <head>. Furthermore, React 19 introduces resource preloading APIs like preload(), preconnect(), and prefetchDNS().',
        task: 'Render custom <title> and <meta> tags in component templates and inspect automated head hoisting.',
        codeSnippet: `export function CourseArticle({ title, description }: { title: string; description: string }) {
  return (
    <article className="p-6">
      {/* React 19 hoists these directly to document <head>! */}
      <title>{title} | NovaSphere</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://novasphere.dev" />

      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </article>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-sky-500/40 text-sky-300 shadow-xl',
        badgeText: 'Native Head Hoisting',
        previewTitle: 'Zero-Dependency Document Metadata',
        previewDescription: 'Native <title>, <meta>, and <link> tags hoisted to document <head> automatically.',
        keyTakeaways: [
          '<title>, <meta>, and <link> rendered in components are hoisted to <head> automatically',
          'Eliminates third-party react-helmet dependencies completely',
          'Preloading APIs (preload, preinit) allow critical assets to load ahead of time',
        ],
        exerciseHint: 'When multiple components render <title>, the deepest rendered title in the tree takes precedence.',
      },
    ],
  },
  {
    id: 'react-router-v7-routing',
    title: 'React Router v7 Declarative Navigation',
    description: 'Build enterprise navigation patterns with nested layouts, loaders, actions, and dynamic route matching.',
    level: 'Intermediate',
    duration: '4.0 hrs',
    tag: 'React Router',
    lessonsCount: 6,
    color: 'from-purple-500 to-indigo-600',
    overview: 'React Router v7 brings the best of Remix and React Router together under a unified modern framework. Learn client-side routing, parameter extraction, and fluid page transitions.',
    syllabus: [
      {
        id: 'browser-router-fundamentals',
        title: 'BrowserRouter, Routes & Path Pattern Matching',
        duration: '30 min',
        concept: 'React Router v7 utilizes a centralized route ranking algorithm. Instead of first-match-wins, it calculates route specificity scores so that exact matches (e.g. /courses/new) take precedence over dynamic segments (e.g. /courses/:id) regardless of their definition order. Splat routes (*) handle 404 fallbacks cleanly.',
        task: 'Study route ranking specificity and try styling a route matching status card with active route indicators and path badges.',
        codeSnippet: `<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="courses" element={<CoursesPage />} />
    <Route path="courses/new" element={<CreateCourse />} />
    <Route path="courses/:id" element={<CourseDetailPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-purple-500/40 text-purple-300 shadow-xl',
        badgeText: 'Router v7 Matching',
        previewTitle: 'SPA Route Ranking Algorithm',
        previewDescription: 'Specificity-based pattern matching ensuring deterministic route resolutions.',
        keyTakeaways: [
          'Routes are ranked deterministically by specificity, not declaration order',
          'BrowserRouter manages history pushState and popstate under the hood',
          'Splat catch-all (*) routes handle 404 scenarios gracefully',
        ],
        exerciseHint: 'Notice how exact static paths take priority over dynamic parameter segments without requiring exact props.',
      },
      {
        id: 'nested-layouts-outlet',
        title: 'Nested Layouts, <Outlet />, & Shared Context',
        duration: '35 min',
        concept: 'Nested routing is one of React Router v7\'s most powerful concepts. A parent route renders shared components (Navbars, persistent Sidebars, status indicators) and renders an <Outlet /> where child routes swap dynamically. You can pass shared state down via <Outlet context={{ user, theme }} /> and retrieve it in child components with useOutletContext().',
        task: 'Configure layout container styling with frosted glass boundaries and verify how children render inside the layout shell.',
        codeSnippet: `// Parent Layout Shell
export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} />
      <main className="flex-1 p-6">
        {/* Child routes dynamically mount here */}
        <Outlet context={{ sidebarOpen, setSidebarOpen }} />
      </main>
    </div>
  )
}

// Child Route Component
export function SettingsPage() {
  const { sidebarOpen } = useOutletContext<{ sidebarOpen: boolean }>()
  return <div>Sidebar is currently {sidebarOpen ? 'Open' : 'Collapsed'}</div>
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 text-indigo-300 shadow-xl',
        badgeText: '<Outlet /> & Context',
        previewTitle: 'Persistent Layout Shells',
        previewDescription: 'Keep navigation bars and shell components intact across route transitions.',
        keyTakeaways: [
          'Parent layouts never unmount or re-render unnecessarily when child routes change',
          'useOutletContext() provides type-safe parent-to-child data sharing without prop drilling',
          'Index routes define the default component when the parent URL is visited exactly',
        ],
        exerciseHint: 'Try nesting child routes under a layout route without giving the parent route a path to create pathless layout boundaries.',
      },
      {
        id: 'use-params-dynamic-segments',
        title: 'Dynamic URL Segments & Typed useParams() Hook',
        duration: '40 min',
        concept: 'Dynamic segments (prefixed with :) allow routes to match variable path segments such as /courses/:courseId or /blog/:year/:slug. React Router v7 parses these into key-value pairs accessible via useParams(). In TypeScript, passing a generic interface ensures strict type safety and autocompletion.',
        task: 'Test extracting route parameters, handling missing parameters, and displaying customized fallback views when a resource is not found.',
        codeSnippet: `import { useParams } from 'react-router-dom'

interface CourseRouteParams {
  courseId: string
  lessonIndex?: string
}

export function CourseViewer() {
  // Strongly-typed route parameters
  const { courseId, lessonIndex } = useParams<CourseRouteParams>()
  
  if (!courseId) {
    return <div>Invalid course identifier</div>
  }

  return (
    <div>
      <h1>Viewing Course: {courseId}</h1>
      <p>Active Lesson: {lessonIndex ?? '0'}</p>
    </div>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-xl',
        badgeText: 'useParams() Hook',
        previewTitle: 'Dynamic Segments & Typing',
        previewDescription: 'Type-safe path parameter extraction mapped directly to React state and queries.',
        keyTakeaways: [
          'Parameters are automatically URL-decoded by React Router',
          'TypeScript generics provide compile-time safety for parameter keys',
          'Dynamic segments can be combined with optional segments using the ? modifier',
        ],
        exerciseHint: 'Always account for undefined param values in TypeScript to prevent runtime property access errors.',
      },
      {
        id: 'use-search-params-hook',
        title: 'URL Search Parameters & Shareable State Synchronization',
        duration: '35 min',
        concept: 'The useSearchParams() hook manages query strings (e.g. ?search=react&sort=desc&page=2) using the standard Web URLSearchParams API. Unlike local React state, search parameters make application state bookmarkable and shareable across users without external state management libraries.',
        task: 'Construct a search and filter state updater using functional updates setSearchParams((prev) => ...) to preserve existing query parameters.',
        codeSnippet: `import { useSearchParams } from 'react-router-dom'

export function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'all'

  const updateCategory = (newCat: string) => {
    // Preserve other existing params while updating category
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.set('category', newCat)
      next.set('page', '1') // reset pagination
      return next
    })
  }

  return (/* JSX */)
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-fuchsia-500/40 text-fuchsia-300 shadow-xl',
        badgeText: 'useSearchParams()',
        previewTitle: 'URL Query State Engine',
        previewDescription: 'Keep tabs, filters, and searches synchronized with the URL across bookmarks.',
        keyTakeaways: [
          'URL query strings keep UI state bookmarkable and shareable',
          'Use functional setSearchParams((prev) => next) to avoid clobbering concurrent query keys',
          'searchParams.getAll(key) supports multi-value query arrays like ?tag=react&tag=tailwind',
        ],
        exerciseHint: 'When user search terms change, remember to reset page offset parameter back to 1.',
      },
      {
        id: 'programmatic-navigation',
        title: 'Programmatic Navigation, useNavigate & NavLink Active Styling',
        duration: '30 min',
        concept: 'React Router v7 provides useNavigate() for imperatively transitioning routes inside async callbacks, event handlers, and form submissions. It supports history delta navigation (navigate(-1)), state passing (navigate("/checkout", { state: { fromCart: true } })), and replace: true for redirect scenarios.',
        task: 'Build an interactive navigation bar component with NavLink active classes, pending transitions, and history back/forward buttons.',
        codeSnippet: `import { NavLink, useNavigate, useLocation } from 'react-router-dom'

export function NavToolbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="flex items-center gap-3">
      {/* History Back */}
      <button onClick={() => navigate(-1)} className="px-3 py-1 bg-slate-800 rounded">
        ← Back
      </button>

      {/* NavLink with function className */}
      <NavLink
        to="/courses"
        className={({ isActive, isPending }) =>
          \`px-4 py-2 rounded-lg font-medium \${
            isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
          }\`
        }
      >
        Courses
      </NavLink>
    </div>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-violet-500/40 text-violet-300 shadow-xl',
        badgeText: 'useNavigate() & NavLink',
        previewTitle: 'Programmatic Transitions',
        previewDescription: 'Fluid imperative navigation, active link state detection, and history stacks.',
        keyTakeaways: [
          'navigate(-1) and navigate(1) navigate back and forward along the browser history stack',
          'NavLink className accepts a callback ({ isActive, isPending }) => string for styling',
          'Passing { replace: true } replaces the current history entry instead of pushing a new one',
        ],
        exerciseHint: 'Use NavLink end prop when targeting root paths (to="/") to prevent child route false-positives.',
      },
      {
        id: 'view-transitions-data-v7',
        title: 'View Transitions API & Unified v7 Client Architecture',
        duration: '40 min',
        concept: 'React Router v7 natively embraces the browser View Transitions API. By simply adding the viewTransition prop to <Link>, <NavLink>, or passing { viewTransition: true } to navigate(), React Router wraps DOM updates in document.startViewTransition(). This delivers seamless morphing transitions between pages without external animation libraries.',
        task: 'Enable smooth view transitions and style animated page entry states with Tailwind CSS v4.',
        codeSnippet: `import { Link, useNavigate } from 'react-router-dom'

export function HeroCta() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Declarative Link with View Transition */}
      <Link to="/courses" viewTransition className="px-6 py-3 bg-cyan-500 rounded-xl">
        Explore Courses (Morph Transition)
      </Link>

      {/* Programmatic Navigation with View Transition */}
      <button
        onClick={() => navigate('/playground', { viewTransition: true })}
        className="px-4 py-2 bg-slate-800 rounded-lg"
      >
        Open Lab with Transition
      </button>
    </div>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-pink-500/40 text-pink-300 shadow-xl',
        badgeText: 'View Transitions v7',
        previewTitle: 'Native Browser View Transitions',
        previewDescription: 'Cinematic cross-fades and element morphing without heavy JavaScript animation dependencies.',
        keyTakeaways: [
          'Native browser View Transitions API works out-of-the-box in modern Chrome, Edge, and Safari',
          'Adding viewTransition prop enables smooth cross-fade and morph animations',
          'Combines perfectly with CSS view-transition-name tokens for shared element transitions',
        ],
        exerciseHint: 'Test the viewTransition prop in supported browsers to see smooth layout cross-fades without needing Framer Motion.',
      },
    ],
  },
  {
    id: 'fullstack-modern-frontend',
    title: 'Fullstack UI Engineering with Vite & TypeScript',
    description: 'Master the complete frontend engineering lifecycle: modern project scaffolding, TypeScript strict typing, secure environment variables, robust API clients, Oxlint linting, and SPA edge deployment.',
    level: 'Beginner to Intermediate',
    duration: '5.5 hrs',
    tag: 'Fullstack',
    lessonsCount: 7,
    color: 'from-rose-500 to-orange-600',
    overview: 'Fullstack frontend engineering bridges the gap between client interfaces and server ecosystems. Learn how to architect robust, type-safe web applications with Vite, TypeScript 6, resilient API fetching, and automated production deployment.',
    syllabus: [
      {
        id: 'vite-project-architecture',
        title: 'Project Architecture & Zero-Config Scaffolding with Vite',
        duration: '25 min',
        concept: 'Vite transforms the frontend development experience by serving native ES modules during development and using Rollup for optimized production bundles. Unlike legacy Webpack setups, index.html is the direct source entry point. Understanding clean folder separation (components, pages, data, services, public) sets the foundation for scalable enterprise web applications.',
        task: 'Explore Vite project layout, examine index.html root script loading, and test dev vs build execution scripts.',
        codeSnippet: `// Standard Modern Project Structure:
├── index.html            # Main HTML entry point (contains <div id="root">)
├── vite.config.ts        # Bundler & plugin pipeline configuration
├── tsconfig.json         # TypeScript compiler rules
├── src/
│   ├── main.tsx          # Application bootstrap & createRoot
│   ├── App.tsx           # Primary routing & shell layout
│   ├── components/       # Reusable UI design tokens & controls
│   ├── pages/            # Page-level route views
│   └── services/         # API clients and data fetching
└── public/               # Raw static unbundled assets (favicons, images)`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-rose-500/40 text-rose-300 shadow-xl',
        badgeText: 'Vite Architecture',
        previewTitle: 'Modern Project Structure',
        previewDescription: 'Native ES modules workflow with sub-second cold starts and instant HMR.',
        keyTakeaways: [
          'index.html serves as the primary entry point rather than a compiled template',
          'Vite serves source code over native ESM in dev without full-bundle rebuilding',
          'Clean directory separation prevents circular dependencies and spaghetti code',
        ],
        exerciseHint: 'Keep static unbundled files like robot.txt in public/ and referenced assets in src/assets/.',
      },
      {
        id: 'typescript-strict-web',
        title: 'TypeScript Strict Mode & Web Event Typing',
        duration: '35 min',
        concept: 'TypeScript eliminates an entire class of runtime errors before code ships to production. Strict mode (strict: true) enforces non-nullable variables and strict function types. For web apps, typing React synthetic events (React.ChangeEvent, React.FormEvent, React.MouseEvent) and component props ensures reliable refactoring as applications grow.',
        task: 'Configure strict compiler options and practice typing component props with TypeScript interfaces and union types.',
        codeSnippet: `import React, { useState } from 'react'

// Generic Interface for User Profile DTO
export interface UserProfile {
  id: string
  name: string
  email: string
  role: 'admin' | 'member' | 'guest'
}

interface UserCardProps {
  user: UserProfile
  onSelect: (id: string) => void
}

export function UserCard({ user, onSelect }: UserCardProps) {
  // Strongly-typed event handler
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSelect(user.id)
  }

  return (
    <button onClick={handleClick} className="p-4 bg-slate-900 rounded-xl text-left">
      <h3 className="font-bold text-white">{user.name}</h3>
      <span className="text-xs text-rose-400 font-mono uppercase">{user.role}</span>
    </button>
  )
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-orange-500/40 text-orange-300 shadow-xl',
        badgeText: 'TypeScript Strict Mode',
        previewTitle: 'End-to-End Type Safety',
        previewDescription: 'Compile-time verification of component props, event handlers, and data contracts.',
        keyTakeaways: [
          'strict: true in tsconfig.json catches null and undefined edge cases early',
          'Use specific React event types (React.ChangeEvent) rather than generic any',
          'Discriminated unions ensure exhaustive pattern matching across application states',
        ],
        exerciseHint: 'Use type aliases for unions/primitives and interfaces for extensible object models.',
      },
      {
        id: 'secure-env-variables',
        title: 'Environment Variables & Client Security Boundaries',
        duration: '30 min',
        concept: 'The golden rule of frontend security: Never put secret database keys or private credentials into frontend code! In Vite, only variables prefixed with VITE_ (e.g. VITE_API_URL) are exposed to client code via import.meta.env. Non-prefixed variables are strictly ignored to prevent catastrophic secret leaks.',
        task: 'Learn how to configure .env.development and .env.production files and read typed environment variables via import.meta.env.',
        codeSnippet: `// .env.development
VITE_API_BASE_URL="http://localhost:4000/api"
VITE_APP_STAGE="development"
# DATABASE_PASSWORD="secret" <- NEVER prefix secrets with VITE_!

// src/services/config.ts
export const APP_CONFIG = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.novasphere.dev',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}

// vite-env.d.ts (Type definitions for environment variables)
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_STAGE: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-amber-500/40 text-amber-300 shadow-xl',
        badgeText: 'Environment Security',
        previewTitle: 'Client Security Boundary',
        previewDescription: 'Safe separation between public client variables and private backend secrets.',
        keyTakeaways: [
          'Only variables prefixed with VITE_ are bundled into client-side JavaScript',
          'Client code is always public: never expose private API keys or database tokens',
          'Define types in vite-env.d.ts for full autocomplete on import.meta.env',
        ],
        exerciseHint: 'Use .env.local for personal overrides and keep it added to .gitignore.',
      },
      {
        id: 'resilient-api-fetching',
        title: 'Resilient API Client with AbortController & Error Handling',
        duration: '40 min',
        concept: 'Production web apps need more than bare fetch() calls. A resilient API layer handles network errors, timeout cancellations via AbortController (preventing memory leaks when users navigate away), generic response typing, and unified HTTP status error parsing (401, 403, 404, 500).',
        task: 'Construct a reusable, type-safe API client wrapper with request cancellation and standardized error handling.',
        codeSnippet: `export interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: number
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
  signal?: AbortSignal
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(\`https://api.novasphere.dev\${endpoint}\`, {
      ...options,
      signal, // Enables cancellation via AbortController!
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: \${res.statusText}\`)
    }

    const data: T = await res.json()
    return { data, error: null, status: res.status }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return { data: null, error: 'Request was cancelled', status: 0 }
    }
    return { data: null, error: err.message || 'Unknown network error', status: 500 }
  }
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-red-500/40 text-red-300 shadow-xl',
        badgeText: 'Resilient API Client',
        previewTitle: 'Enterprise Fetch Wrapper',
        previewDescription: 'Type-safe request execution, AbortController cancellation, and centralized error handling.',
        keyTakeaways: [
          'AbortController allows cancelling in-flight requests when components unmount',
          'Always verify res.ok because fetch() does not reject on 404 or 500 responses',
          'Wrap API responses in generic types (ApiResponse<T>) for consistent component consumption',
        ],
        exerciseHint: 'Pass controller.signal from useEffect return cleanups to prevent state updates on unmounted views.',
      },
      {
        id: 'oxlint-code-hygiene',
        title: 'Lightning-Fast Linting & Code Hygiene with Oxlint',
        duration: '25 min',
        concept: 'Legacy JavaScript linters often take several seconds or minutes, leading developers to skip linting during local development. Oxlint is a next-generation Rust-based linter that runs in 5-15 milliseconds across entire repositories! It detects common React hook dependency mistakes, unused imports, and syntax errors in real time.',
        task: 'Run Oxlint in terminal and configure .oxlintrc.json rules to maintain clean, production-grade code quality.',
        codeSnippet: `// .oxlintrc.json
{
  "rules": {
    "no-unused-vars": "error",
    "no-debugger": "error",
    "react/jsx-key": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

// Run in terminal:
// npx oxlint
// Output: Finished in 9ms on 16 files with 116 rules (0 errors)`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 shadow-xl',
        badgeText: 'Oxlint Rust Engine',
        previewTitle: 'Sub-Millisecond Code Analysis',
        previewDescription: 'Ultra-fast static analysis catching React bugs and unused code instantly.',
        keyTakeaways: [
          'Runs 50x-100x faster than legacy ESLint setups',
          'Catches React hook dependency pitfalls and unused variables in milliseconds',
          'Ideal for lightning-fast pre-commit git hooks and CI/CD pipelines',
        ],
        exerciseHint: 'Run npm run lint locally before submitting pull requests to ensure clean code.',
      },
      {
        id: 'production-code-splitting',
        title: 'Production Chunk Splitting & Bundle Profiling',
        duration: '35 min',
        concept: 'Large single-bundle applications increase Largest Contentful Paint (LCP) and cause slow initial page loads on mobile networks. Vite and Rollup support dynamic code splitting using React.lazy() and manual chunk configuration in vite.config.ts, separating third-party vendor code from application logic.',
        task: 'Inspect production build output sizes and configure manual chunk splitting for vendor libraries.',
        codeSnippet: `// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate cacheable chunks!
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})

// Build Output:
// dist/assets/react-vendor.js   140 kB (gzip: 42 kB)
// dist/assets/router-vendor.js  45 kB (gzip: 15 kB)
// dist/assets/index.js          80 kB (gzip: 24 kB)`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-xl',
        badgeText: 'Bundle Optimization',
        previewTitle: 'Granular Chunk Splitting',
        previewDescription: 'Isolating vendor libraries into separate long-term cacheable chunks.',
        keyTakeaways: [
          'Code splitting ensures users only download the code needed for the current route',
          'Vendor chunks change rarely and can be cached indefinitely in browser HTTP caches',
          'Significantly improves Google Lighthouse scores and Largest Contentful Paint (LCP)',
        ],
        exerciseHint: 'Check dist/ output after running npm run build to monitor chunk sizes.',
      },
      {
        id: 'edge-spa-deployment',
        title: 'SPA Edge Deployment & Routing Rewrite Rules',
        duration: '30 min',
        concept: 'The most common beginner pitfall when deploying Single Page Applications (SPAs): direct links or page refreshes on subpaths (like /courses/react-19) result in HTTP 404 errors! Because SPAs only have one real index.html file, web servers and Edge CDNs must be configured with rewrite rules to redirect all route traffic to /index.html with status 200.',
        task: 'Configure rewrite rules for Cloudflare, Netlify, or Vercel and verify immutable caching headers for hashed assets.',
        codeSnippet: `// Cloudflare Pages / Netlify: _redirects file in public/
/*    /index.html   200

// Vercel: vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

// Nginx Server Block:
location / {
  try_files $uri $uri/ /index.html;
}`,
        initialClasses: 'p-8 rounded-3xl bg-slate-900/90 border border-purple-500/40 text-purple-300 shadow-xl',
        badgeText: 'Edge Deployment',
        previewTitle: 'Global SPA Distribution',
        previewDescription: 'Configuring SPA fallback rewrite rules and edge caching headers.',
        keyTakeaways: [
          'SPAs require an edge rewrite rule routing non-file URLs to index.html',
          'Without rewrite rules, browser page refreshes on nested routes result in 404s',
          'Hashed asset files in dist/assets/* can be served with immutable 1-year cache headers',
        ],
        exerciseHint: 'Always test refreshing deep URLs on staging before launching to production.',
      },
    ],
  },
]

