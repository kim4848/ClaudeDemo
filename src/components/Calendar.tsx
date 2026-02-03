import { useState } from 'react'
import { getBookedDates } from '../utils/bookingStorage'
import './Calendar.css'

interface CalendarProps {
  onDateRangeSelect: (startDate: string, endDate: string) => void
  selectedStart: string | null
  selectedEnd: string | null
}

const MONTH_NAMES = [
  'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'December'
]

const DAY_NAMES = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn']

function Calendar({ onDateRangeSelect, selectedStart, selectedEnd }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const bookedDates = getBookedDates()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()

  // Get the day of week (0 = Sunday, 1 = Monday, etc.)
  // Convert to Monday-based (0 = Monday)
  let startDay = firstDayOfMonth.getDay() - 1
  if (startDay < 0) startDay = 6

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isDateBooked = (dateStr: string): 'confirmed' | 'pending' | null => {
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

  const isDateInRange = (dateStr: string): boolean => {
    if (!selectedStart || !selectedEnd) return false
    const date = new Date(dateStr)
    const start = new Date(selectedStart)
    const end = new Date(selectedEnd)
    return date >= start && date <= end
  }

  const isDateSelectable = (dateStr: string): boolean => {
    const date = new Date(dateStr)
    if (date < today) return false
    const bookedStatus = isDateBooked(dateStr)
    return bookedStatus !== 'confirmed'
  }

  const handleDateClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`

    if (!isDateSelectable(dateStr)) return

    if (!selectedStart || (selectedStart && selectedEnd)) {
      // Start new selection
      onDateRangeSelect(dateStr, '')
    } else {
      // Complete the selection
      const startDate = new Date(selectedStart)
      const clickedDate = new Date(dateStr)

      if (clickedDate < startDate) {
        onDateRangeSelect(dateStr, selectedStart)
      } else {
        onDateRangeSelect(selectedStart, dateStr)
      }
    }
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const renderDays = () => {
    const days = []

    // Empty cells for days before the first day of month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const bookedStatus = isDateBooked(dateStr)
      const inRange = isDateInRange(dateStr)
      const selectable = isDateSelectable(dateStr)
      const isStart = selectedStart === dateStr
      const isEnd = selectedEnd === dateStr
      const isToday = new Date(dateStr).toDateString() === today.toDateString()

      let className = 'calendar-day'
      if (!selectable) className += ' disabled'
      if (bookedStatus === 'confirmed') className += ' booked-confirmed'
      if (bookedStatus === 'pending') className += ' booked-pending'
      if (inRange) className += ' in-range'
      if (isStart) className += ' range-start'
      if (isEnd) className += ' range-end'
      if (isToday) className += ' today'

      days.push(
        <button
          key={day}
          className={className}
          onClick={() => handleDateClick(day)}
          disabled={!selectable}
          type="button"
        >
          {day}
        </button>
      )
    }

    return days
  }

  // Check if previous month should be disabled (can't go before current month)
  const canGoPrevious = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth())

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          className="calendar-nav"
          onClick={goToPreviousMonth}
          disabled={!canGoPrevious}
          type="button"
        >
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
      <div className="calendar-weekdays">
        {DAY_NAMES.map(day => (
          <div key={day} className="calendar-weekday">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {renderDays()}
      </div>
      <div className="calendar-legend">
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
      </div>
    </div>
  )
}

export default Calendar
