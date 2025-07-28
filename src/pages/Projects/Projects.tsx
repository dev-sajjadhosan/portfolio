import { LuListFilter } from 'react-icons/lu'
import { TbHash, TbUserCode } from 'react-icons/tb'
import BackBtn from '../../components/shared/BackBtn'
import ProjectView from '../../components/ProjectView/ProjectView'
import Filters from '../../components/Share/Filters'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  const { filter } = useAuth()
  const [isFilter, setIsFilter] = useState(true)

  return (
    <>
      <div className="flex flex-col justify-between items-center bg-[#09090b] p-7 text-primary">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center justify-between w-full"
        >
          <BackBtn type="default" />
          <div className="flex items-center gap-3.5">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="btn btn-sm btn-primary btn-soft"
            >
              <TbHash size={17} />
              Customization
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className={`btn btn-sm btn-primary  ${
                isFilter ? '' : 'btn-soft'
              }`}
              onClick={() => setIsFilter(!isFilter)}
            >
              <LuListFilter size={17} />
              View Filter
            </motion.button>
          </div>
        </motion.div>
        <div className="mt-7 flex flex-col gap-3 w-full">
          {isFilter && (
            <div className="w-full">
              <Filters />
            </div>
          )}
          <motion.div
            key={isFilter ? 'filtered' : 'unfiltered'}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex items-center justify-between mb-5"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="text-2xl"
              >
                My Projects
              </motion.h3>
              <Link to="/collaboration">
                <motion.button className="btn btn-sm btn-primary btn-soft flex items-center gap-1">
                  <TbUserCode size={17} />
                  Collaborate
                </motion.button>
              </Link>
            </motion.div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-19"
              >
                {[...Array(5).keys()].map((i) => (
                  <ProjectView key={i} isFill={filter} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
