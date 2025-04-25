"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MarkDownMessage from "../MarkDown/MarkdownMessage";
import ChatSection from "./chat-scroll";
import ChatInputZone from "./chat-inputzone";

export function ChatInterface() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: "chat",
    api: "/api/chat",
    onResponse: (response) => {
      setIsLoading(false);
      console.log("Response:", response);
    },
    onError: (error) => {
      setIsLoading(false);
      setError(error.message);
      console.error("Error:", error);
    },
  });

  return (
    <div className="flex flex-col md:max-w-5xl w-full h-full overflow-hidden md:container md:mx-auto pt-4 md:px-8">
      <ChatSection messages={messages} error={error} isLoading={isLoading} />
      <div className="border rounded-lg p-4 bg-background relative h-[90px]">
        <div className="absolute bottom-0 left-0 right-0 z-50 p-4">
          <ChatInputZone
            input={input}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
