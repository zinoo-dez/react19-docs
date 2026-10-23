import { Link, useLocation } from 'react-router-dom'
import { ArrowRightIcon, HomeIcon } from '../components/Icons'

export function NotFoundPage() {
  const location = useLocation()

  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 border border-blue-200 text-blue-600 font-mono text-3xl font-black mx-auto">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Route Not Found</h1>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          The requested URL path <code className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-mono">{location.pathname}</code> does not correspond to any registered route.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
        >
          <HomeIcon size={15} />
          Return to Home
        </Link>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-xs transition-colors cursor-pointer"
        >
          Browse Courses
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  )
}
