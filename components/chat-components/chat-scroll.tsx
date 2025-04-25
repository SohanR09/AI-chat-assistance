"use client";

import LoadingSpinner from "@/public/loader-spinning";
import { useUser } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import MarkDownMessage from "../MarkDown/MarkdownMessage";
import ScrollToBottomButton from "../shared/ScrollToBottom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

interface ChatSectionProps {
  messages: any;
  error: string | null;
  isLoading: boolean;
}

function ChatSection({ messages, error, isLoading }: ChatSectionProps) {
  const { user } = useUser();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaSEctionRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea
      className="h-[calc(100vh-8rem)] bg-gray-100 overflow-y-auto px-2"
      ref={scrollAreaSEctionRef}
    >
      <div className="flex flex-col gap-4 justify-end h-full mt-10 md:mt-0">
        {messages?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(60vh-2rem)] text-center p-8">
            <h3 className="text-xl font-semibold mb-2">
              Welcome{" "}
              {(user?.firstName ?? "Guest")?.slice(0, 1).toUpperCase() +
                (user?.firstName ?? "Guest").slice(1)}
              , start a conversation with the AI
            </h3>
            <p className="text-muted-foreground mb-4">
              Ask anything, and the AI will respond to you. You can also ask for
              help with your code, and the AI will assist you.
            </p>
          </div>
        ) : (
          messages?.map((message: any) => (
            <div
              key={message.id}
              id="scrolling-area"
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex gap-1 max-w-[80%] ${
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
                    <MarkDownMessage
                      markdown={message.content}
                      role={message?.role}
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        {messages?.length > 0 && (
          <ScrollToBottomButton
            containerRef={
              scrollAreaSEctionRef as React.RefObject<HTMLDivElement>
            }
            scrollToBottom={messagesEndRef as React.RefObject<HTMLDivElement>}
          />
        )}
        <div ref={messagesEndRef}></div>
        {isLoading && (
          <div className="w-full flex justify-center">
            <div aria-label="Loading..." role="status" className="loader">
              <LoadingSpinner />
              <span className="loading-text">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

export default ChatSection;
