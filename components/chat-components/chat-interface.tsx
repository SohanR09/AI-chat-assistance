"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import ChatInputZone from "./chat-inputzone";
import ChatSection from "./chat-scroll";
import { User } from "@/index";

export function ChatInterface({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    id: "chat",
    api: "/api/chat",
    onResponse: (response) => {
      setIsLoading(false);
    },
    onError: (error) => {
      setIsLoading(false);
      setError(error.message);
    },
  });

  useEffect(() => {
    if (status === "streaming") {
      setIsThinking(true);
    }
    if (status === "ready") {
      setIsThinking(false);
    }
    if (status === "submitted") {
      setIsThinking(false);
    }
  }, [status]);

  return (
    <div className="flex flex-col md:max-w-5xl w-full h-full overflow-hidden md:container md:mx-auto pt-4 md:px-8">
      <ChatSection
        messages={messages}
        error={error}
        isLoading={isLoading}
        user={user}
        thinking={isThinking}
      />
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
