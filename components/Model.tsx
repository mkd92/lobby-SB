import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { selectSidebarOpen, toggleSidebar } from "../redux/uiSlice/uiSlice";

const Model = () => {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector(selectSidebarOpen);
  const onClickHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div
      className={` absolute duration-100 left-0 top-0 z-10 h-screen w-screen bg-gray-600  ${
        !sidebarOpen ? " opacity-0 -left-full" : "opacity-50"
      } `}
      onClick={onClickHandler}
    ></div>
  );
};

export default Model;
