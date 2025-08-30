import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import Socials from '../../components/shared/Socials'
import BackBtn from '../../components/shared/BackBtn'
import { TbMailCheck, TbQrcode, TbScanEye, TbUserStar } from 'react-icons/tb'
import { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import HelmetTitle from '../../components/shared/HelmeTitle'
import useAxios from '../../hooks/useAxios'
import type { alertDoc } from '../../../types'

const ContactPage = () => {
  const { axiosUrl } = useAxios()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<alertDoc>({
    success: false,
    message: '',
  })
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async () => {
    const data = {
      name: form.name,
      email: form.email,
      message: form.message,
    }
    setForm(data)

    setLoading(true)
    const res = await axiosUrl.post('/contact', data, {
      headers: {
        'x-private-key': import.meta.env.VITE_PRIVATE,
      },
    })
    if (res?.data?.success) {
      setLoading(false)
      form.name = ''
      form.email = ''
      form.message = ''
    }
    setAlert(res?.data)

    // You can add further logic here, such as sending the data to a server
  }

  return (
    <>
      <HelmetTitle title="Contact - Portfolio" />
      <motion.section layout className="min-h-screen p-7 text-primary">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="flex items-center justify-between mb-5"
        >
          <BackBtn />
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="btn btn-sm btn-primary btn-soft px-5"
            >
              <TbUserStar size={17} />
              Hire ME
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
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
        </motion.div>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-4xl font-bold mb-2"
          >
            Let's Talk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-lg text-neutral-500"
          >
            Got a project, job, or just wanna vibe? Drop me a line 📩
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-19">
          {/* Contact Info */}
          {form?.name || form?.email || form?.message ? (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-base-300 card overflow-hidden p-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <motion.h3
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="font-normal text-primary"
                >
                  New Message
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-xs text-gray-400 badge"
                >
                  {new Date().toLocaleString()}
                </motion.span>
              </div>

              {/* Body */}
              <div className="px-4 py-3 space-y-1">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <span className="font-light text-gray-300">From:</span>{' '}
                  <span className="link link-info no-underline">
                    {form.email || 'no@gmail.yet'}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <span className="font-light text-gray-300">Name:</span>{' '}
                  <span>{form.name || 'Anonymous'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                >
                  <span className="font-light text-gray-300">
                    Message:
                    <p className="mt-1 whitespace-pre-nowrap text-xs tracking-wider text-gray-400">
                      {form.message.slice(0, 800) + '....' || 'No message yet.'}
                    </p>
                  </span>
                </motion.div>
              </div>

              {/* Footer */}

              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="text-xs italic text-neutral-400 justify-self-end mt-auto self-end"
              >
                Preview only — not sent yet
              </motion.span>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-3">
              <Socials />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex items-start gap-4 my-7"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex items-start gap-4 my-1 mb-7"
              >
                <MdPhone className="text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+8801822398936" className="">
                    +8801822398936
                  </a>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
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
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
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
              </motion.button>
            </div>
          )}

          {alert.success ? (
            <div className="card items-center justify-center p-11 bg-base-300 gap-1">
              <TbMailCheck size={45} className="text-info" />
              <h3 className="text-2xl">Thank You!</h3>
              <p className="text-md font-light">
                {alert?.message || 'nothing is here'}
              </p>
            </div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="space-y-6"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-lg"
              >
                Want to say hello!
              </motion.h3>
              <motion.input
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                type="text"
                value={form.name}
                {...register('name', { required: true })}
                onChange={handleChange}
                className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
                placeholder="Your name"
                required
              />

              <motion.input
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                type="email"
                {...register('email', { required: true })}
                value={form.email}
                onChange={handleChange}
                className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
                placeholder="you@example.com"
                required
              />

              <motion.textarea
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
                rows={7}
                {...register('message', { required: true })}
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></motion.textarea>

              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                type="submit"
                className="btn btn-sm btn-primary btn-soft px-7"
              >
                {loading ? (
                  <>
                    <span className="loading loading-sm loading-spinner" />
                    Sending
                  </>
                ) : (
                  <>🚀 Send Message</>
                )}
              </motion.button>
            </motion.form>
          )}
          {/* Contact Form */}
        </div>
      </motion.section>
    </>
  )
}

export default ContactPage
