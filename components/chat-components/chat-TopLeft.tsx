import Logo from "@/public/Logo";

export default function ChatTopLeft() {
  return (
    <div className="md:flex hidden pt-4">
      <div className="flex h-10 items-center justify-center space-x-4">
        {/* chat page sidebar toggle button */}
        {/* <SidebarToggle /> */}
        <Logo />
      </div>
    </div>
  );
}
