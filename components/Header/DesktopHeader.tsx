"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ApertureIcon } from "lucide-react";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function DesktopHeader() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-end space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <h1 className="text-2xl font-bold">Chat</h1>
                <p className="text-sm text-gray-500">Beta</p>
              </div>
            </Link>
          </div>
          {!isAuthPage && (
            <nav className="flex items-center space-x-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/doc"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/doc" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Documents
              </Link>
              <Link
                href="/c"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/c" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Chat
              </Link>

              {/* sign in  */}
              {!isSignedIn ? (
                <SignedOut>
                  <Link
                    href={
                      "/auth/sign-in" +
                      `?redirect_url=${window.location.origin + "/c"}`
                    }
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === "/login"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Button variant="ghost" className="hidden sm:block">
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
              ) : (
                <SignedIn>
                  <UserButton />
                </SignedIn>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
