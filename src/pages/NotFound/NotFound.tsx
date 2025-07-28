import { Link } from 'react-router-dom'
import error from '../../assets/error.json'

import Player from 'lottie-react'

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-1 bg-[#09090b] text-white min-h-[95.5vh] lg:h-screen">
        <Player
          autoplay={true}
          loop={true}
          animationData={error}
          className="w-[35rem] md:w-[39rem]"
        />
        <h1 className="text-4xl font-bold mt-11">404: Function Not Found()</h1>
        <p className="text-md text-gray-400">
          Bro, this route is undefined. Like your ex’s loyalty. 👀
        </p>
        <Link to="/home" className="btn btn-primary mt-3">
          Yeet Me Home
        </Link>
      </div>
    </>
  )
}

export default NotFound
