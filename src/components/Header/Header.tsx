import { motion } from 'framer-motion'
import {
  TbBurger,
  TbHome,
  TbLayout2,
  TbPhone,
  TbTemplate,
  TbUser,
  // TbUserCode,
  // TbUserStar,
} from 'react-icons/tb'
import { VscTools } from 'react-icons/vsc'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'home', path: '/home', icon: <TbHome size={15} /> },
  { label: 'projects', path: '/projects', icon: <TbLayout2 size={15} /> },
  { label: 'my tools', path: '/my-tools', icon: <VscTools size={15} /> },
  { label: 'about dev', path: '/about-dev', icon: <TbUser size={15} /> },
  { label: 'blog', path: '/blog', icon: <TbTemplate size={15} /> },
]

const Header = () => {
  const { pathname } = useLocation()
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', delay: 0, duration: 0.7 }}
      className="navbar bg-base-100"
    >
      {/* 1️⃣ Name */}
      <motion.div
        className="navbar-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="dropdown"
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-primary btn-soft lg:hidden mr-1.5"
          >
            <TbBurger size={21} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 gap-1.5 rounded-box z-10 mt-3 w-xs p-5 text-primary"
          >
            {menuItems.map((li, i) => (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 * i, duration: 0.4 }}
                className={`   rounded-md ${
                  li.path === pathname ? 'bg-primary text-black' : ''
                }`}
              >
                <Link to={li.path} key={i}>
                  {li.icon}
                  <a>{li.label}</a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="text-lg md:text-xl text-primary">Mohammad Sajjad Hosan</p>
      </motion.div>

      {/* 2️⃣ Menu */}
      <motion.div
        className="navbar-center hidden lg:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <ul className="menu menu-horizontal gap-1.5 px-1 capitalize">
          {menuItems.map((li, i) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 * i, duration: 0.4 }}
              className={`   rounded-md ${
                li.path === pathname
                  ? 'bg-white text-[#313131]'
                  : 'bg-white/15 text-white'
              }`}
            >
              <Link to={li.path} key={i}>
                {li.icon}
                <a>{li.label}</a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 3️⃣ Contact Button */}
      <motion.div
        className="hidden md:flex gap-2 navbar-end"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.4 }}
      >
        <Link to="/contact">
          <motion.button className="btn btn-sm btn-primary flex items-center gap-1">
            <TbPhone size={17} />
            Contact
          </motion.button>
        </Link>
        {/* <motion.button
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="btn btn-sm btn-primary btn-soft px-3"
        >
          <TbUserStar size={17} />
          Hire ME
        </motion.button> */}
        {/* <motion.button
          className="btn btn-sm btn-primary btn-soft flex items-center gap-1"
          onClick={() =>
            (
              document.getElementById('view_collaberate') as HTMLDialogElement
            )?.showModal()
          }
        >
          <TbUserCode size={17} />
          Collaborate
        </motion.button> */}
      </motion.div>

      <motion.div
        className="lg:hidden flex gap-2 navbar-end"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <Link to="/contact">
          <motion.button className="btn btn-sm btn-primary flex items-center gap-1">
            <TbUser size={17} />
            Contact
          </motion.button>
        </Link>
        {/* <motion.button
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="btn btn-sm btn-primary btn-soft px-3"
        >
          <TbUserStar size={17} />
          Hire ME
        </motion.button> */}
        {/* <motion.button
          className="btn btn-sm btn-primary btn-soft flex items-center gap-1"
          onClick={() =>
            (
              document.getElementById('view_collaberate') as HTMLDialogElement
            )?.showModal()
          }
        >
          <TbUserCode size={17} />
          Collaborate
        </motion.button> */}
      </motion.div>
    </motion.header>
  )
}

export default Header
