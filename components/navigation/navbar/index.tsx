import Image from "next/image";
import React from "react";

import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";
import Theme from "@/components/navigation/navbar/Theme";

const Navbar = () => {
  return (
    <nav
      className={
        "flex-between background-light900_dark200 shadow-light-300 dark:border-dark-200 sticky top-0 z-50 w-full gap-5 border-b border-[#C8CBD954] p-6 dark:shadow-none"
      }
    >
      <div className={"flex items-center gap-1"}>
        <Image
          src="/images/site-logo.svg"
          alt="Dev overflow"
          width={18}
          height={18}
        />
        <p
          className={
            "h2-bold font-space-grotesk text-dark-100 dark:text-light-900 flex items-center max-sm:hidden"
          }
        >
          Dev <span className={"text-primary-500"}>Overflow</span>
        </p>
      </div>
      <div>search</div>
      <div className={"flex items-center gap-2"}>
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
