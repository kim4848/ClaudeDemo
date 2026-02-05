import { put } from '@vercel/blob'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filename = req.query.filename as string
    const category = req.query.category as string || 'Generelt'
    const alt = req.query.alt as string || ''

    if (!filename) {
      return res.status(400).json({ error: 'Filename is required' })
    }

    const blob = await put(`gallery/${filename}`, req, {
      access: 'public',
      addRandomSuffix: true,
    })

    // Return the blob info with metadata
    return res.status(200).json({
      url: blob.url,
      pathname: blob.pathname,
      category,
      alt,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return res.status(500).json({ error: 'Upload failed' })
  }
}
