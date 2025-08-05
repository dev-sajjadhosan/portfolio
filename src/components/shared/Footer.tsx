import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-between p-9 w-full border-2 border-base-300 museo text-primary">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl">Mohammad Sajjad Hosan</h1>

          <ul className="menu menu-horizontal">
            <li>
              <Link to="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/my-tools">
                <a>My Tools</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact me</a>
              </Link>
            </li>
            <li>
              <Link to="/about-dev">
                <a>About dev</a>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <a>Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="text-lg mt-5 italic font-light tracking-wide text-gray-400">
          “Thanks for scrolling this far. Let's build something great together —
          or just talk code and coffee ☕”
        </h3>
      </footer>
    </>
  )
}

export default Footer
