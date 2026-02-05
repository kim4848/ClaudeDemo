import type { Booking, BookingFormData, BookingStatus } from '../types/booking'
import { getBlockedDateStrings } from './blockedDatesStorage'

const STORAGE_KEY = 'casa-mil-palmeras-bookings'

export function getBookings(): Booking[] {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []
  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveBookings(bookings: Booking[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

export function createBooking(formData: BookingFormData): Booking {
  const booking: Booking = {
    id: crypto.randomUUID(),
    ...formData,
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
  const bookings = getBookings()
  bookings.push(booking)
  saveBookings(bookings)
  return booking
}

export function updateBookingStatus(id: string, status: BookingStatus): Booking | null {
  const bookings = getBookings()
  const index = bookings.findIndex(b => b.id === id)
  if (index === -1) return null
  bookings[index].status = status
  saveBookings(bookings)
  return bookings[index]
}

export function deleteBooking(id: string): boolean {
  const bookings = getBookings()
  const filtered = bookings.filter(b => b.id !== id)
  if (filtered.length === bookings.length) return false
  saveBookings(filtered)
  return true
}

export function getBookedDates(): { start: string; end: string; status: BookingStatus }[] {
  const bookings = getBookings()
  return bookings
    .filter(b => b.status !== 'rejected')
    .map(b => ({
      start: b.startDate,
      end: b.endDate,
      status: b.status,
    }))
}

export function isDateRangeAvailable(startDate: string, endDate: string): boolean {
  const bookedRanges = getBookedDates()
  const blockedDates = getBlockedDateStrings()
  const start = new Date(startDate)
  const end = new Date(endDate)

  // Check for overlap with booked ranges
  for (const range of bookedRanges) {
    const bookedStart = new Date(range.start)
    const bookedEnd = new Date(range.end)

    if (start < bookedEnd && end > bookedStart) {
      return false
    }
  }

  // Check if any blocked date falls within the range
  for (const blockedDate of blockedDates) {
    const blocked = new Date(blockedDate)
    if (blocked >= start && blocked < end) {
      return false
    }
  }

  return true
}

export function getDaysBetween(startDate: string, endDate: string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = end.getTime() - start.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
