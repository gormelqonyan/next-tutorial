"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import { ROUTES } from "@/constants";

const FormHeader = () => {
  const pathName = usePathname();
  const title = pathName === ROUTES.SIGN_IN ? "Sign In" : "Create your account";
  return (
    <div className={"flex justify-between"}>
      <div>
        <h1 className={"h2-bold dark:text-light-900 text-dark-100"}>{title}</h1>
        <p className={"dark:text-light-400 text-dark-500 mt-2"}>
          to continue to DevFlow
        </p>
      </div>
      <Image
        src={"/images/site-logo.svg"}
        width={50}
        height={50}
        alt={"Devflow logo"}
        className={"object-contain"}
      />
    </div>
  );
};

export default FormHeader;
