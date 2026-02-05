import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminHome from './pages/AdminHome'
import Admin from './pages/Admin'
import GalleryAdmin from './pages/GalleryAdmin'
import CalendarAdmin from './pages/CalendarAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/bookings" element={<Admin />} />
        <Route path="/admin/gallery" element={<GalleryAdmin />} />
        <Route path="/admin/calendar" element={<CalendarAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
