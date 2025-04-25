"use client";
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
import { format } from "date-fns";
import { MessageSquareOff, PlusCircle } from "lucide-react";

interface chatHistoryType {
  date: Date;
  chats: Array<{ id: string; title: string }> | any;
}

// Mock data for chat history
const chatHistory: chatHistoryType[] = [
  // {
  //   date: new Date(),
  //   chats: [
  //     { id: "1", title: "Understanding AI models" },
  //     { id: "2", title: "How to implement a chatbot" },
  //     { id: "3", title: "Best practices for NLP" },
  //   ],
  // },
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
    <Sidebar className="h-full w-64 border-r bg-white shadow-md">
      <SidebarHeader className="flex items-center justify-center p-4 border-b">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={onNewChat}
          disabled={chatHistory.length === 0}
        >
          <PlusCircle className="h-4 w-4" />
          New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        {chatHistory.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-600 font-semibold">
            <MessageSquareOff className="h-6 w-6 mr-2" />
            <span className="text-lg">No Chats Available!</span>
          </div>
        ) : (
          <>
            {chatHistory?.map((dayGroup: chatHistoryType) => (
              <SidebarGroup key={dayGroup.date.toISOString()}>
                <SidebarGroupLabel>
                  {format(dayGroup.date, "MMMM d, yyyy")}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {dayGroup && dayGroup?.chats?.length === 0 ? (
                      <>{new Date()}</>
                    ) : (
                      <>
                        {dayGroup?.chats?.map((chat: any) => (
                          <SidebarMenuItem key={chat.id}>
                            <SidebarMenuButton
                              isActive={selectedChatId === chat.id}
                              onClick={() => onSelectChat(chat.id)}
                            >
                              {chat.title}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </>
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
