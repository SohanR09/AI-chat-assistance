import SignUpPage from "@/components/pages/SignUpPage";
import { CardSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
          <div className="w-full max-w-md">
            <CardSkeleton />
          </div>
        </div>
      }
    >
      <SignUpPage />
    </Suspense>
  );
}
