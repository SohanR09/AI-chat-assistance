"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const isMobile = useIsMobile(); // Placeholder for mobile check
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

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
  if (pathname.includes("/c")) {
    // if mobile, show mobile header
    if (isMobile) {
      return <MobileHeader />;
    }
    // if desktop, show nothing
    return null;
  }

  return <DesktopHeader />;
};

export default Header;
