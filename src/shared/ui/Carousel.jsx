import { useState, useEffect, useCallback } from 'react'

const Carousel = ({ images, altPrefix = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [loadedImages, setLoadedImages] = useState({})

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  useEffect(() => {
    if (isPaused || images.length <= 1) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext, isPaused, images.length])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrev])

  if (!images || images.length === 0) return null

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-video bg-gray-100 dark:bg-neutral-800 rounded-xl overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-300 dark:border-neutral-600 border-t-blue-600 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={src}
              alt={`${altPrefix} screenshot ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              onLoad={() => handleImageLoad(index)}
              className={`w-full h-full object-cover ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-900 transition-colors"
            aria-label="Previous screenshot"
          >
            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-900 transition-colors"
            aria-label="Next screenshot"
          >
            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white dark:bg-neutral-900 w-6'
                    : 'bg-white/50 dark:bg-neutral-900/50 hover:bg-white/75 dark:hover:bg-neutral-900/75'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel