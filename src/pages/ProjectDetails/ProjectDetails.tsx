import {
  TbBellShare,
  TbExternalLink,
  TbLocationShare,
  TbPlayerPlayFilled,
  TbUsersGroup,
} from 'react-icons/tb'
import BackBtn from '../../components/shared/BackBtn'
import { AnimatePresence, motion } from 'motion/react'
import { VscRepo } from 'react-icons/vsc'
import ProjectScreenshots from '../../components/shared/ProjectScreenshots'
import Footer from '../../components/shared/Footer'
import HelmetTitle from '../../components/shared/HelmeTitle'
import { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import { Link, useParams } from 'react-router-dom'
import type { ProjectDocument } from '../../../types'
import image from '../../assets/cooking.png'

const ProjectDetails = () => {
  const { axiosUrl } = useAxios()
  const { id } = useParams()

  const [figmaBox, setFigmaBox] = useState(false)
  const [videoBox, setVideoBox] = useState(false)
  const [data, setData] = useState<ProjectDocument | null>(null)

  useEffect(() => {
    axiosUrl
      .get(`/project/${id}`, {
        headers: {
          'x-private-key': import.meta.env.VITE_PRIVATE,
        },
      })
      .then((re) => {
        setData(re.data)
      })
  }, [id, axiosUrl])

  return (
    <>
      <HelmetTitle title="Project Details - Portfolio" />
      <motion.div layout className="p-7 text-primary">
        <div className="flex items-center justify-between mb-7">
          <BackBtn type="default" />
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex items-center gap-2.5"
            >
              <label className="">Code</label>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                disabled={!data?.isFigma}
                onClick={() => setFigmaBox(!figmaBox)}
              />
              <label className="">Figma</label>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="btn btn-primary btn-soft px-3"
            >
              <TbUsersGroup size={17} />
              Let's Contribute
            </motion.button>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="mt-5 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {videoBox ? (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="w-11/12 h-[21rem] p-7 bg-base-300 rounded-2xl flex items-center justify-center"
                >
                  <h3 className="text-3xl">View Video</h3>
                </motion.div>
              ) : (
                <motion.div
                  key="picture"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="w-11/12 h-[21rem] p-7 bg-base-300 rounded-2xl flex items-center justify-center"
                >
                  <img src={image} alt="" width={100} />
                  {/* <h3 className="text-3xl">Picture</h3> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-between items-center mt-7">
            <div className="flex items-center gap-1.5">
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="font-normal text-lg"
              >
                #Project 01
              </motion.h3>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="btn btn-sm btn-primary btn-soft tooltip ml-3"
                data-tip="Play Video"
                disabled={!data?.isVideo}
                onClick={() => setVideoBox(!videoBox)}
              >
                <TbPlayerPlayFilled size={17} />
              </motion.button>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="badge badge-primary badge-soft text-xs rounded"
              >
                {data?.level}
              </motion.span>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.7 }}
                className="btn btn-sm btn-ghost btn-primary tooltip"
                data-tip="Share"
                onClick={() =>
                  (
                    document.getElementById('share_modal') as HTMLDialogElement
                  )?.showModal()
                }
              >
                <TbLocationShare size={17} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.7 }}
                className="btn btn-sm btn-ghost btn-primary"
                onClick={() =>
                  (
                    document.getElementById(
                      'feedback_modal',
                    ) as HTMLDialogElement
                  )?.showModal()
                }
              >
                <TbBellShare size={17} />
                Feedback
              </motion.button>
            </div>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.7 }}
              className="text-3xl"
            >
              {data?.name}
            </motion.h1>
            <div className="my-5 flex items-center gap-2 md:gap-5">
              <Link to={data?.repo?.client ?? '#'}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.7 }}
                  className="btn btn-primary btn-ghost btn-sm lg:btn-md"
                >
                  <VscRepo size={17} />
                  View Client
                </motion.button>
              </Link>
              <Link to={data?.repo?.server ?? '#'}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.7 }}
                  className="btn btn-primary btn-ghost btn-sm lg:btn-md"
                >
                  <VscRepo size={17} />
                  View Server
                </motion.button>
              </Link>
              <Link to={data?.repo?.parent ?? '#'}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.7 }}
                  className="btn btn-primary btn-ghost btn-sm lg:btn-md"
                >
                  <VscRepo size={17} />
                  View Rep
                </motion.button>
              </Link>
              <Link to={data?.live ?? '#'}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7, duration: 0.7 }}
                  className="btn btn-primary btn-sm lg:btn-md"
                >
                  <TbExternalLink size={17} />
                  View Live
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="mt-11 grid md:grid-cols-2 gap-5">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.7 }}
                className="text-lg font-normal"
              >
                Technologies
              </motion.h3>
              <div className="mt-1.5 flex flex-wrap gap-5">
                {data?.technologies.map((t, i) => (
                  // <Link to={t} key={i}>
                  <motion.li
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * i, duration: 0.7 }}
                    className="badge badge-primary badge-soft text-xs rounded px-5 tracking-wide"
                  >
                    {/* {t?.icon} */}
                    {t}
                  </motion.li>
                  // </Link>
                ))}
              </div>
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9, duration: 0.7 }}
                className="text-lg text-info font-normal"
              >
                new Technologies
              </motion.h3>
              <div className="mt-1.5 flex flex-wrap gap-5">
                {data?.newTechnologies.map((t, i) => (
                  // <Link to={t?.url} key={i}>
                    <motion.li
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 * i, duration: 0.7 }}
                      className="badge badge-info badge-soft text-xs rounded px-5 tracking-wide"
                    >
                      {/* {t?.icon} */}
                      {t}
                    </motion.li>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-11 card">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl font-light"
            >
              Creation Journey of
              <span className="font-semibold italic">{data?.name}</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-1 font-md tracking-wide text-gray-400"
            >
              {data?.creatingJourney}
              {/* It all started when I was switching between like 5 different anime
              and movie sites — all of them were either super slow, had ads
              everywhere, or just looked outdated. That’s when I thought:
              <q className="text-lg text-info italic">
                <br />
                <br />
                "Why not build my own streaming platform — fast, clean, and
                aesthetic — tailored for anime + movies lovers like me?"
                <br />
                <br />
              </q>
              I named it CineOtaku, blending “Cinema” + “Otaku” — two of my
              favorite things in life. 🎥🍜 */}
            </motion.p>
            <div className="mt-11 grid grid-cols-2 gap-5">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-lg font-normal"
                >
                  Cool Features :
                </motion.h3>
                <ul className="list gap-2 mt-1.5 pl-5">
                  {data?.features?.map((f, i) => (
                    <motion.li
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      key={i}
                    >
                      <div className="collapse border border-base-200">
                        <input type="radio" name={`my-accordion-1`} />
                        <div className="collapse-title font-semibold">
                          {f?.name}
                        </div>
                        <div className="collapse-content text-sm">
                          {f?.description}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal">Coming Features:</h3>
                <ul className="list gap-2 mt-1.5 pl-5">
                  {data?.comingFeatures?.map((cf, i) => (
                    <motion.li
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      key={i}
                    >
                      <div className="collapse border border-base-200">
                        <input type="radio" name={`my-accordion-2`} />
                        <div className="collapse-title font-semibold">
                          {cf?.name}
                        </div>
                        <div className="collapse-content text-sm">
                          {cf?.description}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl capitalize"
            >
              About this project
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-1 font-normal tracking-wide text-gray-400"
            >
              {data?.description}
            </motion.p>
          </div>
          <div className="my-11 w-full">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl"
            >
              Project Overview
            </motion.h3>
            <div>
              <ProjectScreenshots previews={data?.previews ?? []} />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default ProjectDetails
