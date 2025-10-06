import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ScaleUp - The Learning Operating System | Investor Pitch',
  description: "India's first platform connecting knowledge to careers. 50M students transforming learning into verified skills and job opportunities.",
  keywords: 'ScaleUp, edtech, learning platform, India, education technology, career platform',
  authors: [{ name: 'ScaleUp' }],
  openGraph: {
    title: 'ScaleUp - The Learning Operating System',
    description: "India's first platform connecting knowledge to careers",
    type: 'website',
    locale: 'en_IN',
    siteName: 'ScaleUp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
