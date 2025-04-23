import type React from "react"
import { DocumentSkeleton } from "@/components/skeleton"
import { Suspense } from "react"

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<DocumentSkeleton />}>{children}</Suspense>
}
