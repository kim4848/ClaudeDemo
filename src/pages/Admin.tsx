import { useState } from 'react'
import type { Booking } from '../types/booking'
import { getBookings, updateBookingStatus, deleteBooking } from '../utils/bookingStorage'
import AdminLayout from '../components/AdminLayout'
import './Admin.css'

type FilterStatus = 'all' | 'pending' | 'confirmed' | 'rejected'

function getSortedBookings(): Booking[] {
  const data = getBookings()
  // Sort by creation date, newest first
  data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return data
}

function Admin() {
  const [bookings, setBookings] = useState<Booking[]>(getSortedBookings)
  const [filter, setFilter] = useState<FilterStatus>('all')

  const reloadBookings = () => {
    setBookings(getSortedBookings())
  }

  const handleConfirm = (id: string) => {
    updateBookingStatus(id, 'confirmed')
    reloadBookings()
  }

  const handleReject = (id: string) => {
    updateBookingStatus(id, 'rejected')
    reloadBookings()
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Er du sikker på at du vil slette denne booking?')) {
      deleteBooking(id)
      reloadBookings()
    }
  }

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true
    return booking.status === filter
  })

  const pendingCount = bookings.filter(b => b.status === 'pending').length
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length
  const rejectedCount = bookings.filter(b => b.status === 'rejected').length

  return (
    <AdminLayout
      title="Booking Administration"
      description="Administrer alle bookinger for Casa Mil Palmeras"
    >
      <div className="admin-content">
        <div className="admin-stats">
          <div className="stat-card">
            <span className="stat-number">{bookings.length}</span>
            <span className="stat-label">Total bookinger</span>
          </div>
          <div className="stat-card pending">
            <span className="stat-number">{pendingCount}</span>
            <span className="stat-label">Afventer</span>
          </div>
          <div className="stat-card confirmed">
            <span className="stat-number">{confirmedCount}</span>
            <span className="stat-label">Bekræftet</span>
          </div>
          <div className="stat-card rejected">
            <span className="stat-number">{rejectedCount}</span>
            <span className="stat-label">Afvist</span>
          </div>
        </div>

        <div className="admin-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Alle ({bookings.length})
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Afventer ({pendingCount})
          </button>
          <button
            className={`filter-btn ${filter === 'confirmed' ? 'active' : ''}`}
            onClick={() => setFilter('confirmed')}
          >
            Bekræftet ({confirmedCount})
          </button>
          <button
            className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
            onClick={() => setFilter('rejected')}
          >
            Afvist ({rejectedCount})
          </button>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Ingen bookinger</h3>
            <p>
              {filter === 'all'
                ? 'Der er ingen bookinger endnu.'
                : `Der er ingen ${filter === 'pending' ? 'afventende' : filter === 'confirmed' ? 'bekræftede' : 'afviste'} bookinger.`}
            </p>
          </div>
        ) : (
          <div className="booking-list">
            {filteredBookings.map(booking => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onConfirm={handleConfirm}
                onReject={handleReject}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

interface BookingCardProps {
  booking: Booking
  onConfirm: (id: string) => void
  onReject: (id: string) => void
  onDelete: (id: string) => void
}

function BookingCard({ booking, onConfirm, onReject, onDelete }: BookingCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('da-DK', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const formatDateTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getDays = () => {
    const start = new Date(booking.startDate)
    const end = new Date(booking.endDate)
    const diffTime = end.getTime() - start.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const statusLabels = {
    pending: 'Afventer',
    confirmed: 'Bekræftet',
    rejected: 'Afvist'
  }

  return (
    <div className={`booking-card status-${booking.status}`}>
      <div className="booking-card-header">
        <div className="booking-guest">
          <h3>{booking.name}</h3>
          <span className={`status-badge ${booking.status}`}>
            {statusLabels[booking.status]}
          </span>
        </div>
        <span className="booking-created">Oprettet {formatDateTime(booking.createdAt)}</span>
      </div>

      <div className="booking-details">
        <div className="booking-dates">
          <div className="date-block">
            <span className="date-label">Ankomst</span>
            <span className="date-value">{formatDate(booking.startDate)}</span>
          </div>
          <div className="date-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <div className="date-block">
            <span className="date-label">Afrejse</span>
            <span className="date-value">{formatDate(booking.endDate)}</span>
          </div>
          <div className="days-badge">{getDays()} dage</div>
        </div>

        <div className="booking-contact">
          <div className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href={`mailto:${booking.email}`}>{booking.email}</a>
          </div>
          <div className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href={`tel:${booking.phone}`}>{booking.phone}</a>
          </div>
        </div>
      </div>

      <div className="booking-actions">
        {booking.status === 'pending' && (
          <>
            <button
              className="action-btn confirm"
              onClick={() => onConfirm(booking.id)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Bekræft
            </button>
            <button
              className="action-btn reject"
              onClick={() => onReject(booking.id)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Afvis
            </button>
          </>
        )}
        {booking.status === 'rejected' && (
          <button
            className="action-btn confirm"
            onClick={() => onConfirm(booking.id)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Bekræft alligevel
          </button>
        )}
        {booking.status === 'confirmed' && (
          <button
            className="action-btn reject"
            onClick={() => onReject(booking.id)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Annuller
          </button>
        )}
        <button
          className="action-btn delete"
          onClick={() => onDelete(booking.id)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
          Slet
        </button>
      </div>
    </div>
  )
}

export default Admin
