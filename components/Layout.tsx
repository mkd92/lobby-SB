import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Appbar from "./Appbar";
import TopNav from "./TopNav";
import Model from "./Model";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Sidebar />
      <div className="relative overflow-x-hidden h-full">
        <Model />
        <Appbar />
        <TopNav />
        <div className="">{children}</div>
      </div>
    </div>
  );
};
