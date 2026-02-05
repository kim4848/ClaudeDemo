export interface GalleryPhoto {
  id: string
  url: string
  alt: string
  category: string
  createdAt: string
}

const STORAGE_KEY = 'gallery_photos'

export function getPhotos(): GalleryPhoto[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function savePhoto(photo: Omit<GalleryPhoto, 'id' | 'createdAt'>): GalleryPhoto {
  const photos = getPhotos()
  const newPhoto: GalleryPhoto = {
    ...photo,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  photos.push(newPhoto)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(photos))
  return newPhoto
}

export function deletePhoto(id: string): void {
  const photos = getPhotos()
  const filtered = photos.filter(p => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

export function updatePhoto(id: string, updates: Partial<Pick<GalleryPhoto, 'alt' | 'category'>>): void {
  const photos = getPhotos()
  const index = photos.findIndex(p => p.id === id)
  if (index !== -1) {
    photos[index] = { ...photos[index], ...updates }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos))
  }
}

export async function uploadPhoto(
  file: File,
  category: string,
  alt: string
): Promise<GalleryPhoto> {
  const response = await fetch(
    `/api/upload?filename=${encodeURIComponent(file.name)}&category=${encodeURIComponent(category)}&alt=${encodeURIComponent(alt)}`,
    {
      method: 'POST',
      body: file,
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Upload failed')
  }

  // Save metadata to localStorage
  return savePhoto({
    url: data.url,
    alt: alt || file.name,
    category,
  })
}

export async function deletePhotoWithBlob(photo: GalleryPhoto): Promise<void> {
  // Delete from Vercel Blob
  await fetch('/api/photos', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: photo.url }),
  })

  // Delete from localStorage
  deletePhoto(photo.id)
}
