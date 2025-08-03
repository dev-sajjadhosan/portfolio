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
} from '../../assets/tools/Tools'
import { useState } from 'react'
import ToolCard from '../../components/shared/ToolCard'
import { motion } from 'motion/react'
// import useAuth from '../../hooks/useAuth'

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
      },
      {
        id: 5,
        title: 'react hook form',
        img: reactForm,
        url: 'https://react-hook-form.com/',
        size: 100,
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
        img: '',
        url: '',
      },
      {
        id: 1,
        title: 'angular',
        img: '',
        url: '',
      },
      {
        id: 2,
        title: 'vue',
        img: '',
        url: '',
      },
    ],
  },
  {
    title: 'application',
    tools: [
      {
        id: 0,
        title: 'react native',
        img: '',
        url: '',
      },
    ],
  },
  {
    title: 'backend',
    tools: [
      { id: 0, title: 'python', img: '', url: '' },
      {
        id: 1,
        title: 'rust',
        img: '',
        url: '',
      },
      {
        id: 2,
        title: 'go',
        img: '',
        url: '',
      },
      {
        id: 3,
        title: 'graphql',
        img: '',
        url: '',
      },
      {
        id: 4,
        title: 'zustand',
        img: '',
        url: '',
      },
      {
        id: 5,
        title: 'redis',
        img: '',
        url: '',
      },
      {
        id: 6,
        title: 'docker',
        img: '',
        url: '',
      },
    ],
  },
  {
    title: 'hosting',
    tools: [{ id: 0, title: 'netlify', img: '', url: '' }],
  },
  {
    title: 'others',
    tools: [
      {
        id: 0,
        title: 'framer',
        img: '',
        url: '',
      },
      {
        id: 1,
        title: 'Coming Soon',
        img: '',
        url: '',
        size: 100,
      },
    ],
  },
]

// mytool array for cooking part

const MyToolsPage = () => {
  // const { isToolDefault } = useAuth()
  const [tab, seTab] = useState(true)

  return (
    <>
      <motion.div layout className="h-full p-7">
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
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={`btn btn-sm btn-primary  ${
                tab === false ? 'btn-soft' : ''
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
                tab === true ? 'btn-soft' : ''
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
                <ToolCard
                  data={myTools}
                  skillTitles={skillTitles}
                  type="default"
                />
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
                <ToolCard
                  data={mycomingTools}
                  skillTitles={skillTitles}
                  type="cook"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}
export default MyToolsPage
