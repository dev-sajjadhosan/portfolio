import { TbArrowBigLeftLine } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

type BtnProps = {
  type?: 'ghost' | 'default' | 'outline'
}

const BackBtn = ({ type = 'default' }: BtnProps) => {
  const nav = useNavigate()
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        onClick={() => nav(-1)}
        className={`btn btn-sm ${
          type === 'default' ? 'btn-primary' : `btn-[${type}]`
        }`}
      >
        <TbArrowBigLeftLine size={17} /> Back
      </motion.button>
    </>
  )
}

export default BackBtn
