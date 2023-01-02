import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { BsPlus } from "react-icons/bs";
import React from "react";
import FloatingActionButton from "../../../components/ui/FloatingActionButton";

const Properties = () => {
  return (
    <>
      <div>Properties Page</div>
      <FloatingActionButton>
        <div>add property</div>
      </FloatingActionButton>
    </>
  );
};

export default Properties;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        data: session,
      },
    };
  }
}
