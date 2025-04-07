import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akshay Sakpal - Data Analyst',
  description: 'Akshay Sakpal Data Analyst Portfolio',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
