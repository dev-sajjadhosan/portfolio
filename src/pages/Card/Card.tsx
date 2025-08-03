import {
  TbBackground,
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandMeta,
  TbChevronUpRight,
  TbLayout2,
  TbMailPin,
  TbSocial,
} from 'react-icons/tb'
import image from '../../assets/user.png'
// import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import ShareModal from '../../components/Share/Share'
import HelmetTitle from '../../components/shared/HelmeTitle'

const socialLinks = [
  {
    icon: <TbBrandLinkedin size={19} />,
    url: 'https://www.linkedin.com/in/devsajjadhosan',
    tooltip: 'Linkedin',
    title: 'Linkedin',
  },
  {
    icon: <TbBrandGithub size={19} />,
    url: 'https://github.com/dev-sajjadhosan',
    tooltip: 'Github',
    title: 'Github',
  },
  {
    icon: <TbBrandMeta size={19} />,
    url: 'https://facebook.com/MohammadSajjadHosan0',
    tooltip: 'Facebook',
    title: 'Facebook',
  },

  {
    icon: <TbBrandDiscord size={19} />,
    url: 'https://discord.gg/1253622802448257044',
    tooltip: 'Discord',
    title: 'Discord',
  },
  {
    icon: <TbMailPin size={19} />,
    url: '',
    tooltip: 'E-Mail',
    title: 'E-Mail',
  },
]

const CardView = () => {
  return (
    <>
      <HelmetTitle title="Welcome - Portfolio" />1
      <ShareModal
        title={'portfolio'}
        url="https://mohammadsajjadhosan.vercel.app"
      />

      <motion.div
        layout
        className="flex justify-center items-center h-screen text-primary"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.9, type: 'spring' }}
          className="p-7 flex flex-col gap-1.5 w-md bg-base-300 rounded-3xl"
        >
          <div className="flex items-center justify-end gap-1">
            {/* <button
              className="btn btn-sm btn-soft btn-success tooltip tooltip-bottom"
              data-tip="Share"
            >
              <TbUserShare size={17} />
            </button> */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="btn btn-sm btn-soft btn-success tooltip tooltip-bottom"
              data-tip="Change Color"
            >
              <TbBackground size={17} />
            </motion.button>
          </div>
          <div className="avatar w-56 bg-none mx-auto mt-1 mb-1">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              src={image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-3xl"
            >
              <span className="font-light">Mohammad</span> Sajjad Hosan
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="font-light text-sm w-[85%] text-center"
            >
              Full-Stack Developer | React, Node.js, MongoDB | MERN Stack |
              Remote Ready
            </motion.h3>
            <div className="mt-5 flex items-center gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                <Link to="/home" className="btn btn-primary btn-ghost">
                  View Portfolio
                  <TbChevronUpRight size={17} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.7 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                  <TbLayout2 size={17} />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="text-md font-light text-gray-400"
            >
              Connect with me
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
              className="flex items-center justify-center gap-2.5"
            >
              {socialLinks.map((s, i) => (
                <Link key={i} to={s?.url}>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i, duration: 0.7 }}
                    title={s.title}
                    className="btn btn-sm btn-soft btn-primary tooltip"
                    data-tip={s.tooltip}
                  >
                    {s.icon}
                  </motion.button>
                </Link>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.9 }}
                className="btn btn-sm btn-accent"
                onClick={() =>
                  (
                    document.getElementById('share_modal') as HTMLDialogElement
                  )?.showModal()
                }
              >
                <TbSocial size={17} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default CardView
