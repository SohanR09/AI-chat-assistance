import React from "react";
import { useEffect } from "react";

export default function useScrollToTop() {
  useEffect(() => {
    if (!window) return;
    window.scrollTo(0, 0);
  }, []);
}
