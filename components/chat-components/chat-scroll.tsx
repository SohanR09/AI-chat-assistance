"use client";

import { User } from "@/index";
import LoadingSpinner from "@/public/loader-spinning";
import { Bot, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MarkDownMessage from "../MarkDown/MarkdownMessage";
import ScrollToBottomButton from "../shared/ScrollToBottom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { useIsMobile } from "../ui/use-mobile";

interface ChatSectionProps {
  messages: any;
  error: string | null;
  isLoading: boolean;
  user: User | null;
  thinking: boolean;
}

function ChatSection({
  messages,
  error,
  isLoading,
  user,
  thinking,
}: ChatSectionProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaSEctionRef = useRef<HTMLDivElement>(null);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState<number | null>(
    null
  );
  const [clickCopy, setClickCopy] = useState(false);
  const [copyMesg, setCopyMesg] = useState("");

  const isMobile = useIsMobile();

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCopy = (text: string) => {
    setClickCopy(true);
    navigator.clipboard.writeText(text);
    setCopyMesg(text);

    setTimeout(() => {
      setClickCopy(false);
    }, 3000);
  };

  return (
    <ScrollArea
      className="h-[calc(100vh-8rem)] overflow-y-auto px-2"
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
          messages?.map((message: any, index: number) => {
            const isLastMessage = index === messages.length - 1;
            const isAssistant = message.role === "assistant";
            return (
              <div
                key={message.id}
                id="scrolling-area"
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                onMouseEnter={() => setHoveredMessageIndex(index)}
                onMouseLeave={() => setHoveredMessageIndex(null)}
              >
                <div className="flex-col">
                  <div
                    className={`flex gap-1 max-w-[100%] ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      {message?.role === "user" ? (
                        <>
                          {user?.profileImageUrl ? (
                            <AvatarImage src={user?.profileImageUrl} />
                          ) : (
                            <AvatarFallback className="text-stone-800 bg-gray-200 font-medium">
                              {user?.firstName?.slice(0, 1).toUpperCase()}
                            </AvatarFallback>
                          )}
                        </>
                      ) : (
                        <AvatarFallback className="text-stone-800 bg-gray-200 font-medium">
                          <Bot className="h-6 w-6" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    {error && error?.length > 0 ? (
                      <div>{error}</div>
                    ) : (
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === "user"
                            ? "bg-stone-900 text-primary-foreground"
                            : "bg-transparent"
                        }`}
                      >
                        <MarkDownMessage
                          markdown={message.content}
                          role={message?.role}
                        />
                        {isAssistant && isLastMessage && thinking && (
                          <div className="flex justify-end items-center mt-2">
                            <span className="text-muted-foreground text-sm mr-2 flex items-center">
                              <LoadingSpinner />
                              Thinking...
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    className={`${
                      message?.role === "assistant" ? "ml-8" : ""
                    } ${
                      isMobile
                        ? "opacity-100"
                        : hoveredMessageIndex === index
                        ? "opacity-100"
                        : "opacity-0"
                    } p-2 hover:bg-gray-200 w-fit rounded-md cursor-pointer mt-1`}
                    onClick={() => handleCopy(message.content)}
                  >
                    {clickCopy &&
                    hoveredMessageIndex === index &&
                    copyMesg === message.content ? (
                      <Check
                        className="w-4 h-4 font-bold text-green-500"
                        strokeWidth={"4px"}
                      />
                    ) : (
                      <Copy className="w-4 h-4"></Copy>
                    )}
                  </div>
                </div>
              </div>
            );
          })
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
