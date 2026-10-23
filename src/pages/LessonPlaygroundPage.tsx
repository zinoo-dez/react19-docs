import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  HomeIcon,
  InfoIcon,
  PlayIcon,
  SparklesIcon,
} from '../components/Icons'
import { COURSES, type Course, type LessonDetail } from '../data/coursesData'
import { TailwindPlayground } from '../components/playground/TailwindPlayground'
import { React19Playground } from '../components/playground/React19Playground'
import { RouterPlayground } from '../components/playground/RouterPlayground'
import { FullstackPlayground } from '../components/playground/FullstackPlayground'
import { CustomSelect } from '../components/CustomSelect'

interface LessonSandboxProps {
  courseId: string
  lesson: LessonDetail
  lessonNumber: number
  totalLessons: number
  isCompleted: boolean
  onToggleComplete: () => void
  onPrevious: () => void
  onNext: () => void
  hasPrevious: boolean
  hasNext: boolean
}

function LessonSandbox({
  courseId,
  lesson,
  lessonNumber,
  totalLessons,
  isCompleted,
  onToggleComplete,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: LessonSandboxProps) {
  const [copiedCode, setCopiedCode] = useState<boolean>(false)
  const [showTakeaways, setShowTakeaways] = useState<boolean>(true)
  const [showSyntax, setShowSyntax] = useState<boolean>(true)

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Pane: Instructions & Progressive Disclosure */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {lesson.badgeText}
            </span>
            <button
              type="button"
              onClick={onToggleComplete}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isCompleted
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckIcon size={13} />
              {isCompleted ? 'Completed' : 'Mark Completed'}
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono text-blue-600 font-semibold">
              Lesson {lessonNumber} of {totalLessons}
            </span>
            <h1 className="text-xl font-bold text-slate-900 leading-snug">
              {lesson.title}
            </h1>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="font-semibold text-slate-800">Core Concept:</div>
            <p className="leading-relaxed text-slate-600">{lesson.concept}</p>
          </div>

          {/* Progressive Disclosure: Key Takeaways */}
          {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={() => setShowTakeaways(!showTakeaways)}
                className="w-full flex items-center justify-between text-xs font-semibold text-blue-700 cursor-pointer py-1"
              >
                <span className="flex items-center gap-1.5">
                  <CheckIcon size={14} className="text-blue-600" /> Architectural Takeaways:
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {showTakeaways ? '▲' : '▼'}
                </span>
              </button>

              {showTakeaways && (
                <ul className="space-y-1.5 text-xs text-slate-600 animate-in fade-in duration-150">
                  {lesson.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                      <span className="text-blue-600 font-bold shrink-0">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Implementation Tip */}
          {lesson.exerciseHint && (
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <InfoIcon size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-blue-700">Pro Tip: </span>
                {lesson.exerciseHint}
              </div>
            </div>
          )}

          {/* Exercise Objective */}
          <div className="space-y-1.5 text-xs pt-3 border-t border-slate-100">
            <div className="font-semibold text-slate-800 flex items-center gap-1">
              <SparklesIcon size={14} className="text-blue-600" /> Exercise Objective:
            </div>
            <p className="leading-relaxed text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              {lesson.task}
            </p>
          </div>

          {/* Progressive Disclosure: Reference Syntax */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setShowSyntax(!showSyntax)}
                className="font-semibold text-slate-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reference Code Syntax</span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {showSyntax ? '▲' : '▼'}
                </span>
              </button>
              {showSyntax && (
                <button
                  type="button"
                  onClick={() => handleCopyCode(lesson.codeSnippet)}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-[11px] cursor-pointer font-medium"
                >
                  {copiedCode ? (
                    <>
                      <CheckIcon size={12} className="text-blue-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {showSyntax && (
              <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-800 overflow-x-auto overflow-y-hidden leading-relaxed shadow-inner">
                {lesson.codeSnippet}
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Right Pane: Interactive Live Playground Canvas */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <PlayIcon size={16} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-base">Live Interactive Lab</h2>
                <p className="text-xs text-slate-500">
                  {courseId === 'react-router-v7-routing' && 'React Router v7 Live Route Simulator & Sandbox'}
                  {courseId === 'react-19-fundamentals' && 'React 19 Native Feature Lab & Action Sandbox'}
                  {courseId === 'fullstack-modern-frontend' && 'Fullstack UI Engineering & Architecture Testbed'}
                  {courseId === 'tailwind-v4-mastery' && 'Tailwind CSS v4 Oxide Engine & Utility Canvas'}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Active Lab
            </span>
          </div>

          {/* Dedicated Course & Lesson-Specific Interactive Playgrounds */}
          {courseId === 'tailwind-v4-mastery' && <TailwindPlayground lesson={lesson} />}
          {courseId === 'react-19-fundamentals' && <React19Playground lesson={lesson} />}
          {courseId === 'react-router-v7-routing' && <RouterPlayground lesson={lesson} />}
          {courseId === 'fullstack-modern-frontend' && <FullstackPlayground lesson={lesson} />}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              disabled={!hasPrevious}
              onClick={onPrevious}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                !hasPrevious
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs'
              }`}
            >
              ← Previous Lesson
            </button>

            <button
              type="button"
              onClick={() => {
                if (!isCompleted) onToggleComplete()
                if (hasNext) onNext()
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/25 cursor-pointer active:scale-95 transition-all"
            >
              {hasNext ? (
                <>
                  Complete & Next Lesson
                  <ArrowRightIcon size={14} />
                </>
              ) : (
                <>
                  Mark Course Finished
                  <CheckIcon size={14} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LessonPlaygroundPage() {
  const params = useParams<{ courseId?: string; lessonIndex?: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  // Resolve course
  const courseId = params.courseId || searchParams.get('course') || 'react-router-v7-routing'
  const course: Course =
    COURSES.find((c) => c.id === courseId) || COURSES[0]

  // Resolve active lesson index
  const rawIndex =
    params.lessonIndex !== undefined
      ? parseInt(params.lessonIndex, 10)
      : parseInt(searchParams.get('lesson') || '0', 10)
  const activeIndex = !isNaN(rawIndex) && rawIndex >= 0 && rawIndex < course.syllabus.length
    ? rawIndex
    : 0

  const currentLesson: LessonDetail =
    course.syllabus[activeIndex] || course.syllabus[0]

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({})

  const handleLessonSelect = (index: number) => {
    if (params.courseId) {
      navigate(`/courses/${course.id}/lessons/${index}`)
    } else {
      const next = new URLSearchParams(searchParams)
      next.set('course', course.id)
      next.set('lesson', index.toString())
      setSearchParams(next)
    }
  }

  const handleCourseSelect = (newCourseId: string) => {
    navigate(`/courses/${newCourseId}/playground`)
  }

  const toggleComplete = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }))
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Top Breadcrumb & Course Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
              <HomeIcon size={14} /> Home
            </Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-blue-600">
              Courses
            </Link>
            <span>/</span>
            <Link to={`/courses/${course.id}`} className="hover:text-blue-600">
              {course.title}
            </Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Lesson Playground</span>
          </nav>

          {/* Course Custom Selector (Clean Light Theme 80% White / 20% Blue) */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium shrink-0">Track:</span>
            <CustomSelect
              value={course.id}
              onChange={handleCourseSelect}
              options={COURSES.map((c) => ({
                value: c.id,
                label: c.title,
                badge: c.tag,
                description: `${c.syllabus.length} Lessons • ${c.duration}`,
              }))}
              menuWidthClass="w-80 sm:w-96"
            />
          </div>
        </div>

        {/* Syllabus Selector Bar: Clean Wrapping Link Tabs (Zero Scroll) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-wrap items-center gap-2">
          {course.syllabus.map((lesson, idx) => {
            const isCurrent = idx === activeIndex
            const isDone = completedLessons[lesson.id]
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => handleLessonSelect(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-mono font-bold ${
                    isDone
                      ? 'bg-blue-100 text-blue-700'
                      : isCurrent
                      ? 'bg-white text-blue-600'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isDone ? '✓' : idx + 1}
                </span>
                <span>{lesson.title}</span>
              </button>
            )
          })}
        </div>

        {/* Rendered Sandbox keyed by currentLesson.id to auto-reset cleanly */}
        <LessonSandbox
          key={currentLesson.id}
          courseId={course.id}
          lesson={currentLesson}
          lessonNumber={activeIndex + 1}
          totalLessons={course.syllabus.length}
          isCompleted={!!completedLessons[currentLesson.id]}
          onToggleComplete={() => toggleComplete(currentLesson.id)}
          onPrevious={() => handleLessonSelect(activeIndex - 1)}
          onNext={() => handleLessonSelect(activeIndex + 1)}
          hasPrevious={activeIndex > 0}
          hasNext={activeIndex < course.syllabus.length - 1}
        />
      </div>
    </div>
  )
}
