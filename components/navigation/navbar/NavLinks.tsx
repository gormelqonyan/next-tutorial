"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

import { SheetClose } from "@/components/ui/sheet";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: ROUTES.HOME,
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: ROUTES.COMMUNITY,
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: ROUTES.COLLECTION,
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: ROUTES.JOBS,
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: ROUTES.TAGS,
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: ROUTES.PROFILE,
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: ROUTES.ASK_QUESTION,
    label: "Ask a question",
  },
];

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathName.includes(link.route) && link.route.length > 1) ||
          pathName === link.route;

        const LinkComponent = (
          <Link href={link.route}>
            <div
              className={cn(
                `rounded-2 flex cursor-pointer gap-x-2 p-4 ${isActive && "primary-gradient"}`,
              )}
            >
              <Image
                src={link.imgURL}
                alt={"link item"}
                width={20}
                height={20}
                className={cn(!isActive && "invert-colors")}
              />
              <span
                className={cn(
                  `paragraph-medium text-dark-300 dark:text-light-900 ${isActive && "text-light-900 !font-bold"} ${!isMobileNav && "hidden lg:block"}`,
                )}
              >
                {link.label}
              </span>
            </div>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose key={link.label} asChild>
            {LinkComponent}
          </SheetClose>
        ) : (
          <Fragment key={link.label}>{LinkComponent}</Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
