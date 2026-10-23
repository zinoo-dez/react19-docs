import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowRightIcon,
  CheckIcon,
  HomeIcon,
  LayersIcon,
  PlayIcon,
  SparklesIcon,
} from '../components/Icons'

import { COURSES } from '../data/coursesData'

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>()
  const navigate = useNavigate()
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null)
  const [expandAll, setExpandAll] = useState<boolean>(false)

  const course = COURSES.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6 bg-white min-h-[60vh] flex flex-col justify-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
          <LayersIcon size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Course Not Found</h1>
        <p className="text-slate-500 text-sm">
          No course found with URL identifier <code className="text-blue-600 bg-slate-100 px-2 py-1 rounded">/courses/{courseId}</code>.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer transition-colors shadow-xs"
          >
            ← Back to All Courses
          </button>
        </div>
      </div>
    )
  }

  const routerMasteryPoints = [
    'Specificity-based route ranking & splat catch-all routes',
    'Declarative nested layouts with <Outlet /> & useOutletContext()',
    'Type-safe dynamic path params extraction with useParams()',
    'Shareable bookmarkable URL query state with useSearchParams()',
    'History stacks & imperative transitions with useNavigate()',
    'Browser-native View Transitions API with <Link viewTransition>',
  ]

  const react19MasteryPoints = [
    'Direct "ref" as standard props without React.forwardRef wrappers',
    'Asynchronous form actions & automatic pending flags via useActionState()',
    'Prop-free child form status inspection with useFormStatus()',
    'Instant optimistic user feedback & automated rollback with useOptimistic()',
    'Direct conditional promise and context resolution with the use() API',
    'Non-blocking async UI transitions at 60 FPS with async useTransition()',
    'Native <title>, <meta>, and <link> head hoisting without third-party packages',
  ]

  const fullstackMasteryPoints = [
    'Vite project directory scaffolding & native ESM module serving',
    'TypeScript 6 strict type checking & React event synthetic typing',
    'Secure environment variables & client-vs-server secret boundaries',
    'Resilient API clients with AbortController cancellation & status handling',
    'Sub-millisecond static code analysis with the Rust-based Oxlint engine',
    'Granular vendor chunk splitting & Largest Contentful Paint (LCP) profiling',
    'SPA edge CDN rewrites (redirecting all paths to index.html with 200)',
  ]

  const defaultMasteryPoints = [
    'Modern React hooks and Action patterns',
    'Tailwind CSS v4 utility architecture',
    'Multi-page SPA navigation with Router v7',
    'Production Vite bundling with TypeScript',
  ]

  const masteryPoints =
    course.id === 'react-router-v7-routing'
      ? routerMasteryPoints
      : course.id === 'react-19-fundamentals'
      ? react19MasteryPoints
      : course.id === 'fullstack-modern-frontend'
      ? fullstackMasteryPoints
      : defaultMasteryPoints

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
            <HomeIcon size={14} /> Home
          </Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <span>/</span>
          <span className="text-blue-600 font-semibold truncate">{course.title}</span>
        </nav>

        {/* Course Banner Header */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                {course.tag}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                {course.level} Level
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                ⏱ {course.duration} Total
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
                {course.syllabus.length} In-Depth Lessons
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {course.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={`/courses/${course.id}/playground`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <PlayIcon size={15} />
                Open Lessons Playground ({course.syllabus.length} Lessons)
              </Link>
              <button
                type="button"
                onClick={() => navigate('/courses')}
                className="px-4 py-3 rounded-xl text-xs font-medium bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 transition-colors cursor-pointer shadow-xs"
              >
                ← Back to Courses
              </button>
            </div>
          </div>
        </div>

        {/* Overview & Syllabus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Overview details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">Curriculum Overview</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {course.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div className="font-semibold text-slate-700">React Router v7 Route Parameters:</div>
                <p className="text-slate-500 font-mono">
                  useParams().courseId === &quot;<span className="text-blue-600 font-bold">{courseId}</span>&quot;
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">What You Will Master</h3>
              <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-600">
                {masteryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                    <CheckIcon size={15} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Detailed Syllabus List with Progressive Disclosure */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Course Lessons</h3>
                  <p className="text-[11px] text-slate-500">Progressive disclosure: Click to expand syllabus</p>
                </div>
                <button
                  type="button"
                  onClick={() => setExpandAll(!expandAll)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  {expandAll ? 'Collapse All' : 'Expand All'}
                </button>
              </div>

              <ol className="space-y-3">
                {course.syllabus.map((lesson, idx) => {
                  const isOpen = expandAll || expandedLessonId === lesson.id
                  return (
                    <li
                      key={lesson.id}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all"
                    >
                      {/* Accordion Trigger */}
                      <button
                        type="button"
                        onClick={() => setExpandedLessonId(isOpen ? null : lesson.id)}
                        className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="text-slate-900 font-semibold text-xs">
                              {lesson.title}
                            </div>
                            <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                              <span className="text-blue-700 font-medium">{lesson.badgeText}</span>
                              <span>•</span>
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          {isOpen ? '▲' : '▼'}
                        </span>
                      </button>

                      {/* Progressive Disclosure Content */}
                      {isOpen && (
                        <div className="p-3.5 pt-0 border-t border-slate-200 bg-white space-y-3 text-xs animate-in fade-in duration-150">
                          <div className="space-y-1 pt-2">
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                              Core Concept:
                            </span>
                            <p className="text-slate-600 leading-relaxed text-[11px]">
                              {lesson.concept}
                            </p>
                          </div>

                          {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
                            <div className="space-y-1">
                              <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider block">
                                Key Takeaways:
                              </span>
                              <ul className="space-y-1 text-[11px] text-slate-600">
                                {lesson.keyTakeaways.map((point, kIdx) => (
                                  <li key={kIdx} className="flex items-start gap-1.5">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="pt-2 flex items-center justify-between">
                            <Link
                              to={`/courses/${course.id}/lessons/${idx}`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold shadow-xs"
                            >
                              <span>Launch Lesson {idx + 1} Lab</span>
                              <ArrowRightIcon size={12} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              <div className="pt-2">
                <Link
                  to={`/courses/${course.id}/lessons/0`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <SparklesIcon size={15} />
                  Start Lesson 1 in Playground
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
