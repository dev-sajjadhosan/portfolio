import { TbX } from 'react-icons/tb'
import { QRCodeSVG } from 'qrcode.react'
import dev from '../../assets/user.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

const qrLinks = [
  {
    name: 'Whatsapp',
    url: 'https://wa.me/8801822398936',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/@mohammadsajjadhosan',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/1253622802448257044',
  },
  {
    name: 'Github',
    url: 'https://github.com/dev-sajjadhosan',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/devsajjadhosan',
  },
]

type QrLink = {
  name: string
  url: string
}

const Viewqrcode = () => {
  const [qrcode, setQrcode] = useState<QrLink | undefined>(qrLinks[0])
  return (
    <>
      <dialog className="modal" id="view_qrcode">
        <div className="modal-box max-w-3xl w-11/12 p-11 text-primary shadow shadow-accent">
          <div className="flex items-center justify-between">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-2xl font-light mb-4"
            >
              My QR Code
            </motion.h3>
            <form method="dialog">
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="btn btn-sm btn-primary btn-soft"
              >
                <TbX size={17} />
                Close
              </motion.button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center mt-3">
            <div className="flex flex-col md:flex-row items-center gap-9 bg-base-300 text-primary p-9 rounded-2xl w-full md:w-5/6">
              <div className="flex flex-col items-center">
                <div className="avatar w-33 h-33">
                  <motion.img
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    src={dev}
                    alt=""
                  />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="text-xl font-semibold"
                >
                  Mohammad Sajjad Hosan
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                  className="text-md text-gray-400"
                >
                  {qrcode?.name} Content
                </motion.h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
              >
                <QRCodeSVG
                  className="p-5"
                  value={qrcode?.url || ''}
                  title={qrcode?.name || ''}
                  size={210}
                  bgColor={'#000'}
                  fgColor={'#fff'}
                  level={'H'}
                />
              </motion.div>
            </div>
            <div className="flex items-center mt-2">
              {qrLinks.map((l, i) => (
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * i, duration: 0.7 }}
                  key={i}
                  onClick={() => setQrcode(l)}
                  className={`btn btn-sm btn-primary join-item ${
                    l.name === qrcode?.name ? 'btn-soft' : 'btn-ghost'
                  }`}
                >
                  {l.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Viewqrcode
