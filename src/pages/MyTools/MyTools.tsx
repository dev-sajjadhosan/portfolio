import { LuAward, LuCookingPot } from 'react-icons/lu'
import BackBtn from '../../components/shared/BackBtn'
import {
  axios,
  daisyui,
  figma,
  trae,
  github,
  javascript,
  mongoose,
  notion,
  railway,
  reactquery,
  tailwindcss,
  vercel,
  chrome,
  electron,
  firebase,
  googleFont,
  jwt,
  nodejs,
  npm,
  react,
  reactRouter,
  vsCode,
  css3,
  express,
  git,
  html5,
  mongodb,
  nodemon,
  postman,
  reactForm,
  socketio,
  typescript,
  //
  angular,
  docker,
  framer,
  go,
  graphql,
  netlify,
  nextjs,
  python,
  reactnative,
  redis,
  redux,
  rust,
  tauri,
  vue,
  zustand,
  cooking,
} from '../../assets/tools/Tools'
import { useState } from 'react'
import ToolCard from '../../components/shared/ToolCard'
import { motion } from 'motion/react'
import HelmetTitle from '../../components/shared/HelmeTitle'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { TbBomb, TbLayoutDistributeHorizontal } from 'react-icons/tb'

const skillTitles = ['Frontend', 'Application', 'Backend', 'Hosting', 'Others']

