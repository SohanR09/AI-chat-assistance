import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Button className="text-black hover:bg-transparent" variant={"ghost"}>
      <Link href="/" className="flex flex-col items-end space-x-2">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-2xl font-bold ">Chat</h1>
          <p className="text-sm font-medium text-gray-500">Beta</p>
        </div>
      </Link>
    </Button>
  );
}
