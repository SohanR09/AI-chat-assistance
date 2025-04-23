"use client";

import { ChatInterface } from "@/components/chat/chat-interface";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

export default function ChatPage() {
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
      <div className="flex h-full w-full">
        <ChatSidebar
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          selectedChatId={selectedChatId}
        />
        <SidebarTrigger className="md:hidden z-50 fixed top-4 left-4"></SidebarTrigger>

        {/* Main chat interface */}
        <div className="flex-1 w-full">
          <ChatInterface />
        </div>
      </div>
    </SidebarProvider>
  );
}
