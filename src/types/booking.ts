export type BookingStatus = 'pending' | 'confirmed' | 'rejected'

export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  guestCount: number
  startDate: string // ISO date string
  endDate: string // ISO date string
  status: BookingStatus
  createdAt: string // ISO date string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  guestCount: number
  startDate: string
  endDate: string
}
