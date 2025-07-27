import {
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandMeta,
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

const Socials = () => {
  return (
    <>
      <div className="flex items-center gap-4.5">
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
      </div>
    </>
  )
}

export default Socials
