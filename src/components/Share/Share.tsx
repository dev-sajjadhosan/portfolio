import {
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandMeta,
  TbCopyCheck,
  TbMailPin,
} from 'react-icons/tb'

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

const ShareModal = () => {
  return (
    <dialog className="modal" id="share_modal">
      <div className="modal-box max-w-2xl w-11/12">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-md mb-2">Share Portfolio</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-soft btn-error">Close</button>
          </form>
        </div>
        <div className="flex items-center mx-auto bg-base-300 rounded-lg py-3 px-3 w-3/4">
          <input
            type="text"
            className="border-0 outline-0 text-sm px-1.5 w-full"
            placeholder="https://mohammadsajjadhosan.vercel.app"
            readOnly
          />
          <button className="btn btn-sm btn-soft btn-info">
            <TbCopyCheck size={15} />
            Copy
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Share portfolio link with others
        </p>
        <div className="flex items-center flex-wrap justify-center gap-3 mt-3.5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-soft btn-accent"
            >
              {link.icon}
              <span className="ml-2">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </dialog>
  )
}

export default ShareModal
