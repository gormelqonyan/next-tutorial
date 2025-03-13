import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const SocialAuthButtons = () => {
  const buttonClass =
    "background-light900_dark400 body-medium rounded-2 flex-center h-auto flex-1 cursor-pointer gap-2.5 px-4 py-3.5";
  return (
    <div className={"mt-9 flex justify-between gap-2.5"}>
      <Button className={buttonClass}>
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
      <Button className={buttonClass}>
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
