import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const { text } = await generateText({
    model: google("gemini-2.0-flash-001"),
    system: "You are a helpful assistant.",
    prompt,
  });

  return Response.json({ text });
}
