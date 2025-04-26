import Header from "@/components/Header";
import Providers from "@/components/Provider";
import { CardSkeleton } from "@/components/skeleton";
import { Inter } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat Beta",
  description: "Your intelligent AI chat assistant",
  generator: "Sohan Rathod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-gray-100">
              <Suspense fallback={<CardSkeleton />}>{children}</Suspense>
            </main>
          </div>
        </body>
      </html>
    </Providers>
  );
}
