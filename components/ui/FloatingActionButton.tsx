import React from "react";
import { BsPlus } from "react-icons/bs";

const FloatingActionButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div
        className={` absolute duration-100 left-0 top-0 z-10 h-screen w-screen bg-gray-600  opacity-50 `}
      >
        <div className="absolute right-2 bottom-16 bg-white rounded-md p-2 font-medium capitalize">
          {children}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 rounded-full bg-violet-600 p-1 m-2 shadow-md text-white z-20">
        <BsPlus size={40} />
      </div>
    </div>
  );
};

export default FloatingActionButton;
