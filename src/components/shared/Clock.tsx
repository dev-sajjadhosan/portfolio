import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { motion } from 'motion/react'

const formatTime = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`
}

const colors = [
  '#3B82F6',
  '#F97316',
  '#22C55E',
  '#EF4444',
  '#8B5CF6',
  '#F4F4F5',
]

const Clock: React.FC = () => {
  const { setPeriod } = useAuth()
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    ampm: 'AM',
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12
      hours = hours ? hours : 12 // 0 => 12

      setTime({ hours, minutes, seconds, ampm })
      setPeriod?.(ampm)
    }

    const interval = setInterval(updateTime, 1000)
    updateTime() // init right away

    return () => clearInterval(interval)
  }, [setPeriod])

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.4 }}
        className="text-2xl md:text-xl flex items-center gap-1"
      >
        <span style={{ color: colors[time.seconds % colors.length] }}>
          {formatTime(time.hours)}
        </span>
        :
        <span style={{ color: colors[(time.seconds % colors.length) + 1] }}>
          {formatTime(time.minutes)}
        </span>
        :
        <span style={{ color: colors[(time.seconds % colors.length) + 2] }}>
          {formatTime(time.seconds)}
        </span>
      </motion.h2>
    </div>
  )
}

export default Clock
