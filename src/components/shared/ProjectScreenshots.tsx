import { useState, useRef, useEffect } from 'react'
// import image from '../../assets/nopicture.jpg'
import type { Preview } from '../../../types'

import { AnimatePresence, motion } from 'motion/react'
import { TbX } from 'react-icons/tb'

const ProjectScreenshots = ({ previews }: { previews: Preview[] }) => {
  const [current, setCurrent] = useState<Preview | undefined>()

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [modal, setModal] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const closeModal = () => setModal(!modal)

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
        className="mt-1.5 flex items-center gap-11 overflow-x-scroll w-full h-[20rem] scroll-smooth px-11"
      >
        {previews?.map((p: Preview, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * i, duration: 0.7 }}
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              setSelectedIndex(i)
              setCurrent(p)
              setModal(!modal)
            }}
            className="flex flex-col items-center shrink-0 whitespace-break-spaces transition-all duration-150 cursor-pointer"
          >
            <img
              // src={p?.picture || image} i have to solve the type error
              // width={230}
              alt={p?.name}
              className={`rounded-lg transition-all duration-300 w-[15rem]
                ${
                  hoveredIndex === i
                    ? 'scale-120 z-10'
                    : hoveredIndex === null
                    ? 'scale-100'
                    : 'scale-95 opacity-80'
                }`}
            />
            <p
              className={`text-md text-gray-300 mt-1.5 transition-opacity duration-300 ${
                hoveredIndex === i && 'opacity-0'
              }`}
            >
              {p?.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence mode="wait">
        {modal && (
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-base-300 p-7 rounded-xl shadow-xl max-w-5xl w-11/12 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-5 btn btn-sm btn-primary btn-soft"
              >
                <TbX size={17} />
                Close
              </button>
              <div className="flex items-center gap-7 flex-wrap">
                <img
                  // src={current?.picture ?? image} i have to solve the type error
                  alt={current?.name}
                  // width={400}
                  className="rounded-lg object-contain w-[23rem]"
                />
                <div className="card">
                  <h1 className="text-2xl">Picture - {current?.name}</h1>
                  <p className="text-xs tracking-wide">
                    {current?.description}
                  </p>
                  <h3 className="text-lg mt-1.5">Everything about this page</h3>
                  <ul className="list-disc ml-5 mt-2 text-base text-gray-200">
                    {current?.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectScreenshots
