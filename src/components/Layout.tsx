import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./navigation/Sidebar";

export default function Layout() {
  const [showFullSidebar, setShowFullSidebar] = useState(true);

  const toggleSidebarWidth = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  const sidebarWidth = showFullSidebar ? 25 : 20;
  const sidebarWidthInPixels = sidebarWidth * 4;

  return (
    <div className="flex h-fit w-full flex-row">
      {/* Sidebar */}
      <Sidebar
        showFullSidebar={showFullSidebar}
        sidebarWidthInPixels={sidebarWidthInPixels}
        toggleSidebarWidth={toggleSidebarWidth}
      />
      <div
        style={{
          // using calc in tailwind classname was not working reliably
          width: `calc(100% - ${sidebarWidthInPixels}px)`,
          marginLeft: `${sidebarWidthInPixels}px`,
        }}
        className="flex flex-col"
      >
        <div className="h-[100vh]"><Outlet /></div>
        <Toaster />
      </div>
    </div>
  );
}
