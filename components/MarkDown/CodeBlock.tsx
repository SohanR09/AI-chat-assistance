// components/CodeBlock.tsx
import { Check, ClipboardCopy } from "lucide-react"; // Icon for the copy button
import { useEffect, useRef, useState } from "react";

type CodeBlockProps = {
  code: string;
  language: string;
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      codeRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
    }
  };

  useEffect(() => {
    // For adding line numbers dynamically
    if (preRef.current) {
      const lines = preRef.current.querySelectorAll("code span");
      lines.forEach((line, idx) => {
        line.setAttribute("data-line", (idx + 1).toString());
      });
    }
  }, [code]);

  console.log(`CodeBlock rendered with language: ${language}`); // Debugging line

  return (
    <>
      {language === "plaintext" ? (
        <>{code}</>
      ) : (
        <div className="relative bg-white rounded-md overflow-hidden shadow-lg max-w-6xl">
          <div className="flex justify-between items-center px-4 py-2 text-sm text-white bg-stone-900 rounded-t-md">
            <span className="uppercase text-xs font-semibold tracking-wide">
              {language.split(" ")?.[1]}
            </span>
            <button onClick={handleCopy} className="">
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <ClipboardCopy className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
          <pre
            ref={preRef}
            className={`overflow-auto max-h-[400px] p-4 text-sm font-mono`}
            style={{ position: "relative" }}
          >
            <code
              className={`language-${language} block`}
              dangerouslySetInnerHTML={{
                __html: code.replace(/\n/g, "<span>$&</span>"), // Each line wrapped in span for line number support
              }}
            />
          </pre>{" "}
        </div>
      )}
      <textarea
        ref={codeRef}
        value={code}
        readOnly
        className="absolute top-0 left-0 opacity-0 pointer-events-none"
      />
    </>
  );
};

export default CodeBlock;
