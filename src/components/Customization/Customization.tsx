import { motion } from 'motion/react'
import { TbHash } from 'react-icons/tb'
import useAuth from '../../hooks/useAuth'

const CustomizeDropdown = () => {
  const { isCard, isLayout, isView, setIsCard, setIsLayout, setIsView } =
    useAuth()
  return (
    <>
      <>
        <div className="dropdown dropdown-bottom dropdown-center md:dropdown-end md:dropdown-center">
          <motion.button
            tabIndex={0}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="btn btn-sm btn-primary btn-soft"
          >
            <TbHash size={17} />
            Customization
          </motion.button>
          <div
            tabIndex={0}
            className="dropdown-content p-7 bg-base-300 rounded-xl z-10 w-sm md:w-xl shadow mt-3"
          >
            <h3 className="text-lg italic text-center">
              Customize your Layout
            </h3>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm">Layout Card</p>
                <div className="flex flex-wrap gap-2">
                  {['auto', 'row', 'column'].map((k, i) => (
                    <button
                      key={i}
                      onClick={() => setIsLayout?.(k)}
                      className={`btn btn-sm btn-primary btn-soft px-5 capitalize ${
                        isLayout === k && 'btn-active'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm">Layout View</p>
                <div className="flex flex-wrap gap-2">
                  {['default', '1', '2'].map(
                    (k: string | number, i: number) => (
                      <button
                        key={i}
                        onClick={() => setIsView?.(k)}
                        disabled
                        className={`btn btn-sm btn-primary btn-soft px-5 ${
                          isView === k && 'btn-active'
                        }`}
                      >
                        {k}
                      </button>
                    ),
                  )}
                  <button
                    className="btn btn-sm btn-primary btn-soft px-4"
                    disabled
                  >
                    Custom
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm">Card Layout</p>
              <div className="flex flex-wrap gap-2.5">
                {['both', 'only picture', 'only context'].map((k, i) => (
                  <button
                    key={i}
                    onClick={() => setIsCard?.(k)}
                    className={`btn btn-sm btn-primary btn-soft px-5 capitalize ${
                      isCard === k && 'btn-active'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default CustomizeDropdown
