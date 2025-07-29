import { useState, useRef, useEffect } from 'react'
import image from '../../assets/project.jpg'

const ProjectScreenshots = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const closeModal = () => setSelectedIndex(null)

  // 🧠 Enable vertical mouse wheel to scroll horizontally
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: 'smooth',
      })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <>
      {/* SCROLLABLE CARDS */}
      <div
        ref={scrollRef}
        className="mt-1.5 flex items-center gap-9 overflow-x-scroll w-full h-[20rem] scroll-smooth"
      >
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}
            className="flex flex-col items-center shrink-0 whitespace-break-spaces transition-all duration-150 cursor-pointer"
          >
            <img
              src={image}
              width={330}
              alt=""
              className={`rounded-lg transition-all duration-300
                ${
                  hoveredIndex === index
                    ? 'scale-120 z-10'
                    : hoveredIndex === null
                    ? 'scale-100'
                    : 'scale-95 opacity-80'
                }`}
            />
            <p
              className={`text-md text-gray-300 mt-1.5 transition-opacity duration-300 ${
                hoveredIndex === index && 'opacity-0'
              }`}
            >
              Home Page
            </p>
          </div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-base-300 p-5 rounded-xl shadow-xl max-w-5xl w-full transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-5 btn btn-sm btn-error btn-soft"
            >
              close
            </button>
            <div className="flex items-center gap-7 flex-wrap">
              <img
                src={image}
                alt="Preview"
                width={600}
                className="rounded-lg object-contain"
              />
              <div className="card">
                <h1 className="text-2xl">Picture - Home Page</h1>
                <h3 className="text-lg mt-1.5">Everything about this page</h3>
                <ul className="list-disc ml-5 mt-2 text-base text-gray-200">
                  <li>Create new product</li>
                  <li>Create new product</li>
                  <li>Create new product</li>
                  <li>Create new product</li>
                  <li>Create new product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectScreenshots
