import React from "react";

import FormHeader from "@/components/auth/FormHeader";
import SocialAuthButtons from "@/components/auth/SocialAuthButtons";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main
      className={
        "auth-background-image flex min-h-screen items-center justify-center p-4"
      }
    >
      <section
        className={
          "background-light800_dark200 light-border shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8"
        }
      >
        <FormHeader />
        {children}
        <SocialAuthButtons />
      </section>
    </main>
  );
}

export default AuthLayout;
