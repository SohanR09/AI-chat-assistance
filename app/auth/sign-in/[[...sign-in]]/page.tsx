import { CardSkeleton } from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
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
      <div className="flex h-full min-h-[calc(100vh-2rem)] justify-center items-center auth-page">
        <div className="w-full h-full flex flex-col items-start justify-center max-w-md p-2 bg-white rounded-lg shadow-md">
          <Button asChild variant="link" className="" size="sm">
            <Link href={"/"}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>

          <SignIn
            path="/auth/sign-in"
            routing="path"
            signUpUrl="/auth/sign-up"
            afterSignOutUrl={"/"}
            forceRedirectUrl={"c"}
          />
        </div>
      </div>
    </Suspense>
  );
}
