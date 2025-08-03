import { TbHourglassEmpty } from 'react-icons/tb'
import { motion } from 'framer-motion'

const ComingSoon = () => {
  return (
    <>
      <dialog className="modal" id="coming_view">
        <div className="modal-box p-7 w-11/12 shadow shadow-accent text-primary">
          <div className="flex flex-col items-center justify-center mt-3">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <TbHourglassEmpty size={45} />
            </motion.div>
            <div className="text-center mt-5">
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-lg text-gray-500"
              >
                Stay tuned for updates!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-sm text-gray-400 mb-3"
              >
                We are working hard to bring you something amazing.
              </motion.p>
              <form method="dialog">
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="btn btn-sm btn-primary btn-soft"
                >
                  Close
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ComingSoon
