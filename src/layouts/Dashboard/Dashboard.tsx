import { Link, Outlet, useLocation } from 'react-router-dom'
import dev from '../../assets/user.png'
import {
  TbAnalyze,
  TbArrowAutofitContent,
  TbArrowBarLeft,
  TbArrowBigLeftLines,
  TbBellSearch,
  TbHome,
} from 'react-icons/tb'
import { useState } from 'react'

const dashboardMenu = [
  { name: 'Home', path: '/dashboard', icon: <TbHome size={17} /> },
  {
    name: 'Add Project',
    path: '/dashboard/add-project',
    icon: <TbArrowBarLeft size={17} />,
  },
  {
    name: 'Add Tools',
    path: '/dashboard/tools',
    icon: <TbArrowBigLeftLines size={17} />,
  },
  {
    name: 'Send Notification',
    path: '/dashboard/notification',
    icon: <TbBellSearch size={17} />,
  },
  {
    name: 'Analyses',
    path: '/dashboard/analyses',
    icon: <TbAnalyze size={17} />,
  },
]

const Dashboard = () => {
  const { pathname } = useLocation()
  const [isCol, setIsCol] = useState(true)

  return (
    <>
      <div className="flex gap-1 text-primary h-screen">
        <div className={`flex flex-col ${isCol ? 'w-xs p-5' : 'w-24 p-2'}`}>
          <button
            className="btn btn-sm btn-primary btn-soft mx-auto my-5 tooltip tooltip-right px-5"
            data-tip="Collapse"
            onClick={() => setIsCol(!isCol)}
          >
            <TbArrowAutofitContent size={17} />
          </button>
          <div className="flex flex-col items-center">
            <img src={dev} alt="" className="" width={130} />
            {isCol && (
              <>
                <h1 className={`text-lg`}>Mohammad Sajjad Hosan</h1>
                <h3 className="text-sm">Full stack developer</h3>
              </>
            )}
          </div>
          <ul className="mt-11 flex flex-col gap-2 w-full">
            {dashboardMenu.map((l, i) => (
              <Link to={l.path} key={i}>
                <li>
                  <button
                    className={`btn btn-sm btn-primary w-full ${
                      isCol ? 'justify-start' : 'justify-center'
                    } gap-1 ${l.path === pathname ? 'btn-soft' : 'btn-ghost'}
                    ${isCol ? '' : 'tooltip tooltip-right'}
                    `}
                    data-tip={l.name}
                  >
                    {l.icon}
                    {isCol && l.name}
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="p-5 w-full flex justify-center items-center bg-base-300">
          <h3 className="text-2xl">
            <Outlet />
          </h3>
        </div>
      </div>
    </>
  )
}

export default Dashboard
