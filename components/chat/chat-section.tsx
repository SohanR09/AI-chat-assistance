import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback } from "../ui/avatar";
import MarkDownMessage from "../MarkDown/MarkdownMessage";

interface ChatSectionProps {
  messages: any;
  error: string | null;
  isLoading: boolean;
}

function ChatSection({ messages, error, isLoading }: ChatSectionProps) {
  return (
    <div className="grow overflow-hidden">
      <ScrollArea className="min-h-[calc(100vh-6rem)] bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto">
        <div className="flex flex-col gap-4 justify-end h-full pt-16">
          {messages?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <h3 className="text-xl font-semibold mb-2">
                Welcome to AI Chat Assistant
              </h3>
              <p className="text-muted-foreground mb-4">
                Start a conversation with the AI by typing a message below.
              </p>
            </div>
          ) : (
            messages?.map((message: any) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8">
                    {message?.role === "user" ? (
                      <>
                        <AvatarFallback className="text-stone-800 bg-gray-200 font-medium">
                          U
                        </AvatarFallback>
                        {/* <AvatarImage src="/placeholder.svg?height=32&width=32" /> */}
                      </>
                    ) : (
                      <>
                        <AvatarFallback className="text-stone-800 bg-gray-200 font-medium">
                          AI
                        </AvatarFallback>
                        {/* <AvatarImage src="/placeholder.svg?height=32&width=32" /> */}
                      </>
                    )}
                  </Avatar>
                  {error && error?.length > 0 ? (
                    <div>{error}</div>
                  ) : (
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-stone-900 text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <MarkDownMessage content={message.content} />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="w-full h-12 flex justify-center items-center animate-pulse bg-gray-200 rounded-full">
              Loading...
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default ChatSection;
