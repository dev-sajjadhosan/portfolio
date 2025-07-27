import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

const formatTime = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`
}

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
      <h2 className="text-xl flex items-center gap-1 text-white">
        <span className="">{formatTime(time.hours)}</span>:
        <span className="">{formatTime(time.minutes)}</span>:
        <span className="">{formatTime(time.seconds)}</span>
      </h2>
    </div>
  )
}

export default Clock
