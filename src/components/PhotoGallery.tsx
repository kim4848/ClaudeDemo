import { useState } from 'react'
import './PhotoGallery.css'

interface Photo {
  id: number
  src: string
  alt: string
  category: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/huset-facade.jpg',
    alt: 'Casa Mil Palmeras - Spansk villa med palmer og hvidt hegn',
    category: 'Facade'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    alt: 'Moderne stue med sofa og naturligt lys',
    category: 'Stue'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    alt: 'Fuldt udstyret køkken med moderne apparater',
    category: 'Køkken'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    alt: 'Komfortabelt soveværelse med dobbeltseng',
    category: 'Soveværelse'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    alt: 'Terrasse med havudsigt',
    category: 'Terrasse'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    alt: 'Moderne badeværelse med brusekabine',
    category: 'Badeværelse'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    alt: 'Nærliggende strand med krystalklart vand',
    category: 'Strand'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
    alt: 'Swimmingpool i feriekomplekset',
    category: 'Pool'
  }
]

const categories = ['Alle', ...new Set(photos.map(p => p.category))]

function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filteredPhotos = activeCategory === 'Alle'
    ? photos
    : photos.filter(p => p.category === activeCategory)

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
