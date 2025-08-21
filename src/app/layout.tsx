import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parea - Transform Social Media into Real Connections',
  description: 'Break free from endless scrolling. Build meaningful relationships. Parea helps you turn social media impulses into real-world connections.',
  keywords: 'social media addiction, relationship building, digital wellness, mindful technology, connection app',
  openGraph: {
    title: 'Parea - Transform Social Media into Real Connections',
    description: 'Break free from endless scrolling. Build meaningful relationships.',
    images: ['/parea-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9NP5G7WDY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q9NP5G7WDY');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}