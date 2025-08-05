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
import ContactPage from '../../pages/Contact/Contact'
import ViewLocation from '../../components/shared/ViewLocation'
import Viewqrcode from '../../components/shared/Viewqrcode'
import ComingSoon from '../../components/shared/Coming'
import ViewCollaborate from '../../components/shared/ViewCollaberate'
// import Dashboard from '../Dashboard/Dashboard'
// import CreateProject from '../../dpages/CreateProject/CreateProject'

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
      <Route path="/view/:id" element={<ProjectDetails />} />
      <Route path="/my-tools" element={<MyToolsPage />} />
      <Route path="/about-dev" element={<AboutDev />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* --------------------- */}

      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<h1>Dashboard Home</h1>} />
        <Route path="add-project" element={<CreateProject />} />
        <Route path="add-blog" element={<h1>Dashboard Create Blog</h1>} />
        <Route path="tools" element={<h1>Dashboard Add Tools</h1>} />
        <Route path="notification" element={<h1>Dashboard Notification</h1>} />
        <Route path="analyses" element={<h1>Dashboard analyses</h1>} />
      </Route> */}
      <Route path="*" element={<NotFound />} />

      {/* --------------------- */}
    </Routes>
  )
}

const RootLay = () => {
  return (
    <AuthProvider>
      <div data-theme="luxury">
        <Feedback />
        <ViewLocation />
        <Viewqrcode />
        <ComingSoon />
        <ViewCollaborate />

        <BrowserRouter>
          <RouteLoaderWrapper />
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}
export default RootLay
