import { put } from '@vercel/blob'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Check if token is configured
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('BLOB_READ_WRITE_TOKEN is not set')
    return res.status(500).json({
      error: 'Server configuration error: BLOB_READ_WRITE_TOKEN is not set'
    })
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

    return res.status(200).json({
      url: blob.url,
      pathname: blob.pathname,
      category,
      alt,
    })
  } catch (error) {
    console.error('Upload error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: `Upload failed: ${message}` })
  }
}
