// components/ChatGPTMarkdown.tsx
"use client";

import { cn } from "@/lib/utils";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "highlight.js/styles/github.css"; // Highlight.js style for code blocks
import katex from "katex";
import "katex/dist/katex.css";
import { getCodeString } from "rehype-rewrite";

type ChatGPTMarkdownProps = {
  markdown: string;
  role: string;
};

export default function MarkDownMessage({
  markdown,
  role,
}: ChatGPTMarkdownProps) {
  return (
    <MarkdownPreview
      source={markdown}
      style={{
        backgroundColor: "transparent",
        fontFamily: `'Inter', sans-serif`,
        fontSize: 16,
        lineHeight: 1.75,
        color: role === "user" ? "#fff" : "#000",
      }}
      className="max-w-2xl md:w-full w-80 prose prose-neutral dark:prose-invert text-base leading-relaxed space-y-4"
      components={{
        code: ({ children = [], className, ...props }) => {
          if (typeof children === "string" && /^\$\$(.*)\$\$/.test(children)) {
            const html = katex.renderToString(
              children.replace(/^\$\$(.*)\$\$/, "$1"),
              {
                throwOnError: false,
              }
            );
            return (
              <code
                dangerouslySetInnerHTML={{ __html: html }}
                style={{ background: "transparent", color: "white" }}
              />
            );
          }
          const code =
            props.node && props.node.children
              ? getCodeString(props.node.children)
              : children;
          if (
            typeof code === "string" &&
            typeof className === "string" &&
            /^language-katex/.test(className.toLocaleLowerCase())
          ) {
            const html = katex.renderToString(code, {
              throwOnError: false,
            });
            return (
              <code
                style={{ fontSize: "150%" }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }
          return (
            <code className={cn(String(className), "text-white")}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
