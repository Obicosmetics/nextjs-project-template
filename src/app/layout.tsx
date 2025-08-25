import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationMenu from '@/components/ui/NavigationMenu'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OBI Consumer Products Ltd. - Where Nature Meets Science',
  description: 'Luxury Personal Care & Natural Oils with over 40 years of experience. Discover Deroice skincare, Herbal Mood wellness products, and Vitadose hair care solutions.',
  keywords: 'natural oils, personal care, skincare, essential oils, handmade soap, hair care, organic cosmetics, luxury beauty',
  authors: [{ name: 'OBI Consumer Products Ltd.' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <NavigationMenu />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
