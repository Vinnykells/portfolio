import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vinny Kells | Design Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* VK + blue underline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>
          <span style={{ fontSize: '36px', fontWeight: 600, color: '#374151' }}>VK</span>
          <div style={{ width: '120px', height: '4px', backgroundColor: '#3b82f6', marginTop: '8px' }} />
        </div>

        {/* Name */}
        <span style={{ fontSize: '120px', fontWeight: 800, color: '#111827', lineHeight: 1, marginBottom: '8px' }}>
          Vinny Kells
        </span>

        {/* Title */}
        <span style={{ fontSize: '64px', fontWeight: 400, color: '#2563eb', marginBottom: '24px' }}>
          Design Engineer
        </span>

        {/* Stack */}
        <span style={{ fontSize: '36px', color: '#9ca3af', marginLeft: '8px' }}>
          React · Next.js · Tailwind CSS
        </span>

        {/* URL bottom right */}
        <span
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '70px',
            fontSize: '30px',
            color: '#9ca3af',

          }}
        >
          vinnykells.dev
        </span>
      </div>
    ),
    { ...size }
  )
}
