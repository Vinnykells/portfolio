import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Vinny Kells | Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js and modern web experiences.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Web Developer', 'UI Developer'],
  authors: [{ name: 'Vinny Kells' }],
  creator: 'Vinny Kells',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinnykells.vercel.app',
    title: 'Vinny Kells | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js and modern web experiences.',
    siteName: 'Vinny Kells Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vinny Kells | Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinny Kells | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js and modern web experiences.',
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
      </body>
    </html>
  )
}
