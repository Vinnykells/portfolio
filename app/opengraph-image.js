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
        {/* VK chip + blue underline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
          <span style={{ fontSize: '28px', fontWeight: 600, color: '#1a1a1a' }}>VK</span>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#3b82f6', marginTop: '6px' }} />
        </div>

        {/* Name */}
        <span style={{ fontSize: '96px', fontWeight: 800, color: '#0f172a', lineHeight: 1, marginBottom: '16px' }}>
          Vinny Kells
        </span>

        {/* Title */}
        <span style={{ fontSize: '52px', fontWeight: 500, color: '#3b82f6', marginBottom: '20px' }}>
          Design Engineer
        </span>

        {/* Stack */}
        <span style={{ fontSize: '32px', color: '#64748b' }}>
          React · Next.js · Tailwind CSS
        </span>

        {/* URL bottom right */}
        <span
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '70px',
            fontSize: '28px',
            color: '#94a3b8',
          }}
        >
          vinnykells.dev
        </span>
      </div>
    ),
    { ...size }
  )
}
