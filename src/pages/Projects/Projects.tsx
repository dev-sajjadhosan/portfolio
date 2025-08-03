import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { LuListFilter } from 'react-icons/lu'
import { TbUserCode } from 'react-icons/tb'

import CustomizeDropdown from '../../components/Customization/Customization'
import ProjectView from '../../components/ProjectView/ProjectView'
import BackBtn from '../../components/shared/BackBtn'
import Filters from '../../components/shared/Filters'
import useAuth from '../../hooks/useAuth'

const ProjectsPage = () => {
  const { filter, isView, isLayout } = useAuth()
  const [isFilter, setIsFilter] = useState(true)

  return (
    <>
      <motion.div
        layout
        className="flex flex-col justify-between items-center bg-[#09090b] p-5 text-primary"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center justify-between w-full"
        >
          <BackBtn type="default" />
          <div className="flex items-center gap-3.5">
            <CustomizeDropdown />
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
            <div>
              <Filters />
            </div>
          )}
          <motion.div
            key={isFilter ? 'filtered' : 'unfiltered'}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
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
              <motion.button
                className="btn btn-sm btn-primary btn-soft flex items-center gap-1"
                onClick={() =>
                  (
                    document.getElementById(
                      'view_collaberate',
                    ) as HTMLDialogElement
                  )?.showModal()
                }
              >
                <TbUserCode size={17} />
                Collaborate
              </motion.button>
            </motion.div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className={` ${
                  isView === 1
                    ? 'grid grid-cols-1'
                    : isView === 2
                    ? 'grid grid-cols-2'
                    : 'flex'
                } 
                ${
                  isLayout === 'row'
                    ? 'flex flex-row flex-wrap gap-5'
                    : isLayout === 'column'
                    ? 'flex flex-col gap-15'
                    : 'flex flex-wrap gap-5'
                }
                `}
              >
                {[...Array(5).keys()].map((i) => (
                  <ProjectView key={i} isFill={filter} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectsPage
