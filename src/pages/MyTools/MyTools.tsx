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
import { Link, useNavigate } from 'react-router-dom'

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
      },
      {
        id: 5,
        title: 'react hook form',
        img: reactForm,
        url: 'https://react-hook-form.com/',
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
      },
      {
        id: 9,
        title: 'tailwindcss',
        img: tailwindcss,
        url: 'https://tailwindcss.com/',
      },
      { id: 10, title: 'daisyui', img: daisyui, url: 'https://daisyui.com/' },
    ],
  },
  {
    title: 'os / mobile application',
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
      { id: 3, title: 'jsonwebtoken', img: jwt, url: 'https://jwt.io/' },
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
    title: 'others tech and tools',
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

const MyToolsPage = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="h-full p-7">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-3">
            <button className="btn btn-sm btn-primary btn-soft">
              <LuAward size={17} />
              Current
            </button>
            <button className="btn btn-sm btn-primary btn-soft">
              <LuCookingPot size={17} />
              Cooking
            </button>
          </div>
        </div>
        <div className="mt-7 max-w-4xl mx-auto text-primary">
          <div className="card">
            {myTools.map((item, i) => (
              <div key={i} className="my-2.5">
                <h3 className="text-2xl capitalize">{item?.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {item?.tools?.map((i) => (
                    <Link to={i?.url} target="_blank">
                      <div
                        key={i?.id}
                        className="card items-center justify-center p-3 bg-base-300 cursor-pointer transition-all duration-100 hover:scale-105"
                      >
                        <img
                          src={i?.img}
                          alt={i?.title}
                          className="w-9 h-9 object-contain"
                        />
                        {i?.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default MyToolsPage
