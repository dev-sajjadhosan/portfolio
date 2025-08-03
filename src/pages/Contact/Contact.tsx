import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import Socials from '../../components/shared/Socials'
import BackBtn from '../../components/shared/BackBtn'
import { TbQrcode, TbScanEye, TbUserStar } from 'react-icons/tb'
import { useState } from 'react'
import { motion } from 'motion/react'

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <section className="min-h-screen p-7 text-primary">
      <div className="flex items-center justify-between mb-5">
        <BackBtn />
        <div className="flex items-center gap-2">
          <motion.button
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="btn btn-sm btn-primary btn-soft px-5"
          >
            <TbUserStar size={17} />
            Hire ME
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="btn btn-sm btn-primary btn-soft px-3"
            onClick={() => {
              const modal = document.getElementById(
                'resume_modal',
              ) as HTMLDialogElement
              modal?.showModal()
            }}
          >
            <TbScanEye size={17} />
            View Resume
          </motion.button>
        </div>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Let's Talk</h2>
        <p className="text-lg text-neutral-500">
          Got a project, job, or just wanna vibe? Drop me a line 📩
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-19">
        {/* Contact Info */}
        {form?.name || form?.email || form?.message ? (
          <div className="bg-base-300 card overflow-hidden p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <div className="font-normal text-primary">New Message</div>
              <span className="text-xs text-gray-400">
                {new Date().toLocaleString()}
              </span>
            </div>

            {/* Body */}
            <div className="px-4 py-3 space-y-1">
              <div>
                <span className="font-light text-gray-300">From:</span>{' '}
                <span className="link link-info no-underline">
                  {form.email || 'no@gmail.yet'}
                </span>
              </div>

              <div>
                <span className="font-light text-gray-300">Name:</span>{' '}
                <span>{form.name || 'Anonymous'}</span>
              </div>

              <div>
                <span className="font-light text-gray-300">
                  Message:
                  <p className="mt-1 whitespace-pre-nowrap text-xs tracking-wider text-gray-400">
                    {form.message.slice(0, 800) + '....' || 'No message yet.'}
                  </p>
                </span>
              </div>
            </div>

            {/* Footer */}

            <span className="text-xs italic text-neutral-400 justify-self-end mt-auto self-end">
              Preview only — not sent yet
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Socials />
            <div className="flex items-start gap-4 my-7">
              <MdEmail className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:devsajjadhosan@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  devsajjadhosan@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 my-1 mb-7">
              <MdPhone className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+8801822398936" className="">
                  +8801822398936
                </a>
              </div>
            </div>

            <button
              className="btn btn-primary btn-soft"
              onClick={() => {
                const dialog = document.getElementById(
                  'view_qrcode',
                ) as HTMLDialogElement
                dialog?.showModal()
              }}
            >
              <TbQrcode className="text-xl mt-1" />
              Instant Contact
            </button>

            <button
              className="btn btn-primary btn-soft"
              onClick={() => {
                const dialog = document.getElementById(
                  'view_location',
                ) as HTMLDialogElement
                dialog?.showModal()
              }}
            >
              <MdLocationOn className="text-xl mt-1" />
              Location
            </button>
          </div>
        )}

        {/* Contact Form */}
        <form className="space-y-6">
          <h3 className="text-lg">Want to say hello!</h3>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
            placeholder="you@example.com"
            required
          />

          <textarea
            className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-sm btn-primary btn-soft px-7"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
