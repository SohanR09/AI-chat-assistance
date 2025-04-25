import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { TooltipProvider } from "../ui/tooltip";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  );
}
