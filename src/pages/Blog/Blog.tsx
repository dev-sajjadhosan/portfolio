import { useState } from 'react'
import BackBtn from '../../components/shared/BackBtn'
import Filters from '../../components/shared/Filters'
import { motion } from 'motion/react'
import { LuListFilter } from 'react-icons/lu'
import { TbEyeShare, TbSearch } from 'react-icons/tb'

const BlogPage = () => {
  const [isFilter, setIsFilter] = useState(true)

  return (
    <>
      <div className="p-7 min-h-screen">
        <div className="flex justify-between items-center">
          <BackBtn />
          <div className="bg-base-300 px-4 py-1.5 rounded-lg w-xs">
            <input
              type="text"
              className="border-0 outline-0 text-primary tracking-wide text-sm w-full"
              placeholder="Search here...."
            />
          </div>
          <button className="btn btn-sm  btn-primary btn-soft lg:hidden">
            <TbSearch size={17} />
            Search
          </button>
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className={`btn btn-sm btn-primary  ${
                isFilter ? '' : 'btn-soft'
              }`}
              onClick={() => setIsFilter(!isFilter)}
            >
              <LuListFilter size={17} />
              View Filter
            </motion.button>
            <button className="btn btn-sm btn-primary btn-soft">
              View Customize
            </button>
          </div>
        </div>
        <div className="mt-11">
          <div className="flex flex-col gap-5">
            <div className="w-full">
              <Filters />
            </div>
            <div className="mt-7 grid grid-cols-1 gap-9 max-w-4xl mx-auto text-primary">
              {[...Array(10).keys()].map((i) => (
                <div className="flex items-end justify-between gap-9" key={i}>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg">The post number is 01</h3>
                    <p className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, culpa? Maiores vel animi aliquam, officia
                      expedita ab laboriosam odio quod?
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
              <button className="btn btn-sm btn-primary btn-soft">
                View More Post
              </button>
            </div>
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
