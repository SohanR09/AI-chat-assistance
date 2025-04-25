import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { SidebarTrigger } from "../ui/sidebar";
import { Tooltip } from "../ui/tooltip";

function SidebarToggle() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <SidebarTrigger className="p-4 hover:bg-gray-200" />
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="w-32 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-2 text-sm text-gray-700"
      >
        Toogle Sidebar
      </TooltipContent>
    </Tooltip>
  );
}

export default SidebarToggle;
