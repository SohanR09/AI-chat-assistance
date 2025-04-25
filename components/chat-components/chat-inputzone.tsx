import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Input } from "../ui/input";

interface ChatInputZoneProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  isLoading: boolean;
  setIsLoading: any;
}

function ChatInputZone({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
  setIsLoading,
}: ChatInputZoneProps) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center w-full">
      <Input
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-1 resize-none bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-[60px]"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as any);
            setIsLoading(true);
          }
        }}
      />
      <Button
        type="submit"
        size="icon"
        className="h-[60px] w-[60px] rounded-full bg-primary hover:bg-primary/90"
        disabled={isLoading || !input.trim()}
      >
        <Send className="h-5 w-5" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}

export default ChatInputZone;
