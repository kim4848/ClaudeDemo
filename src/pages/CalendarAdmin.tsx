import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getBookedDates, getBookings } from '../utils/bookingStorage'
import { getBlockedDateStrings, addBlockedDate, removeBlockedDate, isDateBlocked } from '../utils/blockedDatesStorage'
import type { Booking } from '../types/booking'
import './CalendarAdmin.css'

const MONTH_NAMES = [
  'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'December'
]

const DAY_NAMES = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn']

function CalendarAdmin() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [blockedDates, setBlockedDates] = useState<string[]>(getBlockedDateStrings)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const bookedDates = getBookedDates()
  const allBookings = getBookings()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()

  let startDay = firstDayOfMonth.getDay() - 1
  if (startDay < 0) startDay = 6

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isDateBookedStatus = (dateStr: string): 'confirmed' | 'pending' | null => {
    const date = new Date(dateStr)
    for (const range of bookedDates) {
      const start = new Date(range.start)
      const end = new Date(range.end)
      if (date >= start && date < end) {
        return range.status as 'confirmed' | 'pending'
      }
    }
    return null
  }

  const getBookingForDate = (dateStr: string): Booking | null => {
    const date = new Date(dateStr)
    for (const booking of allBookings) {
      if (booking.status === 'rejected') continue
      const start = new Date(booking.startDate)
      const end = new Date(booking.endDate)
      if (date >= start && date < end) {
        return booking
      }
    }
    return null
  }

  const handleDateClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const bookedStatus = isDateBookedStatus(dateStr)

    // If date is booked, just show info
    if (bookedStatus) {
      setSelectedDate(dateStr)
      return
    }

    // Toggle blocked status
    if (isDateBlocked(dateStr)) {
      removeBlockedDate(dateStr)
    } else {
      addBlockedDate(dateStr)
    }
    setBlockedDates(getBlockedDateStrings())
    setSelectedDate(dateStr)
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('da-DK', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const renderDays = () => {
    const days = []

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="admin-calendar-day empty"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const bookedStatus = isDateBookedStatus(dateStr)
      const blocked = blockedDates.includes(dateStr)
      const isToday = new Date(dateStr).toDateString() === today.toDateString()
      const isPast = new Date(dateStr) < today
      const isSelected = selectedDate === dateStr

      let className = 'admin-calendar-day'
      if (isPast) className += ' past'
      if (bookedStatus === 'confirmed') className += ' booked-confirmed'
      if (bookedStatus === 'pending') className += ' booked-pending'
      if (blocked && !bookedStatus) className += ' blocked'
      if (isToday) className += ' today'
      if (isSelected) className += ' selected'

      days.push(
        <button
          key={day}
          className={className}
          onClick={() => handleDateClick(day)}
          type="button"
        >
          <span className="day-number">{day}</span>
          {bookedStatus === 'confirmed' && <span className="day-indicator">Booket</span>}
          {bookedStatus === 'pending' && <span className="day-indicator">Afventer</span>}
          {blocked && !bookedStatus && <span className="day-indicator">Blokeret</span>}
        </button>
      )
    }

    return days
  }

  const selectedBooking = selectedDate ? getBookingForDate(selectedDate) : null
  const selectedIsBlocked = selectedDate ? blockedDates.includes(selectedDate) : false

  // Calculate stats
  const blockedCount = blockedDates.length
  const confirmedBookingsCount = allBookings.filter(b => b.status === 'confirmed').length
  const pendingBookingsCount = allBookings.filter(b => b.status === 'pending').length

  return (
    <div className="calendar-admin">
      <header className="calendar-admin-header">
        <div className="calendar-admin-header-content">
          <Link to="/admin" className="admin-back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Tilbage til booking admin
          </Link>
          <h1>Kalender Administration</h1>
          <p>Se bookinger og bloker datoer der ikke kan bookes</p>
        </div>
      </header>

      <main className="calendar-admin-main">
        <div className="calendar-admin-stats">
          <div className="stat-card">
            <span className="stat-number">{confirmedBookingsCount}</span>
            <span className="stat-label">Bekræftede bookinger</span>
          </div>
          <div className="stat-card pending">
            <span className="stat-number">{pendingBookingsCount}</span>
            <span className="stat-label">Afventende</span>
          </div>
          <div className="stat-card blocked">
            <span className="stat-number">{blockedCount}</span>
            <span className="stat-label">Blokerede datoer</span>
          </div>
        </div>

        <div className="calendar-admin-content">
          <div className="admin-calendar-wrapper">
            <div className="admin-calendar">
              <div className="admin-calendar-header">
                <button className="calendar-nav" onClick={goToPreviousMonth} type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <span className="calendar-title">{MONTH_NAMES[month]} {year}</span>
                <button className="calendar-nav" onClick={goToNextMonth} type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <div className="admin-calendar-weekdays">
                {DAY_NAMES.map(day => (
                  <div key={day} className="admin-calendar-weekday">{day}</div>
                ))}
              </div>
              <div className="admin-calendar-grid">
                {renderDays()}
              </div>
              <div className="admin-calendar-legend">
                <div className="legend-item">
                  <span className="legend-color available"></span>
                  <span>Ledig</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color pending"></span>
                  <span>Afventer</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color booked"></span>
                  <span>Booket</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color blocked"></span>
                  <span>Blokeret</span>
                </div>
              </div>
            </div>

            <div className="calendar-help">
              <h4>Sådan bruger du kalenderen</h4>
              <ul>
                <li>Klik på en ledig dato for at <strong>blokere</strong> den</li>
                <li>Klik på en blokeret dato for at <strong>fjerne blokeringen</strong></li>
                <li>Bookede datoer kan ikke blokeres</li>
              </ul>
            </div>
          </div>

          <div className="calendar-admin-sidebar">
            <div className="sidebar-card">
              <h3>Valgt dato</h3>
              {selectedDate ? (
                <div className="selected-date-info">
                  <p className="selected-date-value">{formatDate(selectedDate)}</p>

                  {selectedBooking && (
                    <div className="selected-booking-info">
                      <span className={`status-badge ${selectedBooking.status}`}>
                        {selectedBooking.status === 'confirmed' ? 'Booket' : 'Afventer'}
                      </span>
                      <div className="booking-guest-info">
                        <strong>{selectedBooking.name}</strong>
                        <span>{selectedBooking.email}</span>
                        <span>{selectedBooking.phone}</span>
                      </div>
                      <div className="booking-period">
                        <span className="period-label">Periode:</span>
                        <span>{new Date(selectedBooking.startDate).toLocaleDateString('da-DK')} - {new Date(selectedBooking.endDate).toLocaleDateString('da-DK')}</span>
                      </div>
                    </div>
                  )}

                  {selectedIsBlocked && !selectedBooking && (
                    <div className="selected-blocked-info">
                      <span className="blocked-badge">Blokeret</span>
                      <p>Denne dato er blokeret og kan ikke bookes.</p>
                      <button
                        className="unblock-btn"
                        onClick={() => {
                          removeBlockedDate(selectedDate)
                          setBlockedDates(getBlockedDateStrings())
                        }}
                      >
                        Fjern blokering
                      </button>
                    </div>
                  )}

                  {!selectedBooking && !selectedIsBlocked && (
                    <div className="selected-available-info">
                      <span className="available-badge">Ledig</span>
                      <p>Denne dato er tilgængelig for booking.</p>
                      <button
                        className="block-btn"
                        onClick={() => {
                          addBlockedDate(selectedDate)
                          setBlockedDates(getBlockedDateStrings())
                        }}
                      >
                        Bloker dato
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="no-selection">Klik på en dato for at se detaljer</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CalendarAdmin
