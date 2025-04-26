"use client";

import { maintainSession } from "@/app/actions/auth";
import { UserInfo } from "@/index";
import { useAuth, useSession } from "@clerk/nextjs";
import { set } from "date-fns";
import { redirect } from "next/navigation";
import React from "react";
import { useEffect } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession();
  const [user, setUser] = React.useState<UserInfo | null>(null);

  useEffect(() => {
    if (!session) {
      return;
    }

    setUser({
      sessionId: session.id,
      user: {
        id: session.user.id,
        username: session.user.username,
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        fullName: session.user.fullName,
        profileImageUrl: session.user.imageUrl,
        email: session.user.emailAddresses[0]?.emailAddress || null,
        phone: session.user.phoneNumbers[0]?.phoneNumber || null,
        expriesAt: set(new Date(), { seconds: session.expireAt.getSeconds() }),
        createdAt: set(new Date(), { seconds: session.createdAt.getSeconds() }),
      },
    });
  }, [session]);

  useEffect(() => {
    const maintainSessionFunction = async (user: UserInfo) => {
      if (user) {
        await maintainSession(user);
      }
    };

    if (user) {
      maintainSessionFunction(user);
    }
  }, [user]);

  return <div>{children}</div>;
}
