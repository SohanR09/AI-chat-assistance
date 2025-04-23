import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}

export function ChatSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-16 w-[60%] rounded-lg" />
      </div>
      <div className="flex justify-end gap-3">
        <Skeleton className="h-12 w-[40%] rounded-lg" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-24 w-[80%] rounded-lg" />
      </div>
    </div>
  )
}

export function DocumentSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[50%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-[40%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[95%]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-[30%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </div>
  )
}
