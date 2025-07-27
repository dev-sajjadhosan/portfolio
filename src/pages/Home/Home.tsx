import Header from '../../components/Header/Header'
import Socials from '../../components/Share/Socials'
import Clock from '../../components/shared/Clock'
import useAuth from '../../hooks/useAuth'
import dev from '../../assets/image.png'

const HomePage = () => {
  const { period } = useAuth()
  return (
    <>
      <div className="p-5 flex flex-col justify-between h-screen relative z-20">
        <Header />
        <div className="fixed top-1/2 left-1/2 -translate-1/2 text-[21rem] md:text-[30rem] museo text-[#1F1F1F] -z-10">
          {period}
        </div>
        <section id="home" className="h-fit flex flex-col-reverse md:flex-row gap-5 items-center justify-around">
          <div className="flex flex-col gap-1.5">
            <Socials />
            <h1 className="text-3xl mt-3">Mohammad Sajjad Hosan</h1>
            <h3 className="text-md font-light">
              Full-Stack Developer | React, Node.js, MongoDB | MERN Stack |
              Remote Ready
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center">
             <img src={dev} width={400} alt="" />
            </div>
          </div>
        </section>
        <footer className="flex justify-around items-center">
          <Clock />
          <button className="btn btn-sm btn-soft btn-accent">v</button>
        </footer>
      </div>
    </>
  )
}
export default HomePage
