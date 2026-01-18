import type { Metadata } from 'next'
import './globals.css'  

export const metadata: Metadata = {
  title: {default: 'WebAmez - Premium Web Development & Design Services',
    template: '%s | WebAmez',},

  description:  'Professional web development and design services. I build production-ready, scalable websites and applications using modern technologies like Next.js, React, and Node.js.',

  keywords: [
    'web development',
    'web design',
    'Next.js developer',
    'React developer',
    'full-stack developer',
    'portfolio website',
    'custom web applications',
    'responsive design',
    'UI/UX design',
    'Mumbai web developer',
  ],

  authors: [{ name: 'Sham', url: 'https://webamez.com' }],
  creator: 'Sham',
  publisher: 'WebAmez',
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

