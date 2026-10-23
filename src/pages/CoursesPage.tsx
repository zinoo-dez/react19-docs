import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, BookOpenIcon, SearchIcon, SparklesIcon } from '../components/Icons'
import { COURSES, type Course } from '../data/coursesData'

export function CoursesPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedCourseIds, setExpandedCourseIds] = useState<Record<string, boolean>>({})

  const tags = ['All', 'React 19', 'Tailwind CSS', 'React Router', 'Fullstack']

  const toggleCourseDisclosure = (id: string) => {
    setExpandedCourseIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredCourses = COURSES.filter((c) => {
    const matchesTag = selectedTag === 'All' || c.tag === selectedTag
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Page Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
            <BookOpenIcon size={14} />
            <span>2-Color Light Architecture • Progressive Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Curriculum & Engineering Tracks
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Explore dedicated guides for React 19, Tailwind CSS v4, and React Router v7.
            Use progressive disclosure toggles to inspect deep syllabi and architectural outcomes directly.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          {/* Tags: Clean Wrapping Tabs (Zero Scroll) */}
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative min-w-60">
            <SearchIcon
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search curriculum topics..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course: Course) => {
              const isExpanded = !!expandedCourseIds[course.id]
              return (
                <article
                  key={course.id}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {course.tag}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span>{course.level}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      {course.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Progressive Disclosure Toggle */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleCourseDisclosure(course.id)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <span>
                          {isExpanded
                            ? 'Collapse Syllabus'
                            : `Disclose Full Syllabus (${course.lessonsCount} In-Depth Lessons)`}
                        </span>
                        <span>{isExpanded ? '▲' : '▼'}</span>
                      </button>

                      {/* Disclosed Syllabus */}
                      {isExpanded && (
                        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 animate-in fade-in duration-200">
                          <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                            Curriculum Breakdown:
                          </div>
                          <div className="space-y-1.5">
                            {course.syllabus.map((lesson, idx) => (
                              <div
                                key={lesson.id}
                                className="p-2 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs"
                              >
                                <div className="flex items-center gap-2 truncate pr-2">
                                  <span className="text-blue-600 font-mono text-[11px] font-bold">
                                    0{idx + 1}
                                  </span>
                                  <span className="text-slate-800 font-medium truncate">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-[11px] font-mono text-slate-500 shrink-0">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      /courses/{course.id}
                    </span>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Explore Course</span>
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl">
            <SparklesIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No courses match your query</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try clearing the search query or selecting a different tag filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTag('All')
                setSearchQuery('')
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs text-white font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
