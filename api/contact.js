export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  if (message.length < 10) {
    return res.status(400).json({ error: 'Message too short' })
  }

  try {
    console.log('Contact form submission:', {
      name,
      email,
      message: message.substring(0, 100) + '...',
    })

    return res.status(200).json({
      success: true,
      message: 'Message received successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Failed to process message' })
  }
}
