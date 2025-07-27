import {
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandMeta,
  TbMailPin,
} from 'react-icons/tb'
import { motion } from 'motion/react'

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
      <motion.div className="flex items-center gap-4.5">
        {socialLinks.map((s, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.4 }}
            title={s.title}
            className="btn btn-sm btn-soft btn-success tooltip"
            data-tip={s.tooltip}
          >
            {s.icon}
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}

export default Socials
