"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MarkDownMessage from "../MarkDown/MarkdownMessage";
import ChatSection from "./chat-section";
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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ChatSection messages={messages} error={error} isLoading={isLoading} />
      <div ref={messagesEndRef} />
      <ChatInputZone
        input={input}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
