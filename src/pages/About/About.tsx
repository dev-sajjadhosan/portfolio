import {
  TbLayoutGridAdd,
  TbPhoneCall,
  TbUserStar,
  TbVideoPlus,
} from 'react-icons/tb'
import BackBtn from '../../components/shared/BackBtn'
import dev from '../../assets/user.png'
import Socials from '../../components/shared/Socials'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import HelmetTitle from '../../components/shared/HelmeTitle'

const AboutDev = () => {
 

  return (
    <>
      <HelmetTitle title="About - Portfolio" />
      <motion.div className="p-7" layout>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="flex items-center justify-between"
        >
          <BackBtn type="default" />
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="btn btn-sm btn-primary btn-soft px-5"
            >
              <TbUserStar size={17} />
              Hire ME
            </motion.button>
          </div>
        </motion.div>
        <div className="text-primary max-w-5xl mx-auto">
          <div className="mt-9">
            <div className="my-5 flex items-center justify-center">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                src={dev}
                width={250}
                alt="Mohammad Sajjad Hosan"
                className="avatar"
              />
            </div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl tracking-wide"
            >
              Assalamu Alaikium, I’m Mohammad Sajjad Hosan — the guy who crafts
              clean code, chaotic ideas, and pixel-perfect vibes.
            </motion.h1>
            <motion.h3
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-md mt-3 tracking-wide text-gray-400"
            >
              I’m a full-stack web developer with a love for crafting modern,
              responsive, and interactive websites using the MERN stack. From
              single-page apps to multiple, I thrive on building experiences
              that feel alive and effortless.
              <br />
              <br />I started coding in the late nights with HTML & CSS, then
              fell down the rabbit hole of JavaScript, Node, React, MongoDB —
              and never came back. Right now, I’m exploring 3D web design, AI
              integrations, and gaining knowledge to building tools that feel
              like magic.
            </motion.h3>
          </div>
          <div className="mt-7">
            <motion.ul
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex flex-col text-gray-400"
            >
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="font-light tracking-wide"
              >
                {' '}
                Developer Brain :
              </motion.p>
              {[
                '- Frontend addict — React + Tailwind all day, every day',
                '   - Backend ninja — Express, MongoDB, and REST APIs like a second language',
                '  - UI/UX simp — yes, I care about *spacing, shadows, and button  hover states*',
              ].map((l, i) => (
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 * i, duration: 0.7 }}
                  key={i}
                >
                  {l}
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col mt-7 text-gray-400"
            >
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-light tracking-wide"
              >
                {' '}
                What my brain buddy thought:
              </motion.p>
              {[
                '- Hold on, make this more user friendly.',
                '- Make simple but modern , animated but smoothy pages.',
                '- Love to gain new Knowledge on any field and use them on my own profession.',
                ' - Want to build/Built the best modern, Clean, and efficient OpEn-SoUrCe PrOjEcT to help other.',
                '-',
              ].map((l, i) => (
                <motion.li
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 * i, duration: 0.7 }}
                  key={i}
                >
                  {l}
                </motion.li>
              ))}

              <li className="flex items-center mt-1">
                <div className="w-xs bg-base-300 h-1" />
                <Link
                  to="/my-ideas"
                  className="badge badge-sm badge-primary badge-soft"
                >
                  My ideas
                </Link>
              </li>
            </motion.ul>
            <div className="mt-7 space-x-7">
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="btn btn-primary btn-soft"
              >
                <TbPhoneCall size={17} />
                Let's talk
              </motion.button>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="btn btn-primary btn-soft"
              >
                <TbLayoutGridAdd size={17} />
                Let's create project
              </motion.button>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="btn btn-primary"
              >
                <TbVideoPlus size={17} />
                Meet me
              </motion.button>
            </div>
            <ul className="flex flex-col mt-11 text-gray-400">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-light tracking-wide"
              >
                {' '}
                The Journey:
              </motion.p>
              {[
                '- Started with HTML/CSS while designing blogs for fun',
                ' - Built my first JS project — it broke everything, but I learned a ton',
                '  - Discovered React and started building smooth, responsive UIs',
                ' - Leveled up with Node.js + MongoDB to become a full-stack dev',
                '  - Currently experimenting with AI tools, 3D websites & animation',
              ].map((l, i) => (
                <motion.li
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 * i, duration: 0.7 }}
                  key={i}
                >
                  {l}
                </motion.li>
              ))}
            </ul>
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7 text-md tracking-wide text-gray-400"
            >
              I believe the best products are built by devs who care — not just
              about code, but about users. Every pixel, every API, every
              function is a piece of a bigger puzzle:{' '}
              <span className="text-info">
                **creating human-centric digital experiences**
              </span>{' '}
              that actually mean something.
              <br />
              <br />
              Code is my craft, but creativity is my fuel.
            </motion.h3>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-5 text-md tracking-wide md:w-3/4"
            >
              Let’s build something meaningful. Whether it’s a pixel-perfect
              website, an idea in your head, or a crazy dream — I’m down to
              create.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-11 bg-base-300 w-full h-44 rounded-lg flex items-center justify-center"
          >
            <Socials />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default AboutDev
