import { useState } from 'react'
import type { Lesson } from '../../data/coursesData'
import { SparklesIcon, ZapIcon, RotateCcwIcon, LayersIcon } from '../Icons'

interface TailwindPlaygroundProps {
  lesson: Lesson
}

export function TailwindPlayground({ lesson }: TailwindPlaygroundProps) {
  const [customClasses, setCustomClasses] = useState<string>(
    'p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3'
  )
  const [appliedPreset, setAppliedPreset] = useState<string | null>(null)
  const [previewClickCount, setPreviewClickCount] = useState<number>(0)
  const [containerWidth, setContainerWidth] = useState<number>(100)

  const applyClassPreset = (presetName: string, extraClasses: string) => {
    setCustomClasses((prev) => `${prev} ${extraClasses}`.trim())
    setAppliedPreset(presetName)
    setTimeout(() => setAppliedPreset(null), 1500)
  }

  const handleReset = () => {
    setCustomClasses('p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3')
    setAppliedPreset('Reset Classes')
    setTimeout(() => setAppliedPreset(null), 1500)
  }

  return (
    <div className="space-y-6">
      {/* Quick Utility Class Presets */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <SparklesIcon size={14} className="text-blue-600" /> Quick Tailwind v4 Presets:
          </span>
          {appliedPreset && (
            <span className="text-[11px] text-blue-600 font-mono animate-pulse">
              Added: {appliedPreset}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() =>
              applyClassPreset(
                'Subtle Shadow',
                'shadow-md shadow-blue-500/10 border-blue-200'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 cursor-pointer transition-colors shadow-xs"
          >
            + Subtle Shadow
          </button>
          <button
            type="button"
            onClick={() =>
              applyClassPreset(
                'Blue Accent Border',
                'border-2 border-blue-500'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 cursor-pointer transition-colors shadow-xs"
          >
            + Blue Accent Border
          </button>
          <button
            type="button"
            onClick={() =>
              applyClassPreset(
                'Motion Lift',
                'hover:-translate-y-1 active:scale-95 transition-all duration-200'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 cursor-pointer transition-colors shadow-xs"
          >
            + Motion Lift
          </button>
          <button
            type="button"
            onClick={() =>
              applyClassPreset(
                'Blue Tinted BG',
                'bg-blue-50/50'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-semibold cursor-pointer transition-colors"
          >
            + Blue Tinted BG
          </button>
          <button
            type="button"
            onClick={() =>
              applyClassPreset(
                'High Contrast',
                'border-slate-400 bg-white shadow-lg'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 cursor-pointer transition-colors shadow-xs"
          >
            + High Contrast
          </button>
        </div>
      </div>

      {/* Class Input Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="custom-classes-input" className="font-mono text-slate-600">
            className=&quot;...&quot;
          </label>
          <button
            type="button"
            onClick={handleReset}
            className="text-slate-500 hover:text-blue-600 text-[11px] flex items-center gap-1 cursor-pointer font-medium"
          >
            <RotateCcwIcon size={11} />
            <span>Reset Classes</span>
          </button>
        </div>
        <textarea
          id="custom-classes-input"
          rows={2}
          value={customClasses}
          onChange={(e) => setCustomClasses(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white resize-none shadow-xs"
          placeholder="Type Tailwind classes here (e.g. p-6 bg-white border border-slate-200 rounded-2xl)..."
        />
      </div>

      {/* Optional Container Width Slider for container-queries-motion lesson */}
      {lesson.id === 'container-queries-motion' && (
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600 font-mono flex items-center gap-1.5">
              <LayersIcon size={13} className="text-blue-600" /> Container Width Simulator:
            </span>
            <span className="text-blue-700 font-mono font-bold">{containerWidth}%</span>
          </div>
          <input
            type="range"
            min={40}
            max={100}
            value={containerWidth}
            onChange={(e) => setContainerWidth(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Compact (@sm: 40%)</span>
            <span>Balanced (@md: 70%)</span>
            <span>Full (@lg: 100%)</span>
          </div>
        </div>
      )}

      {/* Rendered Live Canvas Preview */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center min-h-64 relative overflow-hidden">
        <div style={{ width: `${containerWidth}%` }} className="transition-all duration-300">
          <div className={`${customClasses} transition-all duration-200`}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <ZapIcon size={14} />
                {lesson.badgeText}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {lesson.previewTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                {lesson.previewDescription}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewClickCount((c) => c + 1)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 cursor-pointer active:scale-95"
                >
                  Interactive State ({previewClickCount})
                </button>
                <span className="text-[11px] text-slate-500 font-mono">Tailwind v4 Canvas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
