"use client";
import { format } from "date-fns";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Mock data for chat history
const chatHistory = [
  {
    date: new Date(),
    chats: [
      { id: "1", title: "Understanding AI models" },
      { id: "2", title: "How to implement a chatbot" },
      { id: "3", title: "Best practices for NLP" },
    ],
  },
  {
    date: new Date(Date.now() - 86400000), // Yesterday
    chats: [
      { id: "4", title: "Machine learning basics" },
      { id: "5", title: "Data preprocessing techniques" },
    ],
  },
  {
    date: new Date(Date.now() - 172800000), // 2 days ago
    chats: [{ id: "6", title: "Neural networks explained" }],
  },
];

interface ChatSidebarProps {
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  selectedChatId?: string;
}

export function ChatSidebar({
  onNewChat,
  onSelectChat,
  selectedChatId,
}: ChatSidebarProps) {
  return (
    <Sidebar className="h-full w-64 border-r bg-white shadow-md pt-16">
      <SidebarHeader className="flex items-center justify-between p-4 border-b">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={onNewChat}
        >
          <PlusCircle className="h-4 w-4" />
          New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        {chatHistory.map((dayGroup) => (
          <SidebarGroup key={dayGroup.date.toISOString()}>
            <SidebarGroupLabel>
              {format(dayGroup.date, "MMMM d, yyyy")}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {dayGroup.chats.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton
                      isActive={selectedChatId === chat.id}
                      onClick={() => onSelectChat(chat.id)}
                    >
                      {chat.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
