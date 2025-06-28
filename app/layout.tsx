import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles",
  description:
    "Licensed clinical psychologist specializing in anxiety, relationship counseling, and trauma recovery. Offering in-person and virtual therapy sessions in Los Angeles, CA.",
  keywords: "therapist, psychologist, anxiety therapy, couples counseling, trauma recovery, Los Angeles therapy",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
