import { motion } from 'framer-motion'
import { TbBellShare, TbClick, TbExternalLink, TbLocationShare, TbTextCaption } from 'react-icons/tb'
import image from '../../assets/project.jpg'
import { VscRepo } from 'react-icons/vsc'
import ShareModal from '../Share/Share'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const ProjectView = ({ isFill }: { isFill: string }) => {
  const { isCard, isLayout, isView } = useAuth()
  return (
    <>
      <ShareModal
        title={'ai image generated'}
        url="https://mohammadsajjadhosan.vercel.app/projects/ai-image-generated"
      />

      <motion.div
        key={isFill}
        initial={{ opacity: 0, y: 40, scale: 0.75 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={` ${
          isCard === 'both' && isLayout === 'row'
            ? 'w-1/2'
            : isCard === 'both' && isLayout === 'column'
            ? 'w-full'
            : 'w-1/2'
        } flex flex-col items-center rounded-2xl shadow shadow-neutral p-7 bg-[#0f0f12] ${
          isLayout === 'row'
            ? 'flex-col gap-11 w-full md:w-[49%]'
            : isLayout === 'column'
            ? 'md:flex-row w-full'
            : 'w-full gap-11'
        }
        ${isView === 'flex' ? '' : 'flex-col'}
        `}
      >
        {(isCard === 'only picture' ||
          isCard === 'both' ||
          isCard === 'auto') && (
          <div
            className={`${
              isCard === 'both' && isLayout === 'row'
                ? 'w-11/12 md:w-3/4'
                : 'w-3/4'
            } flex flex-col items-center gap-5 relative`}
          >
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
        )}
        {(isCard === 'only context' ||
          isCard === 'both' ||
          isCard === 'auto') && (
          <div
            className={`w-full ${
              isCard === 'both'
                ? 'md:w-full'
                : isLayout === 'column'
                ? 'md:w-full'
                : 'w-1/2'
            } mt-5 md:mt-0`}
          >
            <div className="flex justify-between items-center">
              <span className="text-primary font-semibold">#Project 01</span>
              <div className="flex items-center gap-1.5">
                <span className="badge badge-primary badge-soft text-xs rounded">
                  level 01
                </span>
                <motion.button
                  className="btn btn-sm btn-ghost btn-primary tooltip"
                  data-tip="Share"
                  onClick={() =>
                    (
                      document.getElementById(
                        'share_modal',
                      ) as HTMLDialogElement
                    )?.showModal()
                  }
                >
                  <TbLocationShare size={17} />
                </motion.button>
                <motion.button
                  className="btn btn-sm btn-ghost btn-primary tooltip"
                  data-tip="Feedback"
                  onClick={() =>
                    (
                      document.getElementById(
                        'feedback_modal',
                      ) as HTMLDialogElement
                    )?.showModal()
                  }
                >
                  <TbBellShare size={17} />
                </motion.button>
              </div>
            </div>

            <div className="my-5 flex items-center gap-2 md:gap-5">
              <motion.button className="btn btn-primary btn-ghost btn-sm lg:btn-md">
                <VscRepo size={17} />
                View Repo
              </motion.button>
              <motion.button className="btn btn-primary btn-ghost btn-sm lg:btn-md">
                <TbExternalLink size={17} />
                View Live
              </motion.button>
              <Link to='/view/ai-image-generated'>
              <motion.button className="btn btn-primary btn-sm lg:btn-md">
                <TbTextCaption size={17} />
                View Information
              </motion.button>
              </Link>
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
                eligendi asperiores. Excepturi similique a quis recusandae
                eveniet ut, dolorem optio exercitationem consectetur error aut
                dicta rerum hic! Voluptatibus nemo.
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
        )}
      </motion.div>
    </>
  )
}

export default ProjectView
