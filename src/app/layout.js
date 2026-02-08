import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetPix Pro - Turn Your Pet Into Art',
  description: 'Transform your pet photos into stunning AI-generated artwork. 10 unique styles. Starting at $4.99.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
