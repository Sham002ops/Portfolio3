// import '@/styles/hero.css'
// import SiteNavbar from '@/components/layout/SiteNavbar'
// import Footer from '@/components/layout/Footer'


import type { Metadata } from 'next'
import './globals.css'  // ← THIS IS CRITICAL

export const metadata: Metadata = {
  title: 'Your Brand Name',
  description: 'Premium Clothing Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

