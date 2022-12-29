import { useRouter } from "next/router";
import React from "react";

const SideBarButton = ({
  children,
  onClick,
  path,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  path?: string;
}) => {
  const router = useRouter();
  const onClickHandler = () => {
    if (path) router.push(path);
  };
  return (
    <>
      {onClick ? (
        <div
          className="bg-gray-100 text-gray-800 font-medium h-10 rounded-lg flex items-center p-2"
          onClick={onClick}
        >
          {children}
        </div>
      ) : path ? (
        <div
          className="bg-gray-100 text-gray-800 font-medium h-10 rounded-lg flex items-center p-2"
          onClick={onClickHandler}
        >
          {children}
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-800 font-medium h-10 rounded-lg flex items-center p-2">
          {children}
        </div>
      )}
    </>
  );
};

export default SideBarButton;
