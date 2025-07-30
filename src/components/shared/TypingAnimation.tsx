import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function TypingAnimation() {
  return (
    <div className="mt-3">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="text-4xl mt-3"
      >
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Assalamu Alaikum !',
            1000,
            'I am Mohammad Sajjad Hosan.',
            1000,
            'I am an MERN Stack Developer.',
            1000,
          ]}
          speed={50}
          //   style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
      </motion.h1>
    </div>
  )
}
