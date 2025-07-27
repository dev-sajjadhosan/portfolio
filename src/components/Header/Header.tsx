import { motion } from 'framer-motion'
import { TbUser } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'home', path: '/home' },
  { label: 'projects', path: '/projects' },
  { label: 'tools', path: '/tools' },
  { label: 'about me', path: '/about-me' },
  { label: 'blogs', path: '/blogs' },
]

const Header = () => {
  const { pathname } = useLocation()
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', delay: 0 }}
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-5"
          >
            {menuItems.map((li, i) => (
              <Link to={li.path} key={i}>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 * i, duration: 0.4 }}
                  className="px-3 py-1"
                >
                  {li.label}
                </motion.li>
              </Link>
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
            <Link to={li.path} key={i}>
              <motion.li
                className={`  px-3.5 py-0.5 rounded ${
                  li.path === pathname
                    ? 'bg-white text-[#313131]'
                    : 'bg-white/15 text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 * i, duration: 0.4 }}
              >
                {li.label}
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.div>

      {/* 3️⃣ Contact Button */}
      <motion.div
        className="hidden md:flex navbar-end"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.4 }}
      >
        <Link to="/contact">
          <motion.button className="btn btn-sm btn-primary flex items-center gap-1">
            <TbUser size={17} />
            Contact
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="lg:hidden navbar-end"
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
      </motion.div>
    </motion.header>
  )
}

export default Header
