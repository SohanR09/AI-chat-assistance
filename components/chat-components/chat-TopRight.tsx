import React from "react";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function ChatTopRight() {
  return (
    <div className="md:flex hidden p-4">
      <div className="flex h-10 items-center justify-center space-x-4">
        <Button
          size={"icon"}
          variant="ghost"
          className="rounded-full hover:bg-gray-200"
        >
          <Link href={"/"}>
            <HomeIcon className="w-8 h-8" />
          </Link>
        </Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
