import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YKS Travel',
  description: 'Discover extraordinary travel experiences with YKSTravel – Your Key to Seamless Adventures. We offer personalized travel services, curated itineraries, and expert guidance. Explore breathtaking destinations, indulge in luxury accommodations, and create unforgettable memories. Your dream vacation starts with YKSTravel – where every journey is a bespoke adventure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/ykslogo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
