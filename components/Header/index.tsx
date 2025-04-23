"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ApertureIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopHeader from "./DesktopHeader";
import { useEffect, useState } from "react";

const Header = () => {
  const isMobile = useIsMobile(); // Placeholder for mobile check
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div
            className={`flex h-16 items-center ${
              pathname === "/chat" ? "justify-end" : "justify-between"
            }`}
          >
            <div className="flex items-center">
              <Link
                href="/"
                className="flex justify-center items-center space-x-2"
              >
                <ApertureIcon className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold">Chat.Flick</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    ); // Return null or a mobile header component if needed
  }
  return <DesktopHeader />;
};

export default Header;
