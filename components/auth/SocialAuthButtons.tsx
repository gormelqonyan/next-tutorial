"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React, { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

const SocialAuthButtons = () => {
  const [isPending, startTransition] = useTransition();
  const handleSignIn = async (provider: "github" | "google") => {
    startTransition(async () => {
      try {
        await signIn(provider, {
          redirectTo: ROUTES.HOME,
          redirect: false,
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Sign in Failed";
        toast.error("Sign in Failed", {
          description: errorMessage,
          position: "top-center",
        });
      }
    });
  };

  const buttonClass =
    "background-light900_dark400 body-medium rounded-2 flex-center h-auto flex-1 cursor-pointer gap-2.5 px-4 py-3.5";
  return (
    <div className={"mt-9 flex justify-between gap-2.5"}>
      <Button
        className={buttonClass}
        onClick={() => handleSignIn("github")}
        disabled={isPending}
      >
        <Image
          src={"/icons/github.svg"}
          alt={"github logo"}
          width={20}
          height={20}
          className={"invert-colors"}
        />
        <span className={"dark:text-light-800 text-dark-200"}>
          Login with GitHub
        </span>
      </Button>
      <Button
        className={buttonClass}
        disabled={isPending}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src={"/icons/google.svg"}
          alt={"github logo"}
          width={20}
          height={20}
        />
        <span className={"dark:text-light-800 text-dark-200"}>
          Login with Google
        </span>
      </Button>
    </div>
  );
};

export default SocialAuthButtons;
