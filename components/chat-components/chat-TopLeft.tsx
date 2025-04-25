import React from "react";
import SidebarToggle from "../shared/SidebarToggle";

export default function ChatTopLeft() {
  return (
    <div className="md:flex hidden p-4">
      <div className="flex h-10 items-center justify-center space-x-4">
        {/* <SidebarToggle /> */}
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-2xl font-bold">Chat</h1>
          <p className="text-sm text-gray-500">Beta</p>
        </div>
      </div>
    </div>
  );
}
