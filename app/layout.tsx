import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/elements/Header/Header'
import Footer from '@/components/elements/Footer/Footer'

export const metadata: Metadata = {
  title: 'TasteEat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
