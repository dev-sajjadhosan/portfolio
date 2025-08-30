import {
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandMeta,
  TbMailPin,
} from 'react-icons/tb'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

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

const Socials = () => {
  return (
    <>
      <motion.div className="flex items-center gap-4.5">
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
      </motion.div>
    </>
  )
}

export default Socials
