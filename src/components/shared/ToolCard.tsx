import { motion } from 'motion/react'
import { useState } from 'react'
import { TbBomb, TbCategory2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import FloatToolDropdown from './FloatToolDropdown'

const ToolCard = ({
  data,
  skillTitles,
  type,
}: {
  type: string
  skillTitles: string[]
  data: {
    title: string
    tools: {
      img?: string
      size?: number
      title?: string
      url?: string
      id?: number
    }[]
  }[]
}) => {
  const [filter, setFilter] = useState('frontend')
  const [index, setIndex] = useState(0)

  const handleFilter = (key: string, idx: number) => {
    setFilter(key)
    setIndex(idx)
  }

  return (
    <>
      <FloatToolDropdown handleFilter={handleFilter} filter={filter} />

      <div className="h-[89vh] lg:min-h-[75.3vh] overflow-hidden flex flex-col md:flex-row justify-between items-center">
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col gap-17 items-center py-20 md:h-[70vh] overflow-x-auto w-full"
        >
          {data[index]?.tools?.map(
            (
              l: { img?: string; size?: number; title?: string; url?: string; id?: number },
              i: number,
            ) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.7 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  type: 'keyframes',
                }}
                className={`card p-9 ${
                  type === 'cook' ? 'bg-accent' : 'bg-secondary'
                } rounded-lg w-[90%] md:w-3/4 h-[19rem] shadow sticky top-0 left-0 shrink-0 m-1`}
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-light text-gray-400 museo">
                    {i + 1 <= 9 ? '0' + (i + 1) : i + 1}
                  </h1>
                  <Link
                    to={l.url ?? '#'}
                    className="btn btn-sm btn-primary btn-soft ml-auto"
                  >
                    <TbBomb size={17} />
                    View Doc
                  </Link>
                </div>
                <div className="mx-auto text-center">
                  <img
                    src={l?.img ?? ''}
                    alt={l?.title ?? ''}
                    width={l?.size ?? 150}
                    className="mx-auto"
                  />
                  <h3 className="text-5xl font-normal capitalize">
                    {l?.title ?? ''}
                  </h3>
                  <span className="badge badge-info badge-soft capitalize mt-2">
                    {filter}
                  </span>
                </div>
              </motion.div>
            ),
          )}
          <div className="min-h-[19rem]"></div>
        </motion.div>
        <div className="w-xs hidden lg:flex flex-col">
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-1"
          >
            <TbCategory2 size={19} />
            Tech Categories
          </motion.h3>
          <ul className="flex flex-col gap-1.5 w-full mt-3">
            {skillTitles.map((l, i) => (
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5 * i,
                  duration: 0.7,
                  ease: 'backInOut',
                }}
                onClick={() => handleFilter(l, i)}
                className={`btn btn-sm justify-between btn-primary capitalize ${
                  filter === l ? 'btn-soft' : 'btn-ghost'
                }`}
              >
                <a>{l}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ToolCard
