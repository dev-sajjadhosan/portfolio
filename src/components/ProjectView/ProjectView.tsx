import { motion } from 'framer-motion'
import { TbBellShare, TbClick, TbLocationShare } from 'react-icons/tb'
import image from '../../assets/project.jpg'
import { VscRepo } from 'react-icons/vsc'

const ProjectView = ({ isFill }: { isFill: string }) => {
  return (
    <motion.div
      key={isFill}
      initial={{ opacity: 0, y: 40, scale: 0.75 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col md:flex-row items-center w-full rounded-2xl shadow shadow-neutral p-7 bg-[#0f0f12]"
    >
      <div className="md:w-1/2 flex flex-col items-center gap-5 relative">
        <motion.img
          src={image}
          alt="project"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="avatar w-4/5 rounded-xl"
        />
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="btn btn-sm px-5 mb-1 absolute right-13 md:right-16 bottom-1"
        >
          <TbClick size={17} />
          Play
        </motion.button>
      </div>

      <div className="w-full md:w-1/2 mt-5 md:mt-0">
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">#Project 01</span>
          <div className="flex items-center gap-1.5">
            <span className="badge badge-primary badge-soft text-xs rounded">
              level 01
            </span>
            <motion.button
              className="btn btn-sm btn-ghost btn-primary tooltip"
              data-tip="Share"
            >
              <TbLocationShare size={17} />
            </motion.button>
            <motion.button
              className="btn btn-sm btn-ghost btn-primary tooltip"
              data-tip="Feedback"
            >
              <TbBellShare size={17} />
            </motion.button>
          </div>
        </div>

        <div className="my-5 flex items-center gap-2 md:gap-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="btn btn-primary btn-ghost"
          >
            <VscRepo size={17} />
            View Repo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="btn btn-primary btn-ghost"
          >
            <VscRepo size={17} />
            View Live
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="btn btn-primary"
          >
            <VscRepo size={17} />
            View Information
          </motion.button>
        </div>

        <div className="flex flex-col gap-1">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg"
          >
            Short Information About ME
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm font-normal tracking-wide"
          >
            voluptatibus nihil architecto laudantium necessitatibus. Quidem,
            eligendi asperiores. Excepturi similique a quis recusandae eveniet
            ut, dolorem optio exercitationem consectetur error aut dicta rerum
            hic! Voluptatibus nemo.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl mt-3 text-center text-info"
          >
            AI Image Generator
          </motion.h1>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectView
