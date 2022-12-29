import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import React from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AuthGuard;
