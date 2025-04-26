"use client";
import { signOutSession } from "@/app/actions/auth";
import { useSession } from "@clerk/nextjs";
import React from "react";

export default function Session({ children }: { children: React.ReactNode }) {
  const { session } = useSession();

  React.useEffect(() => {
    if (!session) {
      signOutSession();
    }
  }, [session]);
  return <div>{children}</div>;
}
