import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { Suspense } from "react"
import { CardSkeleton } from "@/components/skeleton"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Chat Assistant",
  description: "Your intelligent AI chat assistant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<CardSkeleton />}>{children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  )
}
