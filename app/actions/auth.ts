"use server";

import { UserInfo } from "@/index";
import { cookies } from "next/headers";

export async function maintainSession({ sessionId, user }: UserInfo) {
  (await cookies()).set("session", JSON.stringify({ sessionId, user }));
  // Perform session maintenance logic here
  // For example, you can check if the session is still valid or refresh it if needed
}

export async function signOutSession() {
  (await cookies()).delete("session");
  // (await cookies()).delete("_cfuvid");
  const sessionCookie = (await cookies()).getAll();
  sessionCookie.forEach(async (cookie) => {
    (await cookies()).delete(
      cookie.name?.includes("session") ? cookie.name : ""
    );
  });
  // Perform sign-out logic here
  // For example, you can invalidate the session on the server or redirect the user to a sign-out page
}
