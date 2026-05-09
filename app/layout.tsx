import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Wisata Bromo',
  description: 'Website wisata Gunung Bromo',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="page-container">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}