import ChatPage from "@/components/pages/ChatPage";
import { cookies } from "next/headers";

export default async function page() {
  const sessionCookie = (await cookies()).get("session")?.value;
  const { user } = sessionCookie ? JSON.parse(sessionCookie) : {};

  return <ChatPage user={user} />;
}
