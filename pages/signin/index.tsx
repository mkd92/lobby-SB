import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Signin = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) router.push("/user");
    return () => {};
  }, [session]);

  return (
    <div className="w-96 m-auto">
      <Auth
        providers={["github", "google"]}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="light"
        redirectTo="http://localhost:3000/user"
      />
    </div>
  );
};

export default Signin;
