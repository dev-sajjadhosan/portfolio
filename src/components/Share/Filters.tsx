import { motion } from 'motion/react'
import useAuth from '../../hooks/useAuth'
import type { Skill } from '../../../types'
const skills = [
  { id: 1, name: 'all', type: 'all' },
  { id: 2, name: 'html5', type: 'frontend' },
  { id: 3, name: 'css3', type: 'frontend' },
  { id: 4, name: 'javascript', type: 'frontend' },
  { id: 5, name: 'typescript', type: 'frontend' },
  { id: 6, name: 'react', type: 'frontend' },
  { id: 7, name: 'webSocket', type: 'backend' },
  { id: 8, name: 'electron', type: 'desktop' },
  { id: 9, name: 'ai', type: 'ai' },
  { id: 10, name: 'private', type: 'private' },
  { id: 11, name: 'server', type: 'server' },
  { id: 12, name: 'figma', type: 'ui' },
  { id: 13, name: 'component', type: 'ui' },
  { id: 14, name: 'database', type: 'db' },
  { id: 15, name: 'open source', type: 'os' },
]

const Filters = () => {
  const { setFilter, filter } = useAuth()

  const handleFilter = (fil: Skill) => {
    const name = fil.name
    setFilter?.(name)
  }

  return (
    <>
      <div className="p-5">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-center"
        >
          Filter Your Flavor
        </motion.h3>
        <motion.div className="flex flex-wrap items-center justify-center gap-1 md:gap-3 mt-2.5 md:w-3/5 mx-auto">
          {skills.map((tl, i) => (
            <motion.div
              onClick={() => handleFilter(tl)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.7 }}
              key={i}
              className={`btn btn-sm tracking-wider capitalize font-normal ${
                filter !== tl.name && 'btn-ghost'
              }`}
            >
              {tl.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Filters
