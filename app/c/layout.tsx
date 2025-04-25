import type React from "react";
import { ChatSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<ChatSkeleton />}>{children}</Suspense>;
}
