import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface CustomSelectProps {
  id: string
  value: string
  placeholder: string
  options: SelectOption[]
  onChange: (value: string) => void
}

const CustomSelect = ({ id, value, placeholder, options, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedLabel = useMemo(
    () => options.find((option) => option.value === value)?.label ?? '',
    [options, value],
  )

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-left flex items-center justify-between bg-white"
      >
        <span className={selectedLabel ? 'text-gray-900' : 'text-gray-400'}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="mt-2 border border-gray-200 rounded-lg bg-white shadow-lg overflow-hidden max-h-64 overflow-y-auto">
          {options.map((option) => {
            const isSelected = option.value === value

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-2.5 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
              >
                <span className={isSelected ? 'text-blue-700 font-medium' : 'text-gray-700'}>
                  {option.label}
                </span>
                {isSelected && <Check className="w-4 h-4 text-blue-600" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
