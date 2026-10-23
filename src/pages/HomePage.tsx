import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  LayersIcon,
  PlayIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
  ZapIcon,
} from '../components/Icons'
import { COURSES } from '../data/coursesData'

export function HomePage() {
  const [showDeepRoadmap, setShowDeepRoadmap] = useState(false)
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null)
  const [activeCodeTab, setActiveCodeTab] = useState<'router' | 'vite' | 'tailwind'>('router')

  const stats = [
    { value: '100%', label: 'React 19 & Tailwind v4' },
    { value: 'v7.18', label: 'React Router Latest' },
    { value: '< 90ms', label: 'Vite Production Build' },
    { value: '0-Config', label: 'CSS-First Oxide Engine' },
  ]

  const pillars = [
    {
      id: 'react19',
      icon: SparklesIcon,
      title: 'React 19 Primitives',
      summary: 'useActionState, useOptimistic, and direct ref prop pass-through.',
      details:
        'Eliminates forwardRef boilerplate, handles async form submissions automatically without manual loading state variables, and ensures instant client UI updates with optimistic synchronization.',
    },
    {
      id: 'tailwind4',
      icon: ZapIcon,
      title: 'Tailwind CSS v4 Engine',
      summary: 'Rust-powered Oxide compilation with zero-config CSS imports.',
      details:
        'Built from scratch in Rust for 10x-100x compilation speed, automatic template scanning without content globbing, native @theme tokens, and modern color spaces.',
    },
    {
      id: 'router7',
      icon: LayersIcon,
      title: 'React Router v7',
      summary: 'Declarative nested layouts, type-safe params, and view transitions.',
      details:
        'Hierarchical route trees with persistent <Outlet /> shells, automatic ranking algorithms that eliminate ordering conflicts, and native document.startViewTransition integration.',
    },
    {
      id: 'fullstack',
      icon: ShieldCheckIcon,
      title: 'Type-Safe Fullstack',
      summary: 'TypeScript strict mode, resilient API clients, and sub-ms Oxlint hygiene.',
      details:
        'Strict synthetic event typing, client-vs-server secret boundaries with import.meta.env, AbortController cancellation against memory leaks, and sub-millisecond Rust linting.',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50/50 via-white to-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Clean 2-Color Architecture • React 19 + Tailwind v4</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Master Modern Web with{' '}
                <span className="text-blue-600">
                  React 19 & Tailwind v4
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                An enterprise frontend platform engineered with Vite, declarative client-side
                routing, and progressive disclosure workflows.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <BookOpenIcon size={18} />
                  Explore All 4 Courses
                  <ArrowRightIcon size={16} />
                </Link>
                <Link
                  to="/playground"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs active:scale-95 transition-all cursor-pointer"
                >
                  <PlayIcon size={18} className="text-blue-600" />
                  Interactive Lab
                </Link>
                <button
                  type="button"
                  onClick={() => setShowDeepRoadmap(!showDeepRoadmap)}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <span>{showDeepRoadmap ? 'Hide Architecture Specs' : 'View Deep Architecture Specs'}</span>
                  <span className="text-xs">{showDeepRoadmap ? '▲' : '▼'}</span>
                </button>
              </div>

              {/* Progressive Disclosure: Deep Technical Roadmap */}
              {showDeepRoadmap && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-blue-200 text-left space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-800">
                    <span className="flex items-center gap-1.5">
                      <TerminalIcon size={14} className="text-blue-600" /> Progressive Disclosure: Architectural Specs
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Zero-Config Vite 8 Stack</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="font-semibold text-slate-900 block">Vite 8 Native ESM:</span>
                      12ms dev cold-start, instant HMR via browser native module graph.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="font-semibold text-slate-900 block">Oxlint Rust Engine:</span>
                      Static analysis across 20 files with 116 rules in under 15ms.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="font-semibold text-slate-900 block">Tailwind v4 Oxide:</span>
                      CSS-first compilation, no legacy tailwind.config.js needed.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="font-semibold text-slate-900 block">React Router v7:</span>
                      Nested layout hierarchies, dynamic regex params, View Transitions.
                    </div>
                  </div>
                </div>
              )}

              {/* Checklist */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckIcon size={15} className="text-blue-600" />
                  <span>React 19.3 Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon size={15} className="text-blue-600" />
                  <span>Tailwind CSS v4 Oxide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon size={15} className="text-blue-600" />
                  <span>React Router v7.18</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
                <img
                  src="/hero-banner.jpg"
                  alt="NovaSphere Architecture"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Floating Clean Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Single Page Router</div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      react-router-dom v7.18
                    </div>
                  </div>
                  <Link
                    to="/about"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold border border-blue-200 transition-colors"
                  >
                    Tech Stack →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Disclosure: Core Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Progressive Disclosure
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Core Foundations of this Architecture
          </p>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Click on any pillar to disclose deeper architectural specifications and design decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ id, icon: Icon, title, summary, details }) => {
            const isDisclosed = showDeepRoadmap || expandedCourseId === id
            return (
              <div
                key={id}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{summary}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setExpandedCourseId(isDisclosed ? null : id)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-between w-full py-1 cursor-pointer"
                  >
                    <span>{isDisclosed ? 'Collapse Details' : 'Disclose Details'}</span>
                    <span>{isDisclosed ? '▲' : '▼'}</span>
                  </button>

                  {isDisclosed && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed animate-in fade-in duration-200">
                      {details}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured Courses with Progressive Disclosure */}
      <section className="bg-slate-50/60 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Curriculum Catalog
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Explore All 4 Mastertracks
              </h2>
            </div>
            <Link
              to="/courses"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View full catalog with filters</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => {
              const isExpanded = expandedCourseId === course.id
              return (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      {course.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{course.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{course.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{course.description}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Syllabus' : `Disclose Syllabus (${course.lessonsCount} Lessons)`}</span>
                      <span>{isExpanded ? '▲' : '▼'}</span>
                    </button>

                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      <span>Open Course</span>
                      <ArrowRightIcon size={12} />
                    </Link>
                  </div>

                  {/* Progressive Disclosure of Syllabus */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 animate-in fade-in duration-200">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                        Syllabus Breakdown:
                      </div>
                      <div className="space-y-1.5">
                        {course.syllabus.map((lesson, idx) => (
                          <div
                            key={lesson.id}
                            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs"
                          >
                            <span className="text-slate-800 font-medium truncate">
                              {idx + 1}. {lesson.title}
                            </span>
                            <span className="text-[11px] font-mono text-blue-600 shrink-0 ml-2">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Code Inspector with Clean Light Theme & Tab Disclosure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                <TerminalIcon size={14} /> Production Source Architecture
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Inspect Production Code Contracts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experience instant page transitions and pure client-side routing with clean 2-color styling and zero unnecessary bloat.
              </p>

              {/* Code Tab Switcher: Clean Wrapping Tabs (Zero Scroll) */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {(['router', 'vite', 'tailwind'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveCodeTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                      activeCodeTab === tab
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'router' ? 'src/App.tsx' : tab === 'vite' ? 'vite.config.ts' : 'src/index.css'}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white text-xs font-mono shadow-sm">
                <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="ml-2 font-semibold text-slate-800">
                      {activeCodeTab === 'router'
                        ? 'src/App.tsx'
                        : activeCodeTab === 'vite'
                        ? 'vite.config.ts'
                        : 'src/index.css'}
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-600 font-semibold">Clean Light Theme</span>
                </div>
                <pre className="p-4 overflow-x-auto overflow-y-hidden text-slate-800 leading-relaxed bg-white">
                  {activeCodeTab === 'router' &&
`import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { CoursesPage } from './pages/CoursesPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { LessonPlaygroundPage } from './pages/LessonPlaygroundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseId" element={<CourseDetailPage />} />
          <Route path="courses/:courseId/playground" element={<LessonPlaygroundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}`}
                  {activeCodeTab === 'vite' &&
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Zero-config Vite 8 + Tailwind v4 + React 19 pipeline
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    cssMinify: 'lightningcss',
  },
})`}
                  {activeCodeTab === 'tailwind' &&
`@import "tailwindcss";

/* 2-Color System Light Theme: 80% White / 20% Blue */
@layer base {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
    --accent-blue: #2563eb;
    --accent-blue-hover: #1d4ed8;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
