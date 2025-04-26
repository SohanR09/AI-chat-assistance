"use client";
import { useSession } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    } else {
      redirect(`/c/${session.user.id}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }, [session]);

  return (
    <div className="flex h-full min-h-[calc(100vh-2rem)] justify-center items-center auth-page mt-20">
      Loading...
    </div>
  );
}
