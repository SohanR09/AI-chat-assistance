// components/ChatGPTMarkdown.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GFM, including emojis
import rehypeHighlight from "rehype-highlight"; // For syntax highlighting
import "highlight.js/styles/github.css"; // Highlight.js style for code blocks
import CodeBlock from "./CodeBlock"; // Custom code block component for copying functionality

type ChatGPTMarkdownProps = {
  content: string;
};

export default function MarkDownMessage({ content }: ChatGPTMarkdownProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed space-y-4">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]} // For GFM, including emojis, tables, and strikethroughs
        rehypePlugins={[rehypeHighlight]} // For syntax highlighting
        components={{
          // Code block handling
          code({ node, inline, className, children, ...props }: any) {
            const language = className?.replace("language-", "") || "plaintext";

            const codeContent =
              typeof children === "string"
                ? children
                : Array.isArray(children)
                ? children
                    .map((child: any) =>
                      typeof child === "string"
                        ? child
                        : child?.props?.children || ""
                    )
                    .join("")
                : "";

            if (inline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
                  {codeContent}
                </code>
              );
            }

            return <CodeBlock code={codeContent.trim()} language={language} />;
          },

          // Link handling (open links in new tab with appropriate styles)
          a({ href, children, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                {...props}
              >
                {children}
              </a>
            );
          },

          // Horizontal rule (styled with Tailwind for spacing and color)
          hr({ ...props }) {
            return (
              <hr
                {...props}
                className="border-t-2 border-gray-300 dark:border-gray-700 my-6"
              />
            );
          },

          // Lists (ordered and unordered)
          ul({ children }) {
            return <ul className="list-disc pl-5 space-y-2">{children}</ul>;
          },
          ol({ children }) {
            return <ol className="list-decimal pl-5 space-y-2">{children}</ol>;
          },

          // Headings (ensures proper margin and spacing)
          h1({ children }) {
            return <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>;
          },
          h2({ children }) {
            return (
              <h2 className="text-xl font-semibold mt-6 mb-3">{children}</h2>
            );
          },
          h3({ children }) {
            return (
              <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
            );
          },

          // Paragraphs (adds spacing and margins)
          p({ children }) {
            return <p className="mb-4">{children}</p>;
          },
        }}
      />
    </div>
  );
}
