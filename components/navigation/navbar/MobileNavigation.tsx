import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import NavLinks from "@/components/navigation/navbar/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants";

const MobileNavigation = async () => {
  const session = await auth();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/icons/hamburger.svg"}
          alt={"Menu"}
          width={24}
          height={24}
          className={"invert-colors cursor-pointer md:hidden"}
        />
      </SheetTrigger>
      <SheetContent side={"left"} className={"flex flex-col overflow-y-auto"}>
        <SheetTitle className={"hidden"}>Navigation</SheetTitle>
        <SheetHeader className={"px-5 py-4"}>
          <div className={"flex items-center gap-1"}>
            <Image
              src="/images/site-logo.svg"
              alt="Dev overflow"
              width={24}
              height={24}
            />
            <p
              className={
                "h2-bold font-space-grotesk text-dark-100 dark:text-light-900 flex items-center"
              }
            >
              Dev <span className={"text-primary-500"}>Overflow</span>
            </p>
          </div>
        </SheetHeader>
        <SheetClose asChild>
          <div className={"flex flex-col gap-y-4 px-5 pt-8"}>
            <NavLinks isMobileNav={true} />
          </div>
        </SheetClose>

        <SheetFooter>
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
                <span className={"body-semibold"}>Logout</span>
              </Button>
            </form>
          ) : (
            <div className={"flex flex-col gap-4 px-5 pb-9"}>
              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button
                    className={
                      "small-medium light-border background-light800_dark400 h-[42px] w-full border"
                    }
                  >
                    <span className={"primary-text-gradient body-semibold"}>
                      Login
                    </span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button
                    className={
                      "small-medium light-border-2 background-light700_dark300 h-[42px] w-full border"
                    }
                  >
                    <span
                      className={
                        "dark:text-light-900 text-dark-400 body-semibold"
                      }
                    >
                      Signup
                    </span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
