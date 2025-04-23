"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatInterface } from "@/components/chat-interface"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(undefined)

  const handleNewChat = () => {
    setSelectedChatId(undefined)
    // Here you would typically reset the chat state or redirect to a new chat
  }

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId)
    // Here you would typically load the selected chat
  }

  return (
    <SidebarProvider>
      <div className="flex h-[calc(100vh-4rem)] pt-16">
        <ChatSidebar onNewChat={handleNewChat} onSelectChat={handleSelectChat} selectedChatId={selectedChatId} />
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>
    </SidebarProvider>
  )
}
