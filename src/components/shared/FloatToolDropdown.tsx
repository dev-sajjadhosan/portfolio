import { TbCategory2 } from 'react-icons/tb'
import { motion } from 'motion/react'

const FloatToolDropdown = ({
  filter,
  handleFilter,
}: {
  filter: string
  handleFilter: (category: string, index: number) => void
}) => {
  return (
    <>
      <div className="block lg:hidden fixed bottom-5 left-7 z-40">
        <details className="dropdown dropdown-top">
          <motion.summary
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="btn btn-primary btn-soft m-1"
          >
            <TbCategory2 size={17} />
            View Categories
          </motion.summary>
          <motion.ul
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-1 dropdown-content bg-base-300 rounded-box z-10 w-xs p-7 shadow capitalize"
          >
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex items-center gap-1 mb-1.5"
            >
              <TbCategory2 size={19} />
              Tech Categories
            </motion.h3>
            {['frontend', 'backend', 'application', 'hosting', 'others'].map(
              (l, i) => (
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    delay: 0.7 * i,
                    duration: 0.7,
                  }}
                  onClick={() => handleFilter(l, i)}
                  className={`btn btn-sm justify-start btn-primary capitalize ${
                    filter === l ? 'btn-soft' : 'btn-ghost'
                  }`}
                >
                  <a>{l}</a>
                </motion.li>
              ),
            )}
          </motion.ul>
        </details>
      </div>
    </>
  )
}

export default FloatToolDropdown
