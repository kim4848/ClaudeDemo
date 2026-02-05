import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getPhotos, uploadPhoto, deletePhotoWithBlob, type GalleryPhoto } from '../utils/photoStorage'
import './GalleryAdmin.css'

const CATEGORIES = [
  'Facade',
  'Stue',
  'Køkken',
  'Soveværelse',
  'Badeværelse',
  'Terrasse',
  'Pool',
  'Strand',
  'Udsigt',
  'Andet'
]

function GalleryAdmin() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(getPhotos)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])
  const [altText, setAltText] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const reloadPhotos = () => {
    setPhotos(getPhotos())
  }

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setUploading(true)
    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) {
          alert(`${file.name} er ikke et billede`)
          continue
        }
        await uploadPhoto(file, selectedCategory, altText || file.name)
      }
      reloadPhotos()
      setAltText('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Upload error:', error)
      const message = error instanceof Error ? error.message : 'Ukendt fejl'
      alert(`Upload fejlede: ${message}`)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (photo: GalleryPhoto) => {
    if (!window.confirm('Er du sikker på at du vil slette dette billede?')) return

    try {
      await deletePhotoWithBlob(photo)
      reloadPhotos()
    } catch (error) {
      console.error('Delete error:', error)
      alert('Kunne ikke slette billedet')
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleUpload(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  return (
    <div className="gallery-admin">
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="admin-nav-links">
            <Link to="/" className="admin-back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Forside
            </Link>
            <Link to="/admin" className="admin-back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Bookinger
            </Link>
          </div>
          <h1>Galleri Administration</h1>
          <p>Upload og administrer billeder til galleriet</p>
        </div>
      </header>

      <main className="admin-main">
        <div className="upload-section">
          <h2>Upload billeder</h2>

          <div className="upload-form">
            <div className="form-row">
              <label>
                Kategori
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>

              <label>
                Beskrivelse (valgfri)
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="F.eks. 'Stuen med havudsigt'"
                />
              </label>
            </div>

            <div
              className={`drop-zone ${dragOver ? 'drag-over' : ''} ${uploading ? 'uploading' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleUpload(e.target.files)}
                style={{ display: 'none' }}
              />

              {uploading ? (
                <div className="upload-progress">
                  <div className="spinner"></div>
                  <p>Uploader...</p>
                </div>
              ) : (
                <>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <p>Træk billeder hertil eller klik for at vælge</p>
                  <span>Understøtter JPG, PNG, WebP</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="photos-section">
          <h2>Uploadede billeder ({photos.length})</h2>

          {photos.length === 0 ? (
            <div className="empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p>Ingen billeder uploadet endnu</p>
            </div>
          ) : (
            <div className="photos-grid">
              {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                  <div className="photo-image">
                    <img src={photo.url} alt={photo.alt} />
                  </div>
                  <div className="photo-details">
                    <span className="photo-category-badge">{photo.category}</span>
                    <p className="photo-alt">{photo.alt}</p>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(photo)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                      Slet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default GalleryAdmin
