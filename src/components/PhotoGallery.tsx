import { useState, useEffect, useMemo } from 'react'
import { getPhotos, type GalleryPhoto } from '../utils/photoStorage'
import './PhotoGallery.css'

interface Photo {
  id: string
  src: string
  alt: string
  category: string
}

function PhotoGallery() {
  const [uploadedPhotos, setUploadedPhotos] = useState<GalleryPhoto[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [activeCategory, setActiveCategory] = useState('Alle')

  useEffect(() => {
    setUploadedPhotos(getPhotos())
  }, [])

  // Combine uploaded photos (they take priority and show first)
  const allPhotos: Photo[] = useMemo(() => {
    return uploadedPhotos.map(p => ({
      id: p.id,
      src: p.url,
      alt: p.alt,
      category: p.category,
    }))
  }, [uploadedPhotos])

  const categories = useMemo(() => {
    const cats = new Set(allPhotos.map(p => p.category))
    return ['Alle', ...cats]
  }, [allPhotos])

  const filteredPhotos = activeCategory === 'Alle'
    ? allPhotos
    : allPhotos.filter(p => p.category === activeCategory)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = ''
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <section id="galleri" className="photo-gallery">
      <div className="photo-gallery-container">
        <div className="photo-gallery-header">
          <span className="section-badge">Galleri</span>
          <h2>Se lejligheden</h2>
          <p>Udforsk vores ferielejlighed gennem billeder af alle rum og faciliteter</p>
        </div>

        {allPhotos.length > 0 && (
          <div className="photo-categories">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {allPhotos.length === 0 ? (
          <div className="photo-empty-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p>Ingen billeder i galleriet endnu</p>
            <span>Upload billeder via admin-panelet</span>
          </div>
        ) : (
          <div className="photo-grid">
            {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              className="photo-card"
              onClick={() => openLightbox(photo)}
            >
              <div className="photo-image-wrapper">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="photo-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
              <div className="photo-info">
                <span className="photo-category">{photo.category}</span>
                <p className="photo-description">{photo.alt}</p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigatePhoto('prev') }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedPhoto.category}</span>
              <p>{selectedPhoto.alt}</p>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigatePhoto('next') }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery
