import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  id: string
  question: string
  answer: string | string[]
}

interface FaqAccordionProps {
  items: FaqItem[]
  /** Globally-unique id of the item currently open across the whole page */
  openId: string | null
  onToggle: (id: string) => void
}

export default function FaqAccordion({ items, openId, onToggle }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map(({ id, question, answer }) => {
        const isOpen = openId === id
        return (
          <div
            key={id}
            className={`bg-white rounded-xl border transition-colors duration-200 ${
              isOpen ? 'border-brand-gold/50 shadow-sm' : 'border-gray-100'
            }`}
          >
            <button
              onClick={() => onToggle(id)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${id}`}
            >
              <span className="font-semibold text-brand-blue text-sm sm:text-base">
                {question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'bg-brand-gold rotate-180' : 'bg-gray-100'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-brand-blue'
                  }`}
                  strokeWidth={2.25}
                />
              </span>
            </button>

            {/* Answer panel — animated height via grid-template-rows trick */}
            <div
              id={`faq-panel-${id}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm text-gray-600 leading-relaxed space-y-3">
                  {Array.isArray(answer) ? (
                    <ul className="space-y-2">
                      {answer.map((line, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{answer}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
