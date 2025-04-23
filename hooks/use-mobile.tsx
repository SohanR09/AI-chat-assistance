import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  if (typeof window === "undefined") {
    return undefined; // Return undefined if not in a browser environment
  }

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  React.useEffect(() => {
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, [mql]);

  return !!isMobile;
}
