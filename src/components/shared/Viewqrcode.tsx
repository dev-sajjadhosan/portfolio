import { TbX } from 'react-icons/tb'
import { QRCodeSVG } from 'qrcode.react'
import dev from '../../assets/user.png'
import { useState } from 'react'

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
            <h3 className="text-2xl font-light mb-4">My QR Code</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-primary btn-soft">
                <TbX size={17} />
                Close
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center mt-3">
            <div className="flex flex-col md:flex-row items-center gap-9 bg-base-300 text-primary p-9 rounded-2xl w-full md:w-5/6">
              <div className="flex flex-col items-center">
                <div className="avatar w-33 h-33">
                  <img src={dev} alt="" />
                </div>
                <h1 className="text-xl font-semibold">Mohammad Sajjad Hosan</h1>
                <h3 className="text-md text-gray-400">{qrcode?.name} Content</h3>
              </div>
              <QRCodeSVG
                className="p-5"
                value={qrcode?.url || ''}
                title={qrcode?.name || ''}
                size={210}
                bgColor={'#000'}
                fgColor={'#fff'}
                level={'H'}
              />
            </div>
            <div className="flex items-center mt-2">
              {qrLinks.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setQrcode(l)}
                  className={`btn btn-sm btn-primary join-item ${
                    l.name === qrcode?.name ? 'btn-soft' : 'btn-ghost'
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Viewqrcode
