import Logo from "@/public/Logo";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function MobileHeader() {
  const { isSignedIn } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className={`flex h-16 items-center justify-between `}>
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center justify-center space-x-4">
            {!isSignedIn ? (
              <Link href={"/auth/sign-in"}>Sign In</Link>
            ) : (
              <SignedIn>
                <UserButton />
              </SignedIn>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
