"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { User } from "@/index";
import { useState } from "react";
import ChatTopLeft from "../chat-components/chat-TopLeft";
import ChatTopRight from "../chat-components/chat-TopRight";
import { ChatWindow } from "../chat-components/chat-window";

export default function ChatPage({ user }: { user: User }) {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(
    undefined
  );

  const handleNewChat = () => {
    setSelectedChatId(undefined);
    // Here you would typically reset the chat state or redirect to a new chat
  };

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    // Here you would typically load the selected chat
  };

  return (
    <SidebarProvider>
      <div className="flex h-full w-full bg-gradient-to-b from-stone-400 to-muted pt-4 md:pt-0">
        {/* hide on development */}
        {/* <ChatSidebar
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          selectedChatId={selectedChatId}
        /> */}
        <ChatTopLeft />
        {/* Main chat interface */}
        <div className=" w-full">
          <ChatWindow user={user} />
        </div>
        <ChatTopRight />
      </div>
    </SidebarProvider>
  );
}
