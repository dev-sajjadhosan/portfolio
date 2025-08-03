import { motion } from 'framer-motion'

const ViewCollaborate = () => {
  return (
    <>
      <dialog className="modal" id="view_collaberate">
        <div className="modal-box max-w-xl w-11/12 p-7 text-primary shadow shadow-accent">
          <div className="flex items-center justify-between">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-lg font-light"
            >
              Request Collaboration
            </motion.h3>
            <form method="dialog">
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="btn btn-sm btn-primary btn-soft"
              >
                Close
              </motion.button>
            </form>
          </div>
          <form action="" className="card gap-1.5 mt-5">
            <motion.input
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              type="text"
              name="name"
              className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
              placeholder="Your name"
              required
            />
            <motion.input
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              type="text"
              name="name"
              className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
              placeholder="Your email"
              required
            />
            <motion.textarea
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
              rows={5}
              name="message"
              placeholder="Type your message here..."
              required
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="btn btn-sm btn-primary btn-soft mt-5 mx-auto"
              type="submit"
            >
              Request Collaboration
            </motion.button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ViewCollaborate
