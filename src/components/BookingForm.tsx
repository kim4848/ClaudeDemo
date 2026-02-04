import { useState } from 'react'
import Calendar from './Calendar'
import { createBooking, isDateRangeAvailable, getDaysBetween } from '../utils/bookingStorage'
import './BookingForm.css'

const MIN_BOOKING_DAYS = 4

interface BookingFormProps {
  selectedStart: string | null
  selectedEnd: string | null
  onDateChange: (start: string | null, end: string | null) => void
}

function BookingForm({ selectedStart, selectedEnd, onDateChange }: BookingFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDateRangeSelect = (start: string, end: string) => {
    onDateChange(start || null, end || null)
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedStart || !selectedEnd) {
      setErrorMessage('Vælg venligst ankomst- og afrejsedato i kalenderen')
      return
    }

    const days = getDaysBetween(selectedStart, selectedEnd)
    if (days < MIN_BOOKING_DAYS) {
      setErrorMessage(`Minimum booking er ${MIN_BOOKING_DAYS} dage. Du har valgt ${days} dag${days === 1 ? '' : 'e'}.`)
      return
    }

    if (!isDateRangeAvailable(selectedStart, selectedEnd)) {
      setErrorMessage('De valgte datoer er ikke tilgængelige. Vælg venligst andre datoer.')
      return
    }

    try {
      createBooking({
        name,
        email,
        phone,
        startDate: selectedStart,
        endDate: selectedEnd,
      })

      setSubmitStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      onDateChange(null, null)
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Der opstod en fejl. Prøv venligst igen.')
    }
  }

  const selectedDays = selectedStart && selectedEnd ? getDaysBetween(selectedStart, selectedEnd) : 0

  return (
    <div className="booking-form-container">
      {submitStatus === 'success' ? (
        <div className="booking-success">
          <div className="success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3>Tak for din booking!</h3>
          <p>Vi har modtaget din forespørgsel og vender tilbage inden for 24 timer med bekræftelse.</p>
          <button
            className="new-booking-btn"
            onClick={() => setSubmitStatus('idle')}
            type="button"
          >
            Lav ny booking
          </button>
        </div>
      ) : (
        <>
          <div className="booking-calendar-section">
            <h3>Vælg datoer</h3>
            <p className="calendar-hint">Klik for at vælge ankomst, klik igen for afrejse (min. {MIN_BOOKING_DAYS} dage)</p>
            <Calendar
              onDateRangeSelect={handleDateRangeSelect}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
            />
            {selectedStart && selectedEnd && (
              <div className="selected-dates">
                <div className="date-display">
                  <span className="date-label">Ankomst</span>
                  <span className="date-value">{formatDate(selectedStart)}</span>
                </div>
                <div className="date-separator">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="date-display">
                  <span className="date-label">Afrejse</span>
                  <span className="date-value">{formatDate(selectedEnd)}</span>
                </div>
                <div className="days-count">
                  {selectedDays} {selectedDays === 1 ? 'dag' : 'dage'}
                </div>
              </div>
            )}
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Dine oplysninger</h3>

            {errorMessage && (
              <div className="form-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
                {errorMessage}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="booking-name">Navn</label>
              <input
                type="text"
                id="booking-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dit fulde navn"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="booking-email">Email</label>
              <input
                type="email"
                id="booking-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@email.dk"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="booking-phone">Telefon</label>
              <input
                type="tel"
                id="booking-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+45 00 00 00 00"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send booking forespørgsel
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </>
      )}
    </div>
  )
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('da-DK', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export default BookingForm
