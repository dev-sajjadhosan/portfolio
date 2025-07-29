import {
  TbBellShare,
  TbExternalLink,
  TbLocationShare,
  TbUsersGroup,
  TbUserStar,
} from 'react-icons/tb'
import BackBtn from '../../components/shared/BackBtn'
import { motion } from 'motion/react'
import { VscRepo } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import ProjectScreenshots from '../../components/shared/ProjectScreenshots'

const ProjectDetails = () => {
  return (
    <>
      <div className="p-7 text-primary">
        <div className="flex items-center justify-between mb-7">
          <BackBtn type="default" />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <label className="">Code</label>
              <input type="checkbox" className="toggle toggle-primary" />
              <label className="">Figma</label>
            </div>
            <button className="btn btn-primary btn-soft px-3">
              <TbUsersGroup size={17} />
              Contribute
            </button>
            <button className="btn btn-primary px-3">
              <TbUserStar size={17} />
              Hire me
            </button>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="w-11/12 h-[21rem] p-7 bg-base-300 rounded-2xl">
              <h3 className="text-3xl">Shore Video / Picture</h3>
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <span className="font-normal text-lg">#Project 01</span>
            <div className="flex items-center gap-1.5">
              <span className="badge badge-primary badge-soft text-xs rounded">
                level 01
              </span>
              <motion.button
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
            <h1 className="text-3xl">ai image generator</h1>
            <div className="my-5 flex items-center gap-2 md:gap-5">
              <motion.button className="btn btn-primary btn-ghost btn-sm lg:btn-md">
                <VscRepo size={17} />
                View Rep
              </motion.button>
              <motion.button className="btn btn-primary btn-sm lg:btn-md">
                <TbExternalLink size={17} />
                View Live
              </motion.button>
            </div>
          </div>
          <div className="mt-11 grid md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-normal">Technologies</h3>
              <div className="mt-1.5 flex flex-wrap gap-5">
                {['React', 'Node', 'Express', 'MongoDB'].map((t, i) => (
                  <span
                    key={i}
                    className="badge badge-primary badge-soft text-xs rounded px-5 tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg text-info font-normal">
                new Technologies
              </h3>
              <div className="mt-1.5 flex flex-wrap gap-5">
                {['React', 'Node', 'Express', 'MongoDB'].map((t, i) => (
                  <span
                    key={i}
                    className="badge badge-info badge-soft text-xs rounded px-5 tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-11 card">
            <h3 className="text-xl font-light">
              {' '}
              Creation Journey of{' '}
              <span className="font-semibold italic">CineOtaku</span>
            </h3>
            <p className="mt-1 font-md tracking-wide text-gray-400">
              It all started when I was switching between like 5 different anime
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
              favorite things in life. 🎥🍜
            </p>
            <div className="mt-11 grid grid-cols-2 gap-5">
              <div>
                <h3 className="text-lg font-normal">Cool Features :</h3>
                <ul className="list gap-2 mt-1.5 pl-5">
                  {[...Array(6)].map((i) => (
                    <li
                      key={i}
                      className="py-1.5 text-xs rounded px-5 tracking-wide"
                    >
                      Custom user authentication and authorization
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-normal">Coming Features:</h3>
                <ul className="list gap-2 mt-1.5 pl-5">
                  {[...Array(6)].map((i) => (
                    <li
                      key={i}
                      className="py-1.5 text-xs rounded px-5 tracking-wide"
                    >
                      Custom user authentication and authorization
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <h3 className="text-xl capitalize">About this project</h3>
            <p className="mt-1 font-normal tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore nam illum ducimus eaque tenetur nisi? Rerum unde quod
              dolorum, recusandae placeat molestiae nobis aspernatur voluptate,
              iste vel accusantium? Aliquid nulla excepturi recusandae
              distinctio omnis, eligendi dolorem ipsa, cupiditate dolore animi
              fuga autem eveniet voluptatibus nihil architecto laudantium
              necessitatibus. Quidem, eligendi asperiores. Excepturi similique a
              quis recusandae eveniet ut, dolorem optio exercitationem
              consectetur error aut dicta rerum hic! Voluptatibus nemo, totam
              omnis similique assumenda eos sed blanditiis dolorem ratione
              aliquid minus iusto optio itaque sit odit natus illum sunt
              adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis dolore nam illum ducimus eaque tenetur nisi? Rerum unde
              quod dolorum, recusandae placeat molestiae nobis aspernatur
              voluptate, iste vel accusantium? Aliquid nulla excepturi
              recusandae distinctio omnis, eligendi dolorem ipsa, cupiditate
              dolore animi fuga autem eveniet voluptatibus nihil architecto
              laudantium necessitatibus. Quidem, eligendi asperiores. Excepturi
              similique a quis recusandae eveniet ut, dolorem optio
              exercitationem consectetur error aut dicta rerum hic! Voluptatibus
              nemo, totam omnis similique assumenda eos sed blanditiis dolorem
              ratione aliquid minus iusto optio itaque sit odit natus illum sunt
              adipisci!
            </p>
          </div>
          <div className="my-11 w-full">
            <h3 className="text-xl">Project Overview</h3>
            <div>
              <ProjectScreenshots />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-between p-9 w-full border-2 border-base-300 museo text-primary">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl">Mohammad Sajjad Hosan</h1>

          <ul className="menu menu-horizontal">
            <li>
              <Link to="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/my-tools">
                <a>My Tools</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact me</a>
              </Link>
            </li>
            <li>
              <Link to="/about-dev">
                <a>About dev</a>
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="text-lg mt-5 italic font-light tracking-wide text-gray-400">
          “Thanks for scrolling this far. Let's build something great together —
          or just talk code and coffee ☕”
        </h3>
      </footer>
    </>
  )
}

export default ProjectDetails
