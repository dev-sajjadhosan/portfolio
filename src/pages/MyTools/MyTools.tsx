import { LuAward, LuCookingPot } from 'react-icons/lu'
import BackBtn from '../../components/shared/BackBtn'
import {
  axios,
  daisyui,
  figma,
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
} from '../../assets/tools/tools'
import { useState } from 'react'
import ToolCard from '../../components/shared/ToolCard'

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
      { id: 1, title: 'git', img: git, url: 'https://git-scm.com/' },
      { id: 2, title: 'github', img: github, url: 'https://github.com/' },
      { id: 3, title: 'figma', img: figma, url: 'https://www.figma.com/' },
      {
        id: 4,
        title: 'chrome',
        img: chrome,
        url: 'https://www.google.com/chrome/',
      },
      { id: 5, title: 'notion', img: notion, url: 'https://www.notion.so/' },
    ],
  },
]

const future = [
  {
    id: 0,
    title: 'NextJs',
    category: 'frontend',
    img: '',
  },
  {
    id: 0,
    title: 'NextJs',
    category: 'frontend',
    img: '',
  },
  {
    id: 0,
    title: 'NextJs',
    category: 'frontend',
    img: '',
  },
  {
    id: 1,
    title: 'python',
    category: 'backend',
    img: '',
  },
  {
    id: 3,
    title: 'goLang',
    category: 'backend',
    img: '',
  },
  {
    id: 3,
    title: 'rust',
    category: 'backend',
    img: '',
  },
]

const MyToolsPage = () => {
  const [tab, seTab] = useState(true)
  return (
    <>
      <div className="h-full p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BackBtn />
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`btn btn-sm btn-primary  ${
                tab === false ? 'btn-soft' : ''
              }`}
              onClick={() => seTab(!tab)}
            >
              <LuAward size={17} />
              Current
            </button>
            <button
              className={`btn btn-sm btn-primary  ${
                tab === true ? 'btn-soft' : ''
              }`}
              onClick={() => seTab(!tab)}
            >
              <LuCookingPot size={17} />
              Cooking
            </button>
          </div>
        </div>
        <div className="mt-3 w-full text-primary">
          {tab ? (
            <div>
              <h3 className="text-sm md:text-md md:w-1/2 text-center tracking-wide text-gray-400 mx-auto">
                Sometimes the biggest bugs come from the tiniest mistakes — and
                that’s just dev life. Laugh it off, learn, and keep coding. 😉
              </h3>
              <div>
                <ToolCard data={myTools} />
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-sm md:text-md md:w-1/2 text-center tracking-wide text-gray-400 mx-auto">
                Still burning rice, but also burning with passion. Learning the
                art of cooking—one overcooked egg at a time. 🍳
              </h3>
              <div>
                <ToolCard data={myTools} type='cook' />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default MyToolsPage
