import { DocsSidebar } from "@/components/document-components/docs-sidebar";
import SidebarToggle from "@/components/shared/SidebarToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DocumentsPage() {
  return (
    <SidebarProvider>
      <div className="flex h-full pt-16">
        <DocsSidebar />
        <div className="flex-1 overflow-auto p-2">
          <SidebarToggle />
          <div className="container py-8 max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className="text-4xl font-bold tracking-tight"
                  id="introduction"
                >
                  Introduction
                </h1>
                <p className="text-xl text-muted-foreground">
                  Welcome to the AI Chat Assistant documentation. Learn how to
                  use our platform effectively.
                </p>
              </div>

              <div className="space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="installation"
                >
                  Installation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Getting started with AI Chat Assistant is easy. Simply create
                  an account and you're ready to go.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Create an Account</CardTitle>
                    <CardDescription>
                      Sign up for AI Chat Assistant to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to the Register page</li>
                      <li>Enter your name, username, email, and password</li>
                      <li>Click the Register button</li>
                      <li>Verify your email address</li>
                      <li>Log in with your credentials</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="quick-start"
                >
                  Quick Start
                </h2>
                <p className="text-lg text-muted-foreground">
                  Learn how to start using AI Chat Assistant in just a few
                  steps.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Starting a Conversation</CardTitle>
                    <CardDescription>
                      Begin chatting with the AI assistant
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to the Chat page</li>
                      <li>
                        Click on "New Chat" or select an existing conversation
                      </li>
                      <li>Type your message in the input field</li>
                      <li>Press Enter or click the Send button</li>
                      <li>Wait for the AI to respond</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="how-it-works"
                >
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding the technology behind AI Chat Assistant.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Language Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        AI Chat Assistant is powered by advanced large language
                        models (LLMs) that have been trained on vast amounts of
                        text data. These models can understand and generate
                        human-like text, allowing for natural conversations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversation Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our platform maintains conversation context, allowing
                        the AI to remember previous messages and provide
                        coherent responses throughout your interaction.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="ai-models"
                >
                  AI Models
                </h2>
                <p className="text-lg text-muted-foreground">
                  Learn about the different AI models available on our platform.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Available Models</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">
                          Standard Model
                        </h3>
                        <p className="text-muted-foreground">
                          Our default model, suitable for most general-purpose
                          conversations and queries.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          Advanced Model
                        </h3>
                        <p className="text-muted-foreground">
                          A more powerful model with enhanced reasoning
                          capabilities, ideal for complex topics.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          Specialized Models
                        </h3>
                        <p className="text-muted-foreground">
                          Domain-specific models trained for particular use
                          cases like coding, science, or creative writing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="conversation-context"
                >
                  Conversation Context
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding how conversation context works in AI Chat
                  Assistant.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Context Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      AI Chat Assistant maintains context throughout your
                      conversation, allowing you to have natural, flowing
                      discussions without repeating information. The system
                      remembers:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Previous messages in the current conversation</li>
                      <li>Information you've shared about yourself</li>
                      <li>Topics you've discussed</li>
                      <li>Questions you've asked</li>
                    </ul>
                    <p>
                      This context window has limitations, however. Very long
                      conversations may eventually exceed the context capacity,
                      causing the AI to forget earlier parts of the
                      conversation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 pb-8">
                <h2
                  className="text-3xl font-bold tracking-tight"
                  id="advanced-features"
                >
                  Advanced Features
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore the advanced capabilities of AI Chat Assistant.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" id="memory-management">
                    Memory Management
                  </h3>
                  <p>
                    AI Chat Assistant can maintain long-term memory across
                    conversations, allowing it to remember important information
                    about you and your preferences.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" id="context-window">
                    Context Window
                  </h3>
                  <p>
                    The context window determines how much of the conversation
                    history the AI can access. Our advanced models have expanded
                    context windows to maintain coherence in longer
                    conversations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" id="prompt-engineering">
                    Prompt Engineering
                  </h3>
                  <p>
                    Learn techniques to craft effective prompts that get the
                    best results from the AI. Well-structured prompts lead to
                    more accurate and helpful responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
