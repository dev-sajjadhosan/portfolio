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
import image from '../../assets/image.png'
// import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    icon: <TbBrandLinkedin size={19} />,
    url: '',
    tooltip: 'Linkedin',
    title: 'Linkedin',
  },
  {
    icon: <TbBrandGithub size={19} />,
    url: '',
    tooltip: 'Github',
    title: 'Github',
  },
  {
    icon: <TbBrandMeta size={19} />,
    url: '',
    tooltip: 'Facebook',
    title: 'Facebook',
  },

  {
    icon: <TbBrandDiscord size={19} />,
    url: '',
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
      <div className="flex justify-center items-center h-screen text-primary">
        <div className="p-7 flex flex-col gap-1.5 w-md bg-base-300 rounded-3xl">
          <div className="flex items-center justify-end gap-1">
            {/* <button
              className="btn btn-sm btn-soft btn-success tooltip tooltip-bottom"
              data-tip="Share"
            >
              <TbUserShare size={17} />
            </button> */}
            <button
              className="btn btn-sm btn-soft btn-success tooltip tooltip-bottom"
              data-tip="Change Color"
            >
              <TbBackground size={17} />
            </button>
          </div>
          <div className="avatar w-52 h-52 bg-none border-2 rounded-full mx-auto mt-1 mb-5">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl">
              <span className="font-light">Mohammad</span> Sajjad Hosan
            </h1>
            <h3 className="font-light text-sm w-[85%] text-center">
              Full-Stack Developer | React, Node.js, MongoDB | MERN Stack |
              Remote Ready
            </h3>
            <div className="mt-5 flex items-center gap-5">
              <Link
                to="/home"
                className="btn btn-primary btn-ghost shadow-none"
              >
                View Portfolio
                <TbChevronUpRight size={17} />
              </Link>
              <Link
                to="/projects"
                className="btn btn-sm btn-primary shadow-none"
              >
                View Projects
                <TbLayout2 size={17} />
              </Link>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <h3 className="text-md font-light text-gray-400">
              Connect with me
            </h3>
            <div className="flex items-center justify-center gap-2.5">
              {socialLinks.map((s, i) => (
                <button
                  key={i}
                  title={s.title}
                  className="btn btn-sm btn-soft btn-success tooltip"
                  data-tip={s.tooltip}
                >
                  {s.icon}
                </button>
              ))}

              <button
                className="btn btn-sm btn-accent"
                onClick={() =>
                  (
                    document.getElementById('share_modal') as HTMLDialogElement
                  )?.showModal()
                }
              >
                <TbSocial size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardView
