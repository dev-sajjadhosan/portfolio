import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import CardView from '../../pages/Card/Card'
import AuthProvider from '../../context/AuthProvider'
import NotFound from '../../pages/NotFound/NotFound'
import ProjectsPage from '../../pages/Projects/Projects'
import LoadingPage from '../../pages/Loading/Loading'
import Feedback from '../../components/shared/Feedback'
import ProjectDetails from '../../pages/ProjectDetails/ProjectDetails'
import MyToolsPage from '../../pages/MyTools/MyTools'
import AboutDev from '../../pages/About/About'
import BlogPage from '../../pages/Blog/Blog'

const RouteLoaderWrapper = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200) // loader time on each route change
    return () => clearTimeout(timer)
  }, [location.pathname]) // trigger when route changes

  return loading ? (
    <LoadingPage />
  ) : (
    <Routes>
      <Route path="/" element={<CardView />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/view/:title" element={<ProjectDetails />} />
      <Route path="/my-tools" element={<MyToolsPage />} />
      <Route path="/about-dev" element={<AboutDev />} />
      <Route path="/blog" element={<BlogPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

const RootLay = () => {
  return (
    <AuthProvider>
      <div data-theme="luxury">
        <Feedback />

        <BrowserRouter>
          <RouteLoaderWrapper />
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}
export default RootLay
