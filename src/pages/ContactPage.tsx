import { useState } from 'react'
import { CheckIcon, MessageSquareIcon, SparklesIcon } from '../components/Icons'
import { CustomSelect } from '../components/CustomSelect'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'React 19 Architecture',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  const faqs = [
    {
      q: 'How does React Router v7 handle client navigation?',
      a: 'React Router v7 uses the HTML5 History API (pushState/replaceState) under the hood to intercept link clicks and render the corresponding component view dynamically without fetching a full HTML document from the server.',
    },
    {
      q: 'Why does Tailwind CSS v4 not need tailwind.config.js?',
      a: 'Tailwind v4 is built upon the Rust-based Oxide engine which detects directives like @import "tailwindcss" directly in CSS, automatically scanning your source files and generating utilities on the fly.',
    },
    {
      q: 'Can I add nested routes or layouts in this structure?',
      a: 'Yes! Simply define child <Route> elements under the parent <Route element={<Layout />}> in src/App.tsx, and they will automatically render inside the <Outlet /> of the layout.',
    },
    {
      q: 'What is the Progressive Disclosure principle in this UI?',
      a: 'Progressive Disclosure defers complex information, advanced telemetry, and reference code behind clean, intuitive interaction triggers so beginners and mid-level developers can explore at their own pace without cognitive clutter.',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700">
            <MessageSquareIcon size={14} />
            <span>Developer Support & Architecture Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Have questions regarding React Router v7, React 19 primitives, or Tailwind CSS v4 styling? Reach out or inspect the progressive FAQs below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckIcon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Message Transmitted!</h2>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. Your inquiry regarding{' '}
                  <span className="text-blue-700 font-semibold">{formData.topic}</span> has been logged.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', topic: 'React 19 Architecture', message: '' })
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs text-white font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-xs font-semibold text-slate-700">Full Name</label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ada Lovelace"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="text-xs font-semibold text-slate-700">Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ada@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Subject Topic</label>
                  <CustomSelect
                    value={formData.topic}
                    onChange={(val) => setFormData({ ...formData, topic: val })}
                    options={[
                      { value: 'React 19 Architecture', label: 'React 19 Architecture', badge: 'React' },
                      { value: 'React Router v7 Patterns', label: 'React Router v7 Patterns', badge: 'Router' },
                      { value: 'Tailwind CSS v4 Utilities', label: 'Tailwind CSS v4 Utilities', badge: 'Tailwind' },
                      { value: 'General Frontend Inquiry', label: 'General Frontend Inquiry', badge: 'General' },
                    ]}
                    className="w-full"
                    menuWidthClass="w-full"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="text-xs font-semibold text-slate-700">Message</label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist with your development workflow?"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 active:scale-[0.99] transition-all cursor-pointer"
                >
                  Transmit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* FAQs Column with Progressive Disclosure */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2">
              <SparklesIcon size={16} className="text-blue-600" />
              <h3 className="font-bold text-slate-900 text-base">Progressive Disclosure FAQs</h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="pr-2">{faq.q}</span>
                      <span className="text-blue-600 text-xs font-mono shrink-0">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
