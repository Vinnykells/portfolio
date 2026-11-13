import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  metadataBase: new URL('https://vinnykells.dev'),
  title: 'Vinny Kells | Design Engineer',
  description: 'Design Engineer specializing in React, Next.js and modern web experiences.',
  keywords: ['Design Engineer', 'Frontend Developer', 'React Developer', 'Next.js', 'Web Developer'],
  authors: [{ name: 'Vinny Kells' }],
  creator: 'Vinny Kells',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinnykells.dev',
    title: 'Vinny Kells | Design Engineer',
    description: 'Design Engineer specializing in React, Next.js and modern web experiences.',
    siteName: 'Vinny Kells Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vinny Kells | Design Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinny Kells | Design Engineer',
    description: 'Design Engineer specializing in React, Next.js and modern web experiences.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
