"use server";

import { UserInfo } from "@/index";
import { cookies } from "next/headers";

export async function maintainSession({ sessionId, user }: UserInfo) {
  (await cookies()).set("session", JSON.stringify({ sessionId, user }));
  // Perform session maintenance logic here
  // For example, you can check if the session is still valid or refresh it if needed
}
