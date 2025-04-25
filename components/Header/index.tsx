"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { ApertureIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import Logo from "@/public/Logo";

const Header = () => {
  const isMobile = useIsMobile(); // Placeholder for mobile check
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn } = useUser();

  useEffect(() => {
    // Simulate a loading state for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []); // Placeholder for any side effects

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg">Loading...</span>
      </div>
    );
  }

  // check for chat page
  if (pathname === "/c") {
    // if mobile, show mobile header
    if (isMobile) {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <div className={`flex h-16 items-center justify-between `}>
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="flex items-center justify-center space-x-4">
                {!isSignedIn ? (
                  <Link href={"/auth/sign-in"}>Sign In</Link>
                ) : (
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                )}
              </div>
            </div>
          </div>
        </header>
      );
    }
    // if desktop, show nothing
    return null;
  }

  return <DesktopHeader />;
};

export default Header;