const myTools = [
  {
    title: 'frontend',
    tools: [
      {
        id: 0,
        title: 'html5',
        img: html5,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        id: 1,
        title: 'css3',
        img: css3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        id: 2,
        title: 'javascript',
        img: javascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      { id: 3, title: 'react', img: react, url: 'https://reactjs.org/' },
      {
        id: 4,
        title: 'react query',
        img: reactquery,
        url: 'https://tanstack.com/query/latest',
        size: 100,
        s_size: 30,
      },
      {
        id: 5,
        title: 'react hook form',
        img: reactForm,
        url: 'https://react-hook-form.com/',
        size: 100,
        s_size: 25,
      },
      {
        id: 6,
        title: 'react router',
        img: reactRouter,
        url: 'https://reactrouter.com/',
      },
      { id: 7, title: 'axios', img: axios, url: 'https://axios-http.com/' },
      {
        id: 8,
        title: 'google fonts',
        img: googleFont,
        url: 'https://fonts.google.com/',
        size: 100,
        s_size: 30,
      },
      {
        id: 9,
        title: 'tailwindcss',
        img: tailwindcss,
        url: 'https://tailwindcss.com/',
      },
      {
        id: 10,
        title: 'daisyui',
        img: daisyui,
        url: 'https://daisyui.com/',
        size: 100,
        s_size: 25,
      },
    ],
  },
  {
    title: 'application',
    tools: [
      {
        id: 0,
        title: 'electron',
        img: electron,
        url: 'https://www.electronjs.org/',
      },
    ],
  },
  {
    title: 'backend',
    tools: [
      { id: 0, title: 'nodejs', img: nodejs, url: 'https://nodejs.org/' },
      {
        id: 1,
        title: 'express.js',
        img: express,
        url: 'https://expressjs.com/',
      },
      {
        id: 2,
        title: 'typescript',
        img: typescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        id: 3,
        title: 'jsonwebtoken',
        img: jwt,
        url: 'https://jwt.io/',
        size: 100,
        s_size: 30,
      },
      {
        id: 4,
        title: 'nodemon',
        img: nodemon,
        url: 'https://www.npmjs.com/package/nodemon',
      },
      {
        id: 5,
        title: 'mongodb',
        img: mongodb,
        url: 'https://www.mongodb.com/',
      },
      {
        id: 6,
        title: 'mongoose',
        img: mongoose,
        url: 'https://mongoosejs.com/',
      },
      {
        id: 7,
        title: 'postman',
        img: postman,
        url: 'https://www.postman.com/',
      },
      { id: 8, title: 'socket.io', img: socketio, url: 'https://socket.io/' },
      { id: 9, title: 'npm', img: npm, url: 'https://www.npmjs.com/' },
    ],
  },
  {
    title: 'hosting',
    tools: [
      { id: 0, title: 'vercel', img: vercel, url: 'https://vercel.com/' },
      { id: 1, title: 'railway', img: railway, url: 'https://railway.app/' },
      {
        id: 2,
        title: 'firebase',
        img: firebase,
        url: 'https://firebase.google.com/',
      },
    ],
  },
  {
    title: 'others',
    tools: [
      {
        id: 0,
        title: 'vs studio code',
        img: vsCode,
        url: 'https://code.visualstudio.com/',
      },
      {
        id: 1,
        title: 'trae ide',
        img: trae,
        url: 'https://www.trae.ai/',
        size: 100,
        s_size: 30,
      },
      { id: 2, title: 'git', img: git, url: 'https://git-scm.com/' },
      { id: 3, title: 'github', img: github, url: 'https://github.com/' },
      { id: 4, title: 'figma', img: figma, url: 'https://www.figma.com/' },
      {
        id: 5,
        title: 'chrome',
        img: chrome,
        url: 'https://www.google.com/chrome/',
      },
      { id: 6, title: 'notion', img: notion, url: 'https://www.notion.so/' },
    ],
  },
]
const mycomingTools = [
  {
    title: 'frontend',
    tools: [
      {
        id: 0,
        title: 'nextjs',
        img: nextjs,
        url: 'https://nextjs.org/',
        size: 100,
        s_size: 25,
      },
      {
        id: 1,
        title: 'angular',
        img: angular,
        url: 'https://angular.io/',
        size: 100,
        s_size: 25,
      },
      {
        id: 2,
        title: 'vue',
        img: vue,
        url: 'https://vuejs.org/',
        size: 100,
        s_size: 25,
      },
      {
        id: 3,
        title: 'Coming Soon',
        img: cooking,
        url: '/home',
        size: 100,
        s_size: 25,
      },
    ],
  },
  {
    title: 'application',
    tools: [
      {
        id: 0,
        title: 'react native',
        img: reactnative,
        url: 'https://reactnative.dev/',
        size: 100,
        s_size: 25,
      },
      {
        id: 1,
        title: 'tauri',
        img: tauri,
        url: 'https://tauri.app/',
        size: 100,
        s_size: 25,
      },
      {
        id: 3,
        title: 'Coming Soon',
        img: cooking,
        url: '/home',

        size: 100,
        s_size: 25,
      },
    ],
  },
  {
    title: 'backend',
    tools: [
      {
        id: 0,
        title: 'python',
        img: python,
        url: 'https://www.python.org/',

        size: 100,
        s_size: 25,
      },
      {
        id: 1,
        title: 'rust',
        img: rust,
        url: 'https://www.rust-lang.org/',
        size: 100,
        s_size: 25,
      },
      {
        id: 2,
        title: 'golang',
        img: go,
        url: 'https://go.dev/',
        size: 100,
        s_size: 25,
      },
      {
        id: 3,
        title: 'graphql',
        img: graphql,
        url: 'https://graphql.org/',
        size: 100,
        s_size: 25,
      },
      {
        id: 4,
        title: 'zustand',
        img: zustand,
        url: 'https://zustand-demo.pmnd.rs/',
        size: 100,
        s_size: 25,
      },
      {
        id: 5,
        title: 'redux',
        img: redux,
        url: 'https://redux.js.org/',
        size: 100,
        s_size: 25,
      },
      {
        id: 5,
        title: 'redis',
        img: redis,
        url: 'https://redis.io/',
        size: 100,
        s_size: 25,
      },
      {
        id: 6,
        title: 'docker',
        img: docker,
        url: 'https://www.docker.com/',
        size: 100,
        s_size: 25,
      },
      {
        id: 7,
        title: 'Coming Soon',
        img: cooking,
        url: '/home',

        size: 100,
        s_size: 25,
      },
    ],
  },
  {
    title: 'hosting',
    tools: [
      {
        id: 0,
        title: 'netlify',
        img: netlify,
        url: 'https://www.netlify.com/',
        size: 100,
        s_size: 25,
      },
      {
        id: 1,
        title: 'Coming Soon',
        img: cooking,
        url: '/home',

        size: 100,
        s_size: 25,
      },
    ],
  },
  {
    title: 'others',
    tools: [
      {
        id: 0,
        title: 'framer',
        img: framer,
        url: 'https://www.framer.com/',
        size: 100,
        s_size: 25,
      },
      {
        id: 1,
        title: 'Coming Soon',
        img: cooking,
        url: '/home',
        size: 100,
        s_size: 25,
      },
    ],
  },
]

// mytool array for cooking part

const MyToolsPage = () => {
  const { isToolDefault, setIsToolsDefault } = useAuth()
  const [tab, seTab] = useState(false)

  return (
    <>
      <HelmetTitle title="Tools - Portfolio" />
      <motion.div layout className="min-h-screen p-7">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.1, duration: 0.7 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-1.5">
            <BackBtn />
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              className={`btn btn-sm btn-warning  ${
                isToolDefault && 'tooltip tooltip-warning tooltip-bottom'
              }`}
              data-tip="Want to try something new?"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => setIsToolsDefault(!isToolDefault)}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {isToolDefault ? (
                <>
                  <TbBomb size={17} />
                  Stack Layout
                </>
              ) : (
                <>
                  <TbLayoutDistributeHorizontal size={17} />
                  Default Layout
                </>
              )}
            </motion.button>
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={`btn btn-sm  ${
                tab === false ? 'btn-primary' : 'btn-soft'
              }`}
              onClick={() => seTab(!tab)}
            >
              <LuAward size={17} />
              Current
            </motion.button>
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className={`btn btn-sm btn-primary  ${
                tab === true ? 'btn-primary' : 'btn-soft'
              }`}
              onClick={() => seTab(!tab)}
            >
              <LuCookingPot size={17} />
              Cooking
            </motion.button>
          </div>
        </motion.div>
        <div className="mt-5 w-full text-primary">
          {tab ? (
            <div>
              <motion.h3
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="text-md md:w-1/2 text-center tracking-wide text-gray-400 mx-auto"
              >
                Sometimes the biggest bugs come from the tiniest mistakes — and
                that’s just dev life. Laugh it off, learn, and keep coding. 😉
              </motion.h3>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                {isToolDefault ? (
                  <div className="card mt-5 max-w-3xl mx-auto">
                    {myTools.map((item, i) => (
                      <div key={i} className="my-2.5">
                        <motion.h3
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 * i, duration: 0.7 }}
                          className="text-lg capitalize"
                        >
                          {item?.title}
                        </motion.h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          {item?.tools?.map((i, j) => (
                            <Link to={i?.url} target="_blank">
                              <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 * j, duration: 0.7 }}
                                key={j}
                                className="flex gap-1 capitalize rounded-md items-center justify-center px-5 text-sm bg-base-300 cursor-pointer py-1.5"
                              >
                                <img
                                  src={i?.img}
                                  alt={i?.title}
                                  width={i?.s_size ?? 45}
                                />
                                {i?.title}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ToolCard
                    data={myTools}
                    skillTitles={skillTitles}
                    type="default"
                  />
                )}
              </motion.div>
            </div>
          ) : (
            <motion.div layout>
              <motion.h3
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="text-md md:w-1/2 text-center tracking-wide text-gray-400 mx-auto"
              >
                Still burning rice, but also burning with passion. Learning the
                art of cooking—one overcooked egg at a time. 🍳
              </motion.h3>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                {isToolDefault ? (
                  <div className="card mt-5 max-w-3xl mx-auto">
                    {mycomingTools?.map((item, i) => (
                      <div key={i} className="my-2.5">
                        <motion.h3
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 * i, duration: 0.7 }}
                          className="text-lg capitalize"
                        >
                          {item?.title}
                        </motion.h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          {item?.tools?.map((i, j) => (
                            <Link to={i?.url} target="_blank">
                              <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 * j, duration: 0.7 }}
                                key={j}
                                className="flex gap-1 capitalize rounded-md items-center justify-center px-5 text-sm bg-base-300 cursor-pointer py-1.5"
                              >
                                <img
                                  src={i?.img}
                                  alt={i?.title}
                                  width={i?.s_size ?? 45}
                                />
                                {i?.title}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ToolCard
                    data={mycomingTools}
                    skillTitles={skillTitles}
                    type="cook"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}
export default MyToolsPage
