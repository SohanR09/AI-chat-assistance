import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

interface ChatInputZoneProps {
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
    <div className="border-t p-4 bg-background flex-none">
      <form onSubmit={handleSubmit} className="flex gap-2 items-end">
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="min-h-[60px] max-h-[120px] flex-1 resize-none rounded-xl border-muted-foreground/20 focus-visible:ring-1 focus-visible:ring-primary"
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
    </div>
  );
}

export default ChatInputZone;
