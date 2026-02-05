import { Link } from 'react-router-dom'
import { getBookings } from '../utils/bookingStorage'
import { getPhotos } from '../utils/photoStorage'
import { getBlockedDateStrings } from '../utils/blockedDatesStorage'
import AdminLayout from '../components/AdminLayout'
import './AdminHome.css'

function AdminHome() {
  const bookings = getBookings()
  const photos = getPhotos()
  const blockedDates = getBlockedDateStrings()

  const pendingCount = bookings.filter(b => b.status === 'pending').length
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length

  const adminSections = [
    {
      path: '/admin/bookings',
      title: 'Bookinger',
      description: 'Administrer alle booking-anmodninger. Bekræft, afvis eller slet bookinger.',
      icon: 'calendar',
      color: 'blue',
      stats: [
        { label: 'Total', value: bookings.length },
        { label: 'Afventer', value: pendingCount, highlight: pendingCount > 0 },
        { label: 'Bekræftet', value: confirmedCount },
      ]
    },
    {
      path: '/admin/calendar',
      title: 'Kalender',
      description: 'Se alle bookinger i kalendervisning og bloker datoer der ikke kan bookes.',
      icon: 'calendar-check',
      color: 'green',
      stats: [
        { label: 'Bekræftede', value: confirmedCount },
        { label: 'Blokerede datoer', value: blockedDates.length },
      ]
    },
    {
      path: '/admin/gallery',
      title: 'Galleri',
      description: 'Upload og administrer billeder til galleriet på hjemmesiden.',
      icon: 'image',
      color: 'purple',
      stats: [
        { label: 'Billeder', value: photos.length },
      ]
    },
  ]

  return (
    <AdminLayout
      title="Admin Oversigt"
      description="Velkommen til administrationen af Casa Mil Palmeras"
    >
      <div className="admin-home">
        <div className="admin-sections-grid">
          {adminSections.map(section => (
            <Link
              key={section.path}
              to={section.path}
              className={`admin-section-card color-${section.color}`}
            >
              <div className="section-card-header">
                <div className="section-icon">
                  {section.icon === 'calendar' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  )}
                  {section.icon === 'calendar-check' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                      <path d="M9 16l2 2 4-4"/>
                    </svg>
                  )}
                  {section.icon === 'image' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  )}
                </div>
                <svg className="section-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>

              <div className="section-stats">
                {section.stats.map((stat, index) => (
                  <div key={index} className={`section-stat ${stat.highlight ? 'highlight' : ''}`}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="admin-quick-actions">
          <h3>Hurtige handlinger</h3>
          <div className="quick-actions-grid">
            {pendingCount > 0 && (
              <Link to="/admin/bookings" className="quick-action pending">
                <span className="quick-action-badge">{pendingCount}</span>
                <span>afventende bookinger</span>
              </Link>
            )}
            <Link to="/admin/gallery" className="quick-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <span>Upload billeder</span>
            </Link>
            <Link to="/admin/calendar" className="quick-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Se kalender</span>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminHome
