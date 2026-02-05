import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import GalleryAdmin from './pages/GalleryAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/gallery" element={<GalleryAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
