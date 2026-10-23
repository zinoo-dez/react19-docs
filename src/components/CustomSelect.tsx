import { useState, useRef, useEffect } from 'react'
import { CheckIcon, ChevronDownIcon } from './Icons'

export interface CustomSelectOption {
  value: string
  label: string
  badge?: string
  description?: string
}

export interface CustomSelectProps {
  value: string
  onChange: (value: string) => void
  options: CustomSelectOption[]
  label?: string
  placeholder?: string
  className?: string
  menuWidthClass?: string
}

export function CustomSelect({
  value,
  onChange,
  options,
  label,
  placeholder = 'Select option...',
  className = '',
  menuWidthClass = 'w-72 sm:w-80',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="inline-flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-xs font-semibold text-slate-800 transition-all cursor-pointer shadow-xs min-w-44"
      >
        <div className="flex items-center gap-2 truncate">
          {label && <span className="text-slate-400 font-medium shrink-0">{label}</span>}
          {selectedOption?.badge && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
              {selectedOption.badge}
            </span>
          )}
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        </div>
        <ChevronDownIcon
          size={14}
          className={`text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {/* Custom Dropdown Menu (Clean Light Theme 80% White / 20% Blue) */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute right-0 sm:right-auto sm:left-0 mt-2 ${menuWidthClass} max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-slate-200 shadow-xl ring-1 ring-black/5 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="max-h-72 overflow-y-auto space-y-1">
            {options.map((option) => {
              const isSelected = option.value === value
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 text-blue-900 border border-blue-200/80 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {option.badge && (
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {option.badge}
                        </span>
                      )}
                      <span className="text-xs truncate block">{option.label}</span>
                    </div>
                    {option.description && (
                      <p className="text-[11px] text-slate-500 font-normal truncate">
                        {option.description}
                      </p>
                    )}
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <CheckIcon size={12} />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
