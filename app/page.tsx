import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Shield,
  Bot,
  User,
} from "lucide-react";
// Import the Footer component at the top of the file
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-stone-400 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your AI-Powered Conversation Assistant
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience intelligent conversations with our advanced AI chat
                  assistant. Get answers, insights, and assistance in real-time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                <Link href="/chat" passHref>
                  <Button size="lg" className="gap-1.5">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/documents" passHref>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center">
              <div className="w-full max-w-[500px] aspect-square rounded-xl bg-muted p-4 shadow-lg">
                <div className="h-full w-full rounded-lg bg-background p-6 flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-muted-foreground">
                          AI Assistant
                        </p>
                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-sm">
                            Hello! How can I help you today?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-muted-foreground text-right">
                          You
                        </p>
                        <div className="rounded-lg bg-primary/10 p-3 ml-auto">
                          <p className="text-sm">
                            Can you explain how machine learning works?
                          </p>
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI chat assistant comes with a range of features to enhance
                your experience
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Natural Conversations</h3>
                <p className="text-muted-foreground">
                  Engage in natural, human-like conversations with our advanced
                  AI model
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Get instant responses with our optimized AI processing
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your conversations are encrypted and your privacy is our
                  priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who are already enhancing their
                productivity with our AI assistant
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register" passHref>
                <Button size="lg" className="gap-1.5">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
