import { TbLayoutGridAdd, TbPhoneCall, TbVideoPlus } from 'react-icons/tb'
import BackBtn from '../../components/shared/BackBtn'
import dev from '../../assets/user.png'
import Socials from '../../components/shared/Socials'
import { Link } from 'react-router-dom'

const AboutDev = () => {
  return (
    <>
      <div className="p-7 ">
        <div className="flex items-center justify-between">
          <BackBtn type="default" />
        </div>
        <div className="text-primary max-w-5xl mx-auto">
          <div className="mt-9">
            <div className="my-5 flex items-center justify-center">
              <img src={dev} width={250} alt="" className="avatar" />
            </div>
            <h1 className="text-xl tracking-wide">
              Hey, I’m Mohammad Sajjad Hosan — the guy who crafts clean code,
              chaotic ideas, and pixel-perfect vibes.
            </h1>
            <h3 className="text-md mt-3 tracking-wide text-gray-400">
              I’m a full-stack web developer with a love for crafting modern,
              responsive, and interactive websites using the MERN stack. From
              single-page apps to multiple, I thrive on building experiences
              that feel alive and effortless.
              <br />
              <br />I started coding in the late nights with HTML & CSS, then
              fell down the rabbit hole of JavaScript, Node, React, MongoDB —
              and never came back. Right now, I’m exploring 3D web design, AI
              integrations, and building tools that feel like magic.
            </h3>
          </div>
          <div className="mt-7">
            <ul className="flex flex-col text-gray-400">
              <p className="font-light tracking-wide"> Developer Brain :</p>
              <li>- Frontend addict — React + Tailwind all day, every day</li>
              <li>
                - Backend ninja — Express, MongoDB, and REST APIs like a second
                language
              </li>
              <li>
                - UI/UX simp — yes, I care about *spacing, shadows, and button
                hover states*
              </li>
            </ul>
            <ul className="flex flex-col mt-7 text-gray-400">
              <p className="font-light tracking-wide"> What I say a lot:</p>
              <li>- Hold on, I just had an idea…</li>
              <li>- Let me just refactor this real quick.”</li>
              <li>
                - I could’ve done this in 10 lines, but I made it beautiful
                instead.
              </li>
              <li className="flex items-center mt-1">
                <div className="w-xs bg-base-300 h-1" />
                <Link to="/my-ideas" className="badge badge-sm badge-primary badge-soft">
                  My ideas
                </Link>
              </li>
            </ul>
            <div className="mt-7 space-x-7">
              <button className="btn btn-primary btn-soft">
                <TbPhoneCall size={17} />
                Let's talk
              </button>
              <button className="btn btn-primary btn-soft">
                <TbLayoutGridAdd size={17} />
                Let's create project
              </button>
              <button className="btn btn-primary">
                <TbVideoPlus size={17} />
                Meet me
              </button>
            </div>
            <ul className="flex flex-col mt-11 text-gray-400">
              <p className="font-light tracking-wide"> The Journey:</p>
              <li>- Started with HTML/CSS while designing blogs for fun</li>
              <li>
                - Built my first JS project — it broke everything, but I learned
                a ton
              </li>
              <li>
                - Discovered React and started building smooth, responsive UIs
              </li>
              <li>
                - Leveled up with Node.js + MongoDB to become a full-stack dev
              </li>
              <li>
                - Currently experimenting with AI tools, 3D websites & animation
              </li>
            </ul>
            <h3 className="mt-7 text-md tracking-wide text-gray-400">
              I believe the best products are built by devs who care — not just
              about code, but about users. Every pixel, every API, every
              function is a piece of a bigger puzzle: **creating human-centric
              digital experiences** that actually mean something.
              <br />
              <br />
              Code is my craft, but creativity is my fuel.
            </h3>
            <p className="mt-5 text-md tracking-wide ">
              Let’s build something meaningful. Whether it’s a pixel-perfect
              website, an idea in your head, or a crazy dream — I’m down to
              create.
            </p>
          </div>
          <div className="mt-11 bg-base-300 w-full h-44 rounded-lg flex items-center justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutDev
