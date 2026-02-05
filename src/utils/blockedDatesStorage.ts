const STORAGE_KEY = 'casa-mil-palmeras-blocked-dates'

export interface BlockedDate {
  date: string
  reason?: string
  createdAt: string
}

export function getBlockedDates(): BlockedDate[] {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []
  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveBlockedDates(blockedDates: BlockedDate[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blockedDates))
}

export function addBlockedDate(date: string, reason?: string): BlockedDate {
  const blockedDate: BlockedDate = {
    date,
    reason,
    createdAt: new Date().toISOString(),
  }
  const blockedDates = getBlockedDates()
  // Don't add duplicate dates
  if (!blockedDates.some(bd => bd.date === date)) {
    blockedDates.push(blockedDate)
    saveBlockedDates(blockedDates)
  }
  return blockedDate
}

export function removeBlockedDate(date: string): boolean {
  const blockedDates = getBlockedDates()
  const filtered = blockedDates.filter(bd => bd.date !== date)
  if (filtered.length === blockedDates.length) return false
  saveBlockedDates(filtered)
  return true
}

export function isDateBlocked(date: string): boolean {
  const blockedDates = getBlockedDates()
  return blockedDates.some(bd => bd.date === date)
}

export function getBlockedDateStrings(): string[] {
  return getBlockedDates().map(bd => bd.date)
}
