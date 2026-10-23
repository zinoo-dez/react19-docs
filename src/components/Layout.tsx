import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
