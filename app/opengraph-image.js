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
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 700,
              marginRight: '16px',
            }}
          >
            VK
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '72px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
            Vinny Kells
          </span>
          <span style={{ fontSize: '36px', fontWeight: 600, color: '#6366f1' }}>
            Design Engineer
          </span>
          <span style={{ fontSize: '24px', color: '#64748b', marginTop: '8px' }}>
            React · Next.js · Tailwind CSS
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            fontSize: '20px',
            color: '#94a3b8',
          }}
        >
          vinnykells.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
