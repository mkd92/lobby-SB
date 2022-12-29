import React from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { useAppDispatch } from "../redux/reduxHooks";
import { toggleSidebar } from "../redux/uiSlice/uiSlice";

const TopNav = () => {
  const dispatch = useAppDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div>
      <button
        className="m-4 text-gray-900 p-2 bg-gray-200 rounded-md"
        onClick={toggleSidebarHandler}
      >
        <BsLayoutSidebarInset size={20} />
      </button>
    </div>
  );
};

export default TopNav;
