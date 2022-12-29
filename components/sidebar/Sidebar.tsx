import React from "react";
import { useAppSelector } from "../../redux/reduxHooks";
import { selectSidebarOpen } from "../../redux/uiSlice/uiSlice";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  return (
    <div
      className={`absolute z-20 duration-300 bg-gray-100 dark:bg-gray-900 left-0 top-0 h-full w-72 ${
        !sidebarOpen && "-translate-x-72"
      }`}
    >
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
