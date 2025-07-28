import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import CardView from '../../pages/Card/Card'
import ShareModal from '../../components/Share/Share'
import AuthProvider from '../../context/AuthProvider'
import NotFound from '../../pages/NotFound/NotFound'

const RootLay = () => {
  return (
    <>
      <AuthProvider>
        <div data-theme="luxury">
          <ShareModal />
          {/*  */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CardView />} />
              <Route path="/home" element={<HomePage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  )
}
export default RootLay
