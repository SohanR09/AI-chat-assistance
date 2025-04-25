"use client";

import {
  ArrowBigDownDash,
  ArrowDown,
  ArrowDownRightFromCircleIcon,
  ChevronDown,
} from "lucide-react";
import { useRef, useState } from "react";

interface ScrollToBottomButtonProps {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollToBottom: React.RefObject<HTMLDivElement>;
}

const ScrollToBottomButton: React.FC<ScrollToBottomButtonProps> = ({
  containerRef,
  scrollToBottom,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  // Check if the containerRef is available
  const el = containerRef.current;
  if (!el) return;

  const handleScroll = () => {
    // Show the button immediately
    setIsVisible(true);
    debugger;

    // Reset timer if already running
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    // Hide button after 3 seconds of inactivity
    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  el.addEventListener("wheel", handleScroll);
  el.addEventListener("scroll", handleScroll);

  const scrollToBottomFunction = () => {
    const el = scrollToBottom.current;
    if (!el) return;
    el?.scrollIntoView({ behavior: "smooth" });
    setIsVisible(false); // Hide the button after scrolling
  };

  return (
    <div className="flex items-center justify-center">
      {isVisible && (
        <button
          onClick={scrollToBottomFunction}
          className="absolute bottom-4 z-50 p-2 rounded-full bg-stone-900 text-white shadow-md hover:bg-gray-700 transition-opacity duration-300"
        >
          <ArrowDown size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToBottomButton;
