"use client";

import { SignUp } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import useScrollToTop from "@/hooks/use-scrollToTop";
import Link from "next/link";

export default function SignUpPage() {
  useScrollToTop();
  return (
    <div className="flex h-full min-h-[calc(100vh-2rem)] justify-center items-center auth-page mt-20">
      <div className="w-full h-full flex flex-col items-start justify-center max-w-md p-2 bg-white rounded-lg shadow-md">
        <Button asChild variant="link" className="" size="sm">
          <Link href={"/"}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>
        <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />
      </div>
    </div>
  );
}
