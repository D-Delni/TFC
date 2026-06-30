import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85',
    alt: 'Pristine beach in Tenerife with turquoise water',
  },
  {
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85',
    alt: 'Luxury villa with pool overlooking the ocean',
  },
  {
    url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=85',
    alt: 'Modern Spanish architecture with blue sky',
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
    alt: 'Beautiful property exterior in Tenerife',
  },
]

const INTERVAL = 8000
const TRANSITION = 1400

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  const advance = useCallback((dir: 1 | -1 = 1) => {
    if (transitioning) return
    setTransitioning(true)
    setPrev(current)
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length)
    setTimeout(() => {
      setPrev(null)
      setTransitioning(false)
    }, TRANSITION)
  }, [current, transitioning])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => advance(1), INTERVAL)
    return () => clearInterval(timer)
  }, [advance])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Previous slide (fading out) */}
      {prev !== null && (
        <div
          key={`out-${prev}`}
          className="absolute inset-0 bg-cover bg-center carousel-slide-out"
          style={{ backgroundImage: `url(${SLIDES[prev].url})` }}
        />
      )}
      {/* Current slide (fading in) */}
      <div
        key={`in-${current}`}
        className="absolute inset-0 bg-cover bg-center carousel-slide-in"
        style={{ backgroundImage: `url(${SLIDES[current].url})` }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i !== current) {
                setTransitioning(true)
                setPrev(current)
                setCurrent(i)
                setTimeout(() => { setPrev(null); setTransitioning(false) }, TRANSITION)
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-brand-gold w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={() => advance(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => advance(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
