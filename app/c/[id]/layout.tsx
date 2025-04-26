"use server";

import ChatLayout from "@/components/layout/ChatLayout";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <ChatLayout>{children}</ChatLayout>
    </Suspense>
  );
}
