import { useState } from 'react'
import BackBtn from '../../components/shared/BackBtn'
import Filters from '../../components/shared/Filters'
import { motion } from 'motion/react'
import { LuListFilter } from 'react-icons/lu'
import { TbEyeShare, TbHome, TbMicrophone, TbSearch } from 'react-icons/tb'
import { LiaTruckLoadingSolid } from 'react-icons/lia'
import { PiBatteryEmptyDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const [isFilter, setIsFilter] = useState(false)

  const data = []

  return (
    <>
      <div className="p-7 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex justify-between items-center"
        >
          <BackBtn />

          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              disabled={data.length === 0 ? true : false}
              className={`btn btn-sm btn-primary  ${
                isFilter ? '' : 'btn-soft'
              }`}
              onClick={() => setIsFilter(!isFilter)}
            >
              <LuListFilter size={17} />
              View Filter
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              disabled={true}
              className="btn btn-sm btn-primary btn-soft"
            >
              View Customize
            </motion.button>
          </div>
        </motion.div>
        <div className="mt-11">
          <div className="flex flex-col gap-5">
            <div className="w-full">
              {isFilter && (
                <div className="mb-7">
                  <Filters />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="bg-base-300 px-2 py-1.5 flex rounded-lg w-sm mt-1 mx-auto"
              >
                <motion.input
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  type="text"
                  disabled={data.length === 0 ? true : false}
                  className="border-0 outline-0 text-primary tracking-wide text-sm w-full pl-3"
                  placeholder="Search here...."
                />
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                  className="btn btn-sm btn-primary btn-ghost hover:bg-base-200 text-primary tooltip"
                  data-tip="Search"
                >
                  <TbSearch size={17} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.7 }}
                  className="btn btn-sm btn-primary btn-ghost hover:bg-base-200 text-primary tooltip"
                  data-tip="Voice"
                >
                  <TbMicrophone size={17} />
                </motion.button>
              </motion.div>
            </div>
            {data.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                className="museo mt-21 p-11 flex flex-col gap-1 items-center justify-center text-primary bg-base-100 w-2xl rounded-lg mx-auto"
              >
                <PiBatteryEmptyDuotone size={51} />
                <h3 className="text-3xl font-light">No Blog Post Here!</h3>
                <p className="text-lg font-light tracking-wide">
                  Please visit next time.
                </p>
                <Link
                  to="/home"
                  className="btn btn-sm btn-primary btn-soft mt-2"
                >
                  <TbHome size={15} />
                  Back to home
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="mt-7 grid grid-cols-1 gap-9 max-w-4xl mx-auto text-primary">
                  {[...Array(10).keys()].map((i) => (
                    <div
                      className="flex items-end justify-between gap-9 transition-all duration-200 hover:translate-x-5 active:scale-105 hover:bg-base-200 py-3 px-5 rounded-md"
                      key={i}
                    >
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg">The post number is 01</h3>
                        <p className="text-sm text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perferendis, culpa? Maiores vel animi aliquam,
                          officia expedita ab laboriosam odio quod?
                        </p>
                      </div>
                      <button className="btn btn-sm btn-ghost btn-primary">
                        <TbEyeShare size={17} />
                        View more
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-5 mx-auto">
                  <button className="btn btn-sm btn-primary btn-soft px-7">
                    <LiaTruckLoadingSolid size={17} />
                    View More Post
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <footer className="p-7 mt-15 flex items-center justify-between text-primary bg-base-300">
        <div className="flex flex-col items-start">
          <h3>View Post from</h3>
          <ul className="menu menu-horizontal">
            <li>
              <a href="">2019</a>
            </li>
            <li>
              <a href="">2020</a>
            </li>
            <li>
              <a href="">2021</a>
            </li>
            <li>
              <a href="">2022</a>
            </li>
            <li>
              <a href="">2023</a>
            </li>
            <li>
              <a href="">2024</a>
            </li>
            <li>
              <a href="">2025</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3>View popular Post </h3>
          <ul className="menu menu-horizontal flex-wrap">
            <li>
              <a href="">error</a>
            </li>
            <li>
              <a href="">components</a>
            </li>
            <li>
              <a href="">server</a>
            </li>
            <li>
              <a href="">ai</a>
            </li>
            <li>
              <a href="">database</a>
            </li>
            <li>
              <a href="">python</a>
            </li>
          </ul>
        </div>
      </footer> */}
    </>
  )
}

export default BlogPage
