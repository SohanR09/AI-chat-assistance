"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">AI Chat Assistant</span>
            </Link>
          </div>
          {!isAuthPage && (
            <nav className="flex items-center space-x-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
              >
                Home
              </Link>
              <Link
                href="/documents"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/documents" ? "text-primary" : "text-muted-foreground"}`}
              >
                Documents
              </Link>
              <Link
                href="/chat"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/chat" ? "text-primary" : "text-muted-foreground"}`}
              >
                Chat
              </Link>
              <Link href="/login" passHref>
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register" passHref>
                <Button size="sm">Register</Button>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
