import React from "react";
import UserInfo from "../UserInfo";
import SidebarButtons from "./SidebarButtons";
import SideBarButton from "./SideBarButton";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const SidebarContent = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const onLogoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    }
    // TODO: Error Handling
  };

  return (
    <div className="h-full flex flex-col m-2">
      <UserInfo />
      {session && (
        <SidebarButtons>
          <SideBarButton path="/user/dashboard">Dashboard</SideBarButton>
          <SideBarButton path="/user/properties">Properties</SideBarButton>
          <SideBarButton path="/user/dashboard">Units</SideBarButton>
          <SideBarButton path="/user/dashboard">Transactions</SideBarButton>
        </SidebarButtons>
      )}
      <span className="w-full h-px bg-gray-200"></span>
      <SidebarButtons>
        <SideBarButton path="about">About Lobby</SideBarButton>
        <SideBarButton path="user">Contact Us</SideBarButton>
      </SidebarButtons>
      <span className="w-full h-px bg-gray-200"></span>
      <div className="flex-grow"></div>
      <SidebarButtons>
        <SideBarButton onClick={onLogoutHandler}>Logout</SideBarButton>
      </SidebarButtons>
    </div>
  );
};

export default SidebarContent;
