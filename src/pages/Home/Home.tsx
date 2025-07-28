import Header from '../../components/Header/Header'
import Socials from '../../components/shared/Socials'
import Clock from '../../components/shared/Clock'
import useAuth from '../../hooks/useAuth'
import dev from '../../assets/image.png'
import { TbDeviceDesktop, TbLayout2, TbScanEye } from 'react-icons/tb'
import { motion } from 'motion/react'
import TypingAnimation from '../../components/shared/TypingAnimation'

const HomePage = () => {
  const { period } = useAuth()
  return (
    <>
      <div className="p-5 flex flex-col justify-between h-[96.5vh] md:h-screen relative z-20">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, type: 'spring' }}
          className="fixed top-1/2 left-1/2 -translate-1/2 text-[19rem] md:text-[30rem] museo text-[#1F1F1F] -z-10"
        >
          {period}
        </motion.div>
        <section
          id="home"
          className="h-fit flex flex-col-reverse md:flex-row gap-5 items-center justify-around text-primary"
        >
          <div className="flex flex-col gap-1.5">
            <Socials />
            <TypingAnimation />
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="text-lg md:text-md font-light text-[#d1d1d1] w-11/12 md:w-full"
            >
              Full-Stack Developer | React, Node.js, MongoDB | MERN Stack |
              <span className="font-semibold text-primary"> Remote Ready</span>
            </motion.h3>
            <div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="text-lg text-error"
              >
                My Hobbies
              </motion.p>
              <ul className="flex flex-col gap-1.5 text-sm text-[#969696] pl-3 mt-1">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                >
                  Create Unique Design & Logic Coding
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.4 }}
                >
                  Explore new Tech & Learn it Quickly{' '}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                >
                  Love to build Open-Source Project
                </motion.li>
              </ul>
            </div>
            <motion.div className="mt-3 flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.4 }}
                className="btn btn-sm btn-primary btn-soft px-3"
              >
                <TbScanEye size={17} />
                View Resume
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.4 }}
                className="btn btn-sm btn-primary px-3"
              >
                <TbLayout2 size={17} />
                View Projects
              </motion.button>
            </motion.div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.4 }}
                src={dev}
                width={400}
                alt=""
              />
            </div>
          </div>
        </section>
        <motion.footer className="flex justify-between items-center">
          <Clock />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.4 }}
            className="btn btn-md btn-circle btn-accent"
          >
            <TbDeviceDesktop size={19} />
          </motion.button>
        </motion.footer>
      </div>
    </>
  )
}
export default HomePage
