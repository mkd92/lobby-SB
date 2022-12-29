import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React from "react";
import { BsPerson } from "react-icons/bs";
const UserInfo = () => {
  const session = useSession();
  const onSigninHandler = () => {};
  return (
    <>
      {session ? (
        <div className=" bg-gray-50 h-20 w-full rounded-md shadow-sm flex flex-row items-center">
          <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center shadow-md m-2">
            <BsPerson size={30} />
          </div>
          <div className="text-gray-900 font-semibold text-lg">Username</div>
        </div>
      ) : (
        <Link
          href="/signin"
          className=" bg-gray-50 h-20 w-full rounded-md shadow-sm flex flex-row items-center"
          onClick={onSigninHandler}
        >
          <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center shadow-md m-2">
            <BsPerson size={30} />
          </div>
          <div className="text-gray-900 font-semibold text-lg">Signin</div>
        </Link>
      )}
    </>
  );
};

export default UserInfo;
