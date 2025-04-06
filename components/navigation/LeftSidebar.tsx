import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import NavLinks from "@/components/navigation/navbar/NavLinks";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

const LeftSidebar = async () => {
  const session = await auth();
  return (
    <section
      className={
        "background-light900_dark200 dark:border-dark-200 sticky top-[80px] hidden h-[calc(100vh_-_80px)] flex-col border-r border-[#C8CBD954] px-6 pt-12 md:flex lg:w-[266px]"
      }
    >
      <div className={"flex flex-1 flex-col"}>
        <NavLinks />
      </div>

      <div className={"flex flex-col gap-4 pb-9"}>
        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: ROUTES.SIGN_IN });
            }}
          >
            <Button
              type={"submit"}
              className={
                "background-light900_dark200 text-dark-400 dark:text-light-900 w-full !justify-start"
              }
            >
              <Image
                src={"/icons/logout.svg"}
                alt={"Logout"}
                width={20}
                height={20}
                className={"invert-colors"}
              />
              <span className={"hidden lg:block"}>Logout</span>
            </Button>
          </form>
        ) : (
          <>
            <Link href={"/sign-in"}>
              <Button
                className={
                  "small-medium light-border background-light800_dark400 h-[42px] w-full border"
                }
              >
                <Image
                  src={"/icons/account.svg"}
                  alt={"account"}
                  width={20}
                  height={20}
                  className={"invert-colors"}
                />
                <span
                  className={
                    "primary-text-gradient body-semibold hidden lg:block"
                  }
                >
                  Login
                </span>
              </Button>
            </Link>

            <Link href={"/sign-in"}>
              <Button
                className={
                  "small-medium light-border-2 background-light700_dark300 h-[42px] w-full border"
                }
              >
                <Image
                  src={"/icons/sign-up.svg"}
                  alt={"account"}
                  width={20}
                  height={20}
                  className={"invert-colors"}
                />
                <span
                  className={
                    "dark:text-light-900 text-dark-400 body-semibold hidden lg:block"
                  }
                >
                  Signup
                </span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
