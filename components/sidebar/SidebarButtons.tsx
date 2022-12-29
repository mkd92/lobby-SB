import React from "react";
import SideBarButton from "./SideBarButton";

const SidebarButtons = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-1 gap-2 py-2">{children}</div>;
};

export default SidebarButtons;
